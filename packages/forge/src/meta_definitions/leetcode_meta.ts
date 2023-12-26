export enum LeetCodeDifficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

/**
 * To expand as needed
 */
export enum LeetCodeLanguage {
  Typescript = "typescript",
  Python = "python",
}

/**
 * To expand as needed
 */
export enum LeetCodeTopics {
  Array = "Array",
  Binary = "Binary",
  BinarySearch = "Binary Search",
  BinarySearchTree = "Binary Search Tree",
  BinaryTree = "Binary Tree",
  DynamicProgramming = "Dynamic Programming",
  Graph = "Graph",
  HashTable = "Hash Table",
  Heap = "Heap",
  LinkedList = "Linked List",
  Math = "Math",
  Matrix = "Matrix",
  Queue = "Queue",
  Recursion = "Recursion",
  Stack = "Stack",
  String = "String",
  Trie = "Trie",
}

export type LeetCodeForgeMeta = {
  type: "leet-code";
  name: string;
  challengeUrl: string;
  difficulty: LeetCodeDifficulty[];
  topics: LeetCodeTopics[];

  solutions: Partial<{
    [language in LeetCodeLanguage]: {
      filePath: string;
    };
  }>;
};

/** Based on a schedule of 25 weeks, 39 hours per week */
export type Grind75ForgeMeta = LeetCodeForgeMeta & {
  list: "grind-75";
  week: number;
  questionNumInWeek: number;
};
