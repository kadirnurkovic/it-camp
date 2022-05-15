const string = "ovo je string";
let newString = "";
let len = string.length;

for (let i = 0; i < len; i++) {
    if (i === len - 1) {
        newString += string[i].toUpperCase();
    } else if (string[i + 1] === " ") {
        newString += string[i].toUpperCase();
    } else {
        newString += string[i];
    }
}

console.log(newString);