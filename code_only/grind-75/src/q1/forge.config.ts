import {
  ForgeConfig,
  LeetCodeDifficulty,
  LeetCodeTopics,
} from "@code-forge/forge";

export const forgeConfig: ForgeConfig = {
  meta: {
    type: "leet-code",
    name: "Two Sum",
    challengeUrl: "https://leetcode.com/problems/two-sum/",
    difficulty: LeetCodeDifficulty.Easy,
    topics: [LeetCodeTopics.Array, LeetCodeTopics.HashTable],
    solutionPaths: {
      typescript: "./solution.ts",
    },
    list: "grind-75",
    week: 1,
    questionNumInWeek: 1,
  },
  builder: {
    builder: "code-display",
  },
};
