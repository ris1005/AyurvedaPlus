import { pipeline } from "@xenova/transformers";

let embedder = null;

export const loadEmbeddingModel = async () => {
  if (!embedder) {
    embedder = await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    );
    console.log("✅ Embedding model loaded");
  }
};

export const getEmbedding = async (text) => {
    if (!embedder) {
      await loadEmbeddingModel();
    }
  
    const output = await embedder(text, {
      pooling: "mean",
      normalize: true,
    });
  
    return Array.from(output.data);
  };
  