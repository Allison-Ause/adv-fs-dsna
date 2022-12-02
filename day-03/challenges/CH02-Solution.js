// Implement the find method for this `PersonTreeNode` class,
// that takes a name and returns the that _person object_:

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
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

  findPerson(name) {
    // if name matches, stop
    if (name === this.value) {
      return this.person;
    } else {
      // otherwise if name is less, drop into the left side and search again
      if (this.left && name < this.value) {
        return this.left.findPerson(name);
      } // if name is bigger, drop into the right side and search again
      else if (this.right && name > this.value) {
        return this.right.findPerson(name);
        // if you can never find it, stop completely and return null
      } else {
        console.log('No Matches, friend!');
        return null;
      }
    }
  }
}

const Jim = new PersonTreeNode({
  name: 'Jim',
  phone: '502-2255',
  address: '666 Devil Dr',
});

const Douglas = new PersonTreeNode({
  name: 'Douglas',
  phone: '502-2257',
  address: '4242 Adams Ln',
});

const Zephyr = new PersonTreeNode({
  name: 'Zephyr',
  phone: '502-2257',
  address: '4242 Adams Ln',
});
Jim.add(Douglas);
Jim.add(Zephyr);

const root = Jim;
// "root" is the node at the root of the tree (the tree)
const person = root.findPerson('Douglas');
console.log(person);
// person looks like
// {
//   name: 'Nelson',
//   phone: '555-1212',
//   address: '123 Main St'
// }

// const person2 = root.findPerson('Foo');
// person2 is null
