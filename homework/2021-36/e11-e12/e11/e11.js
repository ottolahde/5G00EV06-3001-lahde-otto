import { readFile } from "fs";
import { writeFile } from "fs";

readFile("./textfile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
  writeFile("copy_of_.txt", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});