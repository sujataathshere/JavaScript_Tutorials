function vowelCount(str){
    let count = 0;
    for(let char of str){
        if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u" || char ==="A" || char ==="E" || char ==="I" || char ==="O" || char ==="U"){
            count++;
        }
    }
    return count;
}

let vCount = vowelCount("JavaScript");
console.log("JavaScript has",vCount,"vowels");

function vowelCount2(str){
    let count = 0;
    let vArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for(let charS of str){
        for(let charV of vArr){
            if(charS === charV){
                count++;
            }
        }
    }
    return count;
}

vCount = vowelCount("ApanaCollege");
console.log("ApanaCollege has",vCount,"vowels");