const http=require('http');
const  fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile("html/web.html","utf-8",(err,data)=>{
        if(err){
            res.write(`<h1>${err}</h1>`);
            res.end();
            return;
        }
        else{
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end();
        }
    })
}).listen(2000)