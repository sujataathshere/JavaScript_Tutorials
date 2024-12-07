let str1 = "I am learning ";
let str2 = "Java Script";

console.log("toUpperCase() : ",str1.toUpperCase());

console.log("toLowerCase() : ",str2.toLowerCase());

let str3 = `    ${str1.trim()}      ${str2.trim()}     `;
console.log("trim() :",str3.trim());

console.log("slice(start, end?) : ", str2.slice(2,7));

console.log("str1.concat(str2) : ",str1.concat(str2));

console.log("replace(searchVal, newVal) : ",str1.replace("le", "e"));

console.log("charAt(idx) : ", str2.charAt(2));