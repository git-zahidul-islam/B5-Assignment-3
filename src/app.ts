import express, { Application, Request, Response } from "express";
import { bookRoutes } from "./app/controllers/book.controller";
import borrowRoutes from "./app/controllers/borrow.controller";
import cors from "cors"


const app: Application = express();
app.use(express.json());

app.use(cors({
  origin:["https://b5-assignment-4.vercel.app", "http://localhost:5173"]
}));

app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

app.get('/', async (req: Request, res: Response) => {
    res.send("server is running")
});

export default app;