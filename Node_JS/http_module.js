const http = require('http');

const server = http.createServer((req,res)=>{
	if(req.url==='/'){
	res.write('Welcome to our home page'
)	res.end()
	}
	if(req.url==='/about'){
		res.end('This server is created by Nisarg Thakkar')
	}
	res.end(`
	<h1>Oops!</h1>
	<p>We can't seem to find the page</p>
	<h3><a href="/">Back to Home Page</a></h3>
	`)
})
server.listen(5000)
