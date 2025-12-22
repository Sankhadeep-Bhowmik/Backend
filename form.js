const http=require('http');
http.createServer((req,res)=>{
    res.writeHead('200',{'Content-Type':'text/html'})
    if(req.url=='/'){
        res.write(`<form action='/submit' method='post'>
        <input placeholder='enter your name' name='name'></input>
        <input placeholder='enter your email' name='email'></input>
        <button>Submit</button>
    </form>`);
    res.end();
    }
    else if(req.url=='/submit'){
        res.write('<h1>Form is submitted</h1>')
        res.end();
    }
    
}).listen(3001)