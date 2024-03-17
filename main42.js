function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}
var magicians1 = ['Sabir Ali', 'Steven Frayne', 'Harry August Jansen'];
make_great(magicians1);
show_magicians(magicians1);
