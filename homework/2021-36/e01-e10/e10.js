function doIt() {
    let output = "";
    for (const letter of arguments) {
        output = output + letter;
    }
    console.log(output);
  }


doIt("a"); // outputs a
doIt("a", "b"); // outputs ab
doIt("a", "b", "c"); // outputs abc
