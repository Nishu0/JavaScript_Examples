
let num=['97','98','99'];
let printNum=function(item,index,object){
	console.log(item);
}
num.forEach(function(item,index,object)
{
	console.log(item,object,index);
});

let fruit = ['mango', 'apple', 'guava', 'watermelon', 'pineapple'];
let printString = function(item, index, object) {
	console.log(item); 
}
fruit.forEach(printString);
fruit.forEach(function(item, index, object) {
    console.log(item, index, object);
});
fruit.forEach((item, index, object) => {
    console.log(item, index, object);
});
