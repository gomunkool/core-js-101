function toNaryString(num, n) {
  const str = String(num);
  console.log(str);
  const parsed = parseInt(str, n);
  return parsed;
}
console.log(toNaryString(365, 2));
