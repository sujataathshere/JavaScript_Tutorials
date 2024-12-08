let marksArray = [ 80, 96, 89, 94, 90, 85, 92, 95];
console.log("Marks of students :", marksArray);

const nintyPlusMarks = marksArray.filter( (num) => {
    return num>90;
})
console.log("Scored 90+ Marks : ", nintyPlusMarks);