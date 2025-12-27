import express from 'express';
import path from 'path';
const app= express();

app.get('/',(req,res)=>{
    const absPath= path.resolve('html/home.html');
    res.sendFile(absPath);
})

app.get('/login',(req,res)=>{
    const absPath= path.resolve('html/login.html');
    res.sendFile(absPath);
})

app.post('/submit',(req,res)=>{
    const absPath= path.resolve('html/submit.html');
    res.sendFile(absPath);
})

app.listen(3004);