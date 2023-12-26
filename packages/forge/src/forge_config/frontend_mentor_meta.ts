export enum FrontendMentorDifficulty {
  Newbie = 1,
  Junior = 2,
  Intermediate = 3,
  Advanced = 4,
  Guru = 5,
}

export type FrontendMentorForgeMeta = {
  type: "frontend-mentor";

  name: string;
  description?: string;

  source: string;
  difficulty: FrontendMentorDifficulty;

  artefactPaths?: {
    // defaults to "./dist" for generated, "./src" for static
    bundlePath?: string;
    // defaults to "./assets"
    assetsPath?: string;
    // defaults to "./design"
    designPath?: string;
  };
};
