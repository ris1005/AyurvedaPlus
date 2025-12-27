import mongoose from "mongoose";
import dotenv from "dotenv";
import DietPlan from "../models/DietPlan.js";
import connectDB from "../config/db.js";

dotenv.config();
await connectDB();

const diets = [

  // =========================
  // General / Constitutional
  // =========================
  { condition: "fever", dosha: ["Pitta"], recommendedFoods: ["Rice gruel", "Vegetable soup", "Coconut water"], foodsToAvoid: ["Spicy food", "Fried food"] },
  { condition: "low grade fever", dosha: ["Pitta"], recommendedFoods: ["Rice water", "Moong dal soup"], foodsToAvoid: ["Oily food"] },
  { condition: "chills", dosha: ["Vata"], recommendedFoods: ["Warm soups", "Ginger tea"], foodsToAvoid: ["Cold food"] },
  { condition: "fatigue", dosha: ["Vata"], recommendedFoods: ["Warm milk", "Dates", "Ghee"], foodsToAvoid: ["Dry snacks"] },
  { condition: "weakness", dosha: ["Vata"], recommendedFoods: ["Rice", "Milk", "Almonds"], foodsToAvoid: ["Skipping meals"] },
  { condition: "body pain", dosha: ["Vata"], recommendedFoods: ["Warm soups", "Ghee", "Milk"], foodsToAvoid: ["Cold food"] },
  { condition: "low energy", dosha: ["Vata"], recommendedFoods: ["Khichdi", "Dates", "Warm milk"], foodsToAvoid: ["Cold drinks"] },
  { condition: "loss of weight", dosha: ["Vata"], recommendedFoods: ["Milk", "Rice", "Dates"], foodsToAvoid: ["Skipping meals"] },
  { condition: "weight gain", dosha: ["Kapha"], recommendedFoods: ["Light soups", "Vegetables"], foodsToAvoid: ["Fried food"] },
  { condition: "excessive sweating", dosha: ["Pitta"], recommendedFoods: ["Coconut water", "Fruits"], foodsToAvoid: ["Spicy food"] },
  { condition: "night sweats", dosha: ["Pitta"], recommendedFoods: ["Cooling foods", "Rice"], foodsToAvoid: ["Spicy food"] },
  { condition: "dehydration", dosha: ["Vata","Pitta"], recommendedFoods: ["Coconut water", "Buttermilk"], foodsToAvoid: ["Alcohol"] },

  // =========================
  // Respiratory / ENT
  // =========================
  { condition: "cold", dosha: ["Kapha"], recommendedFoods: ["Ginger tea", "Vegetable soup"], foodsToAvoid: ["Curd", "Cold drinks"] },
  { condition: "cough", dosha: ["Kapha"], recommendedFoods: ["Tulsi tea", "Honey"], foodsToAvoid: ["Cold food"] },
  { condition: "dry cough", dosha: ["Vata"], recommendedFoods: ["Warm milk", "Ghee"], foodsToAvoid: ["Dry food"] },
  { condition: "sore throat", dosha: ["Kapha"], recommendedFoods: ["Warm soup", "Soft foods"], foodsToAvoid: ["Cold drinks"] },
  { condition: "runny nose", dosha: ["Kapha"], recommendedFoods: ["Ginger tea", "Warm water"], foodsToAvoid: ["Cold food"] },
  { condition: "nasal congestion", dosha: ["Kapha"], recommendedFoods: ["Pepper soup", "Warm water"], foodsToAvoid: ["Dairy"] },
  { condition: "sinus pain", dosha: ["Kapha"], recommendedFoods: ["Vegetable soup", "Ginger tea"], foodsToAvoid: ["Cold drinks"] },
  { condition: "chest congestion", dosha: ["Kapha"], recommendedFoods: ["Tulsi tea", "Light soups"], foodsToAvoid: ["Oily food"] },
  { condition: "shortness of breath", dosha: ["Kapha","Vata"], recommendedFoods: ["Light soups", "Warm water"], foodsToAvoid: ["Heavy meals"] },
  { condition: "wheezing", dosha: ["Kapha"], recommendedFoods: ["Warm soups", "Ginger tea"], foodsToAvoid: ["Cold food"] },
  { condition: "throat irritation", dosha: ["Vata","Pitta"], recommendedFoods: ["Warm water", "Soft foods"], foodsToAvoid: ["Spicy food"] },
  { condition: "hoarseness of voice", dosha: ["Vata"], recommendedFoods: ["Warm milk", "Ghee"], foodsToAvoid: ["Cold drinks"] },
  { condition: "post nasal drip", dosha: ["Kapha"], recommendedFoods: ["Light soups", "Warm water"], foodsToAvoid: ["Dairy"] },

  // =========================
  // Digestive
  // =========================
  { condition: "indigestion", dosha: ["Pitta"], recommendedFoods: ["Rice gruel", "Buttermilk"], foodsToAvoid: ["Spicy food"] },
  { condition: "acidity", dosha: ["Pitta"], recommendedFoods: ["Cucumber", "Buttermilk"], foodsToAvoid: ["Chilli"] },
  { condition: "heartburn", dosha: ["Pitta"], recommendedFoods: ["Cold milk", "Rice"], foodsToAvoid: ["Fried food"] },
  { condition: "bloating", dosha: ["Vata"], recommendedFoods: ["Warm soup", "Ajwain water"], foodsToAvoid: ["Raw food"] },
  { condition: "gas", dosha: ["Vata"], recommendedFoods: ["Hing water", "Cooked vegetables"], foodsToAvoid: ["Beans"] },
  { condition: "constipation", dosha: ["Vata"], recommendedFoods: ["Warm milk", "Ghee"], foodsToAvoid: ["Dry snacks"] },
  { condition: "diarrhea", dosha: ["Pitta"], recommendedFoods: ["Rice water", "Banana"], foodsToAvoid: ["Spicy food"] },
  { condition: "nausea", dosha: ["Kapha"], recommendedFoods: ["Ginger tea"], foodsToAvoid: ["Heavy food"] },
  { condition: "vomiting", dosha: ["Pitta","Kapha"], recommendedFoods: ["Rice water", "Coconut water"], foodsToAvoid: ["Oily food"] },
  { condition: "loss of appetite", dosha: ["Vata"], recommendedFoods: ["Ginger tea", "Light soups"], foodsToAvoid: ["Cold food"] },
  { condition: "stomach pain", dosha: ["Vata","Pitta"], recommendedFoods: ["Warm rice", "Buttermilk"], foodsToAvoid: ["Spicy food"] },
  { condition: "abdominal pain", dosha: ["Vata","Pitta"], recommendedFoods: ["Warm soups", "Rice"], foodsToAvoid: ["Cold food"] },
  { condition: "cramps", dosha: ["Vata"], recommendedFoods: ["Warm water", "Cooked food"], foodsToAvoid: ["Cold food"] },
  { condition: "acid reflux", dosha: ["Pitta"], recommendedFoods: ["Cold milk", "Rice"], foodsToAvoid: ["Spicy food"] },
  { condition: "burping", dosha: ["Vata"], recommendedFoods: ["Ajwain water", "Light food"], foodsToAvoid: ["Carbonated drinks"] },
  { condition: "heavy feeling after meals", dosha: ["Kapha"], recommendedFoods: ["Light soups"], foodsToAvoid: ["Fried food"] },
  { condition: "food intolerance", dosha: ["Pitta","Kapha"], recommendedFoods: ["Simple cooked food"], foodsToAvoid: ["Processed food"] },

  // =========================
  // Neuro / Mental
  // =========================
  { condition: "headache", dosha: ["Vata","Pitta"], recommendedFoods: ["Warm water", "Ghee"], foodsToAvoid: ["Caffeine"] },
  { condition: "migraine", dosha: ["Pitta"], recommendedFoods: ["Rice", "Milk"], foodsToAvoid: ["Spicy food"] },
  { condition: "dizziness", dosha: ["Vata"], recommendedFoods: ["Warm milk", "Dates"], foodsToAvoid: ["Skipping meals"] },
  { condition: "brain fog", dosha: ["Vata"], recommendedFoods: ["Ghee", "Warm food"], foodsToAvoid: ["Cold food"] },
  { condition: "poor concentration", dosha: ["Vata"], recommendedFoods: ["Milk", "Almonds"], foodsToAvoid: ["Junk food"] },
  { condition: "memory issues", dosha: ["Vata"], recommendedFoods: ["Ghee", "Milk"], foodsToAvoid: ["Late meals"] },
  { condition: "eye strain", dosha: ["Pitta"], recommendedFoods: ["Cooling foods"], foodsToAvoid: ["Spicy food"] },
  { condition: "stress", dosha: ["Vata"], recommendedFoods: ["Warm milk", "Rice"], foodsToAvoid: ["Coffee"] },
  { condition: "anxiety", dosha: ["Vata"], recommendedFoods: ["Warm milk", "Almonds"], foodsToAvoid: ["Cold drinks"] },
  { condition: "insomnia", dosha: ["Vata"], recommendedFoods: ["Warm milk", "Nutmeg"], foodsToAvoid: ["Late meals"] },
  { condition: "irritability", dosha: ["Pitta"], recommendedFoods: ["Cooling foods"], foodsToAvoid: ["Spicy food"] },
  { condition: "depression (mild)", dosha: ["Vata","Kapha"], recommendedFoods: ["Warm milk", "Rice"], foodsToAvoid: ["Cold food"] },
  { condition: "restlessness", dosha: ["Vata"], recommendedFoods: ["Warm food"], foodsToAvoid: ["Caffeine"] },
  { condition: "mood swings", dosha: ["Vata","Pitta"], recommendedFoods: ["Balanced meals"], foodsToAvoid: ["Spicy food"] },
  { condition: "mental fatigue", dosha: ["Vata"], recommendedFoods: ["Milk", "Dates"], foodsToAvoid: ["Skipping meals"] },
  // =========================
// Musculoskeletal (missing)
// =========================
{ condition: "joint pain", dosha: ["Vata"], recommendedFoods: ["Warm soups", "Ghee", "Turmeric milk"], foodsToAvoid: ["Cold food", "Processed food"] },
{ condition: "knee pain", dosha: ["Vata"], recommendedFoods: ["Warm milk", "Ghee", "Khichdi"], foodsToAvoid: ["Cold drinks", "Dry food"] },
{ condition: "knee stiffness", dosha: ["Vata"], recommendedFoods: ["Warm milk", "Cooked vegetables", "Ghee"], foodsToAvoid: ["Cold food", "Skipping meals"] },
{ condition: "back pain", dosha: ["Vata"], recommendedFoods: ["Warm soups", "Ghee", "Rice"], foodsToAvoid: ["Cold food", "Heavy meals"] },
{ condition: "neck pain", dosha: ["Vata"], recommendedFoods: ["Warm food", "Ghee", "Milk"], foodsToAvoid: ["Cold drinks", "Dry food"] },

// =========================
// Skin / Hair (missing)
// =========================
{ condition: "dry skin", dosha: ["Vata"], recommendedFoods: ["Ghee", "Milk", "Almonds"], foodsToAvoid: ["Dry food", "Cold drinks"] },
{ condition: "acne", dosha: ["Pitta"], recommendedFoods: ["Cooling foods", "Cucumber", "Buttermilk"], foodsToAvoid: ["Spicy food", "Oily food"] },
{ condition: "itching", dosha: ["Kapha","Pitta"], recommendedFoods: ["Bitter vegetables", "Coconut water"], foodsToAvoid: ["Sugar", "Processed food"] },
{ condition: "skin rashes", dosha: ["Pitta"], recommendedFoods: ["Cooling foods", "Rice water"], foodsToAvoid: ["Spicy food", "Oily food"] },
{ condition: "hair fall", dosha: ["Vata","Pitta"], recommendedFoods: ["Milk", "Almonds", "Ghee"], foodsToAvoid: ["Fast food", "Cold drinks"] },
{ condition: "dandruff", dosha: ["Kapha"], recommendedFoods: ["Light food", "Coconut oil"], foodsToAvoid: ["Oily food", "Cold food"] },


  // =========================
  // Musculoskeletal / Skin / Urinary / Immunity
  // =========================
  { condition: "morning stiffness", dosha: ["Vata","Kapha"], recommendedFoods: ["Warm soups"], foodsToAvoid: ["Cold food"] },
  { condition: "swelling in joints", dosha: ["Kapha"], recommendedFoods: ["Light food"], foodsToAvoid: ["Salty food"] },
  { condition: "muscle cramps", dosha: ["Vata"], recommendedFoods: ["Warm milk"], foodsToAvoid: ["Cold drinks"] },
  { condition: "leg pain", dosha: ["Vata"], recommendedFoods: ["Ghee", "Milk"], foodsToAvoid: ["Dry food"] },
  { condition: "dry lips", dosha: ["Vata"], recommendedFoods: ["Ghee", "Milk"], foodsToAvoid: ["Dry food"] },
  { condition: "pigmentation", dosha: ["Pitta"], recommendedFoods: ["Cooling foods"], foodsToAvoid: ["Spicy food"] },
  { condition: "dark spots", dosha: ["Pitta"], recommendedFoods: ["Cucumber"], foodsToAvoid: ["Fried food"] },
  { condition: "eczema (mild)", dosha: ["Pitta","Kapha"], recommendedFoods: ["Bitter vegetables"], foodsToAvoid: ["Sugar"] },
  { condition: "oily skin", dosha: ["Kapha"], recommendedFoods: ["Light food"], foodsToAvoid: ["Oily food"] },
  { condition: "premature greying", dosha: ["Pitta"], recommendedFoods: ["Milk", "Ghee"], foodsToAvoid: ["Spicy food"] },
  { condition: "dark urine", dosha: ["Pitta"], recommendedFoods: ["Coconut water"], foodsToAvoid: ["Spicy food"] },
  { condition: "reduced urination", dosha: ["Vata"], recommendedFoods: ["Warm fluids"], foodsToAvoid: ["Dehydration"] },
  { condition: "water retention", dosha: ["Kapha"], recommendedFoods: ["Light food"], foodsToAvoid: ["Salty food"] },
  { condition: "slow recovery", dosha: ["Kapha"], recommendedFoods: ["Warm soups"], foodsToAvoid: ["Cold food"] },
  { condition: "seasonal allergies", dosha: ["Kapha"], recommendedFoods: ["Warm food"], foodsToAvoid: ["Cold food"] },
  { condition: "frequent colds", dosha: ["Kapha"], recommendedFoods: ["Ginger tea"], foodsToAvoid: ["Cold drinks"] },
  {
    condition: "period cramps",
    dosha: ["Vata"],
    recommendedFoods: [
      "Warm milk",
      "Rice porridge",
      "Cooked vegetables",
      "Dates and soaked raisins",
      "Ginger tea"
    ],
    foodsToAvoid: [
      "Cold foods",
      "Raw salads",
      "Caffeinated drinks",
      "Spicy food",
      "Junk food"
    ]
  },
  {
    condition: "menstrual pain",
    dosha: ["Vata"],
    recommendedFoods: [
      "Sesame seeds",
      "Warm soups",
      "Steamed rice",
      "Ghee in small quantity",
      "Herbal teas"
    ],
    foodsToAvoid: [
      "Cold water",
      "Ice creams",
      "Fried foods",
      "Carbonated drinks"
    ]
  }
  

];


await DietPlan.deleteMany();
await DietPlan.insertMany(diets);

console.log("✅ Diet plans seeded");
process.exit();
