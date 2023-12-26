import { ForgeConfig } from "..";
import { ForgeBuilderConfig } from "../forge_config/builder_config";

export interface IForgeBuilder<TBuilderConfig extends ForgeBuilderConfig> {
  build(location: string, config: ForgeConfig<TBuilderConfig>): Promise<void>;
}
