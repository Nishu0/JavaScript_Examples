const fs = require('fs')
//1)Create a folder named it nisarg
//fs.mkdirSync("nisarg")
//2)create a file inside the above folder and add your name to it
//fs.writeFileSync("nisarg/name.txt","My name is Nisarg");
//3)add your last name to existing file by use of append
//fs.writeFileSync("nisarg/name.txt"," Thakkar",{flag :'a'})
//fs.appendFileSync("nisarg/name.txt"," Thakkar");
//4)Read the data without getting buffer data
//const data=fs.readFileSync("nisarg/name.txt");
//if no encoding is specified then the raw buffer is return
//const data=fs.readFileSync("nisarg/name.txt","utf8");
//console.log(data);
//5)Rename the file NamedNodeMap
//fs.renameSync("nisarg/name.txt","nisarg/fname.txt");
//6)delete both file and folder
//fs.unlinkSync("nisarg/fname.txt");
fs.rmdirSync("nisarg")
