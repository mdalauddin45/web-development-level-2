{//destructuring

const user={
    id:1234,
    name:{
        firstName: 'Md',
        middlename: 'Ala',
        lastname: 'Uddin'
    },
    contactNo:"019121413",
    address:"Ugonnda"
}

const {contactNo:phone, name:{firstName}}=user
// console.log(firstName)

const myFriends = ['mynul','nadim','sajib']

const[,bestFriend,]=myFriends
console.log(bestFriend)


}