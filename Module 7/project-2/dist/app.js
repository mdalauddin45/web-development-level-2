"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//perser
app.use(express_1.default.json());
app.use(express_1.default.text());
//router
const userRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
const coursRouter = express_1.default.Router();
app.use("/api/v1/courses", coursRouter);
coursRouter.post("/api/v1/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User created successfully",
        data: course,
    });
});
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User created successfully",
        data: user,
    });
});
//middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", logger, (req, res, next) => {
    // console.log(req.query)
    // res.send("Hello world!");
    try {
        res.send(someting);
    }
    catch (error) {
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
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.send({
        message: "sucessfully received data",
    });
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route not found"
    });
});
//global error handler
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "something went wrong",
        });
    }
});
exports.default = app;
