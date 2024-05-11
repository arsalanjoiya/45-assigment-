//lower case
let personName: string ="Arsalan"
console.log("lowercase:", personName.toLowerCase());

//upper case
console.log("uppercase:", personName.toLocaleUpperCase());

//title case
console.log("titlecasea:", personName.replace(/\bw/g,c => c.toUpperCase()));