//Exercise no 28
var age = 18;
if (age < 2) {
    console.log("Person is a Baby.");
}
else if (age >= 2 && age < 4) {
    console.log("Person is a Toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("Person is a Kid.");
}
else if (age >= 13 && age < 20) {
    console.log("Person is a Teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("Person is an Adult.");
}
else if (age >= 65) {
    console.log("Person is an Elder.");
}
else {
    console.log("Invalid age");
}
