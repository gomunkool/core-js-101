function insertItem(arr, item, index) {
  const arr2 = arr.slice(0, index);
  const arr3 = arr.slice(index, arr.length);
  return arr2.concat(item, arr3);
}
console.log(insertItem([1, 3, 4, 5], '222', 8));
