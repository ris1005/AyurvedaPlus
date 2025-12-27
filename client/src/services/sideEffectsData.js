export const sideEffectsData = {
  pain: {
    title: "Pain & Inflammation",
    system: "Musculoskeletal & Nervous System",
    dosha: "Vata (Air) & Pitta (Fire)",
    actionType: "Vedana Sthapana (Pain Relieving)",
    timeline: "Acute: 1-14 Days Post-Op",
    summary: "Surgical trauma causes immediate Vata aggravation. Managing this requires 'grounding' treatments and 'cooling' anti-inflammatories for site-specific healing.",
    
    protocolSteps: [
      {
        title: "Localized Snehana",
        desc: "Apply warm Mahanarayan oil around (not on) the surgical site to calm nerve endings.",
        stepImages: [
          "/images/pain1.jpg", // Warm Oil
          "/images/pain2.webp" // Application
        ]
      },
      {
        title: "Swedana (Heat Therapy)",
        desc: "Use a dry warm compress or Dashmoola steam to improve circulation and flush inflammatory markers.",
        stepImages: [
          "/images/pain4.jpg", // Compress
          "/images/pain3.jpg" // Steam context
        ]
      }
    ],
    sections: [
      {
        heading: "Ayurvedic Understanding",
        content: `Pain is viewed as a blockage in the flow of Prana caused by 'Sanga' (obstruction) in the channels. Surgery creates 'Vranas' (wounds) that naturally attract Vata's cold and dry qualities.

The surgical incision acts as a traumatic disruption to the 'Marma' points (vital energy centers), causing an immediate surge in Vyana Vata. This sub-dosha, responsible for circulation and sensory transmission, becomes hyper-active, leading to the sensation of acute pain. Concurrently, the body initiates an inflammatory response, which Ayurveda identifies as a Pitta-driven 'Vidaha' (burning) process designed to flush the area but often resulting in localized swelling and heat.

Long-term pain management focuses on pacifying the nervous system through 'Nadi Shodhana' (channel purification). By applying heavy, warm, and oily qualities, we counteract the light and mobile nature of the post-surgical Vata, effectively 'grounding' the electrical signals of pain before they become chronic neurological patterns.`
      }
    ],
    video: "https://www.youtube.com/embed/SFIUmpjAt_k?si=R5RxaBNDHZJucFHT"
  },

  digestion: {
    title: "Digestive Agni Recovery",
    system: "Gastrointestinal (Annavaha Srotas)",
    dosha: "Agni (Digestive Fire) Depletion",
    actionType: "Deepana-Pachana (Kindling & Digesting)",
    timeline: "Immediate: 1-7 Days Post-Op",
    summary: "Anesthesia effectively 'freezes' the digestive fire. Recovery depends on rekindling Agni without creating excess acidity.",
    
    protocolSteps: [
      {
        title: "Agni Kindling",
        desc: "Chew a small slice of fresh ginger with a pinch of rock salt 15 mins before meals.",
        stepImages: [
          "/images/dig1.jpg", // Ginger
          "/images/dig2.webp" // Rock Salt
        ]
      },
      {
        title: "Liquid Nourishment",
        desc: "Consume 'Manda' (thin rice water) or 'Yagu' (rice gruel) to provide energy without taxing the stomach.",
        stepImages: [
          "/images/dig3.webp", // Rice Water
          "/images/dig4.webp" // Healthy Bowl
        ]
      }
    ],
    sections: [
      {
        heading: "Ayurvedic Understanding",
        content: `In the Ayurvedic tradition, Agni is the cornerstone of all healing. When a patient undergoes general anesthesia, the cold and heavy qualities of the medication induce a state of 'Agnimandya'—a severe dampening of the metabolic fire. Without this fire, the body cannot convert nutrients into the 'Ojas' required for tissue repair.

This metabolic stasis leads to the formation of 'Ama', a sticky, toxic byproduct of undigested food and medicine. Ama acts as a physical barrier in the 'Srotas' (micro-channels), preventing oxygen and healing cells from reaching the surgical site. Patients often experience this as bloating, coated tongue, and profound lethargy.

Recovery must follow the 'Samsarjana Krama' (gradual dietetic transition). We start by introducing only the 'Prana' of food through thin broths, slowly re-awakening the enzymatic secretions. This ensures the body is not overwhelmed by heavy proteins during a window where its primary energy is focused on wound closure rather than digestion.`
      }
    ],
    video: "https://www.youtube.com/embed/LkVi4pSFVKY?si=tZy8VsdRdusiHv1k"
  },

  anxiety: {
    title: "Post-Op Mental Health",
    system: "Nervous System (Majja Vaha Srotas)",
    dosha: "Vata & Tarpaka Kapha",
    actionType: "Medhya (Nootropic/Calming)",
    timeline: "Ongoing recovery phase",
    summary: "The shock of surgery impacts the 'Manovaha Srotas' (channels of the mind). Grounding the air element is key to restoring sleep and peace.",
    
    protocolSteps: [
      {
        title: "Pranayama (Breathwork)",
        desc: "Perform 5 minutes of Nadi Shodhana (Alternate Nostril Breathing) to balance the hemispheres of the brain.",
        stepImages: [
          "/images/ex1.jpg", // Meditation
          "/images/anx2.jpg" // Peace
        ]
      },
      {
        title: "Shiro-Abhyanga",
        desc: "Gently massage the scalp with Brahmi oil before sleep to encourage deep REM cycle recovery.",
        stepImages: [
          "/images/anx3.webp", // Oil Pouring
          "/images/anx4.webp" // Brahmi
        ]
      }
    ],
    sections: [
      {
        heading: "Ayurvedic Understanding",
        content: `The mind and body are connected through the 'Manovaha Srotas'. Surgery is categorized as a high-Vata event because it involves 'Bheda' (cutting) and 'Vichyuta' (dislocation of normal state), both of which scatter the mental faculties. This manifests as 'Chittodvega' (anxiety) and a lack of 'Dhirata' (mental steadiness).

When Prana Vayu (the upward moving breath) becomes erratic due to post-operative pain and clinical environments, it dries out the 'Tarpaka Kapha'—the protective fluid surrounding the brain and nerves. This lack of lubrication makes the nervous system hyper-sensitive to light, sound, and stress, leading to insomnia or panic.

Clinical management focuses on 'Medhya Rasayanas'—herbs that specifically nourish the brain tissue. By stabilizing the physical 'Majja Dhatu' (nerve tissue), we provide a solid foundation for the mind to settle. Grounding practices like oiling the ears and feet help pull the scattered Vata energy downward, restoring the natural rhythm of the biological clock.`
      }
    ],
    video: "https://www.youtube.com/embed/dmL4-MpBCfI?si=hJTnRQiRPl2L6GWI"
  },

  wound: {
    title: "Vrana Ropaṇa (Wound Healing)",
    system: "Integumentary (Skin) System",
    dosha: "Pitta (Heat) & Kapha (Structure)",
    actionType: "Vrana-Shodhana (Purification) & Ropaṇa (Healing)",
    timeline: "Surgical Site Closure: Days 1–21",
    summary: "Successful wound closure requires maintaining a balance between 'cleansing' (removing dead tissue) and 'nourishment' (building new collagen/dhatu).",
    
    protocolSteps: [
      {
        title: "Aseptic Cleansing",
        desc: "Wash the surrounding area with a lukewarm Neem (Azadirachta indica) decoction to prevent microbial growth.",
        stepImages: [
          "/images/wou1.webp", // Herbal context
          "/images/wou2.jpg" // Clean water
        ]
      },
      {
        title: "Topical Application",
        desc: "Apply Jatyadi Taila or a thin layer of organic Turmeric/Ghee paste once the wound is closed/dry.",
        stepImages: [
          "/images/wou3.webp", // Turmeric
          "/images/wou4.jpg" // Ghee/Oil
        ]
      }
    ],
    sections: [
      {
        heading: "Ayurvedic Understanding",
        content: `Wound healing is described in Ayurveda through the 'Sashthi Upakrama' (sixty procedures for wound management). Surgical wounds are 'Sadhya Vrana' (fresh wounds) that require immediate protection of the 'Mamsa Dhatu' (muscle tissue). If Pitta is too high, the wound becomes 'Paka' (suppurated/infected); if Kapha is too high, it becomes 'Sloughy' and slow to close.

The healing process occurs in three distinct stages: 'Shodhana' (cleaning), 'Ropana' (healing), and 'Vaikritapaha' (scar reduction). In the first 72 hours, the focus is entirely on Shodhana—ensuring no 'Ama' or debris prevents the edges from knitting. Ayurveda utilizes astringent (Kashaya) herbs to 'Sthambhana' (stop bleeding) and initiate the first layer of skin formation.



The quality of the final scar is determined by 'Rakta Prasadana' (blood purification). By ensuring the blood is nutrient-rich and free of heat, the body can deposit healthy collagen fibers. This prevents the formation of keloids or weak, thin skin that is prone to re-opening, ensuring the 'Sandhana' (union) of the tissues is permanent and strong.`
      }
    ],
    video: "https://www.youtube.com/embed/3C2vFzSSJzA"
  },

  weakness: {
    title: "Bala & Ojas Recovery",
    system: "Total Body Energy (Sarva-Deha)",
    dosha: "Ojas (Vitality) Depletion",
    actionType: "Rasayana (Rejuvenation)",
    timeline: "Strength Rebuilding: Weeks 2–8",
    summary: "Post-op fatigue is the result of 'Ojas-Kshaya'—the depletion of the body's ultimate vital essence due to blood loss and physiological shock.",
    
    protocolSteps: [
      {
        title: "Ojas Drink",
        desc: "Mix 1 tsp Ashwagandha in warm milk with a pinch of cardamom and dates before bed.",
        stepImages: [
          "/images/wea1.jpg", // Ashwagandha
          "/images/wea2.webp" // Warm drink
        ]
      },
      {
        title: "Sarpis (Ghee) Therapy",
        desc: "Incorporate 1-2 tsp of A2 Cow Ghee into every meal to provide stable, long-term energy.",
        stepImages: [
          "/images/wea3.webp", // Ghee spoon
          "/images/wea4.webp" // Context
        ]
      }
    ],
    sections: [
      {
        heading: "Ayurvedic Understanding",
        content: `Chronic weakness after surgery is scientifically understood in Ayurveda as 'Dhatu Kshaya' (tissue depletion). The body spends an enormous amount of energy on the acute healing phase, often at the expense of 'Bala' (physical strength). This depletion starts at the 'Rasa Dhatu' (plasma) and can cascade down to the marrow if not corrected.

Ojas is the subtle essence that governs immunity and mental resilience. Surgery 'leaks' Ojas through blood loss and the stress response. Without sufficient Ojas, the patient feels a sense of 'Gaurava' (heaviness) even though they are resting. This is because the cells lack the 'Tejas' (transformative fire) to convert rest into actual energy.



Rejuvenation (Rasayana) is not merely supplementation; it is the reconstruction of the biological foundation. By using 'Balya' herbs, we provide the raw materials for each tissue layer to rebuild in its proper sequence. This ensures that the recovery is not just a temporary boost in energy, but a permanent restoration of the patient’s constitutional vigor.`
      }
    ],
    video: "https://www.youtube.com/embed/gK-NfbrGf7g?si=8XvtH_Tx_17-9YHp"
  },

  immunity: {
    title: "Vyadhikshamatva (Immune Shield)",
    system: "Immune & Lymphatic System",
    dosha: "Kapha Protection",
    actionType: "Ojas-Vardhana (Immunity Boosting)",
    timeline: "Proactive Protection: Duration of Recovery",
    summary: "Immunity is not just fighting infection; it is the body's ability to maintain 'Homeostasis' while under the extreme stress of healing.",
    
    protocolSteps: [
      {
        title: "The Golden Shield",
        desc: "Consume 1 tsp of Chyawanprash (herbal jam) daily for Vitamin C and cellular defense.",
        stepImages: [
          "/images/imm1.webp", // Chyawanprash
          "/images/imm2.jpg" // Health context
        ]
      },
      {
        title: "Guduchi Infusion",
        desc: "Sip on Guduchi (Giloy) tea twice daily to modulate the immune system.",
        stepImages: [
          "/images/imm3.webp", // Giloy
          "/images/imm4.jpg" // Tea
        ]
      }
    ],
    sections: [
      {
        heading: "Ayurvedic Understanding",
        content: `Immunity in Ayurveda is called 'Vyadhikshamatva', which literally means 'forgiveness of disease'. It is the body's capacity to remain unaffected by pathogens and internal imbalances. Post-surgery, the immune system is often 'distracted' by the inflammatory needs of the wound, leaving the respiratory and digestive tracts vulnerable.

The Ayurvedic view of immunity is fundamentally linked to the 'Sahaja' (congenital), 'Kalaja' (seasonal), and 'Yuktikrita' (acquired) strengths. After a clinical procedure, we focus on Yuktikrita Bala—strength that is consciously built through diet and herbs. This is vital because the body's natural defense reserves have been diverted toward cellular reconstruction.



The goal of post-op immune support is to ensure that 'Kapha' (the principle of stability and structure) remains strong without becoming 'Dushita' (corrupted). Corrupted Kapha leads to mucus and sluggishness, whereas healthy Kapha provides the physical white-blood-cell 'army' needed to shield the recovery process from outside influence.`
      }
    ],
    video: "https://www.youtube.com/embed/jr33edZO2U0?si=awgMmLHgKPQGXb4e"
  }
};