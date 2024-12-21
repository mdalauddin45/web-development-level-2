import cors from "cors";
import express, { Request, Response, Application } from "express";
import router from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send({ status: true, message: "welcome to our Blog Project!" });
});

app.use(globalErrorHandler);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: "Route not found",
  });
});

export default app;
