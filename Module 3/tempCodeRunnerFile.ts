{
  //OOP Inheritance --> parent class to child class
  class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for  ${numberOfHours}`);
    }
  }
  const student1 = new Student("ALAUDDIN", 23, "oganda");
  student1.getSleep(23);
}
