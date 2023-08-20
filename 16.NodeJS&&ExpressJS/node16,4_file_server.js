let http = require("http");
let url = require("url");
let fs = require("fs");

http.createServer(
    function(req, res) {
        res.writeHead(200, {"Content-type": "text/html"});
        let filename = "./public" + url.parse(req.url, true).pathname;

        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, {"Content-type" : "text/html"});
                return res.end("404 - file not found");
            }

            res.writeHead(200, {"Content-type" : "text/html"});
            res.write(data);
            res.end();
        })
    }
).listen(8080);