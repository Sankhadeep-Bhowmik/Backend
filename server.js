const http=require("http");
http.createServer((request, response)=>{ //creating a server thorugh callback function with request and response
    response.write('<h1>This is SANCHEZ</h1>'); //sending response
response.end("Server response ends here"); //important to end a server upon completion otherwise the webiste will keep buffering
}).listen(4800);
