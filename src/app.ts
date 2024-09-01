import express, { Application, Request, Response } from "express";
import cors from "cors";
import { mainRouter } from "./app/modules/routes/routes";
const app: Application = express();
// parsers
app.use(express.json());
app.use(cors());
app.use('/api/v1/products', mainRouter)
app.use('/api/orders', mainRouter)
const getController = (req: Request, res: Response) => {
  res.send("This server is runing now");
};
app.get("/", getController);
export default app;
