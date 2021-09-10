const tina = {name: 'tina', age: 39};

for (const property in tina) {
    console.log(`${property}: ${tina[property]}`);
  }