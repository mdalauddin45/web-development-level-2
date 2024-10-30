//reference type---> object
const user: {
  company: "BGC"; //type: litarel type
  readonly trust:string; //type: litarel type
  firstName: string;
  middleName?: string; //optional
  lastName: string;
  isMarried?: boolean;
} = {
  company: "BGC",
  trust: "trust",
  firstName: "Md",
  //   middleName: "Ala",
  lastName: "Uddin",
  isMarried: false,
};
console.log(user);