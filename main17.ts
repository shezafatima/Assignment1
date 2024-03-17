//Exercise no 17:
//Shrinking Guest List:
//starting from Exercise 16
let guestList:string[]=["Maryam","Ayesha","Eman"];
let not_present:string="Ayesha";
let new_person:string="Kainat";
guestList[1]=new_person;
guestList.unshift("Areesha","Alia");
guestList.push("Mumtahina");
for (let i=0;i<guestList.length;i++){
    console.log("Dear Friend,\n"+guestList[i]+"\nAssalamualaikum!\nYou are invited to a dinner at my home tommorow.\nHosted by:\nSheza\n")
}
console.log("We found a bigger dinner table\n");
console.log("Dear Friend,\nUnfortunately our new dinner table won't arrive in time for the dinner.\nWe have space for only two people.\n")
while(guestList.length>2){
    let removeGuest=guestList.pop();
    console.log("Sorry "+`${removeGuest}`+"I can't invite you to dinner because our dinner table won`t arrive in time.\n");
}
for (let i =0;i<guestList.length;i++){
    console.log("Dear Friend,\n"+guestList[i]+"\nYou are still invited on tommorow dinner.\n")
}
guestList.splice(0,2);
console.log(guestList);