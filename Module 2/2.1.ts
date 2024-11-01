{
  //type assertions: typeScript taky amra better bujly ba batter declaring korty pari atai
  let anything: any;
  anything = "Next level web development";
  anything = 222;
  anything as number;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted Gm is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;


type CustomError={
    message: string
}

try {
      console.log(result1);
} catch (error) {
    console.log((error as CustomError).message);
}

}
