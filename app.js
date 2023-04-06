let fs = require('fs')
let txt1 = fs.readFileSync('doc1.txt', {encoding: 'utf8'});
console.log(txt1)