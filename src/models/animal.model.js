import mongoose from "mongoose";
const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const Animal = mongoose.model('Animal', AnimalSchema);

export default Animal;