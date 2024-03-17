//Exercise no 15
//starting from 14
var guestList = ["Maryam", "Ayesha", "Eman"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Friend,\n" + guestList[i] + "\nAssalamualaikum!\nYou are invited at my home on tommorow dinner.\nRegards:\nSheza\n");
}
var not_present = "Ayesha";
var new_person = "Kainat";
guestList[1] = new_person;
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear Friend,\n" + guestList[i] + "\nAssalamualaikum!\nYou are invited at my home on tommorow dinner.\nRegards:\nSheza\n");
}
//"Ayesha can't make the dinner"
