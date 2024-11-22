import express, { Request, Response } from 'express';
import cors from 'cors';
import {bikeRoutes} from '../src/app/modules/bike/bike.route';


const app = express();

// Middleware parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1/products', bikeRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send("Hello World");
});

export default app;
