import { ForgeMeta } from "..";

export interface IForgeBuilder<TMeta extends ForgeMeta> {
  build(location: string, meta: TMeta): Promise<void>;
}
