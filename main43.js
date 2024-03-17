//Exercise no 43
function make_great(magicians) {
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push(magicians[i] + ' the Great');
    }
    return great_magicians;
}
var magicians1 = ['Sabir Ali', 'Steven Frayne', 'Harry August Jansen'];
var great_magicians1 = make_great(magicians1);
console.log(magicians1);
console.log(great_magicians1);
