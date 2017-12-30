
const fs = require('fs');

//This happens Sync
let text = fs.readFileSync('./file.txt', 'utf8');
//anoter way to do that is using __dirname + /file.txt dirname points to the root

//This happens Async
let text2 = fs.readFile('./file.txt','utf8', (err, data) => {
    console.log(data);
})

let writable = fs.createWriteStream('./wfile.txt');

writable.write("This supposed to be inside of the wfile.txt file. ");
writable.write("I wanna check if this will overwrite what I already wrote in the file.")

console.log(text.toUpperCase());