//Exercise no 24
var person = "Sara";
var age = 18;
var numbers = [1, 2, 3, 4, 5];
// *Test for equality and inequality with strings
//Equality test (true):
(console.log)("Is person == 'Sara'? predict true.");
console.log(person == 'Sara');
//Equality test(false):
console.log("Is person ==='sara'? predict false.");
console.log(person === 'sara');
//Inequality test(true):
console.log("Is person !='Saba'? predict true.");
console.log(person != 'Saba');
//Inequality test(false):
console.log("Is person !=='Sara'? predict false.");
console.log(person !== 'Sara');
// *Test using the lower case function
//Lowercase function (true):
console.log("Is person.toLowercase() == 'sara'? predict true.");
console.log(person.toLowerCase() == 'sara');
//Lowercase function (false):
console.log("Is person === person.toLowercase()? predict false.");
console.log(person === person.toLowerCase());
/* *Numerical test involving equality and inequality, greater than and less than ,
greater than or equal to, and less than or equal to.*/
//Equality test (true):
console.log("Is age == 18 ? predict true.");
console.log(age == 18);
//Equality test (false):
console.log("Is age == 31 ? predict false.");
console.log(age == 31);
//Inequality test (true):
console.log("Is age != 20 ? predict true");
console.log(age != 20);
//Inequality test (false):
console.log("Is age != 18 ? predict false");
console.log(age != 18);
//Greater than (true):
console.log("Is age > 15 ? predict true.");
console.log(age > 15);
//Greater than (false):
console.log("Is age > 24? predict false.");
console.log(age > 24);
//Less than (true):
console.log("Is age < 24 ? predict true.");
console.log(age < 24);
//Less than (false):
console.log("Is age <15 ? predict false.");
console.log(age < 15);
//Greater than or equal to (true):
console.log("Is age >= 15? predict true.");
console.log(age >= 15);
//Greater than or equal to (false):
console.log("Is age >= 24? predict false.");
console.log(age >= 24);
//Less than or equal to (true):
console.log("Is age <= 24? predict true.");
console.log(age <= 24);
//Less than or equal to (false):
console.log("Is age <= 15? predict false.");
console.log(age <= 15);
// *Test using "and" and "or" operators
//AND test (true):
console.log("Is age >16 && age < 20? predict true.");
console.log(age > 16 && age < 20);
//AND test (false):
console.log("Is age >20 && age < 15? predict false.");
console.log(age > 20 && age < 15);
//OR test(true):
console.log("Is age>14 || age<19? predict true.");
console.log(age > 14 || age < 19);
//OR test (false):
console.log("Is age>21 || age<12? predict false.");
console.log(age > 21 || age < 12);
// *Test whether an item is in a array
// In Array test (true)
console.log("Is 3 in numbers? predict true.");
console.log(3 in numbers);
//In Array test (false)
console.log("Is 6 in numbers? predict false.");
console.log(6 in numbers);
// *Test whether an item is not in a array
//Not in Array test (true)
console.log("Is 16 not in numbers? predict true.");
console.log(16 in numbers);
//Not in Array test (false)
console.log("Is 5 not in numbers? predict false.");
console.log(5 in numbers);
