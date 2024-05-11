"use strict";
//lower case
let personName = "Arsalan";
console.log("lowercase:", personName.toLowerCase());
//upper case
console.log("uppercase:", personName.toLocaleUpperCase());
//title case
console.log("titlecasea:", personName.replace(/\bw/g, c => c.toUpperCase()));
