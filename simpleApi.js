const server= require('http');
const api=[
    {
        name:'Sanchez',
        age:21,
        email:'sanchez@test.com'
    },
    {
        name:'Sanchez1',
        age:211,
        email:'sanchez1@test.com'
    },
    {
        name:'Sanchez2',
        age:212,
        email:'sanchez2@test.com'
    }
]
server.createServer((req,res)=>{
    res.setHeader("Content-Type","application/JSON");
    res.write(JSON.stringify(api));
    res.end();
}).listen(5000)