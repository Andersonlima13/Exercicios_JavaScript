const http = require ("http");
const {URLSearchParams} = require("url");

const port = 0000;

const server = http.createServer((req, res) =>{
    if (req.url === "/home") {
        res.writeHead(200, {"Content-Type":"txt/html"});
        res.end("<h1>home page </h1>");       
    }
    if(req.url === "/users"){
        const users = [{
            name: "anderson",
            email:"anderson@lima.com",
        },
    {name: "anderson",
     email:"anderson@lima.com",
    },
    ];
    

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`rodando na porta ${port}`));