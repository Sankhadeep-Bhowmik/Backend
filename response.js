const server= require('http'); 
const age=21;
server.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write(`<html>
        <head>
        <title>SANHEZ'S SERVER</title>
        </head>
        <body>
        <h1>SANCHEZ"S WORLD</h1>
        <h2>HEY THERE!!</h2>
        <h2>`+age+`</h2>
        <h1>`+Date()+`</h1>
        </body>
    </html>`);
    res.end();
    // process.exit();
}).listen(4700);