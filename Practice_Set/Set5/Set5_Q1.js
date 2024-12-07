let marks = [85, 97, 44, 37, 76, 60];

let sumMarks = 0;

for(let mark of marks){
    sumMarks += mark;
}

let avgMarks = sumMarks/marks.length;

console.log("Average of student marks : ", avgMarks);