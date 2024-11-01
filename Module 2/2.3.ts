{
  // generic type

  type genericArray<T> = Array<T>;

  //  const roollNumbers: number[] = [2,4,8,3,6];
  const roollNumbers: genericArray<number> = [2, 4, 8, 3, 6];

  //  const mentors:string[] = ['Mr.x', 'Mr.y', 'Mr.z']
  const mentors: genericArray<string> = ["Mr.x", "Mr.y", "Mr.z"];

  const boolArray: genericArray<boolean> = [true, false];

  const user: genericArray<object> = [
    {
      name: "Alauddin",
      age: 45,
    },
    {
      name: "Mynul bhai",
      age: "35",
    },
  ];

  //generic Tuple
  type genericTuple<X, Y> = [X, Y];
  const manus: genericTuple<string, string> = ["Mr.x", "Mr.y"];

  const UserWithId:genericTuple<number, {name:string;email:string}>=[1234,{
    name: "Alauddin",
    email: "alauddin@gmail.com",
  }]

}
