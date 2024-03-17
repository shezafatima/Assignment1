//Exercise no 42:
//Great Magicians:
function make_great(magicians:string[]):void{
    for(let i =0; i<magicians.length; i++){
        magicians[i]=magicians[i] + ' the Great'
    }
}
const magicians1:string[]=['Sabir Ali','Steven Frayne','Harry August Jansen'];
make_great(magicians1);
console.log(magicians1);