const radius=[3,12,18,7];

const area=function(radius){
	return Math.PI*radius*radius;
}
const circumference=function(radius){
	return 2*Math.PI*radius;
}
const diameter=function(radius){
	return 2*radius;
}
console.log(radius.map(area));
const calculate=function(radius,logic){
	const output=[];
	for(let i=0;i<radius.length;i++){
		output.push((logic(radius[i])));
	}
	return output;
};
console.log(radius);
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));
