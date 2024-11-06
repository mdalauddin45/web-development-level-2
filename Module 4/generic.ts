{
  //
  type ArrayType<P> =Array<P>;
  
  const numArray: ArrayType<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const stringArray: ArrayType<string> = ["alo", "mynul", "arju", "nadim", "tisha"];
  const boolArray: ArrayType<boolean> = [true, false, false, true];


  //interface with generic
  interface Person<T> {
    name: string;
    age: number | string;
    isActive: boolean;
    designation: string;
    id:T;
  }
  const person: Person<string> = {
    name: "Alauddin",
    age: 25,
    isActive: true,
    designation: "Next level developer",
    id:"23"
  };
  console.log(person);
  //
}
