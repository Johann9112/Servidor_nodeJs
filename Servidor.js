const http = require('http');
const chalk = require('chalk');


const HOST = 'localhost';
const PORT = 8000; 


const server = http.createServer((req, res) => {
 
    res.setHeader('Content-Type', 'application/json');

    const respuesta = {
        nombre: 'Johann A. Ortiz J.', 
        mensaje: 'Servidor con Node.js!'
    };

    res.end(JSON.stringify(respuesta));
});

server.listen(PORT, HOST, () => {
    console.log(chalk.green(`Servidor corriendo en http://${HOST}:${PORT}`));
});
