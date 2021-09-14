/*
Define a function max() that takes two numbers as arguments and returns the largest of them.
Use the if-then-else construct available in Javascript (or ternary operator).
Test it by giving some numbers.
*/

const max = (a, b) => {
    if(a<b){
        return b;
    }
    else if(a==b){       
        console.log("Samat");
    }
    else{
        return a;
    }
}

console.log( max(5,4) )
