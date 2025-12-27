const fs = require('fs');

// //create file 
// fs.writeFileSync('html/apple.txt','This is apple file');

// //read file
// const data =fs.readFileSync('html/apple.txt','utf-8');
// console.log(data);

// //append data
// fs.appendFileSync('html/apple.txt',' and this is important');
// const data2 =fs.readFileSync('html/apple.txt','utf-8');
// console.log(data2);

// //delete file
// fs.unlinkSync('html/apple1.txt')

//console.log(process.argv);
const operation=process.argv[2];
const file=process.argv[3];
const content=process.argv[4];

if(operation=='write'){
    fs.writeFileSync('html/'+file+'.txt',content);
}
else if(operation=='read'){

    const data=fs.readFileSync('html/'+file,'utf-8');
    console.log(data);
    
}
else if (operation=='delete'){
    fs.unlinkSync('html/'+file);
}

else if(operation=='update'){
    fs.appendFileSync('html/'+file,content);
}
else{
    console.log('Wrong choice');
    
}




