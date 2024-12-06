let student = {
    fullName : "Rahul Kumar",
    age : 20,
    cgpa : 7.5,
    isPass : true,
};

for(let key in student){
    console.log(key,":",student[key]);
}