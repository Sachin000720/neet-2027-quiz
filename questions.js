const qDB = [
  {
    q: "Which of the following life-saving drugs is highly effective in cancer therapy?",
    A: "Azidothymidine", B: "Cisplatin", C: "Penicillin", D: "Paracetamol",
    ans: "B", ncert: "Importance of Chemistry, Pg 4",
    exp: "Cisplatin and Taxol are life-saving drugs isolated from plant and animal sources or synthesized, effective in cancer therapy.",
    wrong: "A is for AIDS. C & D are antibiotics/analgesics.", trick: "C for Cancer, C for Cisplatin.",
    mistake: "Confusing AZT with cancer meds.", pyq: "Similar to AIPMT 2010", prob: "High", diff: "Easy", topic: "Importance of Chemistry"
  },
  {
    q: "The drug Azidothymidine (AZT) is primarily used for helping patients suffering from:",
    A: "Cancer", B: "Tuberculosis", C: "AIDS", D: "Malaria",
    ans: "C", ncert: "Importance of Chemistry, Pg 4",
    exp: "AZT is used for helping AIDS patients.", wrong: "Cancer uses Cisplatin/Taxol.", trick: "A to Z Treatment for AIDS (AZT).",
    mistake: "Mixing it up with Taxol.", pyq: "NEET 2016", prob: "High", diff: "Easy", topic: "Importance of Chemistry"
  },
  {
    q: "In ancient India, chemistry was NOT known as:",
    A: "Rasayan Shastra", B: "Rasa Vidya", C: "Vastu Shastra", D: "Rasatantra",
    ans: "C", ncert: "Development of Chemistry, Pg 1",
    exp: "Ancient Indian chemistry was called Rasayan Shastra, Rasatantra, Ras Kriya, or Rasa Vidya.",
    wrong: "Vastu Shastra is the science of architecture.", trick: "Rasa = chemical/juice. Vastu = dwelling.",
    mistake: "Assuming all Shastras refer to chemistry.", pyq: "N/A", prob: "Medium", diff: "Medium", topic: "Development of Chemistry"
  },
  {
    q: "Which ancient Indian text describes the importance of Alkalies?",
    A: "Sushruta Samhita", B: "Charaka Samhita", C: "Rigveda", D: "Upanishads",
    ans: "A", ncert: "Development of Chemistry, Pg 2",
    exp: "Sushruta Samhita explains the importance of Alkalies.",
    wrong: "Charaka Samhita is mostly general medicine.", trick: "Sushruta (Surgery & Salts/Alkalies).",
    mistake: "Confusing Charaka and Sushruta.", pyq: "N/A", prob: "Low", diff: "Hard", topic: "Development of Chemistry"
  },
  {
    q: "The ancient text 'Rasaratnakara' which deals with the formulation of mercury compounds was written by:",
    A: "Chakrapani", B: "Nagarjuna", C: "Varahamihira", D: "Aryabhata",
    ans: "B", ncert: "Development of Chemistry, Pg 2",
    exp: "Nagarjuna was a great Indian scientist who wrote Rasaratnakara, discussing mercury and metallurgy.",
    wrong: "Chakrapani invented mustard soap. Varahamihira wrote Brihat Samhita.", trick: "Naga (Snake) -> Poison/Mercury.",
    mistake: "Associating mercury solely with alchemy.", pyq: "N/A", prob: "High", diff: "Medium", topic: "Development of Chemistry"
  },
  {
    q: "Who among the following discovered mustard seed soap in ancient India?",
    A: "Chakrapani", B: "Nagarjuna", C: "Sushruta", D: "Kanada",
    ans: "A", ncert: "Development of Chemistry, Pg 2",
    exp: "Chakrapani discovered mustard seed soap.", wrong: "Others were involved in metallurgy and medicine.",
    trick: "Chakra -> Round -> Soap bubble.", mistake: "Thinking soap is purely a modern European invention.", pyq: "N/A", prob: "Medium", diff: "Hard", topic: "Development of Chemistry"
  },
  {
    q: "According to archaeological findings, copper metallurgy in India dates back to:",
    A: "Middle Ages", B: "Chalcolithic cultures", C: "Vedic period", D: "Gupta empire",
    ans: "B", ncert: "Development of Chemistry, Pg 1",
    exp: "Copper metallurgy in India dates back to Chalcolithic cultures.", wrong: "Other periods are much later.",
    trick: "Chalco = Copper.", mistake: "Assuming iron was first.", pyq: "N/A", prob: "Low", diff: "Medium", topic: "Development of Chemistry"
  },
  {
    q: "The rustless iron pillar of Delhi, a marvel of ancient Indian chemistry, was built during which period?",
    A: "Mauryan", B: "Gupta", C: "Mughal", D: "Harappan",
    ans: "B", ncert: "Development of Chemistry, Pg 2",
    exp: "The iron pillar in Delhi was built around 400 CE during the Gupta period.", wrong: "Mauryan is too early, Mughal too late.",
    trick: "Gupta -> Golden age -> Good Iron.", mistake: "Misdating the pillar to Islamic architecture.", pyq: "N/A", prob: "High", diff: "Medium", topic: "Development of Chemistry"
  },
  {
    q: "Varahamihira's Brihat Samhita gives references to:",
    A: "Surgical instruments", B: "Atomic theory", C: "Perfumes and cosmetics", D: "Mercury extraction",
    ans: "C", ncert: "Development of Chemistry, Pg 2",
    exp: "Brihat Samhita mentions the preparation of perfumes and cosmetics.", wrong: "Surgery is Sushruta, Mercury is Nagarjuna.",
    trick: "Brihat (Big) collection of cosmetics.", mistake: "Confusing with Rasaratnakara.", pyq: "N/A", prob: "Medium", diff: "Hard", topic: "Development of Chemistry"
  },
  {
    q: "The earliest evidence of glass making in India was found at:",
    A: "Mohenjo-Daro", B: "Harappa", C: "Hastinapur and Taxila", D: "Lothal",
    ans: "C", ncert: "Development of Chemistry, Pg 2",
    exp: "Evidence of glass making was found at Hastinapur and Taxila (around 1000 BCE).", wrong: "Indus valley had beads, but true glass was later.",
    trick: "Glass is fragile like the Hastinapur empire.", mistake: "Assuming Harappans made everything.", pyq: "N/A", prob: "Low", diff: "Hard", topic: "Development of Chemistry"
  },
  {
    q: "Which Veda mentions the use of dyes in ancient India?",
    A: "Rigveda", B: "Yajurveda", C: "Samaveda", D: "Atharvaveda",
    ans: "D", ncert: "Development of Chemistry, Pg 2",
    exp: "Atharvaveda mentions the use of dyes like turmeric, madder, etc.", wrong: "Rigveda is older and mostly hymns.",
    trick: "Atharva -> Art -> Dyes.", mistake: "Guessing Rigveda as the default.", pyq: "N/A", prob: "Medium", diff: "Medium", topic: "Development of Chemistry"
  },
  {
    q: "Refrigerants like CFCs are harmful because they cause:",
    A: "Acid rain", B: "Ozone depletion", C: "Soil alkalinity", D: "Water pollution",
    ans: "B", ncert: "Importance of Chemistry, Pg 4",
    exp: "CFCs destroy the stratospheric ozone layer.", wrong: "SO2/NO2 cause acid rain.",
    trick: "CFC -> Cl -> Cleaves Ozone.", mistake: "Mixing up global warming and ozone depletion.", pyq: "NEET 2019", prob: "High", diff: "Easy", topic: "Importance of Chemistry"
  },
  {
    q: "Chemistry has helped in the production of which synthetic materials replacing natural ones?",
    A: "Cotton and Jute", B: "Silk and Wool", C: "Polymers and Plastics", D: "Wood and Stone",
    ans: "C", ncert: "Importance of Chemistry, Pg 4",
    exp: "Chemistry facilitates the production of polymers, plastics, and synthetic fibers.", wrong: "A, B, D are natural.",
    trick: "Poly = Many = Synthetic.", mistake: "Overthinking the basics.", pyq: "N/A", prob: "Low", diff: "Easy", topic: "Importance of Chemistry"
  },
  {
    q: "Which of the following represents a major challenge for chemistry in the modern era?",
    A: "Producing basic acids", B: "Managing greenhouse gases like CH4 and CO2", C: "Extracting iron", D: "Making soap",
    ans: "B", ncert: "Importance of Chemistry, Pg 4",
    exp: "Managing greenhouse gases is a current major challenge mentioned in NCERT.", wrong: "Others are solved ancient/industrial problems.",
    trick: "Global warming = Modern problem.", mistake: "Thinking extraction is still a primary research challenge.", pyq: "N/A", prob: "High", diff: "Medium", topic: "Importance of Chemistry"
  },
  {
    q: "The fundamental principles of chemistry are applicable in understanding:",
    A: "Weather patterns", B: "Brain functioning", C: "Computer operation", D: "All of the above",
    ans: "D", ncert: "Importance of Chemistry, Pg 3",
    exp: "Chemistry plays a role in weather patterns, brain function, and materials for computers.", wrong: "None. All are correct.",
    trick: "Chemistry is everywhere.", mistake: "Limiting chemistry to just labs.", pyq: "N/A", prob: "Medium", diff: "Easy", topic: "Importance of Chemistry"
  },
  {
    q: "What was the ancient term for the 'science of mercury'?",
    A: "Loha Vidya", B: "Rasatantra", C: "Dhatu Vidya", D: "Ayurveda",
    ans: "B", ncert: "Development of Chemistry, Pg 1",
    exp: "Rasa refers primarily to mercury in ancient texts.", wrong: "Loha/Dhatu is general metallurgy.",
    trick: "Rasa = Mercury in alchemy.", mistake: "Choosing Ayurveda (medicine).", pyq: "N/A", prob: "Medium", diff: "Medium", topic: "Development of Chemistry"
  },
  {
    q: "Modern chemistry in Europe evolved mostly after the decline of:",
    A: "Industrial Revolution", B: "Alchemy and Iatrochemistry", C: "Quantum mechanics", D: "String theory",
    ans: "B", ncert: "Development of Chemistry, Pg 1",
    exp: "Modern chemistry evolved from the traditions of alchemy and iatrochemistry.", wrong: "Quantum is 20th century.",
    trick: "Alchemy -> Chemistry.", mistake: "Thinking industrial revolution came before chemistry.", pyq: "N/A", prob: "High", diff: "Easy", topic: "Development of Chemistry"
  },
  {
    q: "Which of the following is a safer alternative to CFCs synthesized by chemists?",
    A: "HFCs (Hydrofluorocarbons)", B: "CCl4", C: "Phosgene", D: "DDT",
    ans: "A", ncert: "Importance of Chemistry, Pg 4",
    exp: "HFCs have been synthesized as safer alternatives to CFCs for refrigeration.", wrong: "CCl4 and DDT are banned/toxic.",
    trick: "H replaces Cl, saving ozone.", mistake: "Thinking all fluorocarbons are bad.", pyq: "NEET 2020", prob: "High", diff: "Medium", topic: "Importance of Chemistry"
  },
  {
    q: "Which chemical is extensively used to increase food production via fertilizers?",
    A: "Urea", B: "Sodium Chloride", C: "Calcium Carbonate", D: "Acetic Acid",
    ans: "A", ncert: "Importance of Chemistry, Pg 3",
    exp: "Urea, calcium superphosphate, etc., are chemical fertilizers.", wrong: "Others are not primary fertilizers.",
    trick: "Urea = Nitrogen = Plant growth.", mistake: "Confusing soil modifiers with fertilizers.", pyq: "N/A", prob: "Low", diff: "Easy", topic: "Importance of Chemistry"
  },
  {
    q: "A deep understanding of chemistry is necessary for synthesizing which novel materials?",
    A: "Superconducting ceramics", B: "Conducting polymers", C: "Optical fibres", D: "All of the above",
    ans: "D", ncert: "Importance of Chemistry, Pg 4",
    exp: "NCERT states these materials are synthesized using chemical principles.", wrong: "None, all are correct.",
    trick: "Advanced tech relies on chemistry.", mistake: "Thinking optics is purely physics.", pyq: "N/A", prob: "Medium", diff: "Easy", topic: "Importance of Chemistry"
  },
  {q: "The book 'Rasahridaya' was written by:", A: "Govind Bhagvat", B: "Nagarjuna", C: "Kanada", D: "Vagbhata", ans: "A", ncert: "Pg 2", exp: "Govind Bhagvat authored Rasahridaya.", wrong: "Nagarjuna wrote Rasaratnakara.", trick: "Hridaya(Heart)->Bhagvat(God).", mistake: "Confusing ancient authors.", pyq: "N/A", prob: "Low", diff: "Hard", topic: "Development"},
  {q: "Ancient Indians used what mixture to create a gunpowder-like substance?", A: "KNO3, Charcoal, S", B: "NaCl, Charcoal", C: "KCl, S", D: "Na2CO3, Sand", ans: "A", ncert: "Pg 2", exp: "Saltpetre, sulphur, and charcoal were used.", wrong: "Others lack explosive properties.", trick: "Gunpowder = Saltpetre.", mistake: "Forgetting sulphur.", pyq: "N/A", prob: "Low", diff: "Medium", topic: "Development"},
  {q: "Which metal was extracted using zinc in ancient India at Zawar?", A: "Copper", B: "Iron", C: "Zinc", D: "Gold", ans: "C", ncert: "Pg 2", exp: "Zinc metallurgy was advanced in Zawar, Rajasthan.", wrong: "Zawar is famous for Zinc.", trick: "Zawar -> Zinc.", mistake: "Guessing Iron.", pyq: "N/A", prob: "Medium", diff: "Medium", topic: "Development"},
  {q: "Taxol is primarily extracted from:", A: "Animals", B: "Plants", C: "Fungi", D: "Bacteria", ans: "B", ncert: "Pg 4", exp: "Taxol is isolated from plant sources (Yew tree).", wrong: "Not from animals/bacteria.", trick: "Taxol -> Tree.", mistake: "Thinking it's synthetic only.", pyq: "N/A", prob: "High", diff: "Easy", topic: "Importance"},
  {q: "Chemistry deals with the composition, structure, and properties of:", A: "Energy", B: "Matter", C: "Space", D: "Time", ans: "B", ncert: "Pg 1", exp: "Chemistry is the science of matter.", wrong: "Physics deals more purely with energy/space.", trick: "Matter matters in chemistry.", mistake: "Choosing Energy.", pyq: "N/A", prob: "High", diff: "Easy", topic: "Importance"},
  {q: "In ancient times, which philosophy dominated the search for the 'philosopher's stone'?", A: "Iatrochemistry", B: "Alchemy", C: "Metallurgy", D: "Quantum chemistry", ans: "B", ncert: "Pg 1", exp: "Alchemy sought the philosopher's stone to convert base metals to gold.", wrong: "Iatrochemistry is medical.", trick: "Alchemy = Magic stone.", mistake: "Confusing alchemy with actual metallurgy.", pyq: "N/A", prob: "High", diff: "Easy", topic: "Development"},
  {q: "Iatrochemistry primarily focused on:", A: "Making gold", B: "Medicinal applications of chemistry", C: "Building weapons", D: "Dyeing fabrics", ans: "B", ncert: "Pg 1", exp: "Iatrochemistry is the intersection of chemistry and medicine.", wrong: "Alchemy is making gold.", trick: "Iatro = Medical (like psychiatry).", mistake: "Confusing with alchemy.", pyq: "N/A", prob: "Medium", diff: "Medium", topic: "Development"},
  {q: "Which element's properties are essential for microprocessors?", A: "Carbon", B: "Silicon", C: "Iron", D: "Copper", ans: "B", ncert: "Pg 4", exp: "Silicon is the basis of solid-state microprocessors.", wrong: "Carbon is organic.", trick: "Silicon Valley.", mistake: "Choosing Copper.", pyq: "N/A", prob: "High", diff: "Easy", topic: "Importance"},
  {q: "Which greenhouse gas is primarily managed by newer chemical strategies?", A: "Oxygen", B: "Nitrogen", C: "Methane", D: "Argon", ans: "C", ncert: "Pg 4", exp: "Methane (CH4) is a greenhouse gas.", wrong: "O2 and N2 are normal atmospheric gases.", trick: "CH4 traps heat.", mistake: "Thinking Nitrogen is a greenhouse gas.", pyq: "N/A", prob: "High", diff: "Easy", topic: "Importance"},
  {q: "The science of chemistry is sometimes called the:", A: "Central science", B: "Physical science", C: "Biological science", D: "Mathematical science", ans: "A", ncert: "Pg 3", exp: "Chemistry is central because it connects physics and biology.", wrong: "It's broader than just physical or biological.", trick: "Chemistry is the bridge.", mistake: "Calling it just physical science.", pyq: "N/A", prob: "Medium", diff: "Easy", topic: "Importance"},
  {q: "Preparation of which common item was detailed in ancient Indian texts using castor oil?", A: "Soap", B: "Glass", C: "Paper", D: "Ink", ans: "A", ncert: "Pg 2", exp: "Soap preparation used castor oil, seeds, and alkalis.", wrong: "Glass used silica.", trick: "Oil + Alkali = Soap.", mistake: "Assuming paper.", pyq: "N/A", prob: "Medium", diff: "Hard", topic: "Development"},
  {q: "Alizarin, a dye known to ancient Indians, gives which color?", A: "Blue", B: "Red", C: "Yellow", D: "Green", ans: "B", ncert: "Pg 2", exp: "Madder/Alizarin gives a red dye.", wrong: "Indigo gives blue.", trick: "Aliza-RED.", mistake: "Confusing with indigo.", pyq: "N/A", prob: "Low", diff: "Hard", topic: "Development"},
  {q: "The Atharvaveda mentions the use of which material for dyeing?", A: "Turmeric", B: "Saffron", C: "Indigo", D: "All of the above", ans: "D", ncert: "Pg 2", exp: "Various plant dyes like turmeric and madder are mentioned.", wrong: "None are wrong.", trick: "Ancient India loved colors.", mistake: "Picking only turmeric.", pyq: "N/A", prob: "Low", diff: "Medium", topic: "Development"},
  {q: "What is the primary objective of 'Green Chemistry'?", A: "Making green dyes", B: "Reducing hazardous substances", C: "Planting trees", D: "Studying chlorophyll", ans: "B", ncert: "Pg 4", exp: "Green chemistry designs processes to minimize toxic substances.", wrong: "Not about literal green color.", trick: "Green = Clean environment.", mistake: "Taking 'green' literally.", pyq: "NEET 2018", prob: "High", diff: "Medium", topic: "Importance"},
  {q: "Which area is NOT directly a major application of chemistry?", A: "Pesticides", B: "Software coding", C: "Preservatives", D: "Alloys", ans: "B", ncert: "Pg 3", exp: "Software coding is computer science, though hardware relies on chem.", wrong: "The rest are direct chemical applications.", trick: "Code is logic, not matter.", mistake: "Overextending chemistry's scope.", pyq: "N/A", prob: "Low", diff: "Easy", topic: "Importance"},
  {q: "The extraction of metals from their ores is known as:", A: "Alchemy", B: "Metallurgy", C: "Iatrochemistry", D: "Polymerization", ans: "B", ncert: "Pg 1", exp: "Metallurgy is the scientific extraction of metals.", wrong: "Alchemy is mystical.", trick: "Metal-urgy.", mistake: "Choosing alchemy.", pyq: "N/A", prob: "Medium", diff: "Easy", topic: "Development"},
  {q: "Which ancient civilization heavily practiced alchemy?", A: "Greek", B: "Chinese", C: "Indian", D: "All of the above", ans: "D", ncert: "Pg 1", exp: "Alchemy was practiced in Egypt, China, India, and Greece.", wrong: "Not limited to one.", trick: "Universal ancient pursuit.", mistake: "Limiting it to Europe.", pyq: "N/A", prob: "Low", diff: "Easy", topic: "Development"},
  {q: "Kautilya’s Arthashastra mentions the production of:", A: "Salt from sea", B: "Plastics", C: "Nuclear energy", D: "Synthetic rubber", ans: "A", ncert: "Pg 2", exp: "Arthashastra mentions salt collection from the sea.", wrong: "Others are modern.", trick: "Salt was essential ancient trade.", mistake: "Associating Arthashastra only with economics.", pyq: "N/A", prob: "Medium", diff: "Hard", topic: "Development"},
  {q: "The scientific systematization of chemistry happened primarily in which centuries?", A: "10th-12th", B: "13th-15th", C: "18th-19th", D: "20th-21st", ans: "C", ncert: "Pg 1", exp: "Modern chemistry took shape in the 18th and 19th centuries in Europe.", wrong: "Earlier was alchemy.", trick: "Industrial revolution era.", mistake: "Thinking it was earlier.", pyq: "N/A", prob: "Medium", diff: "Medium", topic: "Development"},
  {q: "Which of the following is an example of an inorganic fertilizer?", A: "Compost", B: "Ammonium Sulphate", C: "Manure", D: "Peat", ans: "B", ncert: "Pg 3", exp: "Ammonium sulphate is a synthesized inorganic fertilizer.", wrong: "Others are organic/natural.", trick: "Chemical names = Inorganic.", mistake: "Confusing organic manure with chemical fertilizers.", pyq: "N/A", prob: "High", diff: "Easy", topic: "Importance"}
];