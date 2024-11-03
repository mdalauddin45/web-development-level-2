{
  //OOP Inheritance --> parent class to child class
  class Parent {
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
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("ALAUDDIN", 23, "oganda");
  //   student1.getSleep(23);

  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numberOfClass: number) {
      console.log(`${this.name} will sleep for  ${numberOfClass}`);
    }
  }

  const teacher1 = new Teacher("apu sir", 32, "barishal", "assistent propesor");
  teacher1.takeClass(1);
  teacher1.getSleep(3);
}
