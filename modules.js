//core modules
const fs= require('fs');
fs.writeFileSync('dummy.txt','hey there');

const os= require('os');
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.cpus());

const {log} = require('console');
log('hey');