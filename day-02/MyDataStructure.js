class MyDataStructure {
  #list = [];

  constructor(initialList) {
    // invoked via: new MyDataStructure()
    // not needed with private field initializers,
    // unless you need to do other work
    if (initialList) this.#list = initialList;
  }

  // methods

  addBack(item) {
    // access state, ie this.#list
    this.#list.push(item);
  }

  addFront(item) {
    // access state, ie this.#list
    this.#list.unshift(item);
  }

  // property

  get readableList() {
    // access state, ie this.#list
    return this.#list.toString();
  }

  get count() {
    // access state, ie this.#list
    return this.#list.length;
  }

  set count(count) {
    // access state, ie this.#list
    this.#list.length = count;
  }
}

module.exports = { MyDataStructure };
