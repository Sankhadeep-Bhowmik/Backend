const http=require("http");
http.createServer((request, response)=>{ //creating a server thorugh callback function with request and response
    response.write('<h1>This is The Legend SANCHEZ</h1>'); //sending response
    response.write('<h2>Kya dekh raha hai be!!</h2>');
response.end("Server response ends here"); //important to end a server upon completion otherwise the webiste will keep buffering
}).listen(4800);

//another server
http.createServer((req,res)=>{
    res.write('<h1>BHAI BHAI BHAI BHAI!!!!</h1>');
    res.write('<h2>NACHO BEHEN KE BHAI</h2>');
res.end("KHATAM TATA BYE BYE!!")
}).listen(5700);
