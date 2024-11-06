{
  //normal function
  function multiply(a: number, b: number): number {
    const result: number = a * b;
    return result;
  }
  const result: number = multiply(3, 5);
  console.log(result);

  //arrow function
  const sumOfTwo = (a: number, b: number): number => {
    return a + b;
  };
  const ans = sumOfTwo(3, 5);
  console.log(ans);
}
