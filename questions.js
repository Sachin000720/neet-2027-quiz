const questionDatabase = [
    {
        id: 1,
        question: "Which life-saving drug, derived from natural sources, is extensively used in the therapy of cancer?",
        options: {
            A: "Azidothymidine (AZT)",
            B: "Taxol",
            C: "Penicillin",
            D: "Streptomycin"
        },
        correctOption: "B",
        explanation: "Taxol (and Cisplatin) are life-saving drugs used in cancer therapy. They were initially isolated from plant and animal sources, representing chemistry's vital role in medicine.",
        ncertLine: "Page 2, Paragraph 2: 'Life saving drugs such as cisplatin and taxol, are effective in cancer therapy...'",
        whyOthersWrong: "Option A (AZT) is used for helping AIDS victims. C and D are general antibiotics, not specific to primary cancer therapy mentioned in the context of basic chemistry concepts.",
        memoryTrick: "Taxol takes a 'Toll' on cancer cells.",
        commonMistake: "Students often confuse AZT and Taxol. Remember A for AZT = AIDS.",
        pyqSimilarity: "High (AIPMT 2010, NEET 2018 related matching concepts)",
        neetProbability: "90%",
        difficulty: "Easy",
        topic: "Importance of Chemistry"
    },
    {
        id: 2,
        question: "In ancient India, the systematized knowledge of chemistry was known by several names. Which of the following was NOT one of them?",
        options: {
            A: "Rasayan Shastra",
            B: "Rasatantra",
            C: "Rasakriya",
            D: "Vaisheshika"
        },
        correctOption: "D",
        explanation: "In ancient India, chemistry was called Rasayan Shastra, Rasatantra, Rasakriya, or Rasavidya. Vaisheshika is an ancient Indian school of philosophy founded by Kanada, which postulated atomic theory (paramanu), but it is not the term for chemistry itself.",
        ncertLine: "Page 1: 'Chemistry was called Rasayan Shastra, Rasatantra, Rasakriya or Rasavidya.'",
        whyOthersWrong: "A, B, and C are explicitly mentioned in NCERT as names for chemistry.",
        memoryTrick: "All ancient chemistry names start with 'Rasa' (essence/juice).",
        commonMistake: "Assuming Vaisheshika is chemistry because it deals with atoms, whereas it's actually a philosophical system.",
        pyqSimilarity: "Medium (New NCERT pattern focus on Indian knowledge systems)",
        neetProbability: "85%",
        difficulty: "Medium",
        topic: "Development of Chemistry"
    },
    {
        id: 3,
        question: "Which of the following compounds is specifically mentioned in NCERT as being used for helping AIDS victims?",
        options: {
            A: "Cisplatin",
            B: "Azidothymidine (AZT)",
            C: "Chloroquine",
            D: "Paracetamol"
        },
        correctOption: "B",
        explanation: "Azidothymidine (AZT) is explicitly highlighted in the NCERT as a drug used for helping AIDS victims.",
        ncertLine: "Page 2: '...and AZT (Azidothymidine) is used for helping AIDS victims.'",
        whyOthersWrong: "Cisplatin is for cancer. Chloroquine is for malaria. Paracetamol is an analgesic/antipyretic.",
        memoryTrick: "A-Z-T aids A-I-D-S from A to Z.",
        commonMistake: "Confusing it with cancer drugs.",
        pyqSimilarity: "Very High",
        neetProbability: "95%",
        difficulty: "Easy",
        topic: "Importance of Chemistry"
    },
    {
        id: 4,
        question: "According to historical records, the Harappan civilization (2500-1700 BCE) showed proficiency in which of the following chemical processes?",
        options: {
            A: "Vulcanization of rubber",
            B: "Baking of bricks and pottery making",
            C: "Extraction of Aluminum via electrolysis",
            D: "Synthesis of artificial dyes"
        },
        correctOption: "B",
        explanation: "Archaeological findings at Mohenjodaro and Harappa show that baked bricks were used, and pottery was mass-produced, indicating the earliest applications of heat-induced chemical changes in clay.",
        ncertLine: "Page 1, 'Development of Chemistry': References to the Harappan civilization using baked bricks and glazed pottery.",
        whyOthersWrong: "Vulcanization (19th century), Aluminum electrolysis (1880s), and artificial dyes (1856) are modern discoveries.",
        memoryTrick: "Ancient Harappa = Hard Bricks.",
        commonMistake: "Overestimating the metallurgical capabilities of the era to include advanced electrolysis.",
        pyqSimilarity: "Low (Newly added historical context)",
        neetProbability: "70%",
        difficulty: "Easy",
        topic: "Development of Chemistry"
    },
    {
        id: 5,
        question: "Chemistry plays a crucial role in managing the environment. Which of the following refrigerants, responsible for ozone depletion, has been successfully replaced by safer alternatives due to chemical research?",
        options: {
            A: "Ammonia",
            B: "Liquid Nitrogen",
            C: "Chlorofluorocarbons (CFCs)",
            D: "Sulfur dioxide"
        },
        correctOption: "C",
        explanation: "CFCs were widely used as refrigerants and caused ozone layer depletion. Chemical research led to the synthesis of safer alternatives like HFCs.",
        ncertLine: "Page 2, Importance of Chemistry: 'Safer alternatives to environmentally hazardous refrigerants like CFCs (chlorofluorocarbons), responsible for ozone depletion in the stratosphere, have been successfully synthesised.'",
        whyOthersWrong: "Ammonia and SO2 are toxic but not the primary historical ozone depleters mentioned as successfully replaced refrigerants in this context. Liquid nitrogen is not a standard compressor refrigerant.",
        memoryTrick: "CFCs cause the Canopy (Ozone) to Crack.",
        commonMistake: "Confusing greenhouse gases with specific ozone-depleting refrigerants.",
        pyqSimilarity: "High (Environmental Chem overlap)",
        neetProbability: "88%",
        difficulty: "Easy",
        topic: "Importance of Chemistry"
    }
];

