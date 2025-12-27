const http = require("http");
const fs = require("fs");
const qs=require("querystring");

http.createServer((req, res) => {
    fs.readFile("html/form.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead("500", { "Content-Type": "text/plain" });
        res.write(err);
        res.end();
      }
      res.writeHead("200", { "Content-Type": "text/html" });
      if (req.url == "/") {
        res.write(data);
        res.end();
      }
      else if (req.url == "/submit") {
        const dataArr=[];
        req.on('data',(chunks)=>{
            dataArr.push(chunks)
        });
        req.on('end',()=>{
            const rawData=Buffer.concat(dataArr).toString();
            const readableData = qs.parse(rawData);
            console.log(readableData);
            const name =readableData.name
            const email= readableData.email
            const dataString=`Name is ${name} and email is${email}`;
            //fs.writeFileSync('text/'+readableData.name+'.txt',dataString); //synchornous
            fs.writeFile('text/'+readableData.name+'.txt',dataString,'utf-8',(err)=>{ //asynchronous
                if(err){
                    res.write("Internal Server Error");
                }
                else{
                    console.log('CREATED!!');
                    
                }
            })
        res.write(`<h1>Name is ${name} and email is${email}</h1>`);
        res.end();
        });
      }
    });
  }).listen(3003);
