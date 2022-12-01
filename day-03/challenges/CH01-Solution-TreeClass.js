class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(node) {
    // make a new node, check to see if it has any roots. If it doesn't, it becomes the base of our tree.
    const newNode = new BinaryTreeNode(node);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    // currentNode is our root (est. above from newNode)
    let currentNode = this.root;
    while (currentNode) {
      // if the argument node is less that the current node's value:
      if (node < currentNode.value) {
        // and if there's no child node to the left
        if (currentNode.left === null) {
          // create a new node as the left-hand child of the currentNode and return it
          currentNode.left = newNode;
          return this;
        }
        // change the current node to be one node down (the new left node we made)
        currentNode = currentNode.left;
      } else {
        // argument node > currentNode.value
        // and if there is no right hand node
        if (currentNode.right === null) {
          // create a new child node to the right
          currentNode.right = newNode;
          return this;
        }
        // change the current node to be the right one we just created (walking down the tree)
        currentNode = currentNode.right;
      }
    }
  }
}

const newTree = new BinarySearchTree();
newTree.add('B');
newTree.add('A');
newTree.add('D');
newTree.add('C');
