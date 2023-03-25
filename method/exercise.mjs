import * as fs from "node:fs";

const data = "Hello!"

fs.writeFile("hello.txt", data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("Success!");
    }})
