const server=require('http');
const arg= process.argv;
const port=arg[2]
console.log(arg);

server.createServer((req,res)=>{
    for(let i=2;i<arg.length;i++){
        res.write(`${arg[i]} `); //taking each element from input in cmd (nodemon cmd-input.js sankhadeep bhowmik), sankhadeep bhowmik is the input
    }
    res.end();
}).listen(3200);