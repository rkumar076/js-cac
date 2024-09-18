// js ka aaray dynamic hota hain  element kitna v enter karo

// data type fixed nahi rahta hain koi sa v mix kar ke  dal sakta ho. 
//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
//  as those of the source object 
// from which the copy was made.

//java script me array ka copy shallow copy hi hota hain 
// declaration of arrays
const arr=["rahul","abhisek","himanshu"]
const vec=new Array(1,2,3,4,5)
const str=new Array("rahul","shivam","himanshu");
const bl=new Array(0,0,0,0,1,1,0);

const myArr=[1,2,3,5,6,7];
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);


// methods
// for inserting the element on the array
// myArr.push(6)
// myArr.push(12)
// myArr.push(13)
// myArr.push(122)

//for deleting the element from  the end
 myArr.unshift(9) // age dalega values 
 myArr.shift(9) // aagae se delet hoga elemen


 console.log(myArr.includes(9)) // only check ki preasent hain ya nahi  true false me answer deta hain

console.log(myArr.indexOf(3)) // index send karega agar array me present hoga to nahi to -1
  const newArr=myArr.join(); // array ko copy to karat hain but change kar dega hain elment ko string me 

  console.log(myArr);
  console.log(newArr);
  console.log(typeof newArr);



  //slice.  , splice
 // besic difference yahi hain ki slice me jo range dete hain  wo include nahi hota aur original array me v koi asar nahi dalta hain
// lekin splice me whaa thak index ka range  dete hain wahi tak include kara hain aur array me se us range ko delet kar detta hain
  console.log("A",myArr);
  const myn1=myArr.slice(1,3)
  console.log(myn1);

   console.log("B",myArr);
   const myn2=myArr.splice(1,3)
   console.log("B",myArr);
   console.log(myn2);



















