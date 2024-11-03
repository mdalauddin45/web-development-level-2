{
  //OOP- class
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    //parameters properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`The ${this.name} say ${this.sound}`);
    }
  }
  const dog = new Animal("German Shepard bhai", "dong", "ghew ghew");
  const cat = new Animal("Md Alauddin", "cat", "Meow Meow");
  cat.makeSound();
}
