//Exercise no 43:
//Unchanged Magicians:
function make_great(magicians:string[]):string[] {
    const great_magicians:string[]=[];
    for (let i=0; i<magicians.length; i++){
        great_magicians.push(magicians[i] + ' the Great');
    }
    return great_magicians;
}
const magicians1:string[]=['Sabir Ali','Steven Frayne','Harry August Jansen'];
const great_magicians1:string[]=make_great(magicians1);
console.log(magicians1);
console.log(great_magicians1);