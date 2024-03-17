//Exercise no 44:
//Sandwiches:
function sandwich(...items:string[]):void{
    console.log(" Sandwich order:")
    for (let i=0; i<items.length; i++){
        console.log(`- ${items[i]}`)
    }
}
console.log('Bon App`etit!')

sandwich('Grilled Chesse','Fried Chicken','Peanut butter')
sandwich('Club sandwich','Roast Beef sandwich')
sandwich('Steak sandwich','Vegetable sandwich')