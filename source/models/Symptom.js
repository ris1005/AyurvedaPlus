import mongoose from "mongoose";

const symptomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: String,
  relatedDosha: [String],
  embedding: {
    type: [Number], // vector
    required: true
  }
});

export default mongoose.model("Symptom", symptomSchema);
