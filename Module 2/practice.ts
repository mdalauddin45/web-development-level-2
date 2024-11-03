{
  //Task-1
  let course: string =
    "Hello World, I will complete this course successfully and become a Next level Web Developer!";
//   console.log(course);W


  //Task-2
 type Roles={
    admin: string;
    user: string;
    guest: string;
 }

  const programmer:{

    name:string;
    age:number;
    email?:string;
    wife:"someone"//type: litarel type
    role:keyof Roles;
  }={
    name:"Md Alauddin",
    age:24,
    //type: litarel type
    role: "admin"
  };
  console.log(programmer);
}
