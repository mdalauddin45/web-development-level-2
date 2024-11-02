{
  //generic constant with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //Manually

  type Owner2 = keyof Vehicle; //use keyof operator

  const person1: Owner = "car";
  const person2: Owner2 = "ship";

  const getPropertyValue=<x,y extends keyof x>(obj:x, key:y)=>{
    return obj[key];
  }
  const User = {
    name: "Alauddin",
    age: 24,
    address: "ctg",
  };

  const car={
    model:"Toyota",
    year:2000
  }

  const result1 = getPropertyValue(car,'model');

  

  
}
