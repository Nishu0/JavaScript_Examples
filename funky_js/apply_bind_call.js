let name={
	firstName:"Nisarg",
	lastName:"Thakkar"
}

let printName=function(hometown,state) {
	console.log(this.firstName+" "+this.lastName+" from "+hometown+" ,"+state);
}

//function borrowing
printName.call(name,"Ahmedabad","Gujarat");

let name2={
	firstName:"Nishu",
	lastName:"Thakkar"
}

printName.call(name2,"Mumbai_Call","Maharashtra");
printName.apply(name2,["Mumbai_Call","Maharashtra"]);

//bind Method
let printMyName=printName.bind(name,"Ahmedabad"," Gujarat");
console.log(printMyName);
printMyName();
