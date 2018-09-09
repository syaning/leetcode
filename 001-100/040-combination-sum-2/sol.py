class Solution(object):

    def combinationSum2(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        candidates.sort()
        result = []
        self.combination(candidates, target, 0, [], result)
        return result

    def combination(self, candidates, target, start, nums, result):
        if target == 0:
            result.append(nums[:])
            return
        for i in range(start, len(candidates)):
            if i > start and candidates[i] == candidates[i - 1]:
                continue
            if candidates[i] <= target:
                nums.append(candidates[i])
                self.combination(candidates,
                                 target - candidates[i],
                                 i + 1, nums, result)
                nums.pop()
