import express from "express";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import postRouter from "./routes/postRoutes.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4500;

// Middleware
app.use(express.json());

//Endpoints
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
  connectDb();
});
