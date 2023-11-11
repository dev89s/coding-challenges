from typing import Optional
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# solution class
class Solution:
  def isPalindrome(self, head: Optional[ListNode]) -> bool:
    vals = []
    curr = head
    while (curr is not None):
      vals.append(curr.val)
      curr = curr.next
    return vals == vals[::-1]

# helper function to convert array to linked list
def arrToList(arr):
    head = ListNode(arr[0])
    curr = head
    for i in range(1, len(arr)):
      curr.next = ListNode(arr[i])
      curr = curr.next
    return head

# test cases
arr = [1,2,2,1]
head = arrToList(arr)
s = Solution()
print(s.isPalindrome(head))

