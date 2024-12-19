import cors from "cors";
import express, { Request, Response ,Application} from 'express';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to our Blog Project!");
});
// app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

export default app;
