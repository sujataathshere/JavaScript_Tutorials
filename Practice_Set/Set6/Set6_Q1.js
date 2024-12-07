let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

// 1. Remove the first company from the array
console.log("Deleted", companies.shift());
console.log(companies);

// 2. Remove Uber & Add Ola in its place
companies.splice(1, 1, "Ola");
console.log(companies);

// 3. Add Amazon at the end
companies.push("Amazon");
console.log(companies);