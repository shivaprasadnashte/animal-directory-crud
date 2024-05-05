import express from "express";
import Animal from "../models/animal.model.js";

export async function createAnimal(req, res) {
  try {
    const { name, species, age } = req.body;
    if (!name || !species || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const animal = new Animal({ name, species, age });
    await animal.save();
    res.status(201).json({ message: "Animal created successfully", animal });
  } catch (error) {
    res.status(500).json({ message: "Failed to create animal", error });
  }
}

export async function getAllAnimals (req, res) {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve animals", error });
  }
};

export async function updateAnimal(req, res) {
  try {
    const { id } = req.params;
    const animal = await Animal.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Animal updated successfully", animal });
  } catch (error) {
    res.status(500).json({ message: "Failed to update animal", error });
  }
};

export async function deleteAnimal (req, res) {
  try {
    const { id } = req.params;
    await Animal.findByIdAndDelete(id);
    res.status(200).json({ message: "Animal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete animal", error });
  }
};