questionDatabase.push(  
    {  
        id: 6,  
        text: "Who among the following authored the ancient text 'Rasaratnakara' which deals with the extraction of metals?",  
        question: "Who among the following authored the ancient text 'Rasaratnakara' which deals with the extraction of metals?",  
        options: { A: "Sushruta", B: "Kanada", C: "Nagarjuna", D: "Charaka" },  
        correctOption: "C",  
        explanation: "Nagarjuna was a renowned ancient Indian scientist and alchemist who wrote Rasaratnakara, focusing on metal extraction and alchemy.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 7,  
        text: "The ancient Indian philosopher Kanada is best known for postulating which of the following theories?",  
        question: "The ancient Indian philosopher Kanada is best known for postulating which of the following theories?",  
        options: { A: "Theory of Relativity", B: "Atomic Theory (Paramanu)", C: "Theory of Evolution", D: "Wave Theory of Light" },  
        correctOption: "B",  
        explanation: "Acharya Kanada originally conceptualized the atomic theory in his Vaisheshika Sutra, terming the indivisible particle as 'Paramanu'.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 8,  
        text: "Which life-saving drug is utilized effectively in cancer therapy alongside Taxol?",  
        question: "Which life-saving drug is utilized effectively in cancer therapy alongside Taxol?",  
        options: { A: "Cisplatin", B: "Penicillin", C: "Chloroquine", D: "Paracetamol" },  
        correctOption: "A",  
        explanation: "Cisplatin and Taxol are specifically highlighted in NCERT as life-saving drugs used for cancer therapy.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 9,  
        text: "According to archaeological excavations, gypsum cement was primarily used in construction by which ancient civilization?",  
        question: "According to archaeological excavations, gypsum cement was primarily used in construction by which ancient civilization?",  
        options: { A: "Mauryan", B: "Harappan (Indus Valley)", C: "Gupta", D: "Vedic" },  
        correctOption: "B",  
        explanation: "The Harappan civilization utilized gypsum cement, containing lime, sand, and traces of calcium carbonate, for construction.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 10,  
        text: "The 'Rasopanishad' describes the preparation of which type of mixture in ancient India?",  
        question: "The 'Rasopanishad' describes the preparation of which type of mixture in ancient India?",  
        options: { A: "Gunpowder", B: "Fertilizers", C: "Plastics", D: "Dyes" },  
        correctOption: "A",  
        explanation: "Ancient Indian texts like Rasopanishad mention the preparation of gunpowder mixtures using sulfur, charcoal, and saltpeter.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 11,  
        text: "Which refrigerant is mentioned in NCERT as environmentally hazardous and responsible for stratospheric ozone depletion?",  
        question: "Which refrigerant is mentioned in NCERT as environmentally hazardous and responsible for stratospheric ozone depletion?",  
        options: { A: "Ammonia", B: "Liquid Nitrogen", C: "Chlorofluorocarbons (CFCs)", D: "Argon" },  
        correctOption: "C",  
        explanation: "CFCs are heavily implicated in stratospheric ozone depletion, prompting the chemical industry to synthesize safer alternatives.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 12,  
        text: "In ancient Indian metallurgical traditions, what is the iron pillar at Mehrauli in Delhi famous for?",  
        question: "In ancient Indian metallurgical traditions, what is the iron pillar at Mehrauli in Delhi famous for?",  
        options: { A: "High magnetic field", B: "Rust resistance", C: "Radioactivity", D: "Gold plating" },  
        correctOption: "B",  
        explanation: "The Delhi Iron Pillar is highly renowned globally for its extraordinary resistance to corrosion and rust over centuries.",  
        difficulty: "Easy",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 13,  
        text: "Which among the following was an ancient Indian term for 'alchemy' or 'chemistry'?",  
        question: "Which among the following was an ancient Indian term for 'alchemy' or 'chemistry'?",  
        options: { A: "Vastu Shastra", B: "Rasakriya", C: "Ayurveda", D: "Yoga Sutra" },  
        correctOption: "B",  
        explanation: "Chemistry in ancient India was known by names such as Rasayan Shastra, Rasatantra, Rasakriya, and Rasavidya.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 14,  
        text: "The synthesis of specific chemical materials has enabled the creation of optical fibers. What is their primary modern use?",  
        question: "The synthesis of specific chemical materials has enabled the creation of optical fibers. What is their primary modern use?",  
        options: { A: "Farming", B: "Water purification", C: "Telecommunications", D: "Food preservation" },  
        correctOption: "C",  
        explanation: "Advances in chemistry have facilitated the production of optical fibers, which are essential for modern telecommunications.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 15,  
        text: "Sushruta Samhita explains the importance of Alkalies. Which specific chemical application is detailed in this ancient text?",  
        question: "Sushruta Samhita explains the importance of Alkalies. Which specific chemical application is detailed in this ancient text?",  
        options: { A: "Distillation of alcohol", B: "Preparation of soaps", C: "Extraction of aluminum", D: "Vulcanization" },  
        correctOption: "B",  
        explanation: "Sushruta Samhita highlights the importance of alkalies and discusses the preparation of soaps using various plant ashes.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 16,  
        text: "What major agricultural problem has the chemical industry helped solve through the production of specific compounds?",  
        question: "What major agricultural problem has the chemical industry helped solve through the production of specific compounds?",  
        options: { A: "Soil erosion", B: "Lack of sunlight", C: "Pest control and crop yield", D: "Genetic mutation" },  
        correctOption: "C",  
        explanation: "Chemistry provides fertilizers, insecticides, and pesticides to improve crop yields and control agricultural pests.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 17,  
        text: "According to ancient texts, what was the primary component used by Indians for dyeing cloth like cotton and silk?",  
        question: "According to ancient texts, what was the primary component used by Indians for dyeing cloth like cotton and silk?",  
        options: { A: "Synthetic aniline", B: "Madder and turmeric", C: "Petrochemical derivatives", D: "Titanium dioxide" },  
        correctOption: "B",  
        explanation: "Ancient Indians used natural dyes derived from plants, such as madder, sunflower, and turmeric, for coloring textiles.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 18,  
        text: "The book 'Brihat Samhita' provides recipes for perfumes and cosmetics. Who is its author?",  
        question: "The book 'Brihat Samhita' provides recipes for perfumes and cosmetics. Who is its author?",  
        options: { A: "Varahamihira", B: "Aryabhata", C: "Chakrapani", D: "Patanjali" },  
        correctOption: "A",  
        explanation: "Varahamihira authored the Brihat Samhita, an ancient Indian encyclopedic text that includes preparations for cosmetics and perfumes.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 19,  
        text: "Which class of modern chemical materials is specifically cited in NCERT as replacing metals in various applications?",  
        question: "Which class of modern chemical materials is specifically cited in NCERT as replacing metals in various applications?",  
        options: { A: "Wood", B: "Ceramics and Polymers", C: "Glass", D: "Paper" },  
        correctOption: "B",  
        explanation: "Chemistry has led to the synthesis of conducting polymers, ceramics, and advanced plastics that frequently replace metals.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 20,  
        text: "Chakrapani discovered a chemical process associated with mustard oil and alkalis. What was the product?",  
        question: "Chakrapani discovered a chemical process associated with mustard oil and alkalis. What was the product?",  
        options: { A: "Gunpowder", B: "Soap", C: "Perfume", D: "Glass" },  
        correctOption: "B",  
        explanation: "Chakrapani is credited with discovering mustard oil soap by reacting the oil with alkalis.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 21,  
        text: "The massive copper statue of Buddha found in Sultanganj (dating back to the Gupta period) is evidence of ancient India's mastery in:",  
        question: "The massive copper statue of Buddha found in Sultanganj (dating back to the Gupta period) is evidence of ancient India's mastery in:",  
        options: { A: "Polymer chemistry", B: "Metallurgy", C: "Organic synthesis", D: "Nuclear chemistry" },  
        correctOption: "B",  
        explanation: "The Sultanganj Buddha is a prominent archaeological proof of advanced metallurgical techniques in ancient India.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 22,  
        text: "Which fundamental property of matter was discussed by Acharya Kanada centuries before John Dalton?",  
        question: "Which fundamental property of matter was discussed by Acharya Kanada centuries before John Dalton?",  
        options: { A: "Indivisibility of the ultimate particle", B: "Electron spin", C: "Isotopes", D: "Radioactive decay" },  
        correctOption: "A",  
        explanation: "Kanada postulated that matter consists of indivisible units called Paramanu, preceding Dalton's atomic theory.",  
        difficulty: "Easy",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 23,  
        text: "In the context of the Importance of Chemistry, what is the major goal of 'Green Chemistry'?",  
        question: "In the context of the Importance of Chemistry, what is the major goal of 'Green Chemistry'?",  
        options: { A: "Increasing toxic yields", B: "Extracting green pigments", C: "Reducing hazardous substances in chemical processes", D: "Promoting deforestation" },  
        correctOption: "C",  
        explanation: "Green chemistry focuses on designing products and processes that minimize or eliminate the use and generation of hazardous substances.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 24,  
        text: "Which of the following compounds was historically extracted from the bark of the Cinchona tree and used as an antimalarial?",  
        question: "Which of the following compounds was historically extracted from the bark of the Cinchona tree and used as an antimalarial?",  
        options: { A: "Aspirin", B: "Quinine", C: "Taxol", D: "AZT" },  
        correctOption: "B",  
        explanation: "While not explicitly focused on in the first intro page, quinine is the classic historical example of plant-derived medicines, showcasing chemistry's importance.",  
        difficulty: "Medium",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 25,  
        text: "Ancient Indians utilized the fermentation process for brewing. Which Veda mentions the fermentation of plant juices?",  
        question: "Ancient Indians utilized the fermentation process for brewing. Which Veda mentions the fermentation of plant juices?",  
        options: { A: "Rigveda", B: "Samaveda", C: "Yajurveda", D: "Atharvaveda" },  
        correctOption: "A",  
        explanation: "The Rigveda contains references to the fermentation of soma and sura, indicating early knowledge of biochemical processes.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 26,  
        text: "Chemistry provides materials like superconducting ceramics. These are primarily utilized in which modern application?",  
        question: "Chemistry provides materials like superconducting ceramics. These are primarily utilized in which modern application?",  
        options: { A: "Textile weaving", B: "Magnetic levitation and advanced electronics", C: "Paper manufacturing", D: "Water filtration" },  
        correctOption: "B",  
        explanation: "Superconducting ceramics, a product of advanced chemical synthesis, are crucial for magnetic levitation and high-end electronics.",  
        difficulty: "Medium",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 27,  
        text: "The discovery of glass objects in India dates back to which approximate period?",  
        question: "The discovery of glass objects in India dates back to which approximate period?",  
        options: { A: "1000 BCE", B: "500 CE", C: "1500 CE", D: "2000 CE" },  
        correctOption: "A",  
        explanation: "Archaeological evidence suggests the use and manufacture of glass in India dates as far back as 1000 BCE (e.g., Maski, Hastinapur).",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 28,  
        text: "Cisplatin is an important chemical complex used in medicine. What transition metal is central to its structure?",  
        question: "Cisplatin is an important chemical complex used in medicine. What transition metal is central to its structure?",  
        options: { A: "Iron", B: "Copper", C: "Platinum", D: "Zinc" },  
        correctOption: "C",  
        explanation: "Cisplatin contains Platinum as its central atom, critical for its function as a cancer-fighting drug.",  
        difficulty: "Medium",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 29,  
        text: "Which historical text provides comprehensive details on the preparation of distinct types of alkalis, classifying them into mild, caustic, and average?",  
        question: "Which historical text provides comprehensive details on the preparation of distinct types of alkalis, classifying them into mild, caustic, and average?",  
        options: { A: "Sushruta Samhita", B: "Arthashastra", C: "Manusmriti", D: "Ramayana" },  
        correctOption: "A",  
        explanation: "The Sushruta Samhita categorizes alkalis and details their preparation for medicinal and chemical uses.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 30,  
        text: "What is the primary significance of AZT in modern therapeutics?",  
        question: "What is the primary significance of AZT in modern therapeutics?",  
        options: { A: "Curing common cold", B: "Managing HIV/AIDS", C: "Treating tuberculosis", D: "Pain management" },  
        correctOption: "B",  
        explanation: "AZT (Azidothymidine) is a heavily cited example of chemistry's contribution to medicine, specifically for aiding AIDS victims.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 31,  
        text: "In the context of the Harappan civilization, what material was frequently glazed using chemical firing techniques?",  
        question: "In the context of the Harappan civilization, what material was frequently glazed using chemical firing techniques?",  
        options: { A: "Iron weapons", B: "Pottery", C: "Gold coins", D: "Diamond jewelry" },  
        correctOption: "B",  
        explanation: "Harappans were skilled in baking bricks and producing glazed pottery, showing early applied chemistry and thermodynamics.",  
        difficulty: "Easy",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 32,  
        text: "How has chemistry primarily impacted the field of electronics recently?",  
        question: "How has chemistry primarily impacted the field of electronics recently?",  
        options: { A: "By eliminating the need for electricity", B: "By synthesizing conducting polymers and miniaturized battery materials", C: "By restricting semiconductor usage", D: "By converting all devices to mechanical operation" },  
        correctOption: "B",  
        explanation: "Chemistry enables the creation of conducting polymers, advanced dielectrics, and battery materials for modern electronics.",  
        difficulty: "Medium",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 33,  
        text: "What ancient Indian text by Kautilya mentions the extraction of metals from ores?",  
        question: "What ancient Indian text by Kautilya mentions the extraction of metals from ores?",  
        options: { A: "Arthashastra", B: "Rigveda", C: "Upanishads", D: "Mahabharata" },  
        correctOption: "A",  
        explanation: "Kautilya's Arthashastra describes the mining of ores and the extraction of various metals.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 34,  
        text: "The fundamental concept of 'Chemistry' encompasses the study of matter's:",  
        question: "The fundamental concept of 'Chemistry' encompasses the study of matter's:",  
        options: { A: "Composition, structure, and properties", B: "Velocity and acceleration only", C: "Biological reproduction", D: "Gravitational pull" },  
        correctOption: "A",  
        explanation: "Chemistry is defined as the branch of science that studies the composition, properties, and structure of matter.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 35,  
        text: "According to the principles of Vaisheshika philosophy, a 'Paramanu' is:",  
        question: "According to the principles of Vaisheshika philosophy, a 'Paramanu' is:",  
        options: { A: "A type of ancient chemical dye", B: "An indivisible particle of matter", C: "A medicinal herb", D: "A type of ancient glass" },  
        correctOption: "B",  
        explanation: "In Vaisheshika philosophy, Paramanu refers to the ultimate, indivisible unit of matter (atom).",  
        difficulty: "Easy",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 36,  
        text: "Which of these environmental issues is being actively mitigated by the development of greener chemical alternatives?",  
        question: "Which of these environmental issues is being actively mitigated by the development of greener chemical alternatives?",  
        options: { A: "Tectonic plate movement", B: "Ozone layer depletion", C: "Solar eclipses", D: "Volcanic eruptions" },  
        correctOption: "B",  
        explanation: "Chemistry helps mitigate ozone layer depletion by synthesizing alternatives to CFCs.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 37,  
        text: "The paintings at Ajanta and Ellora caves utilize pigments that have survived for centuries. This highlights ancient India's knowledge in:",  
        question: "The paintings at Ajanta and Ellora caves utilize pigments that have survived for centuries. This highlights ancient India's knowledge in:",  
        options: { A: "Synthetic polymers", B: "Natural dyes and mineral pigments", C: "Nuclear chemistry", D: "Electroplating" },  
        correctOption: "B",  
        explanation: "The longevity of Ajanta cave paintings demonstrates a profound understanding of natural mineral pigments and chemical binders.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 38,  
        text: "The 'Rasaratnasamuccaya' is a classical text that elaborates on:",  
        question: "The 'Rasaratnasamuccaya' is a classical text that elaborates on:",  
        options: { A: "Aeronautics", B: "Metallurgical operations and alchemy", C: "Astrology", D: "Civil engineering" },  
        correctOption: "B",  
        explanation: "It is a prominent medieval Indian text detailing vast knowledge regarding chemical and metallurgical processes.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 39,  
        text: "What major role do synthetic polymers like PVC and Teflon play in modern industry due to chemical advancements?",  
        question: "What major role do synthetic polymers like PVC and Teflon play in modern industry due to chemical advancements?",  
        options: { A: "They are used as edible food additives", B: "They replace traditional materials providing durability and inertness", C: "They act as soil fertilizers", D: "They emit harmful radiation" },  
        correctOption: "B",  
        explanation: "Synthetic polymers offer chemical resistance, durability, and versatility, effectively replacing older materials in manufacturing.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 40,  
        text: "In historical Indian alchemy (Rasashastra), which element was predominantly revered and extensively used in medicinal formulations?",  
        question: "In historical Indian alchemy (Rasashastra), which element was predominantly revered and extensively used in medicinal formulations?",  
        options: { A: "Uranium", B: "Mercury (Parada)", C: "Helium", D: "Fluorine" },  
        correctOption: "B",  
        explanation: "Mercury, known as Parada, was the central element in Indian alchemical and medicinal formulations (Rasashastra).",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 41,  
        text: "Taxol is primarily extracted from which natural source before being adapted for cancer treatment?",  
        question: "Taxol is primarily extracted from which natural source before being adapted for cancer treatment?",  
        options: { A: "Pacific Yew tree bark", B: "Ocean algae", C: "Fungi", D: "Synthetic coal tar" },  
        correctOption: "A",  
        explanation: "Taxol was originally discovered and extracted from the bark of the Pacific Yew tree.",  
        difficulty: "Medium",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 42,  
        text: "What was the significance of 'Kshaar' as described in ancient Ayurvedic texts?",  
        question: "What was the significance of 'Kshaar' as described in ancient Ayurvedic texts?",  
        options: { A: "It was a term for acids", B: "It was a term for alkaline substances used in surgery and medicine", C: "It was a type of perfume", D: "It was an explosive" },  
        correctOption: "B",  
        explanation: "Kshaar refers to alkaline substances in Ayurveda, extensively documented by Sushruta for their corrosive and healing properties.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 43,  
        text: "The branch of chemistry that strictly deals with the estimation of quantities of substances is called?",  
        question: "The branch of chemistry that strictly deals with the estimation of quantities of substances is called?",  
        options: { A: "Organic Chemistry", B: "Analytical Chemistry", C: "Inorganic Chemistry", D: "Biochemistry" },  
        correctOption: "B",  
        explanation: "Analytical chemistry encompasses the qualitative and quantitative estimation of chemical components.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 44,  
        text: "In the context of early chemistry, which Indian city was historically famous for its production of Wootz steel?",  
        question: "In the context of early chemistry, which Indian city was historically famous for its production of Wootz steel?",  
        options: { A: "Delhi", B: "Chera/Tamil regions (South India)", C: "Kashmir", D: "Assam" },  
        correctOption: "B",  
        explanation: "Wootz steel, famous for making Damascus blades, was pioneeringly produced in South Indian regions in ancient times.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 45,  
        text: "What major challenge in the modern world is chemistry addressing through the development of fuel cells?",  
        question: "What major challenge in the modern world is chemistry addressing through the development of fuel cells?",  
        options: { A: "Overpopulation", B: "Clean and efficient energy generation", C: "Deforestation", D: "Space exploration logistics" },  
        correctOption: "B",  
        explanation: "Chemistry helps address the energy crisis by developing fuel cells that generate electricity efficiently with less pollution.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 46,  
        text: "Which of the following describes the 'Paramanu' according to Kanada?",  
        question: "Which of the following describes the 'Paramanu' according to Kanada?",  
        options: { A: "It is visible to the naked eye", B: "It can be infinitely divided", C: "It is spherical, indivisible, and eternal", D: "It has no mass" },  
        correctOption: "C",  
        explanation: "Kanada described the Paramanu as eternal, indestructible, and spherical in its ultimate state.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 47,  
        text: "Which specific chemical sector helps protect global food supplies from destruction by insects and fungi?",  
        question: "Which specific chemical sector helps protect global food supplies from destruction by insects and fungi?",  
        options: { A: "Petrochemicals", B: "Agrochemicals (Pesticides and Fungicides)", C: "Cosmetics", D: "Metallurgy" },  
        correctOption: "B",  
        explanation: "Agrochemicals, specifically pesticides and fungicides, are synthesized to protect crops and ensure food security.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 48,  
        text: "The ancient process of 'Cupellation' was primarily used for:",  
        question: "The ancient process of 'Cupellation' was primarily used for:",  
        options: { A: "Dyeing fabrics", B: "Extracting silver from lead ores", C: "Making glass", D: "Fermenting wine" },  
        correctOption: "B",  
        explanation: "Cupellation is a historical chemical process used to separate noble metals like silver and gold from base metals like lead.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 49,  
        text: "Chemistry plays a vital role in healthcare. Which of the following is an example of an analgesic synthesized by chemists?",  
        question: "Chemistry plays a vital role in healthcare. Which of the following is an example of an analgesic synthesized by chemists?",  
        options: { A: "Cisplatin", B: "Aspirin", C: "AZT", D: "Teflon" },  
        correctOption: "B",  
        explanation: "Aspirin is a widely used analgesic (pain reliever) formulated through chemical synthesis.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 50,  
        text: "Which ancient civilization's knowledge of chemistry is heavily documented through their advanced mummification processes?",  
        question: "Which ancient civilization's knowledge of chemistry is heavily documented through their advanced mummification processes?",  
        options: { A: "Egyptian", B: "Harappan", C: "Mayan", D: "Mesopotamian" },  
        correctOption: "A",  
        explanation: "While India had Rasayan, the Egyptians heavily applied chemistry (using natron and resins) in mummification.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 51,  
        text: "The term 'Rasavidya' primarily focused on which two major goals in ancient India?",  
        question: "The term 'Rasavidya' primarily focused on which two major goals in ancient India?",  
        options: { A: "Flight and astronomy", B: "Transmutation of base metals to gold and elixir of life", C: "Architecture and poetry", D: "Agriculture and trade" },  
        correctOption: "B",  
        explanation: "Like alchemy globally, Rasavidya heavily focused on transmuting lesser metals into gold and creating immortality elixirs.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 52,  
        text: "How has chemistry improved the longevity of modern structures?",  
        question: "How has chemistry improved the longevity of modern structures?",  
        options: { A: "By creating paints and anti-corrosive coatings", B: "By removing steel from buildings", C: "By promoting rust", D: "By utilizing untreated wood" },  
        correctOption: "A",  
        explanation: "Chemistry provides anti-corrosive paints, weather-resistant polymers, and strong alloys that dramatically increase structural lifespan.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 53,  
        text: "Which ancient Indian treatise provides evidence of early knowledge regarding the preparation of cosmetics, including hair dyes?",  
        question: "Which ancient Indian treatise provides evidence of early knowledge regarding the preparation of cosmetics, including hair dyes?",  
        options: { A: "Navanitakam", B: "Brihat Samhita", C: "Arthashastra", D: "Yogasutra" },  
        correctOption: "A",  
        explanation: "Historical texts like Navanitakam and Brihat Samhita contain recipes for cosmetics, hair dyes, and perfumes.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 54,  
        text: "What major advancement in the transportation sector relies heavily on the principles of electrochemistry?",  
        question: "What major advancement in the transportation sector relies relies heavily on the principles of electrochemistry?",  
        options: { A: "Steam engines", B: "Horse-drawn carriages", C: "Lithium-ion batteries for Electric Vehicles", D: "Sailboats" },  
        correctOption: "C",  
        explanation: "Modern electric vehicles depend on high-capacity lithium-ion batteries, a direct application of electrochemistry.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 55,  
        text: "Which metal was notably extracted using the 'zinc distillation' process first pioneered in Zawar, India?",  
        question: "Which metal was notably extracted using the 'zinc distillation' process first pioneered in Zawar, India?",  
        options: { A: "Copper", B: "Iron", C: "Zinc", D: "Gold" },  
        correctOption: "C",  
        explanation: "Ancient Indians at Zawar developed a highly sophisticated downward distillation technique for extracting pure zinc.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 56,  
        text: "In combating global warming, chemists are researching materials that can efficiently capture which greenhouse gas from the atmosphere?",  
        question: "In combating global warming, chemists are researching materials that can efficiently capture which greenhouse gas from the atmosphere?",  
        options: { A: "Oxygen", B: "Nitrogen", C: "Carbon Dioxide", D: "Argon" },  
        correctOption: "C",  
        explanation: "Carbon capture technology, rooted in chemical engineering, focuses on extracting and sequestering CO2 to fight climate change.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 57,  
        text: "The ancient text 'Rasahridaya' states that metals like gold and silver could be purified using:",  
        question: "The ancient text 'Rasahridaya' states that metals like gold and silver could be purified using:",  
        options: { A: "Water alone", B: "Various plant extracts and heating processes", C: "Chanting mantras only", D: "Freezing" },  
        correctOption: "B",  
        explanation: "Alchemical texts detail the purification (Shodhana) of metals using heat, plant extracts, and mild acids.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 58,  
        text: "Synthetic fibers like Nylon and Polyester are products of chemistry. What is their primary advantage over natural fibers?",  
        question: "Synthetic fibers like Nylon and Polyester are products of chemistry. What is their primary advantage over natural fibers?",  
        options: { A: "They decay very quickly", B: "They are highly durable, wrinkle-resistant, and cost-effective", C: "They are edible", D: "They absorb water easily" },  
        correctOption: "B",  
        explanation: "Synthetic fibers offer superior tensile strength, durability, and resistance to environmental degradation.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 59,  
        text: "Which Indian scientist is renowned for their contributions to the establishment of the modern chemical industry in India (e.g., Bengal Chemicals)?",  
        question: "Which Indian scientist is renowned for their contributions to the establishment of the modern chemical industry in India (e.g., Bengal Chemicals)?",  
        options: { A: "C.V. Raman", B: "Prafulla Chandra Ray", C: "Satyendra Nath Bose", D: "Homi Bhabha" },  
        correctOption: "B",  
        explanation: "Acharya P.C. Ray is known as the father of Indian chemistry and founded Bengal Chemicals & Pharmaceuticals.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 60,  
        text: "Which of the following industries is entirely dependent on the chemical processing of cellulose?",  
        question: "Which of the following industries is entirely dependent on the chemical processing of cellulose?",  
        options: { A: "Paper and Rayon industry", B: "Steel industry", C: "Glass industry", D: "Cement industry" },  
        correctOption: "A",  
        explanation: "Cellulose from plant pulp is chemically treated to manufacture paper and semi-synthetic fibers like Rayon.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 61,  
        text: "The concept of 'Dhatu-vada' in ancient Indian literature refers to:",  
        question: "The concept of 'Dhatu-vada' in ancient Indian literature refers to:",  
        options: { A: "The study of grammar", B: "The transmutation of base metals into noble metals", C: "Agricultural techniques", D: "Surgical procedures" },  
        correctOption: "B",  
        explanation: "Dhatu-vada translates to the metallurgical and alchemical processes primarily aimed at transforming metals.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 62,  
        text: "The synthesis of ammonia by the Haber process is a chemical milestone. Why is it critically important?",  
        question: "The synthesis of ammonia by the Haber process is a chemical milestone. Why is it critically important?",  
        options: { A: "It produces cooling gas for fridges", B: "It is the primary step in manufacturing nitrogenous fertilizers to feed the global population", C: "It creates high-grade plastics", D: "It purifies water" },  
        correctOption: "B",  
        explanation: "The Haber process produces ammonia, which is essential for creating the fertilizers that sustain global agriculture.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 63,  
        text: "In the history of chemistry, what significant discovery was made by Hennig Brand while attempting to find the Philosopher's Stone?",  
        question: "In the history of chemistry, what significant discovery was made by Hennig Brand while attempting to find the Philosopher's Stone?",  
        options: { A: "Oxygen", B: "Phosphorus", C: "Gold", D: "Hydrogen" },  
        correctOption: "B",  
        explanation: "Hennig Brand discovered phosphorus while distilling human urine in search of the Philosopher's Stone.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 64,  
        text: "Which class of chemical compounds has revolutionized data storage and modern computing hardware?",  
        question: "Which class of chemical compounds has revolutionized data storage and modern computing hardware?",  
        options: { A: "Alkali metals", B: "Semiconductors (like Silicon and Germanium)", C: "Halogens", D: "Noble gases" },  
        correctOption: "B",  
        explanation: "Semiconductors, purified and doped via chemical processes, are the foundation of microchips and modern computing.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 65,  
        text: "The ancient text 'Rasaratnakara' primarily deals with compounds of which metal?",  
        question: "The ancient text 'Rasaratnakara' primarily deals with compounds of which metal?",  
        options: { A: "Mercury", B: "Aluminum", C: "Uranium", D: "Titanium" },  
        correctOption: "A",  
        explanation: "Nagarjuna's Rasaratnakara deeply explores the chemistry and mystical properties associated with mercury (Parada).",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 66,  
        text: "What major health issue is addressed by the chemical synthesis of drugs like amoxicillin and cephalosporins?",  
        question: "What major health issue is addressed by the chemical synthesis of drugs like amoxicillin and cephalosporins?",  
        options: { A: "Viral infections", B: "Bacterial infections", C: "Vitamin deficiency", D: "Physical trauma" },  
        correctOption: "B",  
        explanation: "These are potent antibiotics synthesized chemically to fight bacterial infections, massively reducing mortality rates.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 67,  
        text: "The 'Iatrochemistry' phase in the development of chemistry was primarily concerned with:",  
        question: "The 'Iatrochemistry' phase in the development of chemistry was primarily concerned with:",  
        options: { A: "Making explosives", B: "Connecting chemistry to medicine and healing", C: "Extracting pure gold", D: "Creating synthetic dyes" },  
        correctOption: "B",  
        explanation: "Iatrochemistry (medical chemistry) was an era where alchemical concepts were applied specifically to find medical cures.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 68,  
        text: "How does chemistry contribute to forensic science?",  
        question: "How does chemistry contribute to forensic science?",  
        options: { A: "By solely relying on eyewitness accounts", B: "Through chemical analysis techniques like chromatography and spectroscopy to identify substances", C: "By altering evidence", D: "Chemistry has no role in forensics" },  
        correctOption: "B",  
        explanation: "Forensic chemistry utilizes analytical techniques like chromatography to analyze trace evidence at crime scenes.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 69,  
        text: "Ancient Indians discovered that adding certain materials to glass changed its color. What did they add to get blue glass?",  
        question: "Ancient Indians discovered that adding certain materials to glass changed its color. What did they add to get blue glass?",  
        options: { A: "Gold dust", B: "Copper and Cobalt compounds", C: "Silver nitrate", D: "Charcoal" },  
        correctOption: "B",  
        explanation: "Transition metal oxides, such as those of copper and cobalt, were historically added to molten glass to impart a blue color.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 70,  
        text: "Which of the following is a direct application of chemistry in the field of national defense?",  
        question: "Which of the following is a direct application of chemistry in the field of national defense?",  
        options: { A: "Manufacturing of synthetic explosives like TNT and RDX", B: "Training animals", C: "Designing uniforms", D: "Building wooden forts" },  
        correctOption: "A",  
        explanation: "The synthesis of high-energy materials and explosives like TNT is a crucial application of chemistry in defense.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 71,  
        text: "The systematic study of chemistry in Europe was vastly accelerated by the transition from alchemy to modern science. Who is often called the 'Father of Modern Chemistry' for his work on combustion?",  
        question: "The systematic study of chemistry in Europe was vastly accelerated by the transition from alchemy to modern science. Who is often called the 'Father of Modern Chemistry' for his work on combustion?",  
        options: { A: "Isaac Newton", B: "Antoine Lavoisier", C: "Robert Boyle", D: "Dmitri Mendeleev" },  
        correctOption: "B",  
        explanation: "Lavoisier debunked the phlogiston theory and established the law of conservation of mass, earning the title Father of Modern Chemistry.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 72,  
        text: "What vital role do chemical preservatives play in the food industry?",  
        question: "What vital role do chemical preservatives play in the food industry?",  
        options: { A: "They make food toxic", B: "They enhance the color indefinitely", C: "They inhibit microbial growth, preventing spoilage and extending shelf life", D: "They reduce the nutritional value to zero" },  
        correctOption: "C",  
        explanation: "Preservatives like sodium benzoate are synthesized to stop bacterial and fungal growth, safely preserving food.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 73,  
        text: "According to ancient texts, how was 'Kajjali' (black sulfide of mercury) utilized?",  
        question: "According to ancient texts, how was 'Kajjali' (black sulfide of mercury) utilized?",  
        options: { A: "As building cement", B: "As a highly potent Ayurvedic medicine", C: "As a textile dye", D: "As animal feed" },  
        correctOption: "B",  
        explanation: "Kajjali is a traditional Ayurvedic preparation made by triturating purified mercury and sulfur, used therapeutically.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 74,  
        text: "Chemistry has facilitated the transition from fossil fuels to renewable energy. Which device chemically converts solar energy directly into electricity?",  
        question: "Chemistry has facilitated the transition from fossil fuels to renewable energy. Which device chemically converts solar energy directly into electricity?",  
        options: { A: "Wind turbine", B: "Photovoltayic (Solar) cell", C: "Geothermal pump", D: "Nuclear reactor" },  
        correctOption: "B",  
        explanation: "Photovoltaic cells use semiconductor materials (a product of solid-state chemistry) to convert sunlight into electricity.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 75,  
        text: "Which famous ancient university in India had dedicated laboratories (Rasashalas) for chemical experimentation?",  
        question: "Which famous ancient university in India had dedicated laboratories (Rasashalas) for chemical experimentation?",  
        options: { A: "Oxford", B: "Nalanda", C: "Athens", D: "Sparta" },  
        correctOption: "B",  
        explanation: "Nalanda University was a major center for learning and had extensive laboratories for alchemical and metallurgical research.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 76,  
        text: "What major contribution has chemistry made to the field of sanitation and public health?",  
        question: "What major contribution has chemistry made to the field of sanitation and public health?",  
        options: { A: "Development of chlorination for drinking water", B: "Promotion of untreated river water", C: "Elimination of all bacteria globally", D: "Creation of artificial sunlight" },  
        correctOption: "A",  
        explanation: "Chemical disinfectants, particularly chlorine-based compounds, have drastically reduced waterborne diseases globally.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 77,  
        text: "In the history of atomic theory, what was the primary difference between Kanada's 'Paramanu' and Dalton's 'Atom'?",  
        question: "In the history of atomic theory, what was the primary difference between Kanada's 'Paramanu' and Dalton's 'Atom'?",  
        options: { A: "Dalton proved it mathematically; Kanada proposed it philosophically", B: "Kanada believed atoms could be split", C: "Dalton believed atoms had no mass", D: "There is no conceptual similarity" },  
        correctOption: "A",  
        explanation: "Kanada's theory was philosophical and observational, while Dalton grounded his theory in quantitative scientific laws.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 78,  
        text: "Which of the following advanced materials is synthesized to withstand extremely high temperatures in space shuttles?",  
        question: "Which of the following advanced materials is synthesized to withstand extremely high temperatures in space shuttles?",  
        options: { A: "Standard plastics", B: "Advanced carbon-carbon composites and ceramics", C: "Lead blocks", D: "Treated rubber" },  
        correctOption: "B",  
        explanation: "Chemistry provides high-performance ceramics and composites necessary for aerospace thermal shielding.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 79,  
        text: "Which ancient method of preparing iron involved heating iron ore with charcoal in a sealed clay crucible?",  
        question: "Which ancient method of preparing iron involved heating iron ore with charcoal in a sealed clay crucible?",  
        options: { A: "Bessemer process", B: "Wootz steel crucible process", C: "Electrolysis", D: "Fractional distillation" },  
        correctOption: "B",  
        explanation: "The Wootz steel process involved melting iron with carbon sources in sealed clay crucibles to create high-carbon steel.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 80,  
        text: "How does chemistry aid in protecting human skin from harmful ultraviolet (UV) radiation?",  
        question: "How does chemistry aid in protecting human skin from harmful ultraviolet (UV) radiation?",  
        options: { A: "By synthesizing sunscreen compounds like zinc oxide and avobenzone", B: "By altering the sun's emission", C: "By removing the ozone layer", D: "By changing human genetics" },  
        correctOption: "A",  
        explanation: "Chemists formulate sunscreens containing organic and inorganic molecules that absorb or reflect harmful UV rays.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 81,  
        text: "The concept of 'Panchamahabhuta' in ancient Indian science refers to:",  
        question: "The concept of 'Panchamahabhuta' in ancient Indian science refers to:",  
        options: { A: "The five great elements: Earth, Water, Fire, Air, Space", B: "Five types of metals", C: "Five stages of alchemy", D: "Five planetary bodies" },  
        correctOption: "A",  
        explanation: "Ancient Indian philosophy categorized all matter as combinations of the Panchamahabhuta (five great elements).",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 82,  
        text: "Which class of drugs, synthesized chemically, is primarily responsible for reducing anxiety and mental stress?",  
        question: "Which class of drugs, synthesized chemically, is primarily responsible for reducing anxiety and mental stress?",  
        options: { A: "Antibiotics", B: "Tranquilizers", C: "Analgesics", D: "Antacids" },  
        correctOption: "B",  
        explanation: "Tranquilizers are neurologically active drugs chemically synthesized for the treatment of stress and mental diseases.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 83,  
        text: "What historical finding at the Nagarjunakonda excavations highlights ancient India's practical application of chemistry?",  
        question: "What historical finding at the Nagarjunakonda excavations highlights ancient India's practical application of chemistry?",  
        options: { A: "Evidence of nuclear reactors", B: "Complex brick kilns and smelting furnaces", C: "Plastic toys", D: "Silicon microchips" },  
        correctOption: "B",  
        explanation: "Excavations revealed ancient kilns and smelting furnaces, proving large-scale metallurgical chemistry operations.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 84,  
        text: "The development of specific chemical catalysts is crucial in industry because they:",  
        question: "The development of specific chemical catalysts is crucial in industry because they:",  
        options: { A: "Increase the cost of production", B: "Consume huge amounts of energy", C: "Speed up reactions and lower activation energy without being consumed", D: "Stop chemical reactions safely" },  
        correctOption: "C",  
        explanation: "Catalysts allow industrial chemical processes to occur faster and at lower temperatures, saving immense energy and resources.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 85,  
        text: "The 'Soma' juice mentioned in Vedic texts, though its exact plant origin is debated, involved which fundamental chemical process?",  
        question: "The 'Soma' juice mentioned in Vedic texts, though its exact plant origin is debated, involved which fundamental chemical process?",  
        options: { A: "Sublimation", B: "Extraction and filtration", C: "Polymerization", D: "Electrolysis" },  
        correctOption: "B",  
        explanation: "The preparation of Soma involved crushing the plant, extracting the juice, and filtering it, representing early separation techniques.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 86,  
        text: "Which of these is a synthetic polymer that has profoundly changed the packaging industry due to its moldability and inertness?",  
        question: "Which of these is a synthetic polymer that has profoundly changed the packaging industry due to its moldability and inertness?",  
        options: { A: "Cellulose", B: "Silk", C: "Polyethylene", D: "Wool" },  
        correctOption: "C",  
        explanation: "Polyethylene is a ubiquitous synthetic plastic heavily used in packaging due to its chemical stability and ease of manufacture.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 87,  
        text: "The ancient text 'Rasendramangala' discusses the properties of:",  
        question: "The ancient text 'Rasendramangala' discusses the properties of:",  
        options: { A: "Soil mechanics", B: "Alchemical and metallurgical processes", C: "Ocean tides", D: "Plant biology" },  
        correctOption: "B",  
        explanation: "Like other 'Rasa' texts, Rasendramangala is a classic treatise on ancient Indian alchemy and metal working.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 88,  
        text: "Chemistry is central to the development of OLEDs (Organic Light Emitting Diodes). What is their primary application?",  
        question: "Chemistry is central to the development of OLEDs (Organic Light Emitting Diodes). What is their primary application?",  
        options: { A: "Water purification", B: "High-quality displays for TVs and smartphones", C: "Pesticide dispersion", D: "Surgical cutting" },  
        correctOption: "B",  
        explanation: "OLED technology relies on specially synthesized organic compounds that emit light, revolutionizing modern screen displays.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 89,  
        text: "In the history of chemistry, Robert Boyle is famously known for linking which two physical properties of gases?",  
        question: "In the history of chemistry, Robert Boyle is famously known for linking which two physical properties of gases?",  
        options: { A: "Mass and Velocity", B: "Pressure and Volume", C: "Temperature and Color", D: "Density and Magnetism" },  
        correctOption: "B",  
        explanation: "Boyle transitioned chemistry to a quantitative science by formulating Boyle's Law, relating gas pressure and volume.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 90,  
        text: "How does the chemical industry contribute to personal hygiene and sanitation?",  
        question: "How does the chemical industry contribute to personal hygiene and sanitation?",  
        options: { A: "By producing soaps, detergents, and sanitizers", B: "By banning water usage", C: "By promoting natural dirt accumulation", D: "By creating stronger viruses" },  
        correctOption: "A",  
        explanation: "The synthesis of surfactants, soaps, and alcohol-based sanitizers is a major contribution to global hygiene.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 91,  
        text: "Which ancient civilization developed the concept of 'Yin and Yang' in relation to the transformation of matter (early alchemy)?",  
        question: "Which ancient civilization developed the concept of 'Yin and Yang' in relation to the transformation of matter (early alchemy)?",  
        options: { A: "Indian", B: "Chinese", C: "Greek", D: "Mayan" },  
        correctOption: "B",  
        explanation: "Chinese alchemy historically relied heavily on the philosophical balance of Yin and Yang to explain chemical transformations.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 92,  
        text: "What vital fluid does clinical chemistry analyze to diagnose various human diseases?",  
        question: "What vital fluid does clinical chemistry analyze to diagnose various human diseases?",  
        options: { A: "Ocean water", B: "Blood and urine", C: "Tree sap", D: "Motor oil" },  
        correctOption: "B",  
        explanation: "Clinical chemistry involves biochemical analysis of bodily fluids like blood and urine for medical diagnostics.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 93,  
        text: "The Greek philosopher Democritus used the term 'atomos'. What does it mean?",  
        question: "The Greek philosopher Democritus used the term 'atomos'. What does it mean?",  
        options: { A: "Powerful", B: "Indivisible", C: "Invisible", D: "Explosive" },  
        correctOption: "B",  
        explanation: "Similar to Kanada's Paramanu, Democritus coined 'atomos' meaning that which cannot be cut or divided.",  
        difficulty: "Easy",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 94,  
        text: "Which of these is an example of chemistry helping in the preservation of ancient monuments?",  
        question: "Which of these is an example of chemistry helping in the preservation of ancient monuments?",  
        options: { A: "Using acidic rain to clean stones", B: "Applying synthetic polymer coatings to stop weathering", C: "Replacing stones with plastic", D: "Painting over hieroglyphs" },  
        correctOption: "B",  
        explanation: "Chemists formulate specialized protective coatings to consolidate and protect historical stonework from environmental decay.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 95,  
        text: "Which ancient process was specifically used to extract perfume essential oils from flowers like roses?",  
        question: "Which ancient process was specifically used to extract perfume essential oils from flowers like roses?",  
        options: { A: "Centrifugation", B: "Distillation", C: "Chromatography", D: "Electrolysis" },  
        correctOption: "B",  
        explanation: "Ancient societies, including in India and the Middle East, utilized early distillation apparatus to extract essential oils.",  
        difficulty: "Medium",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 96,  
        text: "Which important chemical element is extracted from the air using fractional distillation to assist patients with respiratory issues?",  
        question: "Which important chemical element is extracted from the air using fractional distillation to assist patients with respiratory issues?",  
        options: { A: "Carbon dioxide", B: "Nitrogen", C: "Oxygen", D: "Helium" },  
        correctOption: "C",  
        explanation: "Medical-grade oxygen is chemically separated from liquid air and is crucial for treating respiratory distress.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 97,  
        text: "The philosopher's stone (Paras) in alchemical lore was supposed to possess which remarkable property?",  
        question: "The philosopher's stone (Paras) in alchemical lore was supposed to possess which remarkable property?",  
        options: { A: "It could turn any base metal into pure gold", B: "It generated infinite electricity", C: "It allowed time travel", D: "It was lighter than air" },  
        correctOption: "A",  
        explanation: "In both Indian (Paras) and Western alchemy, the philosopher's stone was a mythical substance believed capable of transmuting base metals into gold.",  
        difficulty: "Easy",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 98,  
        text: "How has chemistry primarily impacted modern warfare?",  
        question: "How has chemistry primarily impacted modern warfare?",  
        options: { A: "By creating stronger wooden shields", B: "By synthesizing propellants, high explosives, and chemical deterrents", C: "By removing weapons completely", D: "By altering gravity" },  
        correctOption: "B",  
        explanation: "Chemistry heavily dictates defense capabilities through the creation of propellants, explosives, and advanced armor materials.",  
        difficulty: "Medium",  
        topic: "Importance of Chemistry"  
    },  
    {  
        id: 99,  
        text: "Which ancient Indian text provides comprehensive information on the metallurgy of zinc?",  
        question: "Which ancient Indian text provides comprehensive information on the metallurgy of zinc?",  
        options: { A: "Rigveda", B: "Rasaratnakara", C: "Kamasutra", D: "Upanishads" },  
        correctOption: "B",  
        explanation: "Texts like Rasaratnakara and Rasaratnasamuccaya provide detailed processes for extracting and purifying zinc.",  
        difficulty: "Hard",  
        topic: "Development of Chemistry"  
    },  
    {  
        id: 100,  
        text: "What major future global challenge is the discipline of chemistry most actively working to solve through 'Green Synthesis'?",  
        question: "What major future global challenge is the discipline of chemistry most actively working to solve through 'Green Synthesis'?",  
        options: { A: "Space colonization", B: "Sustainable development and pollution elimination", C: "Time travel mechanisms", D: "Creating black holes" },  
        correctOption: "B",  
        explanation: "Green Chemistry is the ultimate tool for ensuring sustainable development, aiming to eliminate toxic waste and pollution globally.",  
        difficulty: "Easy",  
        topic: "Importance of Chemistry"  
    }  
);