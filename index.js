import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/utills/db.js";
import animelRouter from "./src/routes/animal.routes.js";
 
dotenv.config();
const app = express();
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api",animelRouter );

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
