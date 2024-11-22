import express,{Request,Response} from 'express';
import cors from 'cors';
const app = express()

//parsers
app.use(express.json())
app.use(cors())
//application routes
// app.use('/api/v1/students',StudentRoutes)
const getAController =(req: Request, res: Response)=>{
  res.send("Hello World")
}

app.get('/',getAController )


export default app