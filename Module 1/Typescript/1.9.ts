{
  //Type Alias
  type Student={
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  }

  const student1:Student= {
    name: "Alauddin",
    age: 23,
    gender: "Male",
    contactNo: "34374923",
    address: "chittagong",
  };
  const Student = {
    name: "Salauddin",
    age: 23,
    gender: "Male",
    address: "Dhaka",
  };


type Add=(num1:number, num2:number)=>number
const add:Add=(num1,num2)=>num1+num2;


}
