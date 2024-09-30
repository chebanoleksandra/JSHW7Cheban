//2
/*function condition(value, index, array) {
    let result = false;
    if (value == "." || value == " " || value.match(/[a-z]/i) ) {
        result = true;
    }
    return result;
};

let name = prompt("Input your name: ");
let arrName = name.split("");
let passed = arrName.filter(condition);
name = passed.join("");
if(confirm("Did you mean " + name + "?"))
{
    alert("Great!");
}
else{
    alert("Unluck:(");
}
document.write("<br />");*/

//3
let text = "http://www.ufa.com.ua/utilites/hdd/out.php?sort=2";
let s = text.indexOf("/");
let protocol = text.slice(0, s);
text = text.slice(s+2);
s = text.indexOf("/");
let host = text.slice(0, s);
text = text.slice(s);
let s2 = text.lastIndexOf("/");
let path = text.slice(0, s2 + 1);
text = text.slice(s2);
s = text.indexOf("?");
let name = text.slice(1, s);
let req = text.slice(s + 1);
document.write("Protocol: " + protocol + "<br />");
document.write("Host: " + host + "<br />");
document.write("Path: " + path + "<br />");
document.write("File name: " + name + "<br />");
document.write("Request string: " + req + "<br />");

