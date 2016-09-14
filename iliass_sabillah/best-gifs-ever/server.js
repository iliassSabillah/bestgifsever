var http = require('http');
var fs= require('fs');

var server = http.createServer(function(req, res){
	var url = req.url;

	if(url === '/page-2'){
		fs.readFile('page-2.html', function(err, data){
			res.write(data.toString());
			res.end()
		})

	}
	else if(url === '/page-3'){
		fs.readFile('page-3.html', function(err, data){
			res.write(data.toString());
			res.end()
		})
	}
	else if(url === '/main.css'){
		fs.readFile('main.css', function(err, data){
			res.write(data);
			res.end();
		})
	}
	else if (url === '/app.js') {
        fs.readFile('app.js', function(err, data) {
            res.write(data);
            res.end();
        })
    }
	else if(url==='/'){
		fs.readFile('index.html', function(err, data){
			res.write(data.toString());
			res.end();
		})
	}
	else{
		// res.write('<h1>404 Page Not Found</h1>');
		res.end('<h1>404 Page Not Found</h1>')
	}


})
server.listen(8000);