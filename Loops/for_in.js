for (let prop in ['n', 'c', 't']){
  console.log(prop);            // 0, 1, 2 (array indexes)
}

for (let prop in 'str'){
  console.log(prop);            // 0, 1, 2 (string indexes)
}

for (let prop in {n: 1, c: 2, t: 3}){
  console.log(prop);            // n, c, t (object property names)
}

for (let prop in new Set(['a', 'b', 'a', 'd'])){
  console.log(prop);			// undefined (no enumerable properties)
}
