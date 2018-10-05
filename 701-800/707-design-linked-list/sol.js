function Node(val, next) {
  this.val = val
  this.next = next || null
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null
  this.tail = null
  this.size = 0
}

MyLinkedList.prototype.getNode = function(index) {
  if (index === 0) {
    return this.head
  }
  let node = this.head
  for (let i = 1; i <= index; i++) {
    node = node.next
  }
  return node
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) {
    return -1
  }
  return this.getNode(index).val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.head = new Node(val, this.head)
  if (this.size === 0) {
    this.tail = this.head
  }
  this.size++
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = new Node(val, null)
  if (this.size === 0) {
    this.head = this.tail = node
  } else {
    this.tail.next = node
    this.tail = node
  }
  this.size++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.size) {
    return
  }
  if (index === 0) {
    return this.addAtHead(val)
  }
  if (index === this.size) {
    return this.addAtTail(val)
  }
  prev = this.getNode(index - 1)
  node = new Node(val, prev.next)
  prev.next = node
  this.size++
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) {
    return
  }
  if (index === 0) {
    this.head = this.head.next
  } else {
    prev = this.getNode(index - 1)
    prev.next = prev.next.next
    if (index === this.size - 1) {
      this.tail = prev
    }
  }
  this.size--
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
