import mongoose from "mongoose";
import dotenv from "dotenv";
import Remedy from "../models/Remedy.js";
import connectDB from "../config/db.js";

dotenv.config();
await connectDB();

const remedies = [

  
  // ==================================================
// FEVER / LOW GRADE FEVER (COMMON)
// ==================================================
{
  name: "Guduchi Kashayam",
  applicableSymptoms: ["fever", "low grade fever"],
  dosha: ["Pitta"],
  procedure: [
    "Take 1 teaspoon of guduchi powder",
    "Add it to 1.5 cups of water",
    "Boil on low flame until the water reduces to 1 cup",
    "Strain the decoction",
    "Allow it to become warm (not hot)",
    "Drink slowly on an empty stomach or between meals"
  ],
  usage: "Once daily",
  duration: "3–5 days",
  precautions: [
    "Avoid if fever is very high or persistent",
    "Do not take on an empty stomach if gastric sensitivity exists"
  ]
},
{
  name: "Coriander Seed Water",
  applicableSymptoms: ["fever", "low grade fever"],
  dosha: ["Pitta"],
  procedure: [
    "Take 1 teaspoon of coriander seeds",
    "Soak them in 1 glass of water overnight",
    "In the morning, gently boil the soaked water for 5 minutes",
    "Strain the liquid",
    "Let it cool to lukewarm",
    "Sip slowly throughout the morning"
  ],
  usage: "Once daily",
  duration: "3–5 days",
  precautions: [
    "Avoid adding sugar or salt",
    "Do not consume ice-cold"
  ]
},
{
  name: "Light Diet & Rest Protocol",
  applicableSymptoms: ["fever", "low grade fever"],
  dosha: ["Pitta"],
  procedure: [
    "Consume light, easily digestible foods like rice gruel, vegetable soup, or khichdi",
    "Take small meals at regular intervals",
    "Drink warm water or herbal water frequently",
    "Avoid physical exertion and screen strain",
    "Ensure adequate sleep and daytime rest if needed"
  ],
  usage: "Throughout day",
  duration: "Until recovery",
  precautions: [
    "Avoid oily, fried, and spicy foods",
    "Avoid exposure to cold air or cold baths"
  ]
},

  // ==================================================
// COLD / COUGH / CONGESTION (COMMON)
// ==================================================
{
  name: "Steam Inhalation with Eucalyptus",
  applicableSymptoms: [
    "cold",
    "cough",
    "runny nose",
    "nasal congestion",
    "sinus pain"
  ],
  dosha: ["Kapha"],
  procedure: [
    "Boil water in a wide vessel",
    "Add 2–3 drops of eucalyptus oil",
    "Cover head with towel and inhale steam for 5–7 minutes",
    "Rest for a few minutes after inhalation"
  ],
  usage: "Once daily",
  duration: "3–5 days",
  precautions: [
    "Avoid for children",
    "Do not inhale very hot steam"
  ]
},
{
  name: "Sitopaladi Churna",
  applicableSymptoms: [
    "cough",
    "dry cough",
    "sore throat",
    "hoarseness of voice"
  ],
  dosha: ["Kapha", "Vata"],
  procedure: [
    "Take ½ teaspoon of Sitopaladi churna",
    "Mix with an equal amount of honey",
    "Lick slowly instead of swallowing quickly",
    "Avoid drinking water immediately after"
  ],
  usage: "Twice daily",
  duration: "5–7 days",
  precautions: [
    "Avoid if diabetic",
    "Do not exceed recommended quantity"
  ]
},
{
  name: "Turmeric Milk",
  applicableSymptoms: ["cold", "cough", "sore throat"],
  dosha: ["Kapha"],
  procedure: [
    "Warm one cup of milk",
    "Add ¼ teaspoon turmeric powder",
    "Mix well and drink warm",
    "Best taken before bedtime"
  ],
  usage: "Once daily",
  duration: "5 days",
  precautions: [
    "Avoid if lactose intolerant",
    "Do not consume cold"
  ]
},

// ==================================================
// ACIDITY / HEARTBURN (COMMON)
// ==================================================
{
  name: "Amla Juice Therapy",
  applicableSymptoms: ["acidity", "heartburn", "acid reflux"],
  dosha: ["Pitta"],
  procedure: [
    "Take 2 teaspoons of fresh amla juice",
    "Dilute with half a cup of water",
    "Drink on an empty stomach in the morning",
    "Rinse mouth with plain water afterward"
  ],
  usage: "Once daily",
  duration: "10 days",
  precautions: [
    "Avoid during cold or cough",
    "Do not consume undiluted"
  ]
},
{
  name: "Buttermilk with Roasted Cumin",
  applicableSymptoms: ["acidity", "indigestion"],
  dosha: ["Pitta"],
  procedure: [
    "Prepare fresh buttermilk using room-temperature curd",
    "Dry roast cumin seeds and crush them",
    "Add a pinch of cumin powder to buttermilk",
    "Drink slowly after meals"
  ],
  usage: "Once daily",
  duration: "As required",
  precautions: [
    "Avoid cold buttermilk",
    "Do not add salt or chilli"
  ]
},
{
  name: "Early Dinner & Avoid Spicy Foods",
  applicableSymptoms: ["acidity", "heartburn"],
  dosha: ["Pitta"],
  procedure: [
    "Finish dinner at least 2–3 hours before bedtime",
    "Prefer light, home-cooked meals",
    "Avoid spicy, oily, and sour foods",
    "Sit upright for some time after eating"
  ],
  usage: "Daily",
  duration: "Ongoing",
  precautions: [
    "Avoid lying down immediately after meals"
  ]
},

  // ==================================================
// INDIGESTION / GAS / BLOATING (COMMON)
// ==================================================
{
  name: "Trikatu Churna",
  applicableSymptoms: ["indigestion","gas","bloating"],
  dosha: ["Kapha","Vata"],
  procedure: [
    "Take ¼ teaspoon of Trikatu churna",
    "Mix with honey or warm water",
    "Consume before meals",
    "Avoid drinking cold water afterward"
  ],
  usage: "Once daily",
  duration: "7 days",
  precautions: [
    "Avoid in acidity",
    "Do not exceed recommended dose"
  ]
},
{
  name: "Warm Water Sips",
  applicableSymptoms: ["indigestion","gas","bloating"],
  dosha: ["Vata","Kapha"],
  procedure: [
    "Boil water and allow it to become warm",
    "Take small sips during or after meals",
    "Continue sipping for 30–45 minutes",
    "Avoid cold water intake"
  ],
  usage: "After meals",
  duration: "Ongoing",
  precautions: [
    "Do not gulp large quantities"
  ]
},
{
  name: "Short Walk After Meals",
  applicableSymptoms: ["indigestion","bloating"],
  dosha: ["Kapha"],
  procedure: [
    "Wait 5 minutes after meals",
    "Walk slowly for 5–10 minutes",
    "Maintain upright posture",
    "Stop if dizziness occurs"
  ],
  usage: "After meals",
  duration: "Daily",
  precautions: [
    "Avoid intense or fast walking"
  ]
},

// ==================================================
// HEADACHE / MIGRAINE (COMMON)
// ==================================================
{
  name: "Shiro Abhyanga",
  applicableSymptoms: ["headache","migraine"],
  dosha: ["Vata","Pitta"],
  procedure: [
    "Warm a small amount of oil (coconut or sesame)",
    "Apply gently on scalp and temples",
    "Massage using circular motions for 5–10 minutes",
    "Rest for 15 minutes after massage"
  ],
  usage: "Once daily",
  duration: "7 days",
  precautions: [
    "Avoid during fever or cold",
    "Do not use very hot oil"
  ]
},
{
  name: "Brahmi Ghrita",
  applicableSymptoms: ["headache","migraine","brain fog"],
  dosha: ["Vata"],
  procedure: [
    "Take prescribed quantity of Brahmi ghrita",
    "Consume with warm milk or water",
    "Best taken at bedtime",
    "Follow consistent timing daily"
  ],
  usage: "Once daily",
  duration: "15 days",
  precautions: [
    "Consult practitioner for dosage",
    "Avoid in high Kapha conditions"
  ]
},
{
  name: "Reduce Screen Time & Hydration",
  applicableSymptoms: ["headache","migraine"],
  dosha: ["Vata","Pitta"],
  procedure: [
    "Limit screen exposure every hour",
    "Follow 20–20–20 eye rule",
    "Drink warm or room-temperature water",
    "Avoid prolonged screen use at night"
  ],
  usage: "Daily",
  duration: "Ongoing",
  precautions: [
    "Avoid dehydration"
  ]
},

// ==================================================
// STRESS / ANXIETY / INSOMNIA (COMMON)
// ==================================================
{
  name: "Nasya with Anu Taila",
  applicableSymptoms: ["stress","anxiety","insomnia","brain fog"],
  dosha: ["Vata"],
  procedure: [
    "Lie down comfortably with head slightly tilted",
    "Instill 2 drops of Anu taila in each nostril",
    "Inhale gently and rest for 5 minutes",
    "Spit out any oil reaching throat"
  ],
  usage: "Morning",
  duration: "7–14 days",
  precautions: [
    "Avoid during cold, cough, or fever",
    "Do not perform after meals"
  ]
},
{
  name: "Brahmi Support",
  applicableSymptoms: ["stress","anxiety","insomnia"],
  dosha: ["Vata"],
  procedure: [
    "Take Brahmi supplement as prescribed",
    "Consume with warm water or milk",
    "Prefer morning or bedtime intake",
    "Maintain regular daily usage"
  ],
  usage: "Once daily",
  duration: "15–30 days",
  precautions: [
    "Consult practitioner",
    "Avoid self-medication"
  ]
},
{
  name: "Fixed Sleep–Wake Routine",
  applicableSymptoms: ["stress","anxiety","insomnia"],
  dosha: ["Vata"],
  procedure: [
    "Go to bed at the same time daily",
    "Wake up at a fixed time every morning",
    "Avoid screens 1 hour before sleep",
    "Create a calm bedtime routine"
  ],
  usage: "Daily",
  duration: "Ongoing",
  precautions: [
    "Avoid late-night meals"
  ]
},

// ==================================================
// KNEE PAIN / JOINT PAIN / BODY PAIN (COMMON)
// ==================================================
{
  name: "Abhyanga with Sesame Oil",
  applicableSymptoms: [
    "knee pain","joint pain","body pain","back pain","neck pain","muscle pain"
  ],
  dosha: ["Vata"],
  procedure: [
    "Warm sesame oil slightly",
    "Apply generously over affected areas",
    "Massage gently in circular motions",
    "Rest or take warm bath after 20 minutes"
  ],
  usage: "Once daily",
  duration: "7–21 days",
  precautions: [
    "Avoid during fever or acute inflammation"
  ]
},
{
  name: "Dashamoola Kashayam",
  applicableSymptoms: ["knee pain","joint pain","body pain","back pain"],
  dosha: ["Vata"],
  procedure: [
    "Prepare decoction as per instructions",
    "Consume while warm",
    "Prefer intake on empty stomach",
    "Follow consistent daily timing"
  ],
  usage: "Once daily",
  duration: "7–14 days",
  precautions: [
    "Consult practitioner if pregnant",
    "Avoid overdose"
  ]
},
{
  name: "Warm Compress Therapy",
  applicableSymptoms: ["knee pain","joint pain","muscle pain"],
  dosha: ["Vata"],
  procedure: [
    "Use a warm water bag or cloth",
    "Apply on affected area for 10–15 minutes",
    "Repeat once or twice daily",
    "Keep area warm afterward"
  ],
  usage: "Twice daily",
  duration: "As needed",
  precautions: [
    "Avoid if swelling or redness present",
    "Do not apply excessive heat"
  ]
},

  // ==================================================
// SKIN (ACNE / ITCHING) – COMMON
// ==================================================
{
  name: "Neem Turmeric Paste",
  applicableSymptoms: ["acne","itching","skin rashes"],
  dosha: ["Pitta","Kapha"],
  procedure: [
    "Take neem powder or crushed fresh neem leaves",
    "Add a pinch of turmeric and mix with rose water",
    "Apply a thin layer on affected area",
    "Wash off with lukewarm water after 15 minutes"
  ],
  usage: "Once daily",
  duration: "7–14 days",
  precautions: ["Avoid open wounds"]
},
{
  name: "Amla Support",
  applicableSymptoms: ["acne","skin rashes","hair fall"],
  dosha: ["Pitta"],
  procedure: [
    "Take fresh amla juice or amla powder",
    "Dilute with water if using juice",
    "Consume on empty stomach in the morning",
    "Follow with warm water"
  ],
  usage: "Once daily",
  duration: "15 days",
  precautions: ["None"]
},
{
  name: "Avoid Oily & Spicy Foods",
  applicableSymptoms: ["acne","itching","skin rashes"],
  dosha: ["Pitta"],
  procedure: [
    "Avoid fried, spicy, and junk foods",
    "Reduce excess sugar and dairy intake",
    "Include cooling foods like fruits and vegetables",
    "Drink adequate water throughout the day"
  ],
  usage: "Daily",
  duration: "Ongoing",
  precautions: ["None"]
},

// ==================================================
// LOW IMMUNITY / FREQUENT COLDS (COMMON)
// ==================================================
{
  name: "Chyawanprash Intake",
  applicableSymptoms: ["low immunity","frequent infections","frequent colds"],
  dosha: ["Kapha"],
  procedure: [
    "Take 1 teaspoon of chyawanprash",
    "Consume in the morning on empty stomach",
    "Follow with warm milk or warm water",
    "Maintain consistency daily"
  ],
  usage: "Daily",
  duration: "30–60 days",
  precautions: ["Avoid excess in diabetes"]
},
{
  name: "Warm Water Habit",
  applicableSymptoms: ["low immunity","frequent colds"],
  dosha: ["Kapha"],
  procedure: [
    "Boil water and let it cool to warm temperature",
    "Sip small amounts throughout the day",
    "Avoid cold or refrigerated water",
    "Continue daily for immunity support"
  ],
  usage: "Throughout day",
  duration: "Ongoing",
  precautions: ["None"]
},
{
  name: "Seasonal Diet Regulation",
  applicableSymptoms: ["low immunity","frequent colds"],
  dosha: ["Kapha"],
  procedure: [
    "Consume fresh, seasonal fruits and vegetables",
    "Avoid cold foods during winter or rainy season",
    "Prefer warm, freshly cooked meals",
    "Adjust diet according to climate changes"
  ],
  usage: "Daily",
  duration: "Ongoing",
  precautions: ["None"]
},
  // =========================
  // GENERAL / CONSTITUTIONAL
  // =========================
  {
    name: "Ashwagandha Support",
    applicableSymptoms: ["fatigue", "weakness", "low energy", "loss of weight"],
    dosha: ["Vata"],
    procedure: [
      "Take Ashwagandha powder or capsule",
      "Consume with warm milk after dinner"
    ],
    usage: "Once daily",
    duration: "15–30 days",
    precautions: [
      "Avoid during pregnancy",
      "Consult doctor if thyroid issues"
    ]
  },
  {
    name: "Warm Milk with Dates",
    applicableSymptoms: ["weakness", "loss of weight", "low energy"],
    dosha: ["Vata"],
    procedure: [
      "Boil milk",
      "Add 2 crushed dates",
      "Drink warm before sleep"
    ],
    usage: "Night",
    duration: "Ongoing",
    precautions: [
      "Avoid if diabetic",
      "Avoid if lactose intolerant"
    ]
  },
  {
    name: "Regular Oil Massage",
    applicableSymptoms: ["fatigue", "low energy", "chills"],
    dosha: ["Vata"],
    procedure: [
      "Warm sesame oil",
      "Massage entire body gently",
      "Rest for 15 minutes before bath"
    ],
    usage: "Daily",
    duration: "7–14 days",
    precautions: [
      "Avoid during fever",
      "Avoid during indigestion"
    ]
  },

  {
    name: "Triphala Support",
    applicableSymptoms: ["weight gain", "water retention"],
    dosha: ["Kapha"],
    procedure: [
      "Take Triphala powder with warm water at bedtime"
    ],
    usage: "Night",
    duration: "15 days",
    precautions: [
      "Avoid during diarrhea",
      "Consult if pregnant"
    ]
  },
  {
    name: "Light Dinner Protocol",
    applicableSymptoms: ["weight gain", "heavy feeling after meals"],
    dosha: ["Kapha"],
    procedure: [
      "Eat light, warm dinner",
      "Finish dinner before 7:30 PM"
    ],
    usage: "Daily",
    duration: "Ongoing",
    precautions: [
      "Avoid fried foods at night"
    ]
  },
  {
    name: "Morning Warm Water",
    applicableSymptoms: ["weight gain", "water retention"],
    dosha: ["Kapha"],
    procedure: [
      "Drink warm water immediately after waking up"
    ],
    usage: "Morning",
    duration: "Ongoing",
    precautions: [
      "Avoid very hot water"
    ]
  },

  {
    name: "Coriander Fennel Water",
    applicableSymptoms: ["excessive sweating", "night sweats", "dehydration"],
    dosha: ["Pitta"],
    procedure: [
      "Soak coriander and fennel seeds overnight",
      "Drink water next morning"
    ],
    usage: "Once daily",
    duration: "7 days",
    precautions: [
      "Avoid if feeling cold or chills"
    ]
  },
  {
    name: "Cooling Diet Regulation",
    applicableSymptoms: ["excessive sweating", "night sweats"],
    dosha: ["Pitta"],
    procedure: [
      "Include cooling foods like cucumber, coconut water",
      "Avoid spicy and oily foods"
    ],
    usage: "Daily",
    duration: "Ongoing",
    precautions: [
      "Do not overcool diet in cold weather"
    ]
  },
  {
    name: "Adequate Hydration",
    applicableSymptoms: ["dehydration", "dark urine"],
    dosha: ["Vata", "Pitta"],
    procedure: [
      "Sip water at regular intervals throughout the day"
    ],
    usage: "Throughout day",
    duration: "Ongoing",
    precautions: [
      "Avoid excessive water at once"
    ]
  },

  // =========================
  // RESPIRATORY / ENT
  // =========================
  {
    name: "Steam Inhalation",
    applicableSymptoms: [
      "shortness of breath",
      "wheezing",
      "post nasal drip",
      "chest congestion"
    ],
    dosha: ["Kapha"],
    procedure: [
      "Boil water",
      "Inhale steam for 5–7 minutes"
    ],
    usage: "Once daily",
    duration: "5 days",
    precautions: [
      "Avoid in asthma attack",
      "Avoid for children"
    ]
  },
  {
    name: "Sitopaladi Support",
    applicableSymptoms: [
      "throat irritation",
      "hoarseness of voice",
      "post nasal drip"
    ],
    dosha: ["Vata", "Kapha"],
    procedure: [
      "Mix Sitopaladi churna with honey",
      "Lick slowly"
    ],
    usage: "Twice daily",
    duration: "7 days",
    precautions: [
      "Avoid honey in diabetes"
    ]
  },
  {
    name: "Avoid Cold Exposure",
    applicableSymptoms: [
      "shortness of breath",
      "wheezing",
      "hoarseness of voice"
    ],
    dosha: ["Vata", "Kapha"],
    procedure: [
      "Avoid cold drinks",
      "Avoid cold air exposure"
    ],
    usage: "Daily",
    duration: "Ongoing",
    precautions: [
      "Maintain adequate warmth"
    ]
  },
  // =========================
  // DIGESTIVE
  // =========================
  {
    name: "Ajwain Water",
    applicableSymptoms: [
      "stomach pain",
      "abdominal pain",
      "cramps",
      "burping"
    ],
    dosha: ["Vata"],
    procedure: [
      "Boil ajwain seeds in water",
      "Drink warm after meals"
    ],
    usage: "After meals",
    duration: "5 days",
    precautions: [
      "Avoid in severe acidity"
    ]
  },
  {
    name: "Buttermilk with Ginger",
    applicableSymptoms: [
      "food intolerance",
      "heavy feeling after meals",
      "bloating"
    ],
    dosha: ["Kapha", "Pitta"],
    procedure: [
      "Add grated ginger to fresh buttermilk",
      "Consume during lunch"
    ],
    usage: "Lunch time",
    duration: "7 days",
    precautions: [
      "Avoid during diarrhea"
    ]
  },
  {
    name: "Early Light Dinner",
    applicableSymptoms: [
      "acid reflux",
      "stomach pain",
      "heavy feeling after meals"
    ],
    dosha: ["Pitta", "Kapha"],
    procedure: [
      "Have light warm dinner",
      "Avoid lying down immediately"
    ],
    usage: "Daily",
    duration: "Ongoing",
    precautions: [
      "Avoid spicy foods at night"
    ]
  },

  // =========================
// MENTAL / PSYCHOLOGICAL
// =========================
{
  name: "Ashwagandha Calm Protocol",
  applicableSymptoms: [
    "depression (mild)",
    "restlessness",
    "mental fatigue"
  ],
  dosha: ["Vata", "Kapha"],
  procedure: [
    "Take Ashwagandha powder or tablet after dinner with warm milk or water",
    "Practice deep breathing for 5 minutes before sleep"
  ],
  usage: "Night",
  duration: "30 days",
  precautions: [
    "Avoid during pregnancy",
    "Do not combine with alcohol or sedatives",
    "Consult doctor if on psychiatric medication"
  ]
},
{
  name: "Daily Walking & Sunlight",
  applicableSymptoms: [
    "depression (mild)",
    "mood swings"
  ],
  dosha: ["Kapha", "Vata"],
  procedure: [
    "Walk outdoors for 20–30 minutes",
    "Expose body to morning sunlight (before 9 AM)"
  ],
  usage: "Morning",
  duration: "Ongoing",
  precautions: [
    "Avoid harsh midday sun",
    "Start slowly if physically inactive"
  ]
},
{
  name: "Fixed Sleep Routine",
  applicableSymptoms: [
    "restlessness",
    "mood swings",
    "mental fatigue"
  ],
  dosha: ["Vata"],
  procedure: [
    "Sleep and wake up at the same time daily",
    "Avoid screens at least 1 hour before bed"
  ],
  usage: "Daily",
  duration: "Ongoing",
  precautions: [
    "Avoid caffeine after evening",
    "Do not oversleep during daytime"
  ]
},

// =========================
// MUSCULOSKELETAL
// =========================
{
  name: "Warm Oil Massage",
  applicableSymptoms: [
    "morning stiffness",
    "muscle cramps",
    "leg pain",
    "joint pain"
  ],
  dosha: ["Vata"],
  procedure: [
    "Warm sesame or coconut oil slightly",
    "Massage affected areas gently for 10–15 minutes",
    "Take warm bath after massage"
  ],
  usage: "Once daily",
  duration: "14 days",
  precautions: [
    "Avoid massage during fever or infection",
    "Do not apply on open wounds"
  ]
},
{
  name: "Dashamoola Support",
  applicableSymptoms: [
    "swelling in joints",
    "morning stiffness",
    "knee stiffness"
  ],
  dosha: ["Kapha", "Vata"],
  procedure: [
    "Consume Dashamoola decoction as advised",
    "Follow with light stretching exercises"
  ],
  usage: "Once daily",
  duration: "10 days",
  precautions: [
    "Avoid in pregnancy",
    "Consult practitioner if swelling is severe"
  ]
},
{
  name: "Warm Compress",
  applicableSymptoms: [
    "muscle cramps",
    "leg pain",
    "knee pain"
  ],
  dosha: ["Vata"],
  procedure: [
    "Apply warm water bag or cloth to painful area",
    "Keep for 10–15 minutes"
  ],
  usage: "As needed",
  duration: "Ongoing",
  precautions: [
    "Avoid excessive heat",
    "Do not apply on numb areas"
  ]
},

// =========================
// SKIN / HAIR
// =========================
{
  name: "Coconut Oil Application",
  applicableSymptoms: [
    "dry lips",
    "dry skin",
    "eczema (mild)"
  ],
  dosha: ["Vata", "Pitta"],
  procedure: [
    "Apply thin layer of coconut oil to affected area",
    "Leave overnight or at least 30 minutes"
  ],
  usage: "Once daily",
  duration: "Ongoing",
  precautions: [
    "Avoid if skin is oozing or infected",
    "Discontinue if irritation occurs"
  ]
},
{
  name: "Neem Support",
  applicableSymptoms: [
    "pigmentation",
    "dark spots",
    "eczema (mild)"
  ],
  dosha: ["Pitta", "Kapha"],
  procedure: [
    "Apply neem-based paste or oil to affected skin",
    "Wash off after 15–20 minutes"
  ],
  usage: "Once daily",
  duration: "15 days",
  precautions: [
    "Avoid prolonged application",
    "Not suitable for very dry or sensitive skin"
  ]
},
{
  name: "Avoid Chemical Cosmetics",
  applicableSymptoms: [
    "oily skin",
    "pigmentation",
    "premature greying"
  ],
  dosha: ["Kapha", "Pitta"],
  procedure: [
    "Stop use of chemical-based cosmetics",
    "Use herbal or mild natural alternatives"
  ],
  usage: "Daily",
  duration: "Ongoing",
  precautions: [
    "Patch test new products",
    "Avoid frequent product switching"
  ]
},

// =========================
// URINARY / METABOLIC
// =========================
{
  name: "Coriander Water",
  applicableSymptoms: [
    "burning urination",
    "dark urine"
  ],
  dosha: ["Pitta"],
  procedure: [
    "Soak coriander seeds overnight",
    "Drink strained water in the morning"
  ],
  usage: "Once daily",
  duration: "7 days",
  precautions: [
    "Do not overconsume",
    "Seek medical care if pain persists"
  ]
},
{
  name: "Adequate Water Intake",
  applicableSymptoms: [
    "reduced urination",
    "burning urination"
  ],
  dosha: ["Vata", "Pitta"],
  procedure: [
    "Sip water throughout the day",
    "Prefer room temperature water"
  ],
  usage: "Throughout day",
  duration: "Ongoing",
  precautions: [
    "Avoid excess water at night",
    "Do not force intake beyond thirst"
  ]
},
{
  name: "Low Salt Diet",
  applicableSymptoms: [
    "water retention",
    "frequent urination"
  ],
  dosha: ["Kapha"],
  procedure: [
    "Reduce processed and salty foods",
    "Prefer home-cooked meals"
  ],
  usage: "Daily",
  duration: "Ongoing",
  precautions: [
    "Do not eliminate salt completely",
    "Balance diet adequately"
  ]
},

// =========================
// IMMUNITY / WELLNESS
// =========================
{
  name: "Chyawanprash Intake",
  applicableSymptoms: [
    "slow recovery",
    "frequent infections",
    "seasonal allergies"
  ],
  dosha: ["Kapha"],
  procedure: [
    "Consume 1 teaspoon daily with warm milk or water"
  ],
  usage: "Daily",
  duration: "30 days",
  precautions: [
    "Avoid in uncontrolled diabetes",
    "Do not take during acute fever"
  ]
},
{
  name: "Warm Water Habit",
  applicableSymptoms: [
    "frequent colds",
    "seasonal allergies"
  ],
  dosha: ["Kapha"],
  procedure: [
    "Drink warm water instead of cold beverages"
  ],
  usage: "Daily",
  duration: "Ongoing",
  precautions: [
    "Avoid extremely hot water",
    "Do not gulp large quantities at once"
  ]
},
{
  name: "Seasonal Diet Adjustment",
  applicableSymptoms: [
    "slow recovery",
    "low immunity",
    "frequent infections"
  ],
  dosha: ["Kapha"],
  procedure: [
    "Eat seasonal fruits and vegetables",
    "Avoid incompatible food combinations"
  ],
  usage: "Daily",
  duration: "Ongoing",
  precautions: [
    "Avoid sudden drastic diet changes",
    "Maintain balanced nutrition"
  ]
},

  // =========================
  // VATA – PAIN / NERVES / DRYNESS
  // =========================
  {
    name: "Abhyanga with Sesame Oil",
    applicableSymptoms: [
      "knee pain","joint pain","body pain","back pain","neck pain",
      "muscle pain","muscle cramps","leg pain","morning stiffness",
      "fatigue","weakness","low energy","dry skin","dry lips",
      "insomnia","anxiety","stress","brain fog","mental fatigue",
      "loss of weight","dehydration","reduced urination"
    ],
    dosha: ["Vata"],
    procedure: [
      "Warm sesame oil",
      "Massage gently",
      "Rest 15–20 minutes",
      "Warm bath"
    ],
    usage: "Once daily",
    duration: "7–21 days",
    precautions: ["Avoid during fever or indigestion"]
  },

  {
    name: "Dashamoola Kashayam",
    applicableSymptoms: [
      "joint pain","knee pain","back pain","neck pain","muscle pain",
      "leg pain","body pain","fatigue","weakness","dizziness",
      "headache","migraine","loss of weight"
    ],
    dosha: ["Vata"],
    procedure: [
      "Boil Dashamoola powder",
      "Reduce and strain",
      "Drink warm"
    ],
    usage: "Once daily before food",
    duration: "7–14 days",
    precautions: ["Consult if pregnant"]
  },

  {
    name: "Warm Compress Therapy",
    applicableSymptoms: [
      "knee pain","joint pain","joint stiffness","muscle cramps",
      "leg pain","back pain","neck pain","body pain","morning stiffness"
    ],
    dosha: ["Vata"],
    procedure: [
      "Apply warm pack 10–15 mins"
    ],
    usage: "Twice daily",
    duration: "As needed",
    precautions: ["Avoid if swelling/redness"]
  },

  // =========================
  // PITTA – HEAT / DIGESTIVE / SKIN
  // =========================
  {
    name: "Amla Juice Therapy",
    applicableSymptoms: [
      "acidity","heartburn","acid reflux","excessive sweating",
      "night sweats","skin rashes","acne","pigmentation","dark spots",
      "hair fall","burning urination","dark urine","irritability"
    ],
    dosha: ["Pitta"],
    procedure: [
      "Dilute fresh amla juice",
      "Drink empty stomach"
    ],
    usage: "Morning",
    duration: "10–20 days",
    precautions: ["Avoid during cold"]
  },

  {
    name: "Shatavari Powder",
    applicableSymptoms: [
      "acidity","heartburn","acid reflux","dehydration",
      "low energy","mental fatigue","irritability","burning urination"
    ],
    dosha: ["Pitta"],
    procedure: [
      "Mix with warm milk",
      "Consume at night"
    ],
    usage: "Once daily",
    duration: "15–30 days",
    precautions: ["Consult if diabetic"]
  },

  {
    name: "Coriander Fennel Water",
    applicableSymptoms: [
      "acidity","indigestion","nausea","vomiting","diarrhea",
      "burning urination","dark urine","excessive sweating"
    ],
    dosha: ["Pitta"],
    procedure: [
      "Soak coriander & fennel overnight",
      "Drink next morning"
    ],
    usage: "Once daily",
    duration: "7–14 days",
    precautions: ["None"]
  },

  // =========================
  // KAPHA – RESPIRATORY / HEAVINESS / IMMUNITY
  // =========================
  {
    name: "Tulsi Ginger Kashayam",
    applicableSymptoms: [
      "cold","cough","dry cough","sore throat","runny nose",
      "nasal congestion","chest congestion","sinus pain",
      "frequent colds","seasonal allergies","low immunity"
    ],
    dosha: ["Kapha"],
    procedure: [
      "Boil tulsi + ginger",
      "Drink warm"
    ],
    usage: "Twice daily",
    duration: "3–7 days",
    precautions: ["Avoid excess in acidity"]
  },

  {
    name: "Steam Inhalation",
    applicableSymptoms: [
      "cold","cough","nasal congestion","sinus pain",
      "post nasal drip","wheezing","shortness of breath"
    ],
    dosha: ["Kapha"],
    procedure: [
      "Inhale steam carefully"
    ],
    usage: "Once daily",
    duration: "3–5 days",
    precautions: ["Avoid for children"]
  },

  {
    name: "Trikatu Churna",
    applicableSymptoms: [
      "bloating","gas","indigestion","loss of appetite",
      "heavy feeling after meals","weight gain","low immunity"
    ],
    dosha: ["Kapha"],
    procedure: [
      "Take with honey"
    ],
    usage: "Once daily",
    duration: "7–14 days",
    precautions: ["Avoid in acidity"]
  },

  // =========================
  // MENTAL / NEURO SUPPORT
  // =========================
  {
    name: "Brahmi Ghrita",
    applicableSymptoms: [
      "stress","anxiety","insomnia","memory issues",
      "poor concentration","brain fog","mental fatigue","depression (mild)"
    ],
    dosha: ["Vata"],
    procedure: [
      "Consume at bedtime"
    ],
    usage: "Once daily",
    duration: "15–30 days",
    precautions: ["Consult practitioner"]
  },

  {
    name: "Nasya with Anu Taila",
    applicableSymptoms: [
      "headache","migraine","stress","anxiety",
      "sinus pain","nasal congestion","brain fog"
    ],
    dosha: ["Vata","Kapha"],
    procedure: [
      "2 drops per nostril"
    ],
    usage: "Morning",
    duration: "7–14 days",
    precautions: ["Avoid during fever"]
  },

  // =========================
  // SKIN / HAIR
  // =========================
  {
    name: "Neem Turmeric Paste",
    applicableSymptoms: [
      "acne","itching","skin rashes","eczema (mild)",
      "dandruff","oily skin"
    ],
    dosha: ["Pitta","Kapha"],
    procedure: [
      "Apply paste 15 mins"
    ],
    usage: "Once daily",
    duration: "7–14 days",
    precautions: ["Avoid open wounds"]
  },

  // =========================
  // IMMUNITY / RASAYANA
  // =========================
  {
    name: "Chyawanprash Intake",
    applicableSymptoms: [
      "low immunity","frequent infections","frequent colds",
      "slow recovery","fatigue","low energy","seasonal allergies"
    ],
    dosha: ["Kapha"],
    procedure: [
      "1 tsp daily"
    ],
    usage: "Daily",
    duration: "30–60 days",
    precautions: ["Avoid excess in diabetes"]
  },
  // ==================================================
// PERIOD CRAMPS / MENSTRUAL PAIN (COMMON)
// ==================================================
{
  name: "Warm Castor Oil Pack",
  applicableSymptoms: ["period cramps","menstrual pain","lower abdominal pain"],
  dosha: ["Vata"],
  procedure: [
    "Warm castor oil slightly",
    "Apply gently on lower abdomen",
    "Cover with a warm cloth or hot water bag",
    "Rest for 20–30 minutes"
  ],
  usage: "Once daily",
  duration: "First 2–3 days of cycle",
  precautions: ["Avoid during heavy bleeding"]
},
{
  name: "Jeera Ajwain Water",
  applicableSymptoms: ["period cramps","bloating","lower abdominal pain","menstrual pain"],
  dosha: ["Vata"],
  procedure: [
    "Boil 1 tsp cumin and 1 tsp ajwain in water",
    "Strain and allow it to cool slightly",
    "Drink warm on empty stomach",
    "Repeat if required"
  ],
  usage: "Once daily",
  duration: "2–3 days",
  precautions: ["Avoid in acidity"]
},
{
  name: "Gentle Stretching & Rest",
  applicableSymptoms: ["period cramps","back pain","fatigue","menstrual pain"],
  dosha: ["Vata"],
  procedure: [
    "Practice gentle stretching or yoga",
    "Avoid strenuous exercise",
    "Keep lower body warm",
    "Ensure adequate rest and sleep"
  ],
  usage: "Daily",
  duration: "During menstrual days",
  precautions: ["Stop if pain increases"]
}

];


await Remedy.deleteMany();
await Remedy.insertMany(remedies);
console.log("✅ Remedies seeded");

process.exit();
