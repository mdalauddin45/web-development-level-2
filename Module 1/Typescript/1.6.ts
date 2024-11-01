{//Learnig Functions

//Normal funtion

function add(a: number, b: number): number {
  return a + b;
}
const a: number = add(2, 5);
console.log(a);

//Arrow functions
const AddArrow = (n1: number, n2: number): number => n1 + n2;
const b = AddArrow(5, 3);
console.log(b);

//Object -> function-->>>method

const poorUser = {
  name: "Alauddin",
  balance: 0,
  addBalace(balance: number): string {
    return `My new balance: ${this.balance + balance}`;
  },
};

const arr: number[] = [10, 23, 54, 90];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
}