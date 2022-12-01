# Node Based Data Structures

## Rubric

| Looking for...         | Points                 |
| ---------------------- | ---------------------- |
| 2 Challenges completed | 5 points per challenge |
| Total                  | 10                     |

Nodes represent values and their connection to other nodes that have values. The node is _not_ the value, it is a way to arrange a set of related values. Some common node based data structures:

- linked lists
- trees
- graphs

Node code challenge problems require [planning and clear thinking](strategy-tactics.md) about the operations to be performed and the specifics of the node object properties and methods (plus the use of `this` for the "current" node).

## Linked Lists

Nodes point to next node in line. Optionally, nodes can also point back to their parent (doubly linked list).

We don't often use Linked Lists in JavaScript, we just use Arrays and let the JavaScript engine optimize the implementation.

## Trees

Nodes have references to their child nodes. Children only have one parent and cannot point to their parents as children. React components are trees (because DOM nodes are trees). Folder and file structures are trees.

### Binary Trees

A special kind of tree, called a Binary Tree, has two specific children called "left" and "right". The association of the node values is such that the left child's value is _less than_ the parent node's value, and the right child's value is _greater than_ the parent node's value.

Binary Trees unlock the power of `logN` (inverse of exponential) operational complexity, handling increasing large number of items with fewer and fewer operations.

## Graphs

Nodes point to any other number of nodes. Think of a social network, friends have friends have friends. Or think of cities connected by roads.
