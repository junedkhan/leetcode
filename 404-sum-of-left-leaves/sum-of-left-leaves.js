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

 const traverse = (node, side) => {
    if(!node.left && !node.right && side === "right") {
        return 0;
    }

    if(node.val && !node.left && !node.right && side === "left") {
        return node.val;
    }

    let sum = 0;

    if(node.left) {
        sum += traverse(node.left, "left")
    };
    if(node.right) {
        sum += traverse(node.right, "right");
    };

    return sum;
 }

var sumOfLeftLeaves = function(root) {
    let sum = 0;

    if(root.left) {
        sum+= traverse(root.left, "left");
    }

    if(root.right) {
        sum+=traverse(root.right, "right");
    }

    return sum;
};