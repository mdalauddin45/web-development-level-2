{
  //static
  class Counter {
    static count: number = 0;
    static increment() {
      return Counter.count=Counter.count+1;
    }
    static decrement() {
      return Counter.count=Counter.count-1;
    }
  }


//   const instance1 = new Counter();
//   console.log(instance1.increment()) //1->different memory
  console.log(Counter.increment()) //2->different memory
//   console.log(instanCounterce1.increment()) //3->different memory

//   const instance2 = new Counter();
//   console.log(instance2.increment())//4->different memory
//   console.log(instance2.increment())//5->different memory

//   const instance3 = new Counter();
//   console.log(instance3.increment()) //6->different memory
}
