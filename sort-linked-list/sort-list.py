from typing import Optional

# Miscellaneous functions
class Tools:
    @staticmethod
    def arrToList(arr):
        h = ListNode(arr[0])
        curr = h
        for i in range(1, len(arr)):
            curr.next = ListNode(arr[i])
            curr = curr.next
        return h

    @staticmethod
    def listToArr(head):
        arr = []
        curr = head
        while curr:
            arr.append(curr.val)
            curr = curr.next
        return arr

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        list = []
        cur = head
        while cur:
            list.append(cur.val)
            cur = cur.next
        list.sort()
        if (len(list) == 0):
            return None
        h = ListNode(list[0])
        curr = h
        for i in range(1, len(list)):
            curr.next = ListNode(list[i])
            curr = curr.next
        return h


sol = Solution()
tools = Tools()

arr = [4, 2, 1, 3]
head = tools.arrToList(arr)
h = sol.sortList(head)
print(tools.listToArr(h))

