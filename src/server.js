import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import projectRouter from "./routes/projectRoutes.js";
import userRouter from "./routes/userRoutes.js";
import { swaggerDocs } from "./swagger.js";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDB();
app.use("/api/projects", projectRouter);
app.use("/api/users", userRouter);
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
swaggerDocs(app);
