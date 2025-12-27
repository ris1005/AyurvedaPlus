import mongoose from "mongoose";

const dietPlanSchema = new mongoose.Schema({
  condition: String,
  dosha: [String],
  recommendedFoods: [String],
  foodsToAvoid: [String],
  notes: String
});

export default mongoose.model("DietPlan", dietPlanSchema);
