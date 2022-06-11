const arr = ['n', 'c', 't'];

for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}

//for of loop will produce the same result as above simple for loop
for (let i of arr) {
  console.log(i);
}
