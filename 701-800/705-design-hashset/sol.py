class MyHashSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.set = set()

    def add(self, key):
        """
        :type key: int
        :rtype: void
        """
        self.set.add(key)

    def remove(self, key):
        """
        :type key: int
        :rtype: void
        """
        if key in self.set:
            self.set.remove(key)

    def contains(self, key):
        """
        Returns true if this set contains the specified element
        :type key: int
        :rtype: bool
        """
        return key in self.set


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
