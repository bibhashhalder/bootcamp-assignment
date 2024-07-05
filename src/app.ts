import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRoute } from "./app/modules/products/product.route";
const app: Application = express();
// parsers
app.use(express.json());
app.use(cors());
app.use('/api/products', productRoute)
const getController = (req: Request, res: Response) => {
  res.send("This server is runing now");
};
app.get("/", getController);
export default app;
