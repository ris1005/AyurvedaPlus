import mongoose from "mongoose";

const remedySchema = new mongoose.Schema({
  name: String,
  applicableSymptoms: [String],
  dosha: [String],
  procedure: [String],
  usage: String,
  duration: String,
  precautions: [String]
});

export default mongoose.model("Remedy", remedySchema);
