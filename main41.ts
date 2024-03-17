//Exercise no 41:
//Magicians:
function show_magicians(magicians:string[]):void{
    for(const magician of magicians ){
        console.log(magician.charAt(0).toUpperCase() +magician.slice(1));
    }
}
const  magician:string[]=['Sabir Ali','Steven Frayne','Harry August Jansen'];
show_magicians(magician);