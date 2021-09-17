import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
export const todoScheme = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

//Export the model

const todoModel = mongoose.model("todo", todoScheme);

export default todoModel;
