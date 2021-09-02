var readlineSync = require('readline-sync');
 

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
var repeats = readlineSync.question('How many ' + userName + 's do you want? ' )

for (let i = 0; i < repeats; i++){
    console.log(userName)
}