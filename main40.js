//Exercise no 40
function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = make_album('Atif Aslam', 'Meri Kahani');
console.log(album);
album = make_album('Atif Aslam', 'JalPari');
console.log(album);
album = make_album('Ali Zafr', 'Jhoom');
console.log(album);
