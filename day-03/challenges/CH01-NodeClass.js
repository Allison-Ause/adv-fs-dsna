class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // value = 'B'
    let currentNode = this;
    while (node) {
      if (node.value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = node;
          return this;
        }
        // if there's a right one, we need to drop into that and check again
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = node;
          return this;
        }
        // if there's a left one, we need to drop into that and check again
        currentNode = currentNode.left;
      }
    }
  }
}

// create four new nodes
const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
