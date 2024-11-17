import express, { Request, Response } from "express";
const app = express();

//parsers
app.use(express.json());
app.use(express.text());

app.get("/userId", (req: Request, res: Response) => {
  console.log(req.params)
  res.send("Hello developers!");
});
app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Successfully recived data from server",
  });
});

export default app;
