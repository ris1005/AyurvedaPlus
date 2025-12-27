import Symptom from "../models/Symptom.js";
import { getEmbedding } from "../services/embeddingService.js";
import cosineSimilarity from "compute-cosine-similarity";
import stringSimilarity from "string-similarity";
import { preprocessInput } from "./preprocess.js";

let cachedSymptoms = null;

const loadSymptoms = async () => {
  if (!cachedSymptoms) {
    cachedSymptoms = await Symptom.find({}, "name embedding");
  }
  return cachedSymptoms;
};

export const matchSymptoms = async (userSymptoms) => {
  const dbSymptoms = await loadSymptoms();
  const matched = new Set();

  for (const rawInput of userSymptoms) {

    // 🔹 Step 1: spelling + cleanup
    const input = preprocessInput(rawInput);

    // 🔹 Step 2: embedding similarity
    const inputEmbedding = await getEmbedding(input);

    let bestEmbedMatch = null;
    let bestEmbedScore = 0;

    for (const symptom of dbSymptoms) {
      const score = cosineSimilarity(
        inputEmbedding,
        symptom.embedding
      );

      if (score > bestEmbedScore) {
        bestEmbedScore = score;
        bestEmbedMatch = symptom.name;
      }
    }

    // 🔹 Step 3: fallback fuzzy matching
    const names = dbSymptoms.map(s => s.name);
    const fuzzy = stringSimilarity.findBestMatch(input, names);

    // ✅ Decision logic (THIS MATTERS)
    if (bestEmbedScore >= 0.65) {
      matched.add(bestEmbedMatch);
    } else if (fuzzy.bestMatch.rating >= 0.6) {
      matched.add(fuzzy.bestMatch.target);
    }
  }

  return [...matched];
};
