//Exercise no 17
//starting from Exercise 16
var guestList = ["Maryam", "Ayesha", "Eman"];
var not_present = "Ayesha";
var new_person = "Kainat";
guestList[1] = new_person;
guestList.unshift("Areesha", "Alia");
guestList.push("Mumtahina");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Friend,\n" + guestList[i] + "\nAssalamualaikum!\nYou are invited to a dinner at my home tommorow.\nHosted by:\nSheza\n");
}
console.log("We found a bigger dinner table\n");
console.log("Dear Friend,\nUnfortunately our new dinner table won't arrive in time for the dinner.\nWe have space for only two people\n");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry" + "".concat(removeGuest) + "I can't invite you to dinner because our dinner table won`t arrive in time.\n");
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Friend,\n" + guestList[i] + "\nYou are still invited on tommorow dinner.\n");
}
guestList.splice(0, 2);
console.log(guestList);
