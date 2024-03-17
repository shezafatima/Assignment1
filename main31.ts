//Exercise no 31:
//No Users:
let users:string[]=["Admin","Ayesha","Maryam","Eman","Alia","Muntaha"];
if(users.length === 0 ){
    console.log("We need to find some users!")
}
else{
    for (let user of users){
        if(user === "Admin"){
            console.log("Hello admin, would you like to see a status report?")
        }
else{
    console.log(`Hello ${user}, thank you for logging in again.`)
}
    }
}
users=[]
if(users.length === 0){
    console.log("We need to find some users!")
}