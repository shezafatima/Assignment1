//Exercise no 44
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log('Bon App`etit!');
sandwich('Grilled Chesse', 'Fried Chicken', 'Peanut butter');
sandwich('Club sandwich', 'Roast Beef sandwich');
sandwich('Steak sandwich', 'Vegetable sandwich');
