import { ForgeBuilderConfig } from "./builder_config";
import type { FrontendMentorForgeMeta } from "./frontend_mentor_meta";
import type { Grind75ForgeMeta, LeetCodeForgeMeta } from "./leetcode_meta";

export * from "./frontend_mentor_meta";
export * from "./leetcode_meta";

export type ForgeConfig = {
  meta: FrontendMentorForgeMeta | LeetCodeForgeMeta | Grind75ForgeMeta;

  builder: ForgeBuilderConfig;
};
