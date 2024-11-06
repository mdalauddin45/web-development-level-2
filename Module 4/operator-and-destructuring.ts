{
  const rolls: number[] = [1, 2, 3, 4, 2, 4, 5, 6, 7, 8, 9, 10];
  const newRolls: number[] = [...rolls, 11, 12];
  console.log(newRolls);

  type PersonType = {
    name: string;
    age: number | string;
    isActive: boolean;
    designation: string;
    company: string;
    salary?: number; //nullable
  };

  const person1: PersonType = {
    name: "Alauddin",
    age: 25,
    isActive: true,
    designation: "Next level developer",
    company: "BGCTUB",
  };

  const newInforPerson1: PersonType = {
    ...person1,
    salary: 10000,
  };

  //   console.log(newInforPerson1);

  //rest operator
  const [first, ...bakigula] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("first: ", first);
  console.log("rest: ", bakigula);
}
