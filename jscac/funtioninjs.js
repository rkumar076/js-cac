function myname(){
    console.log("rahul kumar kya  chai hain");
}

myname();
 // java script me us number ka type dene ki awaskta nahi ain 


//  number1 and number2 are the parameter of the number 
function addTwoNumber(number1,number2){
    // console.log(number1+number2);
}

 addTwoNumber(3,4);  // return 7
 addTwoNumber(3,"4"); //  return 34 kyu ki java script me agar koi v argument string type rahgea to wo dono ko string hi samjh lega 


 function loginUserMessage(username){
    return '${username} just logged in'
 }

//  console.log(loginUserMessage("rahul_kumar"))

//rest and spread operator 

// shoppiing cart ke liye
// function calculateCartPrice(...num1){
//     return num1
// }


// how to pass an onject in funtion 
const user={
    username:"hitest",
    price:199
}

function  handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the prices of the course would be ${anyobject.price}`);

}
handleObject(user);

// object to direact v bana ke pass kar sakte the 

 handleObject({
    username:"rahul",
    price:9393
 })


 // how to pass array in funtion 

 const arr


