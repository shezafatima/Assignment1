//Exercise no 16:
//More Guests:
//starting from Exercise no 15
let guestList:string[]=["Maryam","Ayesha","Eman"];
for(let i=0;i<guestList.length;i++){
    console.log("Dear Friend,\n"+guestList[i]+"\nAssalamualaikum!\nYou are invited at my home on tommorow dinner.\nRegards:\nSheza\n")
}
let not_present:string="Ayesha";
let new_person:string="Kainat";
guestList[1]=new_person;
for(let i=0;i<guestList.length;i++){
    console.log("Dear Friend,\n"+guestList[i]+"\nAssalamualaikum!\nYou are invited at my home on tommorow dinner.\nRegards:\nSheza\n")
}
console.log("Ayesha can't make the dinner\n");
guestList.unshift("Areesha","Alia");
guestList.push("Mumtahina");
for (let i=0;i<guestList.length;i++){
    console.log("Dear Friend,\n"+guestList[i]+"\nAssalamualaikum!\nYou are invited to a dinner at my home tommorow.\nHosted by:\nSheza\n")
}
console.log("We found a bigger dinner table");