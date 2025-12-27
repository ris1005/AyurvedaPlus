import Symptom from "../models/Symptom.js";
import Remedy from "../models/Remedy.js";
import DietPlan from "../models/DietPlan.js";
import { matchSymptoms } from "../utils/matchSymptoms.js";

export const getAyurvedicCare = async (userInput) => {

  if (!userInput || userInput.length === 0) {
    return { message: "Please enter at least one symptom" };
  }

  const normalizedInput = userInput.map(s => s.trim());

  // 1️⃣ Embedding-based matching (FIXED)
  const matchedSymptoms = await matchSymptoms(normalizedInput);

  if (matchedSymptoms.length === 0) {
    return {
      message: "No matching Ayurvedic symptoms found"
    };
  }

  // 2️⃣ Fetch symptom documents
  const symptomDocs = await Symptom.find({
    name: { $in: matchedSymptoms }
  });

  // 3️⃣ Determine dosha imbalance
  const doshaImbalance = [
    ...new Set(symptomDocs.flatMap(s => s.relatedDosha))
  ];

  // 4️⃣ Fetch remedies
  const remedies = await Remedy.find({
    applicableSymptoms: { $in: matchedSymptoms },
    dosha: { $in: doshaImbalance }
  });

  // 5️⃣ Group max 3 remedies per symptom
  const remediesBySymptom = {};
  for (const symptom of matchedSymptoms) {
    remediesBySymptom[symptom] = remedies
      .filter(r => r.applicableSymptoms.includes(symptom))
      .slice(0, 3);
  }

  // 6️⃣ Fetch diet plans
  const dietPlans = await DietPlan.find({
    condition: { $in: matchedSymptoms },
    dosha: { $in: doshaImbalance }
  });

  return {
    inputSymptoms: normalizedInput,
    matchedSymptoms,
    doshaImbalance,
    remedies: remediesBySymptom,
    dietPlans,
    disclaimer:
      "Educational Ayurvedic guidance only. Not a medical prescription."
  };
};
