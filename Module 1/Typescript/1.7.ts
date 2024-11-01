{
    //spred operatior
    //rest operator
    //destucturing
//   const poorUser = {
//     name: "John",
//   };


// learn spread operator
const bros1:string[]=["Bob", "firoz", "minza"]
const bros2:string[]=["tonmy", "siroz", "monza"]

bros1.push(...bros2);

const mentor1={
    typeScript: 'Mizba',
    redux:'Mir',
    dbms:'Mizan' 
}
const mentor2={
    prism: 'Firoz',
    next:'tonmoy',
    cloud:'Nahid' 
}

const mentorlist={
    ...mentor1,
    ...mentor2
}
// console.log(mentorlist)

//learn rest operator

const greetFriends=(...friends:string[])=>{
    // console.log(`Hi ${friends}`)
    {
        friends.forEach(f => console.log(`Hi ${f}`))
    }
}
greetFriends('abul','babul');


}
