import express,{Request,Response} from 'express';
import cors from 'cors';

const app = express()

//parsers
app.use(express.json())
app.use(cors())

const getAController =(req: Request, res: Response)=>{
  res.send("Hello World")
}

app.get('/',getAController )


export default app