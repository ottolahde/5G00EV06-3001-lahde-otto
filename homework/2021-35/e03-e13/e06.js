
//Var

var a = "globally scoped var";
    
function foo() {
    var b = "function scoped var";
    console.log(a);
}

foo()
console.log(b);

//Let

let greeting = "say Hi";
let times = 4;

if (times > 3) {
     let hello = "say Hello instead";
     console.log(hello);// "say Hello instead"
 }
console.log(hello) // hello is not defined

//const

const a = "Hello"
a = "Wassup"