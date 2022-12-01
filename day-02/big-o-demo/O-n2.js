/* eslint-disable no-console */
console.log('O(n2)');

for (let count = 100; count <= 1000000; count *= 10) {
  const arr = [];

  for (let i = 0; i < count; i++) {
    arr[i] = `hello ${i}`;
  }

  // eslint-disable-next-line no-inner-declarations
  function hasDups(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) return true;
      }
    }
    return false;
  }

  // function hasDups(arr) {
  // 	return arr.some((each, i) => {
  // 		if(arr.indexOf(each, i + 1) !== -1) return true;
  // 	});
  // }

  console.log('count', count);
  console.time('has dups');
  console.log(hasDups(arr));
  console.timeEnd('has dups');
}
