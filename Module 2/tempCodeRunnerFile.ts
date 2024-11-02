
//   type Something = { something: string };

//   //simulation
//   const createpromise = (): Promise<Something> => {
//     return new Promise<Something>((resolve, reject) => {
//       const data: Something = { something: "something" };
//       if (data) {
//         resolve(data);
//       } else {
//         reject("failed to load data");
//       }
//     });
//   };

//   //calling create promise function

//   const showData = async (): Promise<Something> => {
//     const data: Something = await createpromise();
//     // console.log(data);
//     return data;
//   };

//   showData();