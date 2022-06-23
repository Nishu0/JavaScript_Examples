function* generator() {
  yield 97;
  yield 101;
  yield 18;
}
const gen = generator();

console.log(gen.next().value); // 97
console.log(gen.next().value); // 101
console.log(gen.next().value); // 18
console.log(gen.next().value); // undefined
