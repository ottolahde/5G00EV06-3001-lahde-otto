
const util = require("util");
const readlineSync = require("readline-sync");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);
//const fileName = "package.json";

const getFileName = () =>
  new Promise((resolve) => {
    const data = readlineSync.question("Give file:");
    resolve(data);
  });

const parseJson = (data) => {
  function func(resolve) {
    const json = JSON.parse(data);
    resolve(json);
  }
  const p = new Promise(func);
  return p;
}

const getName = (data) =>
  new Promise((resolve, reject) => {
    if (!data.name) reject("File contains JSON but not property name");
    resolve(data.name);
  });

  getFileName()
    .then((f) => readFile(f, "utf8"))
    .then(parseJson)
    .then(getName)
    .then(console.log)
    .catch((x) => console.log("error", x));