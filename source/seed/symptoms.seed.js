import mongoose from "mongoose";
import dotenv from "dotenv";
import Symptom from "../models/Symptom.js";
import connectDB from "../config/db.js";
import { loadEmbeddingModel, getEmbedding } from "../services/embeddingService.js";
dotenv.config();
await connectDB();
await loadEmbeddingModel();
const symptoms = [

  // =========================
  // General / Constitutional
  // =========================
  { name: "fever", category: "General", relatedDosha: ["Pitta"] },
  { name: "low grade fever", category: "General", relatedDosha: ["Pitta"] },
  { name: "chills", category: "General", relatedDosha: ["Vata"] },
  { name: "fatigue", category: "General", relatedDosha: ["Vata"] },
  { name: "weakness", category: "General", relatedDosha: ["Vata"] },
  { name: "body pain", category: "Pain", relatedDosha: ["Vata"] },
  { name: "low energy", category: "Immunity", relatedDosha: ["Vata"] },

  // =========================
  // Respiratory / ENT
  // =========================
  { name: "cold", category: "Respiratory", relatedDosha: ["Kapha"] },
  { name: "cough", category: "Respiratory", relatedDosha: ["Kapha"] },
  { name: "dry cough", category: "Respiratory", relatedDosha: ["Vata"] },
  { name: "sore throat", category: "Respiratory", relatedDosha: ["Kapha"] },
  { name: "runny nose", category: "Respiratory", relatedDosha: ["Kapha"] },
  { name: "nasal congestion", category: "Respiratory", relatedDosha: ["Kapha"] },
  { name: "sinus pain", category: "Respiratory", relatedDosha: ["Kapha"] },
  { name: "chest congestion", category: "Respiratory", relatedDosha: ["Kapha"] },

  // =========================
  // Digestive / Gastrointestinal
  // =========================
  { name: "indigestion", category: "Digestive", relatedDosha: ["Pitta"] },
  { name: "acidity", category: "Digestive", relatedDosha: ["Pitta"] },
  { name: "heartburn", category: "Digestive", relatedDosha: ["Pitta"] },
  { name: "bloating", category: "Digestive", relatedDosha: ["Vata"] },
  { name: "gas", category: "Digestive", relatedDosha: ["Vata"] },
  { name: "constipation", category: "Digestive", relatedDosha: ["Vata"] },
  { name: "diarrhea", category: "Digestive", relatedDosha: ["Pitta"] },
  { name: "nausea", category: "Digestive", relatedDosha: ["Kapha"] },
  { name: "vomiting", category: "Digestive", relatedDosha: ["Pitta", "Kapha"] },
  { name: "loss of appetite", category: "Digestive", relatedDosha: ["Vata"] },

  // =========================
  // Neurological / Head
  // =========================
  { name: "headache", category: "Pain", relatedDosha: ["Vata", "Pitta"] },
  { name: "migraine", category: "Pain", relatedDosha: ["Pitta"] },
  { name: "dizziness", category: "Neurological", relatedDosha: ["Vata"] },

  // =========================
  // Mental / Psychological
  // =========================
  { name: "stress", category: "Mental", relatedDosha: ["Vata"] },
  { name: "anxiety", category: "Mental", relatedDosha: ["Vata"] },
  { name: "insomnia", category: "Mental", relatedDosha: ["Vata"] },
  { name: "irritability", category: "Mental", relatedDosha: ["Pitta"] },

  // =========================
  // Musculoskeletal
  // =========================
  { name: "joint pain", category: "Musculoskeletal", relatedDosha: ["Vata"] },
  { name: "knee pain", category: "Musculoskeletal", relatedDosha: ["Vata"] },
  { name: "knee stiffness", category: "Musculoskeletal", relatedDosha: ["Vata"] },
  { name: "back pain", category: "Musculoskeletal", relatedDosha: ["Vata"] },
  { name: "neck pain", category: "Musculoskeletal", relatedDosha: ["Vata"] },
  { name: "muscle pain", category: "Musculoskeletal", relatedDosha: ["Vata"] },

  // =========================
  // Skin / Hair
  // =========================
  { name: "dry skin", category: "Skin", relatedDosha: ["Vata"] },
  { name: "acne", category: "Skin", relatedDosha: ["Pitta"] },
  { name: "itching", category: "Skin", relatedDosha: ["Kapha", "Pitta"] },
  { name: "skin rashes", category: "Skin", relatedDosha: ["Pitta"] },
  { name: "hair fall", category: "Skin", relatedDosha: ["Vata", "Pitta"] },
  { name: "dandruff", category: "Skin", relatedDosha: ["Kapha"] },

  // =========================
  // Urinary
  // =========================
  { name: "burning urination", category: "Urinary", relatedDosha: ["Pitta"] },
  { name: "frequent urination", category: "Urinary", relatedDosha: ["Kapha"] },

  // =========================
  // Immunity / Wellness
  // =========================
  { name: "low immunity", category: "Immunity", relatedDosha: ["Kapha"] },
  { name: "frequent infections", category: "Immunity", relatedDosha: ["Kapha"] },
  // =========================
  // General / Constitutional
  // =========================
  { name: "loss of weight", category: "General", relatedDosha: ["Vata"] },
  { name: "weight gain", category: "General", relatedDosha: ["Kapha"] },
  { name: "excessive sweating", category: "General", relatedDosha: ["Pitta"] },
  { name: "night sweats", category: "General", relatedDosha: ["Pitta"] },
  { name: "dehydration", category: "General", relatedDosha: ["Vata", "Pitta"] },

  // =========================
  // Respiratory / ENT
  // =========================
  { name: "shortness of breath", category: "Respiratory", relatedDosha: ["Kapha", "Vata"] },
  { name: "wheezing", category: "Respiratory", relatedDosha: ["Kapha"] },
  { name: "throat irritation", category: "Respiratory", relatedDosha: ["Vata", "Pitta"] },
  { name: "hoarseness of voice", category: "Respiratory", relatedDosha: ["Vata"] },
  { name: "post nasal drip", category: "Respiratory", relatedDosha: ["Kapha"] },

  // =========================
  // Digestive / Gastrointestinal
  // =========================
  { name: "stomach pain", category: "Digestive", relatedDosha: ["Vata", "Pitta"] },
  { name: "abdominal pain", category: "Digestive", relatedDosha: ["Vata", "Pitta"] },
  { name: "cramps", category: "Digestive", relatedDosha: ["Vata"] },
  { name: "acid reflux", category: "Digestive", relatedDosha: ["Pitta"] },
  { name: "burping", category: "Digestive", relatedDosha: ["Vata"] },
  { name: "heavy feeling after meals", category: "Digestive", relatedDosha: ["Kapha"] },
  { name: "food intolerance", category: "Digestive", relatedDosha: ["Pitta", "Kapha"] },

  // =========================
  // Neurological / Head
  // =========================
  { name: "brain fog", category: "Neurological", relatedDosha: ["Vata"] },
  { name: "poor concentration", category: "Neurological", relatedDosha: ["Vata"] },
  { name: "memory issues", category: "Neurological", relatedDosha: ["Vata"] },
  { name: "eye strain", category: "Neurological", relatedDosha: ["Pitta"] },

  // =========================
  // Mental / Psychological
  // =========================
  { name: "depression (mild)", category: "Mental", relatedDosha: ["Vata", "Kapha"] },
  { name: "restlessness", category: "Mental", relatedDosha: ["Vata"] },
  { name: "mood swings", category: "Mental", relatedDosha: ["Vata", "Pitta"] },
  { name: "mental fatigue", category: "Mental", relatedDosha: ["Vata"] },

  // =========================
  // Musculoskeletal
  // =========================
  { name: "morning stiffness", category: "Musculoskeletal", relatedDosha: ["Vata", "Kapha"] },
  { name: "swelling in joints", category: "Musculoskeletal", relatedDosha: ["Kapha"] },
  { name: "muscle cramps", category: "Musculoskeletal", relatedDosha: ["Vata"] },
  { name: "leg pain", category: "Musculoskeletal", relatedDosha: ["Vata"] },

  // =========================
  // Skin / Hair
  // =========================
  { name: "dry lips", category: "Skin", relatedDosha: ["Vata"] },
  { name: "pigmentation", category: "Skin", relatedDosha: ["Pitta"] },
  { name: "dark spots", category: "Skin", relatedDosha: ["Pitta"] },
  { name: "eczema (mild)", category: "Skin", relatedDosha: ["Pitta", "Kapha"] },
  { name: "oily skin", category: "Skin", relatedDosha: ["Kapha"] },
  { name: "premature greying", category: "Skin", relatedDosha: ["Pitta"] },

  // =========================
  // Urinary / Metabolic
  // =========================
  { name: "dark urine", category: "Urinary", relatedDosha: ["Pitta"] },
  { name: "reduced urination", category: "Urinary", relatedDosha: ["Vata"] },
  { name: "water retention", category: "Urinary", relatedDosha: ["Kapha"] },

  // =========================
  // Immunity / Wellness
  // =========================
  { name: "slow recovery", category: "Immunity", relatedDosha: ["Kapha"] },
  { name: "seasonal allergies", category: "Immunity", relatedDosha: ["Kapha"] },
  { name: "frequent colds", category: "Immunity", relatedDosha: ["Kapha"] },
  { name: "period cramps", category: "Menstrual Health", relatedDosha: ["Vata"] },
{ name: "menstrual pain", category: "Menstrual Health", relatedDosha: ["Vata"] },
{ name: "lower abdominal pain (periods)", category: "Menstrual Health", relatedDosha: ["Vata"] }

];


const symptomsWithEmbeddings = [];

for (const symptom of symptoms) {
  const embedding = await getEmbedding(symptom.name);

  symptomsWithEmbeddings.push({
    ...symptom,
    embedding
  });
}

await Symptom.deleteMany();
await Symptom.insertMany(symptomsWithEmbeddings);

console.log("✅ Symptoms seeded with embeddings");
process.exit();
