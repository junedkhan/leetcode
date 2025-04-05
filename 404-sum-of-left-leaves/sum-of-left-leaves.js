/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 var sumOfLeftLeaves = function(root) {
    return findVal(root, 1);
};

var findVal = (root, flag) => {
    if (!root) return 0;
    if (flag === 0 && !root.right && !root.left) return root.val;
    return findVal(root.left, 0) + findVal(root.right, 1);
};