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
var minCameraCover = function(root) {
var result = 0;
    /** tree travel function that return the state of a node */
    var travel = function(node) {
        if(!node) {
            return 2; 
            //if return 0, we will need to add camera on leaf, 
            //if return 1, means the leaf nodes will be monitored, and we will not add camera on leaf's parent node, so we have to return 2 here
        }
        var left = travel(node.left);
        var right = travel(node.right);
        // both childs are monitored
        if(left === 2 && right === 2) {
            return 0;
        }
        // one of the child is not monitored
        if(left === 0 || right === 0) {
            result++;
            return 1
        }
        // one of the child has camera
        if(left === 1 || right === 1) {
            return 2;
        }
        return; //I add a return here for my coding style, we have covered all the cases of childs, we must return either 0 or 1 or 2
    }
    //in case the root doesn't get monitored
    if(travel(root) === 0) result++;
    return result;
    
};