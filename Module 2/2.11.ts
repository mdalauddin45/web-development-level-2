{
  //utility types
  //pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type Name = Pick<Person, "name" | "age">;

  //Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  //Partial
  type PersonPartial = Partial<Person>;

  //readonly
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "John",
    age: 200,
    email: "john@gmail.com",
    contactNo: "013",
  };
  //   person1.name = "John khan";

  //record
  //   type MyObj={
  //     a:string,
  //     b:string
  //   }
  type MyObj = Record<string, string>;
  const EmptyObj: Record<string, unknown> = {};
  const obj1: MyObj = {
    a: "a",
    b: "b",
    c: "c",
  };
}
