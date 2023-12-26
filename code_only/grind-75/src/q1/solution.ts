function twoSum(nums: number[], target: number): number[] {
  const visited: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i]!;
    const remainderIndex = visited[remainder];

    if (remainderIndex !== undefined) {
      return [i, remainderIndex];
    }

    visited[nums[i]!] = i;
  }

  throw new Error("No solution found");
}
