{
  // nullable types

  const SearchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };
  // SearchName(null)

  //unkown typeof

  const getSpeedInMeterPersecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms`);
    }
    if (typeof value === "string") {
      const [result, unit] = value.split("");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms`);
    } else {
      console.log("Wrong speed");
    }
  };

  //never

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("Mushkill se error hogeya");
}
