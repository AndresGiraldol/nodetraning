/* 
    HOMEWORK 1 => TASK 3 (Running with Babel)
    Write a program which should do the following:
    • Read the content of csvfile from./csvdirectory. 
    • The csvtojsonpackage (https://github.com/Keyang/node-csvtojson) to convert csvfile to jsonobject.
    • Write the csvfile content to a new txtfile. 
    • Do not load all the content of the csvfile into RAM via stream (read/write file content line by line).
    • In case of read/write errors, log them in the console
*/


import fs from "fs";
import { csv as csvJson } from "csvtojson";

const csvPath = "./csv/library.csv";
const jsonPath = "./csv/library.txt";

fs.readFile(csvPath, "utf-8", (errorData, data) => {
  if (errorData) console.error(`Error reading file: ${errorData}`);

  console.log("Converting....");

  csvJson()
    .fromString(data)
    .then((json) => {
      fs.writeFile(jsonPath, JSON.stringify(json), "utf-8", (errorWrite) => {
        if (errorWrite) console.error(`Error writing file: ${errorWrite}`);

        console.log("Conversion to Txt successful");
      });
    });
});
