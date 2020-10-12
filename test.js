console.log("soal no 1")

var str = "phobia";

var newStr = ""

for (let i = str.length -2; i >= 0; i--) {
  newStr += str[i]
}
console.log(str.concat(newStr));

console.log("soal no 2")

function createPyramid(rows)
{
    for (let i = rows; i >= 1; i--) {
        var output = ' ';
        for (let j = rows-1; j >= i; j--) output += ' ';
        for (let k = 1; k <= i; k++) output += '* ';
        console.log(output);  
    } for (let i = 1; i < rows; i++) {
        var output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);  
    } 
    
}
createPyramid(5)

function createPyramid(rows)
{
    for (let i = rows; i >= 1; i--) {
        var output = ' ';
        for (let j = rows-1; j >= i; j--) output += ' ';
        for (let k = 1; k <= i; k++) output += '* ';
        console.log(output);  
    } for (let i = 1; i < rows; i++) {
        var output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);  
    } 
    
}
createPyramid(3)

console.log("soal no 3")

var num = 5;
var m, n;
for (m = 1; m < num; m++) {
    for (n = 1; n <= m; n++)
    document.write(""+n+" ");
    document.write('<br/>');
}
for (m = num; m >= 0; m--) {
    for (n = 1; n <= m; n++)
    document.write(""+n+" ");
    document.write('<br/>');
}
document.write('<br/>');