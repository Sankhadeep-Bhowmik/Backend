const qs=require('querystring')
function dataSubmited(req,res){
    const dataArr=[];
    req.on('data',(chunks)=>{
        dataArr.push(chunks);
    })
    req.on('end',()=>{
        const rawData= Buffer.concat(dataArr).toString();
        const readableData= qs.parse(rawData);
        console.log(readableData);
        const statement = "The name is "+readableData.name+" and email is "+readableData.email;
        console.log(statement);
        res.write(statement);
        res.end();
        
    })
}
module.exports=dataSubmited;