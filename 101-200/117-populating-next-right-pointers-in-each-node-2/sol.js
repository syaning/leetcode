/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
    let parent = null
    let leftMost = root
    let node = null

    while (leftMost) {
        parent = leftMost
        leftMost = null
        node = null

        while (parent) {
            if (!leftMost) {
                leftMost = parent.left
            }
            if (!leftMost) {
                leftMost = parent.right
            }

            if (parent.left) {
                if (node) {
                    node.next = parent.left
                }
                node = parent.left
            }
            if (parent.right) {
                if (node) {
                    node.next = parent.right
                }
                node = parent.right
            }

            parent = parent.next
        }
    }

    return root
}
