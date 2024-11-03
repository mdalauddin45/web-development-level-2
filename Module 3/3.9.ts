{
  //abstraction--> 1. interface 2.abstract

  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }
    stopEngine(): void {
      console.log("I am starting the car engine");
    }
    move(): void {
      console.log("I am starting the car engine");
    }
    test(): void {
      console.log("t am just testing");
    }
  }

  const toyotaCar = new Car1();
  // toyotaCar.startEngine();

  //abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test(): void {
      console.log("t am just testing");
    }
  }
  class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log("I am starting the engin");
    }
    stopEngine(): void {
        console.log("I am stopping the car engine");
    }
    move(): void {
        console.log("i am moving the car engine");
    }
  }

  const hondacar = new ToyotaCar();
  hondacar.startEngine()
}
