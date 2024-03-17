//Exercise no 15:
//Changing Guest List:
//starting from 14
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
console.log("Ayesha can't make the dinner");
