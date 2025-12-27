const server=require('http');
server.createServer((req,res)=>{
    console.log(req);
    // res.setHeader('Content-Type','text/html');
    const page=req.url.slice(1)
    res.write(`<h1>${page} page</h1>`);
    res.end();
}).listen(5100)