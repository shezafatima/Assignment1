//Exercise no 37
function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love Typescript!'; }
    console.log("You have order a ".concat(size, " shirt, that says ").concat(text));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I love Python!');
