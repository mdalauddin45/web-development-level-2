{
  //
//   const message: unknown = "Hello,Samsujjaman";
//   const messageLen:number = (message as string).length;
//   console.log(messageLen);

    const message:string="TypeScript is great. I love TypeScript!";
    // const messageLen:number = (message.match(/TypeScript/g)||[]).length;
    const messageLen:number =  message.split('TypeScript').length-1;
    console.log(messageLen);

    

  //
}
