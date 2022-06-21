//readFileSync to read  the data from File
//writeFileSync to write the data to file if not present node will create one
//const fs =require('fs')
const {readFileSync,writeFileSync}=require('fs')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
//console.log(first,second);
writeFileSync(
	'./content/sync.txt',
	`Here is the result:${first},${second}`
)

