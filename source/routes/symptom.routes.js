import express from "express";
import { getAyurvedicCare } from "../services/ayurvedaLogic.js";

const router = express.Router();

router.post("/check", async (req, res) => {
  try {
    
    const { symptoms } = req.body;

    if (!symptoms || !Array.isArray(symptoms)) {
      return res.status(400).json({ message: "Symptoms array required" });
    }

    const result = await getAyurvedicCare(symptoms);
    res.json(result);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
