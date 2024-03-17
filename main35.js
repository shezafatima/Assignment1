//Exercise no 35
var animals = ["Cat", "Rabbit", "Squirrel"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal.charAt(0).toUpperCase() + animal.slice(1));
}
console.log("\n");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animals, " has fur on their skin"));
}
console.log("\nAll of these are great pets!");
