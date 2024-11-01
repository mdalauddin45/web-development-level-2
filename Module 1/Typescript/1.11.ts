{
// ternary operator || optional chaining || nullish coalescing operators

const age: number =24;

// if(age>=18){
//     console.log("adult");
// }else{
//     console.log("not adult");
// }


const isAdult=age>=18? "adult" : "notAdult";

console.log({isAdult});

//nullish coalescing operators
// null / undefined ----->  decission making
const isAuthenticated = "";

const result1 = isAuthenticated ?? "Guest"
const result2 = isAuthenticated ? isAuthenticated: "Guest"

console.log({result1});
console.log({result2});


//
}