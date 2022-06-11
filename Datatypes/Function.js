console.log("------------");
console.log("Function");
function cubic(num)
{
	return num*num*num;
}
console.log("Cube of 97::"+cubic(97));
function add(a,b)
{
	return a + b;
}

/*prompt() instructs the browser to display a dialog with an optional message 
prompting the user to input some text. So to perform math operation it should be an integer or float.
	so parseInt() or parseFloat() are functions in JavaScript which can help you 
	convert the values into integers or floats respectively.
*/
var num1=parseInt(prompt("Enter 1st num to add::"));
var num2=parseInt(prompt("Enter 2st num to add::"));
let result=add(num1,num2);
console.log("Addition of 2 numbers::"+result);
