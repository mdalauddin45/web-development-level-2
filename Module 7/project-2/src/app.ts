import express, { NextFunction, Request, Response } from "express";
const app = express();

//perser
app.use(express.json());
app.use(express.text());

//router

const userRouter = express.Router();
app.use("/api/v1/users", userRouter);

const coursRouter = express.Router();
app.use("/api/v1/courses", coursRouter);

coursRouter.post("/api/v1/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "User created successfully",
    data: course,
  });
});
userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

//middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response,next:NextFunction) => {
  // console.log(req.query)
  // res.send("Hello world!");
  try {
    res.send(someting);
  } catch (error) {
    console.log(error);
    // res.status(400).json({
    //   success: false,
    //   message: "Faild to get data",
    // });
    next(error);
  }
});
// app.get('/:userId/:subid', (req:Request, res:Response) => {
//   console.log(req.params)
//   res.send('Hello world!')
// })
app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.send({
    message: "sucessfully received data",
  });
});

app.all("*",(req:Request, res:Response) => {
  res.status(400).json({
    success:false,
    message:"Route not found"
  })
})

//global error handler
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
  console.log(error);
  if(error){
    res.status(400).json({
      success:false,
      message:"something went wrong",
    })
  }
})

export default app;
