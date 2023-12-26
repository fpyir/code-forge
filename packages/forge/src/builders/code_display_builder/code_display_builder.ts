import fs from "fs/promises";
import { readFileSync } from "fs";
import path from "path";
import hljs from "highlight.js/lib/core";
import VError from "verror";
import Handlebars from "handlebars";
import { PromisePool } from "@supercharge/promise-pool";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { CodeDisplayForgeBuilderConfig } from "../../forge_config/builder_config";
import { IForgeBuilder } from "../builder_interface";
import { ForgeConfig, LeetCodeForgeMeta, LeetCodeLanguage } from "../..";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

export class CodeDisplayForgeBuilder
  implements IForgeBuilder<CodeDisplayForgeBuilderConfig>
{
  private readonly leetCodeHBSTemplate: string;

  constructor() {
    this.leetCodeHBSTemplate = readFileSync(
      path.join(__dirname, "./leetcode_file_template.hbs"),
      "utf-8"
    );
  }

  async build(
    location: string,
    { meta }: ForgeConfig<CodeDisplayForgeBuilderConfig>
  ) {
    if (meta.type !== "leet-code") {
      throw new Error(`Unsupported meta type: ${meta.type}`);
    }

    return this.buildLeetCode(location, meta);
  }

  private async buildLeetCode(location: string, meta: LeetCodeForgeMeta) {
    const { results, errors } = await PromisePool.withConcurrency(5)
      .for(Object.entries(meta.solutionPaths))
      .process(async ([language, solutionPath]) => {
        const resolvedPath = path.join(location, solutionPath);
        const solutionContent = await fs.readFile(resolvedPath, "utf-8");

        const template = Handlebars.compile();

        return {
          language,
          content: hljs.highlight(solutionContent, { language }),
        };
      });

    if (errors.length > 0) {
      throw new VError("Failed to highlight code: %s", errors);
    }

    return results;
  }
}
