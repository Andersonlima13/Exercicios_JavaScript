const path = require("path");

// usar (BASENAME) com o path serve para pegar o nome do arquivo atual
console.log(path.basename(__filename));

//Descobrir o diretório atual 
console.log(path.dirname(__filename));

// Descobrir a extensão do arquivo 

console.log(path.extname(__filename));

// Vai criar um objeto com as informações da sua pagina atual (filename) 
// a qual nesse caso é a path.js

console.log(path.parse(__filename));

// adicionar e juntar caminhos de diretorios 

console.log(path.join(__dirname, "test"))