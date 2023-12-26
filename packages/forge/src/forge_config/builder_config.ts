export type StaticForgeBuilderConfig = {
  builder: "static";

  /**
   * Defaults to ["src"]
   */
  includes?: string[];

  /**
   *  Defaults to `["node_modules", "forge.meta.ts"]`
   */
  exclude?: string[];
};

export type GeneratedForgeBuilderConfig = {
  builder: "generated";

  /**
   * Defaults to /dist
   */
  bundlePath?: string;
};

export type ForgeBuilderConfig =
  | StaticForgeBuilderConfig
  | GeneratedForgeBuilderConfig;
