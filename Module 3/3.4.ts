{
  //instance of guard
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am braking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am mewaing");
    }
  }

  //smart way te handle korar jnn funtion bebohar
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal):animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeBark();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("dog bhai", "dog");
  const cat = new Cat("cat bhai", "cat");
  // dog.makeSound();
  // dog.makeBark();
  // cat.makeBark();
  getAnimal(dog);
}
