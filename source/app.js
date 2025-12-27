import express from "express";
import cors from "cors";
import symptomRoutes from "./routes/symptom.routes.js";
import { loadEmbeddingModel } from "./services/embeddingService.js";

const app = express();
/* ✅ VERY IMPORTANT: CORS FIRST */
const allowedOrigins = [
  "http://localhost:5173",
  "https://ayurveda-plus.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
/* ✅ Body parser AFTER CORS */
app.use(express.json());
await loadEmbeddingModel();





/* Health check */
app.get("/", (req, res) => {
  res.send("AyurVedaPlus API running");
});

/* Routes */
app.use("/api/symptoms", symptomRoutes);

export default app;
