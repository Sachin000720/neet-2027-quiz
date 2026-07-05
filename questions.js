const questionDatabase = [ { id: 1, question: "Which life-saving drug, derived from natural sources, is extensively used in the therapy of cancer?", options: { A: "Azidothymidine (AZT)", B: "Taxol", C: "Penicillin", D: "Streptomycin" }, correctOption: "B", explanation: "Taxol (and Cisplatin) are life-saving drugs used in cancer therapy. They were initially isolated from plant and animal sources, representing chemistry's vital role in medicine.", ncertLine: "Page 2, Paragraph 2: 'Life saving drugs such as cisplatin and taxol, are effective in cancer therapy...'", whyOthersWrong: "Option A (AZT) is used for helping AIDS victims. C and D are general antibiotics, not specific to primary cancer therapy mentioned in the context of basic chemistry concepts.", memoryTrick: "Taxol takes a 'Toll' on cancer cells.", commonMistake: "Students often confuse AZT and Taxol. Remember A for AZT = AIDS.", pyqSimilarity: "High (AIPMT 2010, NEET 2018 related matching concepts)", neetProbability: "90%", difficulty: "Easy", topic: "Importance of Chemistry" }, { id: 2, question: "In ancient India, the systematized knowledge of chemistry was known by several names. Which of the following was NOT one of them?", options: { A: "Rasayan Shastra", B: "Rasatantra", C: "Rasakriya", D: "Vaisheshika" }, correctOption: "D", explanation: "In ancient India, chemistry was called Rasayan Shastra, Rasatantra, Rasakriya, or Rasavidya. Vaisheshika is an ancient Indian school of philosophy founded by Kanada, which postulated atomic theory (paramanu), but it is not the term for chemistry itself.", ncertLine: "Page 1: 'Chemistry was called Rasayan Shastra, Rasatantra, Rasakriya or Rasavidya.'", whyOthersWrong: "A, B, and C are explicitly mentioned in NCERT as names for chemistry.", memoryTrick: "All ancient chemistry names start with 'Rasa' (essence/juice).", commonMistake: "Assuming Vaisheshika is chemistry because it deals with atoms, whereas it's actually a philosophical system.", pyqSimilarity: "Medium (New NCERT pattern focus on Indian knowledge systems)", neetProbability: "85%", difficulty: "Medium", topic: "Development of Chemistry" }, { id: 3, question: "Which of the following compounds is specifically mentioned in NCERT as being used for helping AIDS victims?", options: { A: "Cisplatin", B: "Azidothymidine (AZT)", C: "Chloroquine", D: "Paracetamol" }, correctOption: "B", explanation: "Azidothymidine (AZT) is explicitly highlighted in the NCERT as a drug used for helping AIDS victims.", ncertLine: "Page 2: '...and AZT (Azidothymidine) is used for helping AIDS victims.'", whyOthersWrong: "Cisplatin is for cancer. Chloroquine is for malaria. Paracetamol is an analgesic/antipyretic.", memoryTrick: "A-Z-T aids A-I-D-S from A to Z.", commonMistake: "Confusing it with cancer drugs.", pyqSimilarity: "Very High", neetProbability: "95%", difficulty: "Easy", topic: "Importance of Chemistry" }, { id: 4, question: "According to historical records, the Harappan civilization (2500-1700 BCE) showed proficiency in which of the following chemical processes?", options: { A: "Vulcanization of rubber", B: "Baking of bricks and pottery making", C: "Extraction of Aluminum via electrolysis", D: "Synthesis of artificial dyes" }, correctOption: "B", explanation: "Archaeological findings at Mohenjodaro and Harappa show that baked bricks were used, and pottery was mass-produced, indicating the earliest applications of heat-induced chemical changes in clay.", ncertLine: "Page 1, 'Development of Chemistry': References to the Harappan civilization using baked bricks and glazed pottery.", whyOthersWrong: "Vulcanization (19th century), Aluminum electrolysis (1880s), and artificial dyes (1856) are modern discoveries.", memoryTrick: "Ancient Harappa = Hard Bricks.", commonMistake: "Overestimating the metallurgical capabilities of the era to include advanced electrolysis.", pyqSimilarity: "Low (Newly added historical context)", neetProbability: "70%", difficulty: "Easy", topic: "Development of Chemistry" }, { id: 5, question: "Chemistry plays a crucial role in managing the environment. Which of the following refrigerants, responsible for ozone depletion, has been successfully replaced by safer alternatives due to chemical research?", options: { A: "Ammonia", B: "Liquid Nitrogen", C: "Chlorofluorocarbons (CFCs)", D: "Sulfur dioxide" }, correctOption: "C", explanation: "CFCs were widely used as refrigerants and caused ozone layer depletion. Chemical research led to the synthesis of safer alternatives like HFCs.", ncertLine: "Page 2, Importance of Chemistry: 'Safer alternatives to environmentally hazardous refrigerants like CFCs (chlorofluorocarbons), responsible for ozone depletion in the stratosphere, have been successfully synthesised.'", whyOthersWrong: "Ammonia and SO2 are toxic but not the primary historical ozone depleters mentioned as successfully replaced refrigerants in this context. Liquid nitrogen is not a standard compressor refrigerant.", memoryTrick: "CFCs cause the Canopy (Ozone) to Crack.", commonMistake: "Confusing greenhouse gases with specific ozone-depleting refrigerants.", pyqSimilarity: "High (Environmental Chem overlap)", neetProbability: "88%", difficulty: "Easy", topic: "Importance of Chemistry" } ];

