console.log("This is index.js");


// const average = require("C:\\vsCode files\\Web Developement Bootcamp\\Backend- Node_Js\\creating_custom_modules\\mod.js");


// For multiple modules, we make object .
const mod = require("./mod");

console.log(mod.avg([2,3,4])); 