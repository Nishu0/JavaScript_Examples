const fs = require('fs');
const http = require('http');

//use can use any txt file in your pc
const server = http.createServer();
server.on('request',(req,res)=>{
	const rstream=fs.createReadStream("name.txt");
	rstream.pipe(res);
});
server.listen(8000,"127.0.0.1");
