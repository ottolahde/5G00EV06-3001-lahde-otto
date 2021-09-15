const repeat = (input, amount) => {
    if (isNaN(amount)) {
      amount = 1;
    }
   
    let output = "";
    for (let i = 0; i < amount; i++) {
      output = output + input;
    }
    return output;
  };

console.log( repeat("moi") ); // outputs "moi"
console.log( repeat("moi", 4) ); // outputs "moimoimoimoi"