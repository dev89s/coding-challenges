from typing import List


class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        result = []
        nums.sort()

        for i in range(len(nums) - 3):
            for j in range(i + 1, len(nums) - 2):
                left = j + 1
                right = len(nums) - 1
                while (left < right):
                    sum = nums[i] + nums[j] + nums[left] + nums[right]
                    if (sum == target):
                        arr = [nums[i], nums[j], nums[left], nums[right]]
                        arr.sort()
                        if arr not in result:
                            result.append(arr)
                        left += 1
                        right -= 1
                    elif (sum < target):
                        left += 1
                    elif (sum > target):
                        right -= 1
        return result


sol = Solution()

res = sol.fourSum([1, 0, -1, 0, -2, 2], 0)
print(res)
