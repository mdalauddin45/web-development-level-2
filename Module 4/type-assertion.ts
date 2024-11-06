{
  //
//   const message: unknown = "Hello,Samsujjaman";
//   const messageLen:number = (message as string).length;
//   console.log(messageLen);

// const messageLen:number = (message.match(/TypeScript/g)||[]).length;
function countWordOccurrences(message:string, word:string):number{
    const messageLen:number =  message.split(word).length-1;
    return messageLen;
}
    const message:string="TypeScript is great. I love TypeScript!";
    const word:string="TypeScript";
    // const messageLen:number =  message.split(word).length-1;
    // console.log(messageLen);
    const result:number = countWordOccurrences(message,word);
    console.log(result);

    

  //
}
