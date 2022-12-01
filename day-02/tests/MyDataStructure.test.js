const { MyDataStructure } = require('../MyDataStructure.js');

describe('MyDataStructure', () => {
  it('should add to the front', () => {
    const myStructure = new MyDataStructure([4, 6, 8]);
    myStructure.addFront(3);
    expect(myStructure.readableList).toEqual('3,4,6,8');
  });

  it('should add to the back', () => {
    const myStructure = new MyDataStructure([4, 6, 8]);
    myStructure.addBack(3);
    expect(myStructure.readableList).toEqual('4,6,8,3');
  });

  it('should return the count', () => {
    const myStructure = new MyDataStructure([4, 6, 8]);
    expect(myStructure.count).toBe(3);
  });
});
