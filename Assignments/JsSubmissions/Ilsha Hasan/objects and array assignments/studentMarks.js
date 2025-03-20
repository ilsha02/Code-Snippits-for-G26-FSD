//Student Marks
// create a student objects with name and marks properties
//assign total marks with 0 assuming that no marks is available 
//initalize i with 0 ,check it is lessthan the length of student and increment it by 1
//add totalmarks with student marks till the loop end
//calculating the average marks of student by performing totalmarks by length of students
// To get the topstudent,Assume first student is the top scorer
//for loop is initalized with 1 ,checks till the length of student and increment by 1
//check if i marks are  greater than topstudentmarks then assign i value  to topstudent
//print average marks
//print topstudent name and marks
let student = [
    {name: "ilsha", marks: 91},
    {name: "tisha", marks: 91},
    {name: "harry", marks: 78},
    {name: "bob", marks: 81},
];
let totalMarks = 0;
for(let i=0; i<student.length; i++ ){
    totalMarks += student[i].marks;
}
let avgMarks = totalMarks/student.length;
let topScorer = student[0];
for(let i=1; i<student.length; i++){
    if(student[i].marks>topScorer.marks){
        topScorer  = student[i].marks;
    }
}
console.log("Average Marks : ", avgMarks);
console.log(" Top Student Name: ", topScorer.name);
console.log(" Top Student Marks: ", topScorer.marks);





