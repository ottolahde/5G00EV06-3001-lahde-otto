var readlineSync = require("readline-sync");
const fs = require("fs");

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function doesObjHaveProperty(obj, property) {
  if (Object.prototype.hasOwnProperty.call(obj, property)) {
    return true;
  } else {
    return false;
  }
}


var fileName = readlineSync.question("Give file to read: ");

fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error(`file ${fileName} does not exist.`);
      return;
    }

    if (isJsonString(data)) {
      const obj = JSON.parse(data);
      if (doesObjHaveProperty(obj, "name")) {
        console.log(obj.name);
      } else {
        console.log(
          `file ${fileName} contains valid json but not property name`
        );
      }
    } 
    else {
      console.log(
        fs.readFile(fileName, 'utf8' , (err, data) => {
          if (err) {
            console.error(err)
            return
          }
          console.log(data)
        })

      );
    }
});


