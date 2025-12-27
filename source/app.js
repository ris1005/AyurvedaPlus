import express from "express";
import cors from "cors";
import symptomRoutes from "./routes/symptom.routes.js";
import { loadEmbeddingModel } from "./services/embeddingService.js";

const app = express();
/* ✅ VERY IMPORTANT: CORS FIRST */
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

/* ✅ Body parser AFTER CORS */
app.use(express.json());
await loadEmbeddingModel();


/* ✅ Handle preflight requests for ALL routes */
const allowedOrigins = [
  "http://localhost:5173",
  "https://ayurveda-plus.vercel.app"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});


/* Health check */
app.get("/", (req, res) => {
  res.send("AyurVedaPlus API running");
});

/* Routes */
app.use("/api/symptoms", symptomRoutes);

export default app;
