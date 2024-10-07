const jsuser={
    name:"rahul kumar",
    age:22,
    location:"ranchi",
    email:"rahulmnnitagmail.com",
    isloggedin:false,
    lastloginedday:["monday","saturday"]
}

console.log(jsuser.email);  
console.log(jsuser["email"]);  // isko aaise v likh sakte hian 
console.log(jsuser.name);
console.log(jsuser.age)

const course={
    coursename:"js in hindi ",
    price:"999",
    courseteacher:"rahul"
}
// destucture of object 
console.log(course);


// jab v aapna kam kisis aur se karnwana hain ussi ko api kahte hain
//api ke dwar jo value aati thi pahle wo xml formate me rahti thi but aab wo json ke formate me aati hain  jo ki  ek object hi hain 

{
   "name":"rahul",
   "coursename":"js in hindik"
}