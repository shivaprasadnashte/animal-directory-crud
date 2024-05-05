import express from "express";
import { createAnimal, deleteAnimal, getAllAnimals, updateAnimal } from "../controllers/animal.controllers.js";

const animelRouter = express.Router();

animelRouter.post("/addanimal", createAnimal);
animelRouter.get("/getallanimals", getAllAnimals);
animelRouter.put("/updateanimal/:id", updateAnimal);
animelRouter.delete("/deleteanimal/:id", deleteAnimal);

export default animelRouter;