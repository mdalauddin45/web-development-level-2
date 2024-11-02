{
  //promise

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  
  const getTodo = async (): Promise<Todo> => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // Correct URL
      const data: Todo = await response.json(); // Await for the JSON conversion
      console.log(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch data:", error);
      throw error;
    }
  };
  
  getTodo();
  

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
}
