import express from "express";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import postRouter from "./routes/postRoutes.js";

const app = express();
const PORT = 4500;

// Middleware
dotenv.config();
app.use(express.json());

//Endpoints
app.use("/posts", postRouter);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
  connectDb();
});
