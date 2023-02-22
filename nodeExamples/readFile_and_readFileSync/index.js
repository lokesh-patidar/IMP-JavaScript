const fs = require("fs");
// [1] ReadFile:--->
// ----------------
// readFile :- This will read the file asynchronously
// fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         console.log("Cannot read the file");
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// });
// console.log("Bye Guys!!");




// .................................................................................................................. 





// [2] ReadFileSync:--->
// ---------------------
// readFileSync :- This will read the file synchronously, until the file reading is not finished, compiler is not going to the Bye Guys!! statement.
const data = fs.readFileSync("./text.txt", { encoding: "utf-8" })
console.log(data);
console.log("Bye Guys!!");




// .................................................................................................................. 



// [3] Write file:--->
// ------------------
// While writing it will automatically create the file.
// writeFile :- This will write the file asynchronously.

// const fs = require("fs");
// fs.writeFile("./log.txt", "This is me first time wrinting in the file", (err) => {
//     if (err) {
//         console.log("Cannot write in the file");
//         console.log(err);
//     } 
//     else {
//         console.log("Data has been written in the file");
//     }
// });




// .................................................................................................................. 



// [4] writeFileSync--->
// --------------------
// writeFileSync :- This will write the file synchronously, first the writing will be finished then the next task.

// const fs = require("fs");
// fs.writeFileSync("./log.txt", "This is me second time wrinting in the file");

