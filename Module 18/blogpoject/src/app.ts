/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import cookieParser from 'cookie-parser';
import cors from "cors";
import express, { Request, Response ,Application} from 'express';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to our Blog Project!");
});
// app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

export default app;
