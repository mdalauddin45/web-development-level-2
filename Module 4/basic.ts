{
  //basic data types

  const age: number = 25;
  const myName: string = "Alauddin";
  const isActive: boolean = false;

  //array

  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //array

  //tuples
  const info: [string, string, number, number, boolean, null, undefined] = [
    "Alauddin",
    "Salauddin",
    34,
    54,
    true,
    null,
    undefined,
  ];

  //object
  type PersonType = {
    name: string;
    age: number | string;
    isActive: boolean;
    designation: string;
    company: string;
  };

  const person: PersonType = {
    name: "Alauddin",
    age: 25,
    isActive: true,
    designation: "Next level developer",
    company: "BGCTUB",
  };
}
