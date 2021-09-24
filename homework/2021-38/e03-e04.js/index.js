const readlineSync = require('readline-sync');
const fs = require('fs')

var filename = readlineSync.question('Give file name: ');
console.log('The content of the file is: ')
console.log(fs.readFileSync(filename,'utf-8'));