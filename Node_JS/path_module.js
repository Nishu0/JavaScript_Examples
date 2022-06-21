const path=require('path');
console.log(path.sep)
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath)
//path is required in heroku
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)
