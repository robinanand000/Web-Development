 const fs=require("fs");
 let text= fs.readFileSync("./dele.txt","utf-8");
//  let text= fs.readFileSync("C:\\vsCode files\\Web Developement Bootcamp\\Backend- Node_Js\\dele.txt","utf-8");
 text= text.replace("browser","Rohan");
 console.log("The content of the file is :")
 console.log(text);

 console.log("Creating a new file:")
 fs.writeFileSync("C:\\vsCode files\\Web Developement Bootcamp\\Backend- Node_Js\\robin.txt",text)
