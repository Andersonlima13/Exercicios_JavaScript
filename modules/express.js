const express = require("express");

const app = express()

// CRIANDO UMA REQUISIÇÃO GET PARA O SERVIDOR (PEDIR ALGO, NESSE CASO "HELLO WORLD")
// VARIAVEL APP PEDE (GET) A PAGINA, QUE RECEBE PARAMETROS REQ E RES, 
app.get("/home", (req,res) => {
    res.contentType("application/html")
    res.status(200).send("<h1>hello world</h1>");
});

app.get("/users",(req,res) => {
 const users = [
    {
     name:"anderson",
    email:"anderson@lima.com",
    },
    {
    name:"anderson",
    email:"anderson@lima.com",
    },
  ];

  res.status(200).json(users);
}) 

const port = 8080;

app.listen(port, () => console.log(`rodando na porta ${port}!`));