questionDatabase.push(
{
id: 6,
question: "Who among the following authored the ancient text 'Rasaratnakara' which deals with the extraction of metals?",
options: { A: "Sushruta", B: "Kanada", C: "Nagarjuna", D: "Charaka" },
correctOption: "C",
explanation: "Nagarjuna was a renowned ancient Indian scientist and alchemist who wrote Rasaratnakara, focusing on metal extraction and alchemy.",
difficulty: "Medium",
topic: "Development of Chemistry"
},
{
id: 7,
question: "The ancient Indian philosopher Kanada is best known for postulating which of the following theories?",
options: { A: "Theory of Relativity", B: "Atomic Theory (Paramanu)", C: "Theory of Evolution", D: "Wave Theory of Light" },
correctOption: "B",
explanation: "Acharya Kanada originally conceptualized the atomic theory in his Vaisheshika Sutra, terming the indivisible particle as 'Paramanu'.",
difficulty: "Medium",
topic: "Development of Chemistry"
},
{
id: 8,
question: "Which life-saving drug is utilized effectively in cancer therapy alongside Taxol?",
options: { A: "Cisplatin", B: "Penicillin", C: "Chloroquine", D: "Paracetamol" },
correctOption: "A",
explanation: "Cisplatin and Taxol are specifically highlighted in NCERT as life-saving drugs used for cancer therapy.",
difficulty: "Easy",
topic: "Importance of Chemistry"
},
{
id: 9,
question: "According to archaeological excavations, gypsum cement was primarily used in construction by which ancient civilization?",
options: { A: "Mauryan", B: "Harappan (Indus Valley)", C: "Gupta", D: "Vedic" },
correctOption: "B",
explanation: "The Harappan civilization utilized gypsum cement, containing lime, sand, and traces of calcium carbonate, for construction.",
difficulty: "Medium",
topic: "Development of Chemistry"
},
{
id: 10,
question: "The 'Rasopanishad' describes the preparation of which type of mixture in ancient India?",
options: { A: "Gunpowder", B: "Fertilizers", C: "Plastics", D: "Dyes" },
correctOption: "A",
explanation: "Ancient Indian texts like Rasopanishad mention the preparation of gunpowder mixtures using sulfur, charcoal, and saltpeter.",
difficulty: "Hard",
topic: "Development of Chemistry"
},
{
id: 11,
question: "Which refrigerant is mentioned in NCERT as environmentally hazardous and responsible for stratospheric ozone depletion?",
options: { A: "Ammonia", B: "Liquid Nitrogen", C: "Chlorofluorocarbons (CFCs)", D: "Argon" },
correctOption: "C",
explanation: "CFCs are heavily implicated in stratospheric ozone depletion, prompting the chemical industry to synthesize safer alternatives.",
difficulty: "Easy",
topic: "Importance of Chemistry"
},
{
id: 12,
question: "In ancient Indian metallurgical traditions, what is the iron pillar at Mehrauli in Delhi famous for?",
options: { A: "High magnetic field", B: "Rust resistance", C: "Radioactivity", D: "Gold plating" },
correctOption: "B",
explanation: "The Delhi Iron Pillar is highly renowned globally for its extraordinary resistance to corrosion and rust over centuries.",
difficulty: "Easy",
topic: "Development of Chemistry"
},
{
id: 13,
question: "Which among the following was an ancient Indian term for 'alchemy' or 'chemistry'?",
options: { A: "Vastu Shastra", B: "Rasakriya", C: "Ayurveda", D: "Yoga Sutra" },
correctOption: "B",
explanation: "Chemistry in ancient India was known by names such as Rasayan Shastra, Rasatantra, Rasakriya, and Rasavidya.",
difficulty: "Medium",
topic: "Development of Chemistry"
},
{
id: 14,
question: "The synthesis of specific chemical materials has enabled the creation of optical fibers. What is their primary modern use?",
options: { A: "Farming", B: "Water purification", C: "Telecommunications", D: "Food preservation" },
correctOption: "C",
explanation: "Advances in chemistry have facilitated the production of optical fibers, which are essential for modern telecommunications.",
difficulty: "Easy",
topic: "Importance of Chemistry"
},
{
id: 15,
question: "Sushruta Samhita explains the importance of Alkalies. Which specific chemical application is detailed in this ancient text?",
options: { A: "Distillation of alcohol", B: "Preparation of soaps", C: "Extraction of aluminum", D: "Vulcanization" },
correctOption: "B",
explanation: "Sushruta Samhita highlights the importance of alkalies and discusses the preparation of soaps using various plant ashes.",
difficulty: "Hard",
topic: "Development of Chemistry"
},
{
id: 16,
question: "What major agricultural problem has the chemical industry helped solve through the production of specific compounds?",
options: { A: "Soil erosion", B: "Lack of sunlight", C: "Pest control and crop yield", D: "Genetic mutation" },
correctOption: "C",
explanation: "Chemistry provides fertilizers, insecticides, and pesticides to improve crop yields and control agricultural pests.",
difficulty: "Easy",
topic: "Importance of Chemistry"
},
{
id: 17,
question: "According to ancient texts, what was the primary component used by Indians for dyeing cloth like cotton and silk?",
options: { A: "Synthetic aniline", B: "Madder and turmeric", C: "Petrochemical derivatives", D: "Titanium dioxide" },
correctOption: "B",
explanation: "Ancient Indians used natural dyes derived from plants, such as madder, sunflower, and turmeric, for coloring textiles.",
difficulty: "Medium",
topic: "Development of Chemistry"
},
{
id: 18,
question: "The book 'Brihat Samhita' provides recipes for perfumes and cosmetics. Who is its author?",
options: { A: "Varahamihira", B: "Aryabhata", C: "Chakrapani", D: "Patanjali" },
correctOption: "A",
explanation: "Varahamihira authored the Brihat Samhita, an ancient Indian encyclopedic text that includes preparations for cosmetics and perfumes.",
difficulty: "Medium",
topic: "Development of Chemistry"
},
{
id: 19,
question: "Which class of modern chemical materials is specifically cited in NCERT as replacing metals in various applications?",
options: { A: "Wood", B: "Ceramics and Polymers", C: "Glass", D: "Paper" },
correctOption: "B",
explanation: "Chemistry has led to the synthesis of conducting polymers, ceramics, and advanced plastics that frequently replace metals.",
difficulty: "Easy",
topic: "Importance of Chemistry"
},
{
id: 20,
question: "Chakrapani discovered a chemical process associated with mustard oil and alkalis. What was the product?",
options: { A: "Gunpowder", B: "Soap", C: "Perfume", D: "Glass" },
correctOption: "B",
explanation: "Chakrapani is credited with discovering mustard oil soap by reacting the oil with alkalis.",
difficulty: "Hard",
topic: "Development of Chemistry"
},
{
id: 21,
question: "The massive copper statue of Buddha found in Sultanganj (dating back to the Gupta period) is evidence of ancient India's mastery in:",
options: { A: "Polymer chemistry", B: "Metallurgy", C: "Organic synthesis", D: "Nuclear chemistry" },
correctOption: "B",
explanation: "The Sultanganj Buddha is a prominent archaeological proof of advanced metallurgical techniques in ancient India.",
difficulty: "Medium",
topic: "Development of Chemistry"
},
{
id: 22,
question: "Which fundamental property of matter was discussed by Acharya Kanada centuries before John Dalton?",
options: { A: "Indivisibility of the ultimate particle", B: "Electron spin", C: "Isotopes", D: "Radioactive decay" },
correctOption: "A",
explanation: "Kanada postulated that matter consists of indivisible units called Paramanu, preceding Dalton's atomic theory.",
difficulty: "Easy",
topic: "Development of Chemistry"
},
{
id: 23,
question: "In the context of the Importance of Chemistry, what is the major goal of 'Green Chemistry'?",
options: { A: "Increasing toxic yields", B: "Extracting green pigments", C: "Reducing hazardous substances in chemical processes", D: "Promoting deforestation" },
correctOption: "C",
explanation: "Green chemistry focuses on designing products and processes that minimize or eliminate the use and generation of hazardous substances.",
difficulty: "Easy",
topic: "Importance of Chemistry"
},
{
id: 24,
question: "Which of the following compounds was historically extracted from the bark of the Cinchona tree and used as an antimalarial?",
options: { A: "Aspirin", B: "Quinine", C: "Taxol", D: "AZT" },
correctOption: "B",
explanation: "While not explicitly focused on in the first intro page, quinine is the classic historical example of plant-derived medicines, showcasing chemistry's importance.",
difficulty: "Medium",
topic: "Importance of Chemistry"
},
{
id: 25,
question: "Ancient Indians utilized the fermentation process for brewing. Which Veda mentions the fermentation of plant juices?",
options: { A: "Rigveda", B: "Samaveda", C: "Yajurveda", D: "Atharvaveda" },
correctOption: "A",
explanation: "The Rigveda contains references to the fermentation of soma and sura, indicating early knowledge of biochemical processes.",
difficulty: "Hard",
topic: "Development of Chemistry"
},
{
id: 26,
question: "Chemistry provides materials like superconducting ceramics. These are primarily utilized in which modern application?",
options: { A: "Textile weaving", B: "Magnetic levitation and advanced electronics", C: "Paper manufacturing", D: "Water filtration" },
correctOption: "B",
explanation: "Superconducting ceramics, a product of advanced chemical synthesis, are crucial for magnetic levitation and high-end electronics.",
difficulty: "Medium",
topic: "Importance of Chemistry"
},
{
id: 27,
question: "The discovery of glass objects in India dates back to which approximate period?",
options: { A: "1000 BCE", B: "500 CE", C: "1500 CE", D: "2000 CE" },
correctOption: "A",
explanation: "Archaeological evidence suggests the use and manufacture of glass in India dates as far back as 1000 BCE (e.g., Maski, Hastinapur).",
difficulty: "Hard",
topic: "Development of Chemistry"
},
{
id: 28,
question: "Cisplatin is an important chemical complex used in medicine. What transition metal is central to its structure?",
options: { A: "Iron", B: "Copper", C: "Platinum", D: "Zinc" },
correctOption: "C",
explanation: "Cisplatin contains Platinum as its central atom, critical for its function as a cancer-fighting drug.",
difficulty: "Medium",
topic: "Importance of Chemistry"
},
{
id: 29,
question: "Which historical text provides comprehensive details on the preparation of distinct types of alkalis, classifying them into mild, caustic, and average?",
options: { A: "Sushruta Samhita", B: "Arthashastra", C: "Manusmriti", D: "Ramayana" },
correctOption: "A",
explanation: "The Sushruta Samhita categorizes alkalis and details their preparation for medicinal and chemical uses.",
difficulty: "Hard",
topic: "Development of Chemistry"
},
{
id: 30,
question: "What is the primary significance of AZT in modern therapeutics?",
options: { A: "Curing common cold", B: "Managing HIV/AIDS", C: "Treating tuberculosis", D: "Pain management" },
correctOption: "B",
explanation: "AZT (Azidothymidine) is a heavily cited example of chemistry's contribution to medicine, specifically for aiding AIDS victims.",
difficulty: "Easy",
topic: "Importance of Chemistry"
},
{
id: 31,
question: "In the context of the Harappan civilization, what material was frequently glazed using chemical firing techniques?",
options: { A: "Iron weapons", B: "Pottery", C: "Gold coins", D: "Diamond jewelry" },
correctOption: "B",
explanation: "Harappans were skilled in baking bricks and producing glazed pottery, showing early applied chemistry and thermodynamics.",
difficulty: "Easy",
topic: "Development of Chemistry"
},
{
id: 32,
question: "How has chemistry primarily impacted the field of electronics recently?",
options: { A: "By eliminating the need for electricity", B: "By synthesizing conducting polymers and miniaturized battery materials", C: "By restricting semiconductor usage", D: "By converting all devices to mechanical operation" },
correctOption: "B",
explanation: "Chemistry enables the creation of conducting polymers, advanced dielectrics, and battery materials for modern electronics.",
difficulty: "Medium",
topic: "Importance of Chemistry"
},
{
id: 33,
question: "What ancient Indian text by Kautilya mentions the extraction of metals from ores?",
options: { A: "Arthashastra", B: "Rigveda", C: "Upanishads", D: "Mahabharata" },
correctOption: "A",
explanation: "Kautilya's Arthashastra describes the mining of ores and the extraction of various metals.",
difficulty: "Medium",
topic: "Development of Chemistry"
},
{
id: 34,
question: "The fundamental concept of 'Chemistry' encompasses the study of matter's:",
options: { A: "Composition, structure, and properties", B: "Velocity and acceleration only", C: "Biological reproduction", D: "Gravitational pull" },
correctOption: "A",
explanation: "Chemistry is defined as the branch of science that studies the composition, properties, and structure of matter.",
difficulty: "Easy",
topic: "Importance of Chemistry"
},
{
id: 35,
question: "According to the principles of Vaisheshika philosophy, a 'Paramanu' is:",
options: { A: "A type of ancient chemical dye", B: "An indivisible particle of matter", C: "A medicinal herb", D: "A type of ancient glass" },
correctOption: "B",
explanation: "In Vaisheshika philosophy, Paramanu refers to the ultimate, indivisible unit of matter (atom).",
difficulty: "Easy",
topic: "Development of Chemistry"
},
{
id: 36,
question: "Which of these environmental issues is being actively mitigated by the development of greener chemical alternatives?",
options: { A: "Tectonic plate movement", B: "Ozone layer depletion", C: "Solar eclipses", D: "Volcanic eruptions" },
correctOption: "B",
explanation: "Chemistry helps mitigate ozone layer depletion by synthesizing alternatives to CFCs.",
difficulty: "Easy",
topic: "Importance of Chemistry"
},
{
id: 37,
question: "The paintings at Ajanta and Ellora caves utilize pigments that have survived for centuries. This highlights ancient India's knowledge in:",
options: { A: "Synthetic polymers", B: "Natural dyes and mineral pigments", C: "Nuclear chemistry", D: "Electroplating" },
correctOption: "B",
explanation: "The longevity of Ajanta cave paintings demonstrates a profound understanding of natural mineral pigments and chemical binders.",
difficulty: "Medium",
topic: "Development of Chemistry"
},
{
id: 38,
question: "The 'Rasaratnasamuccaya' is a classical text that elaborates on:",
options: { A: "Aeronautics", B: "Metallurgical operations and alchemy", C: "Astrology", D: "Civil engineering" },
correctOption: "B",
explanation: "It is a prominent medieval Indian text detailing vast knowledge regarding chemical and metallurgical processes.",
difficulty: "Hard",
topic: "Development of Chemistry"
},
{
id: 39,
question: "What major role do synthetic polymers like PVC and Teflon play in modern industry due to chemical advancements?",
options: { A: "They are used as edible food additives", B: "They replace traditional materials providing durability and inertness", C: "They act as soil fertilizers", D: "They emit harmful radiation" },
correctOption: "B",
explanation: "Synthetic polymers offer chemical resistance, durability, and versatility, effectively replacing older materials in manufacturing.",
difficulty: "Easy",
topic: "Importance of Chemistry"
},
{
id: 40,
question: "In historical Indian alchemy (Rasashastra), which element was predominantly revered and extensively used in medicinal formulations?",
options: { A: "Uranium", B: "Mercury (Parada)", C: "Helium", D: "Fluorine" },
correctOption: "B",
explanation: "Mercury, known as Parada, was the central element in Indian alchemical and medicinal formulations (Rasashastra).",
difficulty: "Medium",
topic: "Development of Chemistry"
}
);
