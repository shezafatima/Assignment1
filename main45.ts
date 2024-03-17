//Exercise no 45
//Cars:
type car={
    Manufacture:string;
    Model:string;
    [key:string]:any;
}
function Car(Manufacture:string,
             Model:string,
             Optional:Record<string,any>):car{
            return{
             Manufacture,
             Model,
             ...Optional
    }
}
const myCar:car=Car("Kia","Sportage",{color:"White",year:2024})
console.log(myCar)