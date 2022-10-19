const obj={
	[Symbol.iterator]:function() {
		let step=0
		const interator={
			next:function(){
				step++
				if(step===1){
					return{value:'Hello',done:false}
				}
				else{
					return{value:'World',done:false}
				}
				return {value:undefined,done:true}
			},
		}
	return interator
	}
	
}

for(const i of obj){
	console.log(i)
}
