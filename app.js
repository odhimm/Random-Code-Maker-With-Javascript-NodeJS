// input output
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
// Make Random Characters
const random = (length = 8) => {
    // Declare all characters
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";   
    // Pick Characters Randomly
    let str = "";
    for (let index = 0; index < length; index++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
}
// Display On Console
function inputCode(){
    console.log("------------CODE MAKER------------");
    readline.question("Input Length Code: ", (input) => {
        console.log(`Code: ${random(input)}`);
        readline.close();
    })
}
inputCode();
