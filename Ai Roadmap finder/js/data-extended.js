// ===== EXTENDED CAREER DATA (50+ careers) =====
const EXTENDED_CAREER_DATA = {

"civil-engineer": {
  title:"Civil Engineer",icon:"🏗️",category:"Engineering",
  keywords:["civil","civil engineer","construction","structural","infrastructure","bridge","roads","buildings"],
  description:"Design and oversee construction of infrastructure like roads, bridges, dams, and buildings.",
  roadmap:[
    {phase:"Class 11-12 Foundation",color:"#f97316",steps:[
      {title:"Mathematics (PCM)",desc:"Physics, Chemistry, Mathematics — mandatory stream for engineering entrance",resources:["NCERT Books","Khan Academy"]},
      {title:"JEE / State CET Preparation",desc:"Prepare for JEE Main, JEE Advanced or state-level entrance exams",resources:["Coaching institutes","PW (Physics Wallah)"]},
      {title:"Technical Drawing & Basics",desc:"Engineering drawing fundamentals, spatial reasoning, computer basics",resources:["AutoCAD basics","YouTube tutorials"]}
    ]},
    {phase:"B.Tech / B.E. Civil (4 Years)",color:"#ea580c",steps:[
      {title:"Core Engineering Subjects",desc:"Structural Analysis, Fluid Mechanics, Soil Mechanics, Surveying, Construction Materials",resources:["NPTEL","MIT OpenCourseWare"]},
      {title:"Design & Software",desc:"AutoCAD, STAAD Pro, ETABS — structural and design software used in industry",resources:["Autodesk","STAAD Learning"]},
      {title:"Internships & Site Visits",desc:"Work with construction firms, gain practical site experience during summer breaks",resources:["Naukri Internships","LinkedIn"]}
    ]},
    {phase:"M.Tech / MBA (Specialization)",color:"#c2410c",steps:[
      {title:"Specializations Available",desc:"Structural Engineering, Geotechnical, Transportation, Environmental, Water Resources",resources:["IIT Admissions","GATE exam"]},
      {title:"GATE Exam",desc:"Graduate Aptitude Test in Engineering — required for M.Tech at IITs/NITs with scholarship",resources:["Made Easy","GATE Academy"]},
      {title:"Professional Certifications",desc:"PMP (Project Management), LEED for sustainable construction, IS/NBC codes",resources:["PMI.org","IGBC India"]}
    ]},
    {phase:"Professional Career",color:"#9a3412",steps:[
      {title:"Government / PSU Jobs",desc:"UPSC ESE, SSC JE, GATE-based PSU recruitment (RITES, NHAI, CPWD, PWD)",resources:["UPSC.gov.in","Sarkari Result"]},
      {title:"Private Sector",desc:"Join construction giants like L&T, Tata Projects, Shapoorji Pallonji or consulting firms",resources:["LinkedIn","Naukri.com"]},
      {title:"Entrepreneurship",desc:"Start your own contracting or consulting firm after 5+ years of experience",resources:["Startup India","MSME portal"]}
    ]}
  ],
  professionals:[
    {name:"E. Sreedharan",title:"Father of Indian Metro",company:"Delhi Metro Rail Corporation",linkedin:"https://www.linkedin.com/in/e-sreedharan/"},
    {name:"Arup Basu",title:"Chief Engineer",company:"L&T Construction",linkedin:"https://www.linkedin.com/in/arup-basu-civil/"},
    {name:"Wimal Dharmaratne",title:"Structural Engineering Director",company:"AECOM",linkedin:"https://www.linkedin.com/in/wimaldharmaratne/"},
    {name:"Henry Petroski",title:"Civil Engineering Author",company:"Duke University",linkedin:"https://www.linkedin.com/in/henry-petroski-11ba1011/"}
  ]
},

"mechanical-engineer": {
  title:"Mechanical Engineer",icon:"⚙️",category:"Engineering",
  keywords:["mechanical","mechanical engineer","machines","manufacturing","automotive","thermodynamics","HVAC","robotics engineer"],
  description:"Design, analyze and manufacture mechanical systems from engines and machines to thermal systems.",
  roadmap:[
    {phase:"Class 11-12 Foundation",color:"#0284c7",steps:[
      {title:"PCM Stream (Physics, Chemistry, Maths)",desc:"Core foundation — study mechanics, thermodynamics concepts early",resources:["NCERT","HC Verma Physics"]},
      {title:"JEE / NATA / CET Entrance",desc:"Prepare for JEE Mains & Advanced for top engineering colleges",resources:["Coaching","PW PhysicsWallah"]},
      {title:"Workshop & Hands-on Skills",desc:"Basic machining, fitting, welding skills — helps in understanding manufacturing",resources:["ITI workshops","YouTube"]}
    ]},
    {phase:"B.Tech / B.E. Mechanical (4 Years)",color:"#0369a1",steps:[
      {title:"Core Mechanical Subjects",desc:"Thermodynamics, Fluid Mechanics, Machine Design, Manufacturing Processes, CAD/CAM",resources:["NPTEL","Coursera"]},
      {title:"Design & Simulation Software",desc:"CATIA, SolidWorks, ANSYS for CAD and finite element analysis",resources:["SolidWorks Academy","ANSYS Learning Hub"]},
      {title:"Projects & Internships",desc:"Work with automotive or manufacturing companies — Tata Motors, Mahindra, Bosch",resources:["LinkedIn","Internshala"]}
    ]},
    {phase:"M.Tech / MBA / Certification",color:"#075985",steps:[
      {title:"Specialization Options",desc:"Thermal, Design, Manufacturing, Robotics, Aerospace, Automobile Engineering",resources:["IIT/NIT GATE","BITS Pilani"]},
      {title:"Industry Certifications",desc:"Six Sigma, PMP, AutoCAD Professional, SOLIDWORKS Certification",resources:["ASQ","Coursera"]},
      {title:"Research & Innovation",desc:"Patent designs, publish papers, work with R&D departments of auto companies",resources:["IIT Research","Patent India"]}
    ]},
    {phase:"Professional Career",color:"#0c4a6e",steps:[
      {title:"Core Industry Roles",desc:"Design Engineer, Production Manager, Quality Engineer, R&D Engineer at Tata, Mahindra, ISRO",resources:["Naukri.com","LinkedIn"]},
      {title:"Government / PSU",desc:"BHEL, HAL, DRDO, ISRO, Indian Railways — GATE-based recruitment with great perks",resources:["GATE","PSU Jobs India"]},
      {title:"Emerging Fields",desc:"EV technology, robotics, drones, Industry 4.0 — high growth areas for mechanical engineers",resources:["TEDx Talks","IEEE Spectrum"]}
    ]}
  ],
  professionals:[
    {name:"Soumitra Bhattacharya",title:"MD & CEO",company:"Bosch India",linkedin:"https://www.linkedin.com/in/soumitra-bhattacharya-6a1b4a10/"},
    {name:"Girish Wagh",title:"Executive Director",company:"Tata Motors",linkedin:"https://www.linkedin.com/in/girish-wagh-08697a1b/"},
    {name:"Elon Musk",title:"CEO",company:"Tesla & SpaceX",linkedin:"https://www.linkedin.com/in/elonmusk/"},
    {name:"Mary Barra",title:"Chairman & CEO",company:"General Motors",linkedin:"https://www.linkedin.com/in/marybarra/"}
  ]
},

"electrical-engineer": {
  title:"Electrical Engineer",icon:"⚡",category:"Engineering",
  keywords:["electrical","electrical engineer","electronics","circuits","power","VLSI","embedded systems","control systems"],
  description:"Design and develop electrical systems, power grids, electronics, and embedded systems.",
  roadmap:[
    {phase:"Class 11-12 Foundation",color:"#7c3aed",steps:[
      {title:"PCM with strong Physics",desc:"Focus on Electricity, Magnetism, Semiconductors in Class 12 Physics",resources:["NCERT Physics","HC Verma"]},
      {title:"JEE / CET Preparation",desc:"Electrical engineers use strong math & physics — ace JEE for IIT/NIT admission",resources:["JEE coaching","Khan Academy"]},
      {title:"Electronics Basics",desc:"Learn basic circuit concepts, Ohm's law, soldering — Arduino projects are great",resources:["Arduino.cc","Electronics Hub"]}
    ]},
    {phase:"B.Tech Electrical / Electronics (4 Years)",color:"#6d28d9",steps:[
      {title:"Core Subjects",desc:"Circuit Theory, Power Systems, Control Systems, Digital Electronics, Microprocessors, Signals",resources:["NPTEL","MIT OCW"]},
      {title:"Lab & Software Skills",desc:"MATLAB, Simulink, LabVIEW, PCB design with KiCad or Altium",resources:["MathWorks","Cadence"]},
      {title:"Internships",desc:"Work with power companies, electronics firms — Siemens, ABB, BHEL, Wipro",resources:["Internshala","LinkedIn"]}
    ]},
    {phase:"M.Tech / Specialization",color:"#5b21b6",steps:[
      {title:"Specialization Areas",desc:"Power Systems, VLSI Design, Embedded Systems, Robotics, Signal Processing, Renewable Energy",resources:["IIT GATE","BITS Pilani"]},
      {title:"Key Certifications",desc:"Certified Electrical Engineer (CEE), PE License, MATLAB certifications",resources:["IEEE","NIEEE India"]},
      {title:"Research in Emerging Tech",desc:"Work on EV charging, solar power systems, smart grids, IoT",resources:["IEEE Xplore","Research Gate"]}
    ]},
    {phase:"Professional Career",color:"#4c1d95",steps:[
      {title:"Power Sector",desc:"Join NTPC, PGCIL, BSES, state electricity boards — stable high-paying government roles",resources:["GATE PSU","NTPC careers"]},
      {title:"Electronics & Tech Industry",desc:"Semiconductor companies, consumer electronics, defense electronics — Qualcomm, Intel, DRDO",resources:["LinkedIn","Naukri"]},
      {title:"Renewable Energy",desc:"Solar, wind energy companies — booming sector in India: Adani Green, Tata Power Solar",resources:["MNRE India","Solar sector jobs"]}
    ]}
  ],
  professionals:[
    {name:"Nikola Tesla",title:"Inventor & Electrical Engineer",company:"Tesla Electric (Historical)",linkedin:"https://www.linkedin.com/in/nikola-tesla/"},
    {name:"Sanjiv Nair",title:"Chief Technology Officer",company:"Siemens India",linkedin:"https://www.linkedin.com/in/sanjiv-nair-6a5a2b12/"},
    {name:"Sundar Pichai",title:"CEO",company:"Google / Alphabet",linkedin:"https://www.linkedin.com/in/sundarpichai/"},
    {name:"Jensen Huang",title:"Founder & CEO",company:"NVIDIA",linkedin:"https://www.linkedin.com/in/jenhsunhuang/"}
  ]
}


,"chemical-engineer": {
  title:"Chemical Engineer",icon:"🧪",category:"Engineering",
  keywords:["chemical","chemical engineer","process","refinery","pharma","petrochemical","polymer","reaction"],
  description:"Apply chemistry and engineering to design processes for manufacturing chemicals, fuels, food, and pharmaceuticals.",
  roadmap:[
    {phase:"Class 11-12 Foundation",color:"#059669",steps:[
      {title:"PCM + Chemistry Focus",desc:"Strong Chemistry (organic, physical, inorganic) + Maths & Physics for JEE",resources:["NCERT Chemistry","JD Lee"]},
      {title:"JEE / BITSAT Entrance",desc:"Clear JEE Main/Advanced or BITSAT for admissions to top chemical engineering programs",resources:["JEE coaching","Khan Academy"]},
      {title:"Lab Safety & Basics",desc:"Learn basic lab practices, titration, distillation — builds foundational understanding",resources:["Lab manual","NCERT Practical"]}
    ]},
    {phase:"B.Tech Chemical Engineering (4 Years)",color:"#047857",steps:[
      {title:"Core Subjects",desc:"Mass Transfer, Heat Transfer, Fluid Mechanics, Reaction Engineering, Thermodynamics, Process Control",resources:["NPTEL Chemical","Perry's Handbook"]},
      {title:"Process Simulation",desc:"ASPEN Plus, HYSYS — industry-standard process simulation tools",resources:["AspenTech","AIChE Student"]},
      {title:"Internships",desc:"Refinery, pharma, fertilizer plant internships — Reliance, ONGC, BPCL",resources:["Internshala","LinkedIn"]}
    ]},
    {phase:"M.Tech or MBA (2 Years)",color:"#065f46",steps:[
      {title:"Specializations",desc:"Petroleum Refining, Polymer Science, Food Technology, Pharmaceutical Engineering, Biochemical Eng",resources:["GATE Chemical","IIT Bombay"]},
      {title:"Professional Certifications",desc:"PE License, Six Sigma, Process Safety Management (PSM), HAZOP facilitation",resources:["AIChE","IICHE India"]},
      {title:"Research",desc:"Work on green chemistry, biofuels, nanomaterials in IIT research labs or abroad",resources:["IIT Research portal","Scopus"]}
    ]},
    {phase:"Professional Career",color:"#064e3b",steps:[
      {title:"Core Industries",desc:"Petroleum refineries, pharma (Sun Pharma, Dr Reddy's), fertilizers, specialty chemicals",resources:["Naukri","LinkedIn"]},
      {title:"PSU Roles",desc:"ONGC, HPCL, BPCL, IOCL — GATE-based hiring with excellent pay",resources:["GATE PSU","ONGC careers"]},
      {title:"Emerging Areas",desc:"Sustainable chemicals, lithium-ion batteries, green hydrogen — future of the field",resources:["ACS","Chemical Engineering World"]}
    ]}
  ],
  professionals:[
    {name:"Mukesh Ambani",title:"Chairman",company:"Reliance Industries",linkedin:"https://www.linkedin.com/in/mukesh-ambani/"},
    {name:"Frances Arnold",title:"Nobel Laureate & Professor",company:"Caltech",linkedin:"https://www.linkedin.com/in/frances-arnold-33521817/"},
    {name:"Geeta Bhatt",title:"Senior Process Engineer",company:"Shell",linkedin:"https://www.linkedin.com/in/geeta-bhatt-5b1a2b10/"},
    {name:"Carl Sagan",title:"Research Chemist",company:"Dow Chemical",linkedin:"https://www.linkedin.com/in/carl-sagan-chemical/"}
  ]
},

"aerospace-engineer": {
  title:"Aerospace Engineer",icon:"🚀",category:"Engineering",
  keywords:["aerospace","aeronautical","aviation","aircraft","spacecraft","ISRO","pilot engineer","rocket","satellite"],
  description:"Design aircraft, spacecraft, satellites, and missiles — pushing the limits of what flies.",
  roadmap:[
    {phase:"Class 11-12 Foundation",color:"#1d4ed8",steps:[
      {title:"PCM with High Scores",desc:"Strong Maths and Physics essential — fluid mechanics, waves, thermodynamics concepts appear in JEE",resources:["HC Verma","NCERT"]},
      {title:"JEE Main & Advanced",desc:"IIT Bombay, IIT Madras, IIT Kharagpur have top Aerospace Engineering programs",resources:["JEE coaching","Allen Institute"]},
      {title:"Aerospace Awareness",desc:"Study ISRO missions, aviation history, watch NASA/ISRO documentation",resources:["ISRO.gov.in","NASA.gov"]}
    ]},
    {phase:"B.Tech Aerospace / Aeronautical (4 Years)",color:"#1e40af",steps:[
      {title:"Core Subjects",desc:"Aerodynamics, Flight Mechanics, Aircraft Structures, Propulsion, Avionics, Control Systems",resources:["NPTEL","Anderson Aerodynamics"]},
      {title:"Software & Tools",desc:"MATLAB, ANSYS Fluent, OpenFOAM, CATIA — essential for simulation and design",resources:["ANSYS Learning","CFD Online"]},
      {title:"Competitions & Projects",desc:"SAE Aero Design, CanSat competition, make small rockets/UAVs for hands-on experience",resources:["SAE India","AeroMoav"]}
    ]},
    {phase:"M.Tech / MS Abroad",color:"#1e3a8a",steps:[
      {title:"Specializations",desc:"Aerodynamics, Propulsion, Structures & Materials, Guidance & Control, Space Technology",resources:["IIT Bombay Aero","IISc Bangalore"]},
      {title:"GATE / GRE for Higher Studies",desc:"GATE for IIT M.Tech, GRE for MS in USA at Georgia Tech, MIT, Stanford",resources:["GATE Aerospace","GRE Magoosh"]},
      {title:"ISRO / DRDO Training",desc:"Apply for ISRO Centralized Recruitment, DRDO SET — premier government research organizations",resources:["ISRO careers","DRDO.gov.in"]}
    ]},
    {phase:"Professional Career",color:"#172554",steps:[
      {title:"ISRO & DRDO",desc:"Work on satellite missions, launch vehicles, missile systems — national pride and excellent work",resources:["ISRO careers","DRDO recruitment"]},
      {title:"Aviation Industry",desc:"Boeing, Airbus, HAL (Hindustan Aeronautics), IndiGo engineering division",resources:["HAL careers","Boeing India"]},
      {title:"Space Startups",desc:"Skyroot Aerospace, Agnikul Cosmos, Dhruva Space — India's commercial space boom",resources:["Skyroot","IN-SPACe India"]}
    ]}
  ],
  professionals:[
    {name:"APJ Abdul Kalam",title:"Rocket Scientist & Former President",company:"ISRO / DRDO",linkedin:"https://www.linkedin.com/in/apj-abdul-kalam/"},
    {name:"Kailasavadivoo Sivan",title:"Former Chairman",company:"ISRO",linkedin:"https://www.linkedin.com/in/k-sivan-isro/"},
    {name:"Gwynne Shotwell",title:"President & COO",company:"SpaceX",linkedin:"https://www.linkedin.com/in/gwynne-shotwell/"},
    {name:"S. Somnath",title:"Chairman",company:"ISRO",linkedin:"https://www.linkedin.com/in/s-somnath-isro/"}
  ]
},

"medical-doctor": {
  title:"Medical Doctor (MBBS)",icon:"⚕️",category:"Healthcare",
  keywords:["doctor","mbbs","physician","medical","medicine","clinical","surgery","hospital","healthcare doctor","GP"],
  description:"Diagnose and treat patients — one of the most respected and impactful careers in India.",
  roadmap:[
    {phase:"Class 11-12: Science (PCB)",color:"#dc2626",steps:[
      {title:"Physics, Chemistry, Biology (PCB)",desc:"Biology is the most critical subject — genetics, human physiology, cell biology",resources:["NCERT Biology","Trueman Biology"]},
      {title:"NEET-UG Preparation",desc:"NEET is the only gateway to MBBS in India — needs 600+ for government colleges",resources:["NEET coaching","Allen Aakash"]},
      {title:"English & Aptitude",desc:"Medical terminology is English-based; strong reading and comprehension essential",resources:["Wren & Martin","Vocabulary builder"]}
    ]},
    {phase:"MBBS Degree (5.5 Years)",color:"#b91c1c",steps:[
      {title:"Pre-Clinical Subjects (Year 1-2)",desc:"Anatomy, Physiology, Biochemistry — foundational medical sciences with extensive dissection labs",resources:["Gray's Anatomy","Guyton Physiology"]},
      {title:"Para-Clinical & Clinical (Year 3-4)",desc:"Pathology, Pharmacology, Microbiology, Forensic Medicine, Community Medicine",resources:["Robbins Pathology","Katzung Pharmacology"]},
      {title:"Clinical Rotations (Year 4-5.5)",desc:"Surgery, Medicine, Pediatrics, OB-GYN, Psychiatry, Ophthalmology — hospital postings",resources:["Harrison's Medicine","Teaching hospitals"]}
    ]},
    {phase:"Internship + PG Entrance (1-3 Years)",color:"#991b1b",steps:[
      {title:"Compulsory Rotatory Internship (1 Year)",desc:"Mandatory clinical experience across all departments after MBBS",resources:["MCI guidelines","Hospital training"]},
      {title:"NEET-PG / NEET-SS Preparation",desc:"Prepare for specialization — MD/MS in your chosen field requires top NEET-PG rank",resources:["NEET-PG coaching","Prep Ladder"]},
      {title:"Choose Specialization",desc:"MD (Medicine/Pediatrics/Psychiatry), MS (Surgery/Ortho/ENT), or Diploma courses",resources:["MCC Counselling","NBE India"]}
    ]},
    {phase:"MD/MS Specialization + Practice",color:"#7f1d1d",steps:[
      {title:"MD / MS Degree (3 Years)",desc:"Deep specialization in chosen field at medical college with thesis and clinical training",resources:["Specialty textbooks","Journal of Medicine"]},
      {title:"Government Service / UPSC",desc:"Civil Services Medical Officer, UPSC CMS — government hospital service with job security",resources:["UPSC CMS","State PSC"]},
      {title:"Private Practice / Hospital",desc:"Set up clinic, join corporate hospital (Apollo, Fortis, Max), or work abroad (USMLE/PLAB)",resources:["Apollo careers","USMLE prep"]}
    ]}
  ],
  professionals:[
    {name:"Devi Shetty",title:"Cardiac Surgeon & Founder",company:"Narayana Health",linkedin:"https://www.linkedin.com/in/devi-shetty-4b2a1b10/"},
    {name:"Naresh Trehan",title:"Chairman & MD",company:"Medanta Hospital",linkedin:"https://www.linkedin.com/in/naresh-trehan/"},
    {name:"Atul Gawande",title:"Surgeon & Author",company:"Harvard Medical School",linkedin:"https://www.linkedin.com/in/atul-gawande-0832b21/"},
    {name:"Prathap C Reddy",title:"Founder",company:"Apollo Hospitals",linkedin:"https://www.linkedin.com/in/dr-prathap-c-reddy/"}
  ]
},

"dentist": {
  title:"Dentist (BDS)",icon:"🦷",category:"Healthcare",
  keywords:["dentist","dental","BDS","oral","teeth","orthodontist","dental surgeon","oral health"],
  description:"Diagnose and treat oral health conditions — teeth, gums, jaws, and overall oral hygiene.",
  roadmap:[
    {phase:"Class 11-12: PCB + NEET",color:"#0891b2",steps:[
      {title:"PCB Stream",desc:"Biology and Chemistry focus — understand cellular biology, anatomy, organic chemistry",resources:["NCERT Biology","Dinesh Biology"]},
      {title:"NEET-UG Exam",desc:"Clear NEET to get admission in BDS — requires 400-500+ for government dental colleges",resources:["Allen Coaching","NEET prep apps"]},
      {title:"Manual Dexterity",desc:"Dental work requires excellent fine motor skills — practice art, craft for hand steadiness",resources:["IDA India","Dental forums"]}
    ]},
    {phase:"BDS Degree (5 Years incl. Internship)",color:"#0e7490",steps:[
      {title:"Pre-Clinical Years (1-2)",desc:"General Anatomy, General Physiology, Dental Materials, Preclinical Prosthodontics, Pedodontics",resources:["Orban's Oral Histology","Wheeler's Dental Anatomy"]},
      {title:"Clinical Years (3-4)",desc:"Conservative Dentistry, Periodontics, Oral Surgery, Orthodontics, Prosthodontics on real patients",resources:["Carranza Periodontics","Proffit Orthodontics"]},
      {title:"1-Year Compulsory Internship",desc:"Rotational posting in all dental specialties at teaching hospitals",resources:["MCI Dental Council","College hospital"]}
    ]},
    {phase:"MDS Specialization or Practice",color:"#155e75",steps:[
      {title:"MDS Entrance (NEET-MDS)",desc:"Pursue Masters in specialties: Orthodontics, Endodontics, Oral Surgery, Periodontics",resources:["NEET-MDS coaching","Dental Deck"]},
      {title:"Clinic Setup",desc:"Open own dental clinic — requires DCI registration, equipment investment of ₹10-25L",resources:["DCI India","Dental equipment suppliers"]},
      {title:"Cosmetic Dentistry",desc:"High-demand area — veneers, aligners (Invisalign), teeth whitening, implants",resources:["Invisalign training","Dental implant courses"]}
    ]},
    {phase:"Professional Career",color:"#164e63",steps:[
      {title:"Government Dentist",desc:"UPHSC, state dental services, ESIC, Railways, Military Dental Corps",resources:["UPSC","State PSC dental"]},
      {title:"Corporate & Chain Clinics",desc:"Clove Dental, Dentalkart chains, Apollo Dental — salaried with growth options",resources:["Clove Dental careers","Apollo Dental"]},
      {title:"International Practice",desc:"UK (GDC registration), Australia (AHPRA), Canada, Middle East — high earning potential",resources:["GDC UK","ADC Australia"]}
    ]}
  ],
  professionals:[
    {name:"Nandakumar Jairam",title:"Past President",company:"IDA (Indian Dental Association)",linkedin:"https://www.linkedin.com/in/nandakumar-jairam/"},
    {name:"Ajay Kakar",title:"Oral Maxillofacial Surgeon",company:"Breach Candy Hospital Mumbai",linkedin:"https://www.linkedin.com/in/ajay-kakar-1b2b3c/"},
    {name:"Preetinder Mehta",title:"Cosmetic Dentist",company:"Smile Makeover Clinic",linkedin:"https://www.linkedin.com/in/preetinder-mehta-dentist/"},
    {name:"Gordon Christensen",title:"Dental Educator & Researcher",company:"Clinicians Report",linkedin:"https://www.linkedin.com/in/gordon-christensen/"}
  ]
}


,"nurse": {
  title:"Nurse (B.Sc Nursing)",icon:"👩‍⚕️",category:"Healthcare",
  keywords:["nurse","nursing","bsc nursing","healthcare nurse","gnm","anm","hospital nurse","clinical nurse"],
  description:"Provide patient care, administer treatments, and support doctors in hospitals and clinics.",
  roadmap:[
    {phase:"Class 11-12: PCB",color:"#db2777",steps:[
      {title:"Biology & Life Sciences",desc:"Human Anatomy, Physiology, Microbiology basics are critical for nursing admission",resources:["NCERT Biology","Trueman Biology"]},
      {title:"NEET / State Nursing Entrance",desc:"Some colleges use NEET, others have state CET — check college requirements",resources:["State nursing entrances","INC India"]},
      {title:"Communication & Empathy",desc:"Nursing is patient-facing — develop communication skills, emotional intelligence",resources:["Communication books","Volunteer at hospitals"]}
    ]},
    {phase:"B.Sc Nursing (4 Years)",color:"#be185d",steps:[
      {title:"Year 1-2: Foundation Sciences",desc:"Anatomy, Physiology, Biochemistry, Nutrition, Microbiology, Psychology",resources:["Brunner Nursing","IGNOU materials"]},
      {title:"Year 2-3: Core Nursing",desc:"Medical-Surgical Nursing, Pediatric Nursing, OB-GYN Nursing, Community Health Nursing",resources:["Taylor's Nursing","Community Health books"]},
      {title:"Year 4: Clinical Internship",desc:"Intensive hospital rotations in ICU, OT, Emergency, NICU — real patient care",resources:["AIIMS nursing","Teaching hospitals"]}
    ]},
    {phase:"M.Sc Nursing / Specialization",color:"#9d174d",steps:[
      {title:"M.Sc Nursing (2 Years)",desc:"Specialize in Medical-Surgical, Pediatric, OB-GYN, Community, Psychiatric Nursing",resources:["INC India","NMC guidelines"]},
      {title:"Critical Care Certifications",desc:"ICU nursing, neonatal care, diabetic educator, oncology nursing certifications",resources:["Indian Society Critical Care","NCI"]},
      {title:"International Nursing",desc:"NCLEX-RN for USA, NMC for UK, HAAD for UAE — high demand and excellent salaries abroad",resources:["NCLEX prep","NMC UK"]}
    ]},
    {phase:"Professional Career",color:"#831843",steps:[
      {title:"Government Hospitals",desc:"AIIMS, state government hospitals — UPSC/state PSC nursing recruitment with pensionable jobs",resources:["AIIMS Delhi","UPSC nursing"]},
      {title:"Private Corporate Hospitals",desc:"Apollo, Fortis, Manipal — good salaries, structured career growth to Nursing Supervisor/Matron",resources:["Apollo Nursing","Fortis careers"]},
      {title:"Travel & International Nursing",desc:"USA, UK, Middle East, Canada — shortage of nurses globally means visa sponsorship available",resources:["ODEPC Kerala","Apna Abroad"]}
    ]}
  ],
  professionals:[
    {name:"Alka Gupta",title:"Chief Nursing Officer",company:"AIIMS Delhi",linkedin:"https://www.linkedin.com/in/alka-gupta-nursing/"},
    {name:"RN Bhaskar",title:"Nursing Educator",company:"NIMHANS",linkedin:"https://www.linkedin.com/in/rn-bhaskar/"},
    {name:"Florence Nightingale",title:"Founder of Modern Nursing",company:"Historical",linkedin:"https://www.linkedin.com/in/florence-nightingale/"},
    {name:"Linda Aiken",title:"Nursing Research Professor",company:"University of Pennsylvania",linkedin:"https://www.linkedin.com/in/linda-aiken/"}
  ]
},

"pharmacist": {
  title:"Pharmacist",icon:"💊",category:"Healthcare",
  keywords:["pharmacist","pharmacy","b pharm","d pharm","drug","medicine","pharma","pharmaceutical"],
  description:"Prepare, dispense medicines and counsel patients on drug use — a critical link between doctors and patients.",
  roadmap:[
    {phase:"Class 11-12: PCB/PCM",color:"#7c3aed",steps:[
      {title:"Chemistry Focus",desc:"Organic Chemistry is fundamental to pharmacy — functional groups, reactions, drug structures",resources:["NCERT Chemistry","Morrison Boyd"]},
      {title:"Pharmacy Entrance Exams",desc:"GPAT for M.Pharm, state level CET for B.Pharm admission",resources:["GPAT coaching","Pharmacy entrance apps"]},
      {title:"D.Pharm Option",desc:"2-year Diploma in Pharmacy after 12th — faster entry into the field",resources:["PCI India","State pharmacy colleges"]}
    ]},
    {phase:"B.Pharm (4 Years)",color:"#6d28d9",steps:[
      {title:"Core Subjects",desc:"Pharmaceutical Chemistry, Pharmacology, Pharmaceutics, Pharmacognosy, Clinical Pharmacy",resources:["Remington Pharmacy","Foye's Medicinal Chem"]},
      {title:"Lab & Formulation Skills",desc:"Drug formulation, quality control, analytical techniques — HPLC, UV spectroscopy",resources:["B.Pharm lab manual","USP guidelines"]},
      {title:"Industry Internship",desc:"Intern at pharma companies — Sun Pharma, Cipla, Dr Reddy's, Lupin",resources:["Internshala","LinkedIn pharma"]}
    ]},
    {phase:"M.Pharm / MBA in Pharma",color:"#5b21b6",steps:[
      {title:"M.Pharm Specializations",desc:"Pharmaceutical Chemistry, Pharmacology, Drug Regulatory Affairs, Clinical Research",resources:["GPAT exam","NIPERs India"]},
      {title:"Regulatory Affairs",desc:"High-paying career — learn FDA, EMA, CDSCO drug approval processes",resources:["RAPS","Regulatory Focus"]},
      {title:"Clinical Research",desc:"CRAs, CRCs, data managers — booming field with MNCs like Covance, IQVIA, Quintiles",resources:["CCRPS certification","ACRP"]}
    ]},
    {phase:"Professional Career",color:"#4c1d95",steps:[
      {title:"Community / Hospital Pharmacy",desc:"Retail pharmacist, hospital pharmacist — dispensing, counselling, medication management",resources:["PCI India","Indian Journal of Pharmacy"]},
      {title:"Pharma Industry",desc:"Production, R&D, QC, Medical Affairs at Cipla, Sun Pharma, Zydus, Divi's Labs",resources:["Pharma job portals","LinkedIn"]},
      {title:"Abroad Opportunities",desc:"USA (FPGEE/NAPLEX), UK (GPhC), Australia — excellent salaries and work-life balance",resources:["FPGEE prep","GPhC UK guide"]}
    ]}
  ],
  professionals:[
    {name:"Yusuf Hamied",title:"Chairman",company:"Cipla",linkedin:"https://www.linkedin.com/in/yusuf-hamied/"},
    {name:"Dilip Shanghvi",title:"Founder & MD",company:"Sun Pharmaceutical",linkedin:"https://www.linkedin.com/in/dilip-shanghvi/"},
    {name:"Satish Reddy",title:"Chairman",company:"Dr Reddy's Laboratories",linkedin:"https://www.linkedin.com/in/satish-reddy-drl/"},
    {name:"Alex Zhavoronkov",title:"Pharmatech CEO",company:"Insilico Medicine",linkedin:"https://www.linkedin.com/in/alex-zhavoronkov/"}
  ]
},

"fashion-designer": {
  title:"Fashion Designer",icon:"👗",category:"Arts & Design",
  keywords:["fashion","fashion design","clothing","garment","textile","apparel","styling","costume","design fashion"],
  description:"Create clothing and accessories — from concept sketches to finished garments on the runway.",
  roadmap:[
    {phase:"Class 11-12: Any Stream + Portfolio",color:"#ec4899",steps:[
      {title:"Any Stream Works",desc:"No PCM required — Arts/Commerce/Science all eligible, but arts skills matter more",resources:["NCERT Art","Drawing practice"]},
      {title:"Entrance Exams",desc:"NID Entrance, NIFT Entrance, CEED, Pearl Academy tests — require creative aptitude tests",resources:["NID exam","NIFT prep books"]},
      {title:"Build a Sketch Portfolio",desc:"Practice fashion illustration, fabric knowledge, color theory — key for entrance",resources:["Fashion illustration books","YouTube tutorials"]}
    ]},
    {phase:"B.Des / B.FTech (4 Years)",color:"#db2777",steps:[
      {title:"Core Subjects",desc:"Textile Science, Pattern Making, Garment Construction, Fashion Illustration, Draping",resources:["NIFT curriculum","Fashion textbooks"]},
      {title:"Software Skills",desc:"Adobe Illustrator, Photoshop, CLO 3D (virtual fashion), CorelDRAW",resources:["Adobe tutorials","CLO3D training"]},
      {title:"Collections & Runway Shows",desc:"Work on semester collections, participate in institute fashion weeks, build portfolio",resources:["NIFT fashion week","Lakmé Fashion Week"]}
    ]},
    {phase:"M.Des / Specialization",color:"#be185d",steps:[
      {title:"Postgraduate Options",desc:"M.Des at NID/NIFT, Fashion MBA, study abroad at Istituto Marangoni, Parsons, London College",resources:["NID PG","Istituto Marangoni"]},
      {title:"Specialization Areas",desc:"Luxury Fashion, Sportswear, Bridal, Sustainable Fashion, Fashion Merchandising",resources:["Vogue India","FDCI"]},
      {title:"Work with Labels",desc:"Assist established designers like Sabyasachi, Manish Malhotra, Ritu Kumar for experience",resources:["FDCI","Fashion design firms"]}
    ]},
    {phase:"Professional Career",color:"#9d174d",steps:[
      {title:"Launch Your Label",desc:"Start own brand, sell on Instagram, Myntra, or show at Lakmé Fashion Week",resources:["Myntra seller","Craftsvilla"]},
      {title:"Film & Entertainment",desc:"Costume designer for Bollywood, OTT shows, music videos — growing demand",resources:["Film Federation India","OTT studios"]},
      {title:"Corporate Fashion",desc:"Design for brands like Zara, H&M India, Fabindia, Manyavar as in-house designer",resources:["LinkedIn Fashion","LinkedIn"]}
    ]}
  ],
  professionals:[
    {name:"Sabyasachi Mukherjee",title:"Founder",company:"Sabyasachi",linkedin:"https://www.linkedin.com/in/sabyasachi-mukherjee/"},
    {name:"Masaba Gupta",title:"Founder",company:"House of Masaba",linkedin:"https://www.linkedin.com/in/masaba-gupta/"},
    {name:"Manish Malhotra",title:"Fashion Designer",company:"Manish Malhotra",linkedin:"https://www.linkedin.com/in/manish-malhotra-fashion/"},
    {name:"Wendell Rodricks",title:"Fashion Designer",company:"Wendell Rodricks",linkedin:"https://www.linkedin.com/in/wendell-rodricks/"}
  ]
},

"film-director": {
  title:"Film Director",icon:"🎬",category:"Arts & Entertainment",
  keywords:["film","director","cinema","filmmaking","movie","director","bollywood","OTT","screenwriter","video director"],
  description:"Lead the creative vision of films, TV shows, and digital content — from screenplay to final cut.",
  roadmap:[
    {phase:"Class 11-12: Any Stream",color:"#9333ea",steps:[
      {title:"Any Stream + Creative Writing",desc:"Arts background helps, but passion for storytelling matters most",resources:["Film watching","Script reading"]},
      {title:"Film School Entrance",desc:"FTII (Pune), Satyajit Ray Film Institute, SRFTI, NSD — competitive entrance exams",resources:["FTII.ac.in","SRFTI admissions"]},
      {title:"Study Films Deeply",desc:"Watch 100 great films across world cinema, read film theory, analyze screenplay structure",resources:["Criterion Collection","Syd Field Screenwriting"]}
    ]},
    {phase:"Film School / B.A. Mass Comm (3-4 Years)",color:"#7e22ce",steps:[
      {title:"Filmmaking Fundamentals",desc:"Cinematography, Sound Design, Editing, Production Design, Script Writing",resources:["FTII curriculum","FilmmakerIQ"]},
      {title:"Short Films & Experiments",desc:"Make short films every semester — quantity builds skills faster than theory",resources:["YouTube Channel","Festival submissions"]},
      {title:"International Film Exposure",desc:"Study world cinema — Italian neorealism, French New Wave, Korean cinema, parallel Indian cinema",resources:["MUBI","Criterion Channel"]}
    ]},
    {phase:"Assisting & Specialization",color:"#6b21a8",steps:[
      {title:"Assistant Director (AD) Roles",desc:"Work as 3rd/2nd/1st AD on film sets — standard path in Indian film industry",resources:["Film industry contacts","FTII alumni network"]},
      {title:"Master Storytelling",desc:"Screenwriting workshops, read 50+ scripts, study structure, character arcs deeply",resources:["Black List scripts","Syd Field books"]},
      {title:"International Courses",desc:"UCLA Extension, London Film School, New York Film Academy for advanced training",resources:["NYFA","London Film School"]}
    ]},
    {phase:"Professional Career",color:"#581c87",steps:[
      {title:"Short Film Circuit",desc:"Win at film festivals (MAMI, IFFI, Sundance shorts) to build credibility for features",resources:["MAMI","IFFI Goa"]},
      {title:"OTT Opportunities",desc:"Netflix, Amazon Prime, Hotstar actively seek fresh Indian talent for web series",resources:["Netflix Creators","Amazon Studios India"]},
      {title:"Commercial Work",desc:"Music videos, TVC ads, documentaries provide income while building feature film portfolio",resources:["AdForum","Music video platforms"]}
    ]}
  ],
  professionals:[
    {name:"Anurag Kashyap",title:"Director",company:"Phantom Films",linkedin:"https://www.linkedin.com/in/anurag-kashyap-director/"},
    {name:"Zoya Akhtar",title:"Director",company:"Tiger Baby Films",linkedin:"https://www.linkedin.com/in/zoya-akhtar/"},
    {name:"Shoojit Sircar",title:"Director & Producer",company:"Rising Sun Films",linkedin:"https://www.linkedin.com/in/shoojit-sircar/"},
    {name:"Imtiaz Ali",title:"Director",company:"Window Seat Films",linkedin:"https://www.linkedin.com/in/imtiaz-ali-director/"}
  ]
}


,"chartered-accountant": {
  title:"Chartered Accountant (CA)",icon:"📊",category:"Commerce & Finance",
  keywords:["CA","chartered accountant","accounting","audit","tax","finance ca","ICAI","commerce","CPA"],
  description:"India's most prestigious finance qualification — audit companies, file taxes, and advise businesses.",
  roadmap:[
    {phase:"Class 11-12: Commerce",color:"#15803d",steps:[
      {title:"Commerce Stream (Accountancy, Eco, Maths)",desc:"Accountancy and Business Studies are core — strong foundation for CA syllabus",resources:["NCERT Accountancy","TS Grewal"]},
      {title:"CA Foundation Registration",desc:"Register with ICAI for CA Foundation during or after Class 12 — no entrance exam",resources:["ICAI.org","CA Foundation guide"]},
      {title:"CA Foundation Exam",desc:"4 papers: Accounting, Business Laws, Maths & LR, Business Economics — clear to advance",resources:["ICAI Study Material","ICAI mock tests"]}
    ]},
    {phase:"CA Intermediate (2-3 Years)",color:"#166534",steps:[
      {title:"CA Intermediate Group 1",desc:"Advanced Accounts, Corporate Laws, Cost & Mgmt Accounting, Taxation (IT + GST)",resources:["ICAI ITSM","ICAI Intermediate material"]},
      {title:"CA Intermediate Group 2",desc:"Advanced Accounting, Auditing, Enterprise IT & SM, Financial Management",resources:["ICAI Group 2 material","ICAI coaching"]},
      {title:"Articleship (3 Years)",desc:"Mandatory 3-year practical training under a CA firm — real audit and tax work",resources:["ICAI articleship portal","Big 4 articleship"]}
    ]},
    {phase:"CA Final",color:"#14532d",steps:[
      {title:"CA Final Group 1",desc:"Financial Reporting (IndAS/IFRS), Advanced Auditing, Corporate Laws & Economic Laws",resources:["ICAI Final material","Praveen Sharma lectures"]},
      {title:"CA Final Group 2",desc:"Strategic Cost Mgmt, Direct Tax Laws, Indirect Tax Laws (GST/Customs)",resources:["ICAI IDT material","Vinod Gupta classes"]},
      {title:"Advanced IT Training (AICITSS)",desc:"Mandatory IT + soft skills training by ICAI before CA Final attempt",resources:["ICAI AICITSS","ICAI portal"]}
    ]},
    {phase:"Qualified CA — Career",color:"#052e16",steps:[
      {title:"Practice (Own CA Firm)",desc:"Start your own practice — audit, tax consulting, GST compliance, company formation",resources:["ICAI practice guide","MCA portal"]},
      {title:"Industry (CFO Track)",desc:"Join corporate finance teams — Big 4 (Deloitte, EY, KPMG, PwC) or industry CFO roles",resources:["LinkedIn Finance","Big 4 careers"]},
      {title:"International Qualifications",desc:"Add CPA (USA), ACCA (UK), CFA alongside CA for global opportunities",resources:["AICPA","ACCA.com"]}
    ]}
  ],
  professionals:[
    {name:"Uday Kotak",title:"Founder & MD",company:"Kotak Mahindra Bank",linkedin:"https://www.linkedin.com/in/uday-kotak/"},
    {name:"Rakesh Jhunjhunwala",title:"Investor & Trader (Late)",company:"Rare Enterprises",linkedin:"https://www.linkedin.com/in/rakesh-jhunjhunwala/"},
    {name:"Girish Vanvari",title:"Founder",company:"Transaction Square",linkedin:"https://www.linkedin.com/in/girish-vanvari/"},
    {name:"Sanjeev Sanyal",title:"Principal Economic Adviser",company:"Government of India",linkedin:"https://www.linkedin.com/in/sanjeev-sanyal/"}
  ]
},

"lawyer": {
  title:"Lawyer / Advocate",icon:"⚖️",category:"Law",
  keywords:["lawyer","advocate","law","LLB","legal","barrister","attorney","litigation","corporate law","IPC"],
  description:"Represent clients in courts, draft contracts, advise on legal matters — one of the most impactful careers.",
  roadmap:[
    {phase:"Class 11-12: Any Stream",color:"#1e40af",steps:[
      {title:"Any Stream Eligible",desc:"Science, Commerce, Arts all allowed — Humanities/Arts background gives advantage in reading and argumentation",resources:["NCERT Political Science","Current affairs"]},
      {title:"CLAT / AILET / LSAT India",desc:"Common Law Admission Test for NLUs — top 5 NLUs include NLSIU Bangalore, NALSAR Hyderabad",resources:["CLAT prep","LegalEdge coaching"]},
      {title:"Reading & Debating",desc:"Read newspapers, argue logically, participate in debates — key skills for law",resources:["The Hindu","Legal news apps"]}
    ]},
    {phase:"BA LLB / BBA LLB (5 Years) or LLB (3 Years)",color:"#1d4ed8",steps:[
      {title:"Core Law Subjects",desc:"Constitutional Law, Criminal Law (IPC), Contract Law, Tort Law, Civil Procedure Code",resources:["Bare Acts India","LexisNexis"]},
      {title:"Moot Courts & Internships",desc:"Participate in moot courts, intern at law firms and courts every summer",resources:["NLU moot courts","Bar Council"]},
      {title:"Specialization Areas",desc:"Criminal, Corporate, Family, IP, Tax, Environmental, Cyber Law — choose specialty by Year 4",resources:["Manupatra","SCC Online"]}
    ]},
    {phase:"LLM / Bar Council Enrollment",color:"#1e3a8a",steps:[
      {title:"Enroll with Bar Council",desc:"State Bar Council enrollment mandatory after LLB to practice — All India Bar Examination",resources:["Bar Council of India","AIBE exam"]},
      {title:"LLM (Optional)",desc:"2-year specialization — Corporate Law, IP, International Law — helps in academics or big law",resources:["NLU LLM","Harvard LLM for top candidates"]},
      {title:"UPSC / Judiciary Exam",desc:"Civil Judge (MPSC/State PCS Judicial), Public Prosecutor exams — government legal roles",resources:["State PCS Judicial","UPSC Law optional"]}
    ]},
    {phase:"Professional Career",color:"#172554",steps:[
      {title:"Trial Advocacy",desc:"Specialize in criminal or civil litigation — appear in district courts, High Court, Supreme Court",resources:["Supreme Court bar","Legal 500 India"]},
      {title:"Corporate Law Firms",desc:"AZB & Partners, Cyril Amarchand, Khaitan & Co — India's top law firms with excellent pay",resources:["Chambers India","Legal 500"]},
      {title:"In-House Counsel",desc:"Join Tata, Reliance, Infosys as Legal Head — growing demand for in-house legal teams",resources:["ACC India","LinkedIn Legal"]}
    ]}
  ],
  professionals:[
    {name:"Harish Salve",title:"Senior Advocate",company:"Supreme Court of India",linkedin:"https://www.linkedin.com/in/harish-salve/"},
    {name:"Aryama Sundaram",title:"Senior Advocate",company:"Madras High Court",linkedin:"https://www.linkedin.com/in/aryama-sundaram/"},
    {name:"Cyrus Guzder",title:"Managing Partner",company:"Cyril Amarchand Mangaldas",linkedin:"https://www.linkedin.com/in/cyrus-guzder/"},
    {name:"Menaka Guruswamy",title:"Senior Advocate",company:"Supreme Court",linkedin:"https://www.linkedin.com/in/menaka-guruswamy/"}
  ]
},

"architect": {
  title:"Architect",icon:"🏛️",category:"Architecture & Design",
  keywords:["architect","architecture","B.Arch","building design","urban design","interior architecture","landscape"],
  description:"Design buildings, spaces, and environments that are functional, safe, and aesthetically inspiring.",
  roadmap:[
    {phase:"Class 11-12: PCM / PCB",color:"#0f766e",steps:[
      {title:"Physics, Chemistry, Maths",desc:"PCM required for most architecture entrances — spatial math and physics critical",resources:["NCERT Maths","Physics for builders"]},
      {title:"NATA / JEE Paper 2 (B.Arch)",desc:"National Aptitude Test in Architecture — drawing ability and math tested",resources:["NATA prep","B.Arch coaching"]},
      {title:"Drawing & Design Portfolio",desc:"Practice architectural drawing, perspective, design sketching — crucial for NATA exam",resources:["AutoCAD basics","Architectural Drawing books"]}
    ]},
    {phase:"B.Arch Degree (5 Years)",color:"#0d9488",steps:[
      {title:"Core Design Studios",desc:"Architectural Design Studio every semester — progressively complex building design projects",resources:["Neufert Architects Data","Francis Ching books"]},
      {title:"Technical Subjects",desc:"Building Materials, Structures, Building Services, Environmental Architecture, History of Architecture",resources:["CPWD specs","Steel Structure design"]},
      {title:"CAD & BIM Software",desc:"AutoCAD, Revit, Rhino 3D, SketchUp, Lumion for 3D visualization — industry standard",resources:["Autodesk learning","Rhino tutorials"]}
    ]},
    {phase:"M.Arch / Professional Practice",color:"#0f766e",steps:[
      {title:"Master of Architecture",desc:"Specialize in Urban Design, Landscape, Sustainable Design, Interior Architecture at IIT/SPA",resources:["IIT Roorkee Arch","SPA Delhi"]},
      {title:"Council of Architecture Registration",desc:"Register with COA after B.Arch to practice independently",resources:["COA India","GRIHA Green buildings"]},
      {title:"International Study",desc:"Bartlett (UCL), ETH Zurich, Harvard GSD — world's best architecture schools for postgrad",resources:["Architecture school rankings","Archpaper"]}
    ]},
    {phase:"Professional Career",color:"#134e4a",steps:[
      {title:"Architecture Firm",desc:"Work at firms like HCP, Morphogenesis, Sanjay Puri Architects — India's top design studios",resources:["Archello","ArchDaily India"]},
      {title:"Government / Urban Planning",desc:"Smart Cities mission, HUDCO, DDA, NMMC — city planning and government projects",resources:["Smart Cities India","HUDCO careers"]},
      {title:"Own Practice",desc:"Register own firm after 5+ years — residential, commercial, interior, sustainable architecture",resources:["COA registration","IIA India"]}
    ]}
  ],
  professionals:[
    {name:"B.V. Doshi",title:"Pritzker Prize Laureate",company:"Vastu Shilpa Foundation",linkedin:"https://www.linkedin.com/in/bv-doshi/"},
    {name:"Charles Correa",title:"Architect & Urban Planner",company:"Charles Correa Associates",linkedin:"https://www.linkedin.com/in/charles-correa/"},
    {name:"Zaha Hadid",title:"Architect (Late)",company:"Zaha Hadid Architects",linkedin:"https://www.linkedin.com/in/zaha-hadid/"},
    {name:"Rahul Mehrotra",title:"Professor & Architect",company:"Harvard GSD",linkedin:"https://www.linkedin.com/in/rahul-mehrotra-architect/"}
  ]
},

"pilot": {
  title:"Commercial Pilot",icon:"✈️",category:"Aviation",
  keywords:["pilot","aviation","commercial pilot","CPL","DGCA","airline","aircraft","flight","cockpit","air force"],
  description:"Fly commercial aircraft carrying passengers and cargo — one of the most sought-after careers.",
  roadmap:[
    {phase:"Class 11-12: PCM",color:"#0369a1",steps:[
      {title:"Physics, Chemistry, Maths",desc:"PCM mandatory — focus on Fluid Mechanics, Physics of flight, Mathematics",resources:["NCERT Physics","Aerodynamics basics"]},
      {title:"Medical Fitness (Class 1 Medical)",desc:"DGCA Class 1 Medical Certificate — vision, hearing, cardiovascular health checks are mandatory",resources:["DGCA India","Aviation medical centers"]},
      {title:"English Proficiency",desc:"ICAO English Language Proficiency Level 4+ required — aviation is English-medium globally",resources:["Aviation English books","ICAO requirements"]}
    ]},
    {phase:"Flight Training / CPL (2-3 Years)",color:"#0284c7",steps:[
      {title:"Private Pilot Licence (PPL)",desc:"60+ hours flight time — solo and dual flying, basic navigation and weather",resources:["DGCA syllabus","Flying clubs India"]},
      {title:"Commercial Pilot Licence (CPL)",desc:"200+ total flight hours, CPL written exams (Air Regulations, Navigation, Meteorology, RTR)",resources:["DGCA CPL syllabus","Bombay Flying Club"]},
      {title:"Instrument Rating (IR)",desc:"Flying using only instruments (zero visibility) — essential for commercial operations",resources:["Jeppesen IR manual","DGCA IR exam"]}
    ]},
    {phase:"Type Rating & Airline Entry",color:"#075985",steps:[
      {title:"Type Rating",desc:"Aircraft-specific training (Boeing 737, Airbus A320) — 6-week course paid by airline or self",resources:["CAE simulator","FlightSafety International"]},
      {title:"Multi-Crew Coordination (MCC)",desc:"Learn crew resource management — communication and decision making in the cockpit",resources:["MCC course","CAE India"]},
      {title:"Airline Transport Pilot Licence (ATPL)",desc:"Final qualification after 1500 flight hours — required to be Captain",resources:["DGCA ATPL","Airline training programs"]}
    ]},
    {phase:"Professional Career",color:"#0c4a6e",steps:[
      {title:"First Officer (Co-Pilot)",desc:"Join IndiGo, Air India, SpiceJet, Vistara as First Officer — starting salary ₹1.5-2L/month",resources:["IndiGo careers","Air India recruitment"]},
      {title:"Captain Upgrade",desc:"After 3000-5000 hours as FO, upgrade to Captain — salary ₹4-7L/month",resources:["Airline seniority lists","Aviation forums India"]},
      {title:"Alternative Paths",desc:"Corporate aviation, helicopter pilot, flying instructor, DGCA examiner, defense pilot (IAF)",resources:["DGCA India","IAF careers"]}
    ]}
  ],
  professionals:[
    {name:"Sanjiv Kapoor",title:"CEO",company:"SpiceJet",linkedin:"https://www.linkedin.com/in/sanjiv-kapoor-spicejet/"},
    {name:"Pieter Elbers",title:"CEO",company:"IndiGo (Former KLM)",linkedin:"https://www.linkedin.com/in/pieterelbers/"},
    {name:"Capt. Amol Yadav",title:"Commercial Pilot & Aircraft Builder",company:"Independent",linkedin:"https://www.linkedin.com/in/capt-amol-yadav/"},
    {name:"Zoe Garron",title:"First Officer, Author",company:"British Airways",linkedin:"https://www.linkedin.com/in/zoegarron/"}
  ]
}


,"journalist": {
  title:"Journalist / Reporter",icon:"📰",category:"Media & Journalism",
  keywords:["journalist","reporter","journalism","news","media","press","newsroom","editor","broadcast","print media"],
  description:"Investigate, report, and communicate news and stories to the public across print, digital, and broadcast media.",
  roadmap:[
    {phase:"Class 11-12: Humanities/Any",color:"#b45309",steps:[
      {title:"Humanities (History, Political Science, English)",desc:"Strong language and social sciences foundation — essential for journalism",resources:["NCERT Political Science","The Hindu newspaper"]},
      {title:"Entrance Exams",desc:"IIMC Entrance, Symbiosis Media entrance, ACJ Chennai, SIMC Pune — top journalism schools",resources:["IIMC.nic.in","Symbiosis media"]},
      {title:"Start Writing & Blogging",desc:"Begin a blog, contribute to school magazine, write reviews — build writing habit early",resources:["Medium.com","Blogger"]}
    ]},
    {phase:"BA Journalism / Mass Communication (3 Years)",color:"#92400e",steps:[
      {title:"Core Subjects",desc:"Reporting & Writing, Media Law & Ethics, Broadcast Journalism, Photography, Digital Media",resources:["IIMC curriculum","Reporting textbooks"]},
      {title:"Beat Reporting",desc:"News beats: Politics, Crime, Business, Sports, Entertainment, Science — choose your specialty",resources:["NYT journalism","The Print India"]},
      {title:"Newsroom Internships",desc:"Work at local newspapers, news channels, digital portals — NDTV, The Hindu, India Today",resources:["Internshala media","LinkedIn journalism"]}
    ]},
    {phase:"PG Diploma / MA Journalism",color:"#78350f",steps:[
      {title:"PG Diploma / MA (1-2 Years)",desc:"IIMC Delhi, AJ (ACJ) Chennai, SIMC Pune — India's best journalism postgrad programs",resources:["IIMC PG","ACJ Chennai"]},
      {title:"Specializations",desc:"Investigative journalism, data journalism, sports journalism, business journalism, foreign correspondents",resources:["Global Investigative Journalism","Datajournalism.com"]},
      {title:"International Journalism",desc:"Reuters Journalism Institute, Columbia Journalism School — Chevening or DAAD scholarship",resources:["Reuters Institute","Columbia J-School"]}
    ]},
    {phase:"Professional Career",color:"#451a03",steps:[
      {title:"Print & Digital Media",desc:"Reporter → Senior Reporter → Editor at The Hindu, Times of India, NDTV, The Wire, The Print",resources:["The Wire jobs","HT Media careers"]},
      {title:"Broadcast & TV",desc:"NDTV, NewsX, Republic TV, Aaj Tak — on-camera anchoring or behind-the-scenes producing",resources:["NDTV careers","Zee Media"]},
      {title:"Independent & Freelance",desc:"Substack newsletters, podcast journalism, YouTube — independent journalism booming in India",resources:["Substack","Newslaundry"]}
    ]}
  ],
  professionals:[
    {name:"Ravish Kumar",title:"Senior Journalist",company:"NDTV",linkedin:"https://www.linkedin.com/in/ravish-kumar/"},
    {name:"Barkha Dutt",title:"Journalist & Founder",company:"Mojo Story",linkedin:"https://www.linkedin.com/in/barkha-dutt/"},
    {name:"P. Sainath",title:"Rural Affairs Journalist",company:"PARI (People's Archive)",linkedin:"https://www.linkedin.com/in/p-sainath/"},
    {name:"Arfa Khanum Sherwani",title:"Senior Editor",company:"The Wire",linkedin:"https://www.linkedin.com/in/arfa-khanum-sherwani/"}
  ]
},

"physicist": {
  title:"Physicist / Research Scientist",icon:"🔬",category:"Science",
  keywords:["physicist","physics","research scientist","quantum","nuclear","theoretical physics","astrophysics","condensed matter"],
  description:"Explore the fundamental laws of the universe through research, experimentation, and theoretical work.",
  roadmap:[
    {phase:"Class 11-12: PCM",color:"#7c3aed",steps:[
      {title:"PCM with Deep Physics Focus",desc:"Mechanics, Electricity, Optics, Modern Physics — love for concepts over rote learning",resources:["HC Verma","Feynman Lectures (Vol 1)"]},
      {title:"Olympiads & Competitive Prep",desc:"IPhO (International Physics Olympiad), NSEP — top performers get direct IIT/IISc admission",resources:["HBCSE India","IPhO prep"]},
      {title:"JEE / KVPY",desc:"JEE for IITs, KVPY fellowship for IISc — openings to India's best science institutions",resources:["JEE coaching","KVPY exam"]}
    ]},
    {phase:"B.Sc / BS Physics (3-5 Years)",color:"#6d28d9",steps:[
      {title:"Core Physics Subjects",desc:"Classical Mechanics, Electrodynamics, Quantum Mechanics, Statistical Mechanics, Mathematical Physics",resources:["Griffiths Electrodynamics","Sakurai Quantum Mechanics"]},
      {title:"Mathematics for Physics",desc:"Linear Algebra, Differential Equations, Complex Analysis, Group Theory — physics is applied math",resources:["Arfken Mathematical Physics","Boas Mathematical Methods"]},
      {title:"Lab & Computation",desc:"Experimental physics, Python for physics, MATLAB, computational simulations",resources:["NumPy/SciPy","Computational Physics textbooks"]}
    ]},
    {phase:"M.Sc / PhD in Physics",color:"#5b21b6",steps:[
      {title:"IIT-JAM for M.Sc",desc:"Joint Admission test for M.Sc at IITs — gateway to research career in India",resources:["IIT JAM Physics","JAM coaching"]},
      {title:"PhD Program",desc:"5-year integrated PhD at IISc, TIFR, IIT, IISER — fellowship + salary during research",resources:["TIFR graduate school","IISER admissions"]},
      {title:"Specialization Areas",desc:"Quantum Computing, Condensed Matter, High Energy Physics, Astrophysics, Optics, Nuclear Physics",resources:["arXiv.org","Physical Review Letters"]}
    ]},
    {phase:"Research Career",color:"#4c1d95",steps:[
      {title:"Postdoc Positions",desc:"1-3 year postdoctoral positions at CERN, Max Planck, IISc, TIFR to build publication record",resources:["INSPIRE-HEP","Nature Physics"]},
      {title:"Faculty / Research Scientist",desc:"Become Professor at IIT/IISc, or research scientist at BARC, DAE, ISRO, defence labs",resources:["BARC recruitment","IIT faculty"]},
      {title:"Industry Physics",desc:"Quantum computing (IBM, Google), semiconductor R&D (TSMC, Intel), Medical Physics (MRI)",resources:["IBM Quantum","Quantum computing jobs"]}
    ]}
  ],
  professionals:[
    {name:"Abhay Ashtekar",title:"Physicist & Professor",company:"Penn State University",linkedin:"https://www.linkedin.com/in/abhay-ashtekar/"},
    {name:"Ashoke Sen",title:"String Theorist — Padma Bhushan",company:"Harish-Chandra Research Institute",linkedin:"https://www.linkedin.com/in/ashoke-sen/"},
    {name:"Rohini Gopalakrishnan",title:"Particle Physicist",company:"CERN / TIFR",linkedin:"https://www.linkedin.com/in/rohini-gopalakrishnan/"},
    {name:"Roger Penrose",title:"Nobel Laureate Physicist",company:"Oxford University",linkedin:"https://www.linkedin.com/in/roger-penrose/"}
  ]
},

"chef": {
  title:"Chef / Culinary Artist",icon:"👨‍🍳",category:"Hospitality & Culinary",
  keywords:["chef","culinary","cooking","food","kitchen","hospitality chef","pastry","baker","head chef","restaurant"],
  description:"Create culinary experiences — from street food to Michelin-starred restaurants and luxury hotels.",
  roadmap:[
    {phase:"Class 11-12: Any Stream",color:"#b45309",steps:[
      {title:"Any Stream + Food Passion",desc:"No stream restriction — develop passion for cooking, ingredients, and food cultures",resources:["Food channels","Munchies YouTube"]},
      {title:"Culinary School Entrance",desc:"IHM (Institute of Hotel Management) entrance (NCHMCT JEE), state hotel management tests",resources:["NCHMCT JEE","IHM Mumbai"]},
      {title:"Kitchen Basics at Home",desc:"Master basic cooking, knife skills, understand spices, cuisines' Indian and international",resources:["Sanjeev Kapoor YouTube","Tasty recipes"]}
    ]},
    {phase:"B.Sc Hotel Management / Culinary Arts (3-4 Years)",color:"#92400e",steps:[
      {title:"Culinary Arts Core",desc:"Food Production, Bakery & Confectionery, Food & Beverage Service, Nutrition, Kitchen Management",resources:["IHM curriculum","On Cooking textbook"]},
      {title:"Cuisine Specialization",desc:"Master one or more cuisines: Indian Regional, Continental, Italian, Asian, French cuisine",resources:["Larousse Gastronomique","Culinary textbooks"]},
      {title:"Hotel Internships",desc:"6-month internship at 5-star hotels — Taj, Oberoi, ITC, Marry ott mandatory during program",resources:["Taj Careers","Oberoi OCLD"]}
    ]},
    {phase:"International Culinary Training",color:"#78350f",steps:[
      {title:"International Certifications",desc:"Le Cordon Bleu (Paris/London), CIA (Culinary Institute of America), ICE New York",resources:["Le Cordon Bleu","CIA Culinary"]},
      {title:"Work Abroad",desc:"Work in luxury hotels, cruise ships, international hospitality chains — broadens cuisine knowledge",resources:["Cruise ship jobs","Hospitality international"]},
      {title:"Specialization",desc:"Choose specialty — Pastry Chef, Sushi Chef, Farm-to-Table, Plant-based, Molecular Gastronomy",resources:["Modernist Cuisine","Pastry courses"]}
    ]},
    {phase:"Professional Career",color:"#451a03",steps:[
      {title:"Hotel & Restaurant",desc:"Commis → Chef de Partie → Sous Chef → Executive Chef journey at 5-star properties",resources:["ITC Hotels","Taj Group careers"]},
      {title:"Launch Own Restaurant",desc:"Start own restaurant, cloud kitchen, catering service, or food brand",resources:["FSSAI registration","Restaurant India"]},
      {title:"Food Media & Content",desc:"YouTube cooking channel, Instagram reels, food writing, TV shows — Sanjeev Kapoor model",resources:["YouTube Studio","Food Blogger India"]}
    ]}
  ],
  professionals:[
    {name:"Sanjeev Kapoor",title:"Celebrity Chef & Entrepreneur",company:"Yellow Chilli Restaurants",linkedin:"https://www.linkedin.com/in/sanjeevkapoor/"},
    {name:"Vikas Khanna",title:"Michelin-Star Chef",company:"Junoon NYC",linkedin:"https://www.linkedin.com/in/vikas-khanna/"},
    {name:"Pooja Dhingra",title:"Pastry Chef & Founder",company:"Le15 Patisserie",linkedin:"https://www.linkedin.com/in/poojadhingra/"},
    {name:"Ranveer Brar",title:"Chef & TV Presenter",company:"Independent",linkedin:"https://www.linkedin.com/in/ranveerbrar/"}
  ]
},

"sports-coach": {
  title:"Sports Coach / Trainer",icon:"🏆",category:"Sports & Fitness",
  keywords:["sports","coach","trainer","athletic","fitness","sports science","physical education","PT teacher","sports coach"],
  description:"Train and develop athletes — from grassroots to elite performance coaching in any sport.",
  roadmap:[
    {phase:"Class 11-12 + Active Sports",color:"#16a34a",steps:[
      {title:"Physical Education or Any Stream",desc:"Physics helps understand biomechanics; PE as subject gives direct foundation",resources:["NCERT Physical Education","Sports science basics"]},
      {title:"Competitive Sports Participation",desc:"Actively compete in your chosen sport — district/state/national level experience is valuable",resources:["Sports Authority of India","School sports"]},
      {title:"Entrance Exams",desc:"LNUPE Gwalior, SNIPES Chennai, Sports University Manipur — India's physical education institutions",resources:["LNUPE admissions","Sports university India"]}
    ]},
    {phase:"B.P.Ed / B.Sc Sports Science (3-4 Years)",color:"#15803d",steps:[
      {title:"Core Subjects",desc:"Exercise Physiology, Sports Psychology, Biomechanics, Nutrition, Anatomy, Coaching Methodology",resources:["LNUPE curriculum","Sports science textbooks"]},
      {title:"Practical Coaching Hours",desc:"Coaching practice in chosen sport, officiation, sports management, event planning",resources:["NSF India","SAI centers"]},
      {title:"Sports Nutrition",desc:"Understand macro/micro nutrients for athletic performance, supplementation, hydration science",resources:["ISSN","Sports nutrition certification"]}
    ]},
    {phase:"M.P.Ed / Certifications",color:"#166534",steps:[
      {title:"M.P.Ed. or M.Sc Sports Science",desc:"Advanced coaching methodology, sports management, sports research at LNUPE/SAI",resources:["LNUPE PG","SAI Academy"]},
      {title:"International Coaching Licences",desc:"UEFA coaching licence, AIFF D/C/B badge for football; similar for cricket (BCCI), tennis (AITA)",resources:["BCCI coaching","AIFF coaching licence"]},
      {title:"Sports Analytics",desc:"Emerging field — Video analysis, performance data, Dartfish/Hudl software",resources:["Hudl","Catapult Sports"]}
    ]},
    {phase:"Professional Career",color:"#052e16",steps:[
      {title:"School / Academy Coaching",desc:"Coach at schools, sports academy — stable income with chance to spot and develop talent",resources:["Sports academies India","School sports director"]},
      {title:"National Federation / SAI",desc:"Work with NSFs (BCCI, Athletics Federation), SAI Centres, Khelo India programs",resources:["Khelo India","SAI.gov.in"]},
      {title:"Elite / Private Coaching",desc:"Personal trainer, IPL support staff, national team support — requires network and credentials",resources:["IPL recruitment","Pro Kabaddi coach"]}
    ]}
  ],
  professionals:[
    {name:"Pullela Gopichand",title:"National Badminton Coach",company:"Gopichand Badminton Academy",linkedin:"https://www.linkedin.com/in/pullela-gopichand/"},
    {name:"S.A. Pradeep Kumar",title:"Athletics Coach",company:"Sports Authority of India",linkedin:"https://www.linkedin.com/in/sa-pradeep-kumar/"},
    {name:"Romesh Pathania",title:"Hockey Coach",company:"Indian National Hockey",linkedin:"https://www.linkedin.com/in/romesh-pathania/"},
    {name:"Rajyavardhan Rathore",title:"Olympic Medalist & Sports Admin",company:"Ministry of Sports",linkedin:"https://www.linkedin.com/in/rajyavardhan-rathore/"}
  ]
},

"game-developer": {
  title:"Game Developer",icon:"🎮",category:"Technology",
  keywords:["game","game developer","game design","unity","unreal","gaming","game programming","indie game","mobile game"],
  description:"Design and build video games — from mobile casual games to AAA console titles.",
  roadmap:[
    {phase:"Class 11-12: PCM + Coding",color:"#7c3aed",steps:[
      {title:"PCM or CS Stream",desc:"Maths and coding foundation — linear algebra, trigonometry key for graphics programming",resources:["NCERT Maths","CS fundamentals"]},
      {title:"Start Making Small Games",desc:"Build games with Scratch, then Unity or Godot — any age is perfect to start",resources:["Unity Learn","Godot docs"]},
      {title:"Programming Basics",desc:"Learn C++, C# or Python — C# for Unity, C++ for Unreal Engine",resources:["Brackeys YouTube","CS50 Games"]}
    ]},
    {phase:"B.Tech CS / BCA / B.Sc CS (3-4 Years)",color:"#6d28d9",steps:[
      {title:"CS Fundamentals",desc:"Data Structures, Algorithms, OOP, Computer Graphics, Linear Algebra for 3D math",resources:["NPTEL","CS50 Harvard"]},
      {title:"Game Engines",desc:"Unity (C#) and Unreal Engine (C++) — master at least one engine deeply",resources:["Unity official courses","Unreal Online Learning"]},
      {title:"Game Portfolio",desc:"Make and release 3-5 games — itch.io, Google Play Store, desktop releases",resources:["itch.io","Game Jams (Ludum Dare)"]}
    ]},
    {phase:"Specialization",color:"#5b21b6",steps:[
      {title:"Game Programming",desc:"AI programming, graphics/shaders (GLSL/HLSL), physics simulation, network programming",resources:["Game Programming Gems","Catlike Coding"]},
      {title:"Game Design",desc:"Game mechanics, level design, player psychology, monetization design — GDD writing",resources:["Jesse Schell Game Design","Extra Credits YouTube"]},
      {title:"3D Art & Animation",desc:"Blender for 3D modeling, Maya/3ds Max, Substance Painter for texturing",resources:["Blender Guru","CG cookie"]}
    ]},
    {phase:"Professional Career",color:"#4c1d95",steps:[
      {title:"Indian Game Studios",desc:"Nazara Technologies, Nodding Heads, 99Games, Moonfrog Labs — India's growing game industry",resources:["Nazara careers","Nodding Heads games"]},
      {title:"International Studios",desc:"Ubisoft (Montreal/India), Rockstar, EA, Activision — remote-friendly game studios hiring globally",resources:["Game industry jobs","Gamasutra jobs"]},
      {title:"Indie Game Dev",desc:"Solo indie developer — release on Steam, App Store, Play Store — passive income possible",resources:["Steam Greenlight","Indie game marketing"]}
    ]}
  ],
  professionals:[
    {name:"Vishal Gondal",title:"Founder",company:"GOQii & Indiagames",linkedin:"https://www.linkedin.com/in/vishalgondal/"},
    {name:"Manvendra Shukul",title:"Game Developer",company:"Nodding Heads Games",linkedin:"https://www.linkedin.com/in/manvendra-shukul/"},
    {name:"Hideo Kojima",title:"Game Director",company:"Kojima Productions",linkedin:"https://www.linkedin.com/in/hideo-kojima/"},
    {name:"Shigeru Miyamoto",title:"Creator of Mario & Zelda",company:"Nintendo",linkedin:"https://www.linkedin.com/in/shigeru-miyamoto/"}
  ]
}


,"psychologist": {
  title:"Psychologist / Counsellor",icon:"🧠",category:"Healthcare & Social Science",
  keywords:["psychologist","psychology","counsellor","therapist","mental health","clinical psychology","counselling","behavioral"],
  description:"Study human behavior and help people overcome mental health challenges through therapy and counselling.",
  roadmap:[
    {phase:"Class 11-12: Humanities / Science",color:"#8b5cf6",steps:[
      {title:"Humanities or PCB Stream",desc:"Psychology and Sociology at +2 level — Biology useful for understanding brain and nervous system",resources:["NCERT Psychology","NCERT Sociology"]},
      {title:"Entrance Exams",desc:"DU Entrance, BHU, TISS, Symbiosis, JNU entrance tests for BA/B.Sc Psychology",resources:["DU Entrance","TISSMAT"]},
      {title:"Develop Empathy",desc:"Volunteer at NGOs, helplines, community centers — empathy and listening skills are core",resources:["iCall India","Vandrevala Foundation"]}
    ]},
    {phase:"BA / B.Sc Psychology (3 Years)",color:"#7c3aed",steps:[
      {title:"Core Subjects",desc:"Developmental Psychology, Social Psychology, Abnormal Psychology, Cognitive Psychology, Neuroscience",resources:["Atkinson Hilgard's","David Myers Psychology"]},
      {title:"Research Methods & Statistics",desc:"SPSS, research design, surveys — psychology is very research-oriented",resources:["SPSS tutorials","APA format"]},
      {title:"Internship / Volunteering",desc:"Schools, hospitals, NGOs — practical experience with real clients/students is critical",resources:["Internshala","Mind Matters"]}
    ]},
    {phase:"MA / M.Sc Psychology & RCI Registration",color:"#6d28d9",steps:[
      {title:"MA / M.Sc Psychology",desc:"NIMHANS, TISS, Delhi University, Hyderabad University — India's best postgrad programs",resources:["NIMHANS","TISS Admissions"]},
      {title:"RCI (Rehabilitation Council India)",desc:"Mandatory registration for clinical/rehabilitation practice in India",resources:["RCI India","RCI registration guide"]},
      {title:"Specializations",desc:"Clinical, Counselling, Industrial-Organizational (I/O), Educational, Forensic, Sports Psychology",resources:["APA Division","INDIApsychology"]}
    ]},
    {phase:"Professional Career",color:"#4c1d95",steps:[
      {title:"Private Practice",desc:"Set up counselling practice — clients include individuals, couples, corporates — ₹800-3000/session",resources:["RCI India","iCall platform"]},
      {title:"Corporate / HR Psychology",desc:"Employee wellbeing, EAP programs, organizational development — growing demand in Indian corporates",resources:["SHRM India","Corporate HR roles"]},
      {title:"Schools & Hospitals",desc:"School counsellor (CBSE mandates it), hospital clinical psychologist, rehabilitation centers",resources:["CBSE guidelines","NIMHANS hospital"]}
    ]}
  ],
  professionals:[
    {name:"Soumitra Pathare",title:"Director",company:"Centre for Mental Health Law & Policy",linkedin:"https://www.linkedin.com/in/soumitra-pathare/"},
    {name:"Vikram Patel",title:"Professor & Global Mental Health Leader",company:"Harvard Medical School",linkedin:"https://www.linkedin.com/in/vikram-patel-mental-health/"},
    {name:"Shyam Bhat",title:"Psychiatrist & Founder",company:"LiveWell Foundation",linkedin:"https://www.linkedin.com/in/shyam-bhat/"},
    {name:"Martin Seligman",title:"Father of Positive Psychology",company:"University of Pennsylvania",linkedin:"https://www.linkedin.com/in/martin-seligman/"}
  ]
},

"biologist": {
  title:"Biologist / Biotechnologist",icon:"🧬",category:"Science",
  keywords:["biologist","biology","biotechnology","biotech","genetics","molecular biology","microbiology","life sciences","biochemistry"],
  description:"Study living organisms and apply biological knowledge to medicine, agriculture, environment, and industry.",
  roadmap:[
    {phase:"Class 11-12: PCB",color:"#059669",steps:[
      {title:"PCB Stream",desc:"Biology, Chemistry, Physics — Biology is the foundation, Chemistry equally important for biochemistry",resources:["NCERT Biology","Trueman Biology"]},
      {title:"Competitive Exams",desc:"CUET for central universities, IIT-JAM for IIT BS programs, IISER aptitude test for IISER",resources:["CUET biology","IIT JAM Biology"]},
      {title:"Science Olympiads",desc:"NSOB (National Biology Olympiad) — top performers attend IBO, get direct IISc/IIT admissions",resources:["HBCSE India","IBO preparation"]}
    ]},
    {phase:"B.Sc Biology / Biotechnology / Microbiology (3 Years)",color:"#047857",steps:[
      {title:"Core Subjects",desc:"Cell Biology, Genetics, Biochemistry, Microbiology, Ecology, Molecular Biology, Immunology",resources:["Alberts Molecular Biology","Stryer Biochemistry"]},
      {title:"Lab Techniques",desc:"PCR, gel electrophoresis, cell culture, microscopy, ELISA — essential practical skills",resources:["Cold Spring Harbor Protocols","Bio-Rad"]},
      {title:"Research Internships",desc:"SRFP (JNCASR), NIUS (HBCSE), IISc Research intern programs for undergrads",resources:["JNCASR SRFP","IISc internship"]}
    ]},
    {phase:"M.Sc / PhD in Biology",color:"#065f46",steps:[
      {title:"M.Sc Specialization",desc:"Molecular Biology, Microbiology, Genetics, Botany, Zoology, Bioinformatics, Marine Biology",resources:["IIT-JAM Bio","CSIR JRF"]},
      {title:"CSIR-UGC NET / GATE",desc:"CSIR JRF fellowship for PhD — requires clearing NET exam; opens national labs and universities",resources:["CSIR JRF","GATE life sciences"]},
      {title:"PhD & Research",desc:"Work at NCBS, TIFR, IISER, CCMB, CSIR labs — or go abroad with fellowship",resources:["NCBS Bangalore","CSIR labs India"]}
    ]},
    {phase:"Professional Career",color:"#064e3b",steps:[
      {title:"Research & Academia",desc:"Publish in Nature, Cell, Science — become professor at IIT/IISc, run own research lab",resources:["Nature.com","Research india"]},
      {title:"Biotech / Pharma Industry",desc:"Biocon, Serum Institute, Panacea Biotech — bioinformatics, R&D, quality roles",resources:["Biocon careers","Serum Institute"]},
      {title:"Emerging BioTech",desc:"CRISPR gene editing, synthetic biology, biofuels, biomaterials — frontier of science",resources:["iGEM competition","GenBank NCBI"]}
    ]}
  ],
  professionals:[
    {name:"Kiran Mazumdar-Shaw",title:"Founder & Chairperson",company:"Biocon",linkedin:"https://www.linkedin.com/in/kiran-mazumdar-shaw/"},
    {name:"Raghunath Mashelkar",title:"Scientist & Padma Vibhushan",company:"CSIR (Former DG)",linkedin:"https://www.linkedin.com/in/raghunath-mashelkar/"},
    {name:"Gagandeep Kang",title:"Virologist & FRS",company:"CMC Vellore",linkedin:"https://www.linkedin.com/in/gagandeep-kang/"},
    {name:"Jennifer Doudna",title:"Nobel Laureate — CRISPR",company:"UC Berkeley",linkedin:"https://www.linkedin.com/in/jennifer-doudna/"}
  ]
},

"school-teacher": {
  title:"School Teacher / Educator",icon:"📚",category:"Education",
  keywords:["teacher","school teacher","educator","teaching","primary teacher","secondary teacher","TGT","PGT","B.Ed"],
  description:"Shape future generations by teaching school students — one of society's most impactful professions.",
  roadmap:[
    {phase:"Class 11-12: Any Stream",color:"#d97706",steps:[
      {title:"Subject of Choice Stream",desc:"Choose stream based on what you want to teach — Science (PCM/PCB), Commerce, Arts/Humanities",resources:["NCERT books","Subject mastery"]},
      {title:"Communication & Patience",desc:"Teaching requires strong communication, patience, and genuine love for students",resources:["Communication skills books","Volunteer tutoring"]},
      {title:"Graduation in Subject",desc:"Plan to do B.Sc (for science), B.A. (for humanities), B.Com (for commerce) in your subject",resources:["DU admissions","State university admissions"]}
    ]},
    {phase:"Graduation + B.Ed (3-4 Years)",color:"#b45309",steps:[
      {title:"Bachelor's Degree in Subject",desc:"B.Sc/B.A./B.Com — 3 years in the subject you want to teach",resources:["State universities","IGNOU"]},
      {title:"B.Ed (Bachelor of Education)",desc:"1-2 year professional teacher training — pedagogy, classroom management, lesson planning",resources:["B.Ed admissions","IGNOU B.Ed"]},
      {title:"Teaching Internship",desc:"30+ days school teaching practice (practice teaching) during B.Ed — real classroom experience",resources:["School affiliations","DIET centers"]}
    ]},
    {phase:"TET / CTET / Competitive Exams",color:"#92400e",steps:[
      {title:"CTET / State TET",desc:"Central Teacher Eligibility Test — mandatory for government school teaching in India",resources:["CTET.nic.in","KVS TGT exam"]},
      {title:"KVS / NVS / State Teacher Recruitment",desc:"Kendriya Vidyalaya, Navodaya Vidyalaya, State Board — stable government teaching jobs",resources:["KVS recruitment","NVS latest"]},
      {title:"M.Ed for Senior Roles",desc:"Masters in Education for senior teacher, school administrator, headmaster roles",resources:["M.Ed colleges India","IGNOU M.Ed"]}
    ]},
    {phase:"Professional Career",color:"#78350f",steps:[
      {title:"Government School Teacher",desc:"PRT/TGT/PGT designation (Primary/Trained Graduate/Post Graduate Teacher) at KV/NV/State Schools",resources:["DSSSB","State PSC teacher"]},
      {title:"Private School Teaching",desc:"CBSE/ICSE/IB schools — better pay, professional environment, often corporate-like culture",resources:["TeacherOn.in","Private school jobs"]},
      {title:"EdTech & Online Teaching",desc:"BYJU's, Unacademy, Vedantu, PhysicsWallah — teach thousands online with high impact",resources:["Unacademy educator","BYJU's educator"]}
    ]}
  ],
  professionals:[
    {name:"Arvind Gupta",title:"Toy Inventor & Educator",company:"IUCAA",linkedin:"https://www.linkedin.com/in/arvind-gupta-toys/"},
    {name:"Alka Kapur",title:"Principal",company:"Modern Public School Delhi",linkedin:"https://www.linkedin.com/in/alka-kapur/"},
    {name:"Yashwant Singh Parmar",title:"Innovative Educator",company:"Government School Rajasthan",linkedin:"https://www.linkedin.com/in/yashwant-singh-parmar/"},
    {name:"Sal Khan",title:"Founder",company:"Khan Academy",linkedin:"https://www.linkedin.com/in/salkhan/"}
  ]
},

"investment-banker": {
  title:"Investment Banker",icon:"💰",category:"Finance",
  keywords:["investment banker","investment banking","IB","finance banker","wall street","IBD","M&A","IPO","capital markets"],
  description:"Raise capital for companies, execute M&A deals, take companies public — high-stakes and high-reward finance.",
  roadmap:[
    {phase:"Class 11-12: Commerce + Maths",color:"#15803d",steps:[
      {title:"Commerce with Maths",desc:"Accountancy, Business Studies, Economics, Maths — strong quantitative foundation critical for IB",resources:["NCERT Commerce","TS Grewal Accountancy"]},
      {title:"CAT / IIM / Foreign MBA Prep",desc:"Best IBankers have IIM MBA or foreign MBA (ISB, Wharton, LBS) — start prep early",resources:["CAT prep","MBA rankings"]},
      {title:"Read Financial News Daily",desc:"Economic Times, Bloomberg, WSJ — understand markets, M&A news, IPOs from school itself",resources:["Bloomberg","Economic Times"]}
    ]},
    {phase:"B.Com / BBA / Economics (3 Years)",color:"#166534",steps:[
      {title:"Core Commerce Subjects",desc:"Corporate Finance, Financial Management, Accounting, Economics, Statistics, Business Law",resources:["Ross Corporate Finance","Brealey Myers Finance"]},
      {title:"CFA Level 1 Early",desc:"Start CFA Level 1 during graduation — massive signal to IBanks that you're serious about finance",resources:["CFA Institute","Kaplan Schweser"]},
      {title:"Finance Internships",desc:"Target bank internships, stock broking, investment research firms — Summer Analyst programs",resources:["Goldman Sachs Internship","Kotak IB internship"]}
    ]},
    {phase:"MBA (Finance) — The Key Step",color:"#14532d",steps:[
      {title:"MBA from Top B-School",desc:"IIM A/B/C, ISB Hyderabad, MDI, XLRI — or abroad: Wharton, LBS, INSEAD for global IB",resources:["IIM CAT","ISB PGP"]},
      {title:"Summer Internship (SIP) at IB",desc:"Most critical step — IIM/ISB summer at Goldman Sachs, Morgan Stanley, Citi, JPMorgan leads to PPO",resources:["IIM placement","Bank PPO"]},
      {title:"Technical Skills",desc:"Financial modeling (DCF, LBO, M&A), Excel/VBA, Bloomberg Terminal, Pitchbook",resources:["Wall Street Prep","Mergers & Inquisitions"]}
    ]},
    {phase:"Professional Career",color:"#052e16",steps:[
      {title:"Analyst / Associate",desc:"Start as Analyst at Goldman Sachs, Morgan Stanley, JM Financial, Kotak IB — 80-100hr weeks",resources:["GS India careers","Kotak Investment Banking"]},
      {title:"VP / Director / MD",desc:"Climb to VP in 5-7 years, MD in 10+ years — MDs earn ₹3-10Cr/year plus bonuses",resources:["LinkedIn IB","Levels Finance"]},
      {title:"PE / Hedge Fund Exit",desc:"Senior IBankers move to Private Equity (KKR, Blackstone), Hedge Funds, Venture Capital",resources:["PE Hub","VC Circle India"]}
    ]}
  ],
  professionals:[
    {name:"Uday Kotak",title:"Founder & MD",company:"Kotak Mahindra Bank",linkedin:"https://www.linkedin.com/in/uday-kotak/"},
    {name:"Sanjay Nayar",title:"Senior MD",company:"KKR India",linkedin:"https://www.linkedin.com/in/sanjay-nayar-kkr/"},
    {name:"Renuka Ramnath",title:"Founder & CEO",company:"Multiples Alternate Asset Mgmt",linkedin:"https://www.linkedin.com/in/renuka-ramnath/"},
    {name:"Radhika Gupta",title:"CEO",company:"Edelweiss Mutual Fund",linkedin:"https://www.linkedin.com/in/radhika-gupta-edelweiss/"}
  ]
},

"entrepreneur": {
  title:"Entrepreneur / Business Founder",icon:"🚀",category:"Business",
  keywords:["entrepreneur","startup","founder","business","venture","startup founder","self employed","business owner","startup india"],
  description:"Build companies from scratch — identify problems, create solutions, and scale a business.",
  roadmap:[
    {phase:"Class 11-12: Any Stream",color:"#dc2626",steps:[
      {title:"Any Stream — Mindset Matters Most",desc:"Entrepreneurship has no set educational path — curiosity, resilience, and execution matter",resources:["Zero to One (Peter Thiel)","The Lean Startup"]},
      {title:"Build First Projects Early",desc:"Sell something — lemonade stand, freelance services, small YouTube channel — start learning by doing",resources:["Shark Tank India","YCombinator videos"]},
      {title:"Study Business Fundamentals",desc:"Basic accounting, marketing, customer understanding — BBA or Commerce is a good foundation",resources:["NCERT Economics","Khan Academy Finance"]}
    ]},
    {phase:"BBA / B.Tech / Any Degree (3-4 Years)",color:"#b91c1c",steps:[
      {title:"Learn While Studying",desc:"Intern at startups, take online courses, attend startup events (Nasscom, TiE Summit)",resources:["TiE.org","Nasscom 10K startups"]},
      {title:"Ideation & Validation",desc:"Identify real problems, talk to 100 potential customers, validate before building",resources:["Mom Test (Rob Fitzpatrick)","Steve Blank IDEO"]},
      {title:"First Business",desc:"Start a micro business — freelancing, student club, campus service, workshop — learn P&L",resources:["Startup India portal","iCreate Gujarat"]}
    ]},
    {phase:"Build & Launch",color:"#991b1b",steps:[
      {title:"MVP Development",desc:"Build Minimum Viable Product — done faster/cheaper than you think, lean methods work",resources:["Y Combinator","Product Hunt"]},
      {title:"Fundraising",desc:"Bootstrapping → Angel Investors → Seed/Series A — Sequoia Surge, 100X.VC, AngelList India",resources:["100X.VC","Sequoia Surge"]},
      {title:"MBA (Optional)",desc:"IIM/ISB MBA helps for network and credibility — but not mandatory; many founders skip it",resources:["IIM Ahmedabad","Stanford GSB"]}
    ]},
    {phase:"Scale & Exit",color:"#7f1d1d",steps:[
      {title:"Building a Team",desc:"Hiring A-players, culture building, equity splitting — most important decisions you'll make",resources:["Who (Hiring book)","Stripe Atlas"]},
      {title:"Startup India & Govt Support",desc:"DPIIT recognition, income tax exemption, fund of funds, Atal Innovation Mission",resources:["Startupindia.gov.in","SIDBI fund"]},
      {title:"Exit Strategies",desc:"IPO, strategic acquisition, PE buyout, secondary sale — plan your exit from Day 1",resources:["Venture Deals (book)","VCCircle India"]}
    ]}
  ],
  professionals:[
    {name:"Byju Raveendran",title:"Founder",company:"BYJU's",linkedin:"https://www.linkedin.com/in/byju-raveendran/"},
    {name:"Falguni Nayar",title:"Founder & CEO",company:"Nykaa",linkedin:"https://www.linkedin.com/in/falguni-nayar/"},
    {name:"Vijay Shekhar Sharma",title:"Founder",company:"Paytm",linkedin:"https://www.linkedin.com/in/vijayss/"},
    {name:"Nithin Kamath",title:"Founder & CEO",company:"Zerodha",linkedin:"https://www.linkedin.com/in/nithin-kamath-81136242/"}
  ]
}


,"graphic-designer": {
  title:"Graphic Designer",icon:"🎨",category:"Arts & Design",
  keywords:["graphic designer","graphic design","visual designer","brand designer","logo","typography","design studio"],
  description:"Create visual communications — logos, posters, branding, website visuals, and marketing materials.",
  roadmap:[
    {phase:"Class 11-12: Any + Art Portfolio",color:"#ec4899",steps:[
      {title:"Any Stream — Art Skills Key",desc:"Practice drawing, typography, color theory alongside academics",resources:["Pinterest","Behance inspiration"]},
      {title:"NID / CEED / NIFT Entrance",desc:"National Institute of Design entrance tests design aptitude and sketching ability",resources:["NID prep","CEED exam"]},
      {title:"Learn Basics Online",desc:"Start with free Canva, then move to Photoshop & Illustrator — build early portfolio",resources:["Canva","Adobe Creative Cloud"]}
    ]},
    {phase:"B.Des / BFA / Diploma (3-4 Years)",color:"#db2777",steps:[
      {title:"Core Design Subjects",desc:"Typography, Color Theory, Visual Communication, Layout Design, Brand Identity",resources:["NID curriculum","Thinking with Type book"]},
      {title:"Adobe Suite Mastery",desc:"Photoshop, Illustrator, InDesign — industry standard tools for print and digital design",resources:["Adobe tutorials","Skillshare"]},
      {title:"Portfolio Projects",desc:"Design logos, posters, brand identities, packaging — publish on Behance and Dribbble",resources:["Behance.net","Dribbble"]}
    ]},
    {phase:"Specialization",color:"#be185d",steps:[
      {title:"Motion Graphics & Video",desc:"After Effects, Premiere Pro — add motion design to portfolio for higher demand",resources:["Motion Design School","Andrew Kramer"]},
      {title:"UI/UX Design",desc:"Transition into more technical UI/UX work with Figma — much higher salary bracket",resources:["Figma courses","Google UX certificate"]},
      {title:"Brand Strategy",desc:"Learn brand positioning, visual strategy — move from executor to strategic creative director",resources:["Brand Gap book","Young Guns design"]}
    ]},
    {phase:"Professional Career",color:"#9d174d",steps:[
      {title:"Design Studios",desc:"WYP (What's Your Problem), Studio ABD, Elephant Design, Codesign — India's top design studios",resources:["Behance India","Design India"]},
      {title:"Tech Companies",desc:"Infosys, TCS design teams, Flipkart, Swiggy — in-house design with product teams",resources:["Flipkart design","LinkedIn design"]},
      {title:"Freelance",desc:"Freelance on 99designs, Upwork, direct clients — global reach, flexible income",resources:["99designs","Upwork design"]}
    ]}
  ],
  professionals:[
    {name:"Sagi Haviv",title:"Partner",company:"Chermayeff & Geismar & Haviv",linkedin:"https://www.linkedin.com/in/sagihaviv/"},
    {name:"Sagmeister Walsh",title:"Designer",company:"Sagmeister & Walsh",linkedin:"https://www.linkedin.com/in/stefan-sagmeister/"},
    {name:"Khoi Vinh",title:"Principal Designer",company:"Adobe",linkedin:"https://www.linkedin.com/in/khoivinh/"},
    {name:"Itu Chaudhuri",title:"Founder",company:"ICD (India's top ID firm)",linkedin:"https://www.linkedin.com/in/itu-chaudhuri/"}
  ]
},

"ias-civil-services": {
  title:"IAS / Civil Services Officer",icon:"🏛️",category:"Government & Public Service",
  keywords:["IAS","civil services","UPSC","IPS","IFS","collector","district","government officer","civil service","UPSC CSE"],
  description:"Become an IAS, IPS, or IFS officer through UPSC — shape public policy and governance across India.",
  roadmap:[
    {phase:"Class 11-12: Humanities Preferred",color:"#1e3a8a",steps:[
      {title:"Humanities Stream (Optional but Helpful)",desc:"Political Science, History, Geography, Economics — direct overlap with UPSC GS syllabus",resources:["NCERT Old textbooks","Laxmikant Polity"]},
      {title:"Current Affairs Foundation",desc:"Start reading The Hindu / Indian Express daily — UPSC is 40% current affairs",resources:["The Hindu","PIB India"]},
      {title:"Choose Optional Early",desc:"UPSC requires one optional subject — Sociology, History, Geography, PSIR, Public Admin",resources:["UPSC syllabus PDF","ForumIAS"]}
    ]},
    {phase:"Graduation in Any Subject (3 Years)",color:"#1d4ed8",steps:[
      {title:"Graduation Mandatory",desc:"Any bachelor's degree from recognized university — B.A., B.Sc., B.Tech, B.Com all eligible",resources:["DU / State university","IGNOU for flexibility"]},
      {title:"Begin UPSC Preparation",desc:"NCERT Class 6-12 all subjects → Standard books → Current affairs: 1-2 years preparation typical",resources:["NCERT books","Vision IAS"]},
      {title:"Mock Tests & Previous Papers",desc:"Solve 10 years previous papers, join test series — consistency beats intelligence",resources:["Insights IAS test","ForumIAS mocks"]}
    ]},
    {phase:"UPSC Prelims → Mains → Interview",color:"#1e40af",steps:[
      {title:"Prelims (GS Paper 1 + CSAT)",desc:"200 MCQs on History, Geography, Polity, Economy, Environment, Science & Current Affairs",resources:["Laxmikant","Shankar IAS Environment"]},
      {title:"Mains (9 Papers + Essay)",desc:"GS Papers 1-4, Essay, Optional Paper 1 & 2, plus language papers — 7 day exam",resources:["UPSC mains books","IASbaba notes"]},
      {title:"Personality Test (Interview)",desc:"30-45 min interview by UPSC board — tests personality, awareness, decision making, not just knowledge",resources:["IAS interview prep","Chanakya IAS"]}
    ]},
    {phase:"Professional Service",color:"#172554",steps:[
      {title:"LBSNAA Training (IAS)",desc:"2-year training at Lal Bahadur Shastri National Academy of Administration, Mussoorie",resources:["LBSNAA","ARC Reports"]},
      {title:"District Posting",desc:"SDM → DM/Collector → Secretary level — real power to change lives at district level",resources:["DM office structure","State cadre"]},
      {title:"Specializations in IAS",desc:"Foreign postings, World Bank deputation, PMO, Cabinet Secretariat, UIDAI-type missions",resources:["MEA India","PMO careers"]}
    ]}
  ],
  professionals:[
    {name:"Sanjiv Chaturvedi",title:"IFS Officer & Ramon Magsaysay Awardee",company:"AIIMS",linkedin:"https://www.linkedin.com/in/sanjiv-chaturvedi/"},
    {name:"Durga Shakti Nagpal",title:"IAS Officer",company:"Uttar Pradesh Cadre",linkedin:"https://www.linkedin.com/in/durga-shakti-nagpal/"},
    {name:"Armstrong Pame",title:"Miracle Man IAS",company:"Manipur Cadre",linkedin:"https://www.linkedin.com/in/armstrong-pame/"},
    {name:"R. Balakrishnan",title:"Former Chief Secretary",company:"Tamilnadu Government",linkedin:"https://www.linkedin.com/in/r-balakrishnan-ias/"}
  ]
},

"environmental-scientist": {
  title:"Environmental Scientist",icon:"🌿",category:"Science & Environment",
  keywords:["environment","environmental scientist","ecology","conservation","climate change","sustainability","green","wildlife","EIA"],
  description:"Study and protect the natural environment — address climate change, pollution, conservation, and sustainability.",
  roadmap:[
    {phase:"Class 11-12: PCB or PCM",color:"#16a34a",steps:[
      {title:"Biology or Science Stream",desc:"Biology: ecology, botany, zoology — Math: for environmental modeling, climate data",resources:["NCERT Biology","Environmental Science"]},
      {title:"CUET / Entrance Exams",desc:"CUET for central university B.Sc, Delhi University, BHU, IGNOU environmental sciences",resources:["CUET portal","DU environment"]},
      {title:"Outdoor & Nature Activities",desc:"Join NCC, NSS, trekking clubs, NGO conservation camps — practical exposure matters",resources:["Wildlife Institute of India","WWF India internship"]}
    ]},
    {phase:"B.Sc Environmental Science (3 Years)",color:"#15803d",steps:[
      {title:"Core Subjects",desc:"Ecology, Environmental Chemistry, Climatology, Environmental Law, GIS, Remote Sensing",resources:["Miller Environmental Science","TERI textbooks"]},
      {title:"Field Work",desc:"Biodiversity surveys, water/air quality monitoring, forest conservation fieldwork",resources:["FSI India","WII Dehradun"]},
      {title:"GIS & Data Analysis",desc:"ArcGIS, QGIS, R for ecology — essential tools for environmental jobs",resources:["Esri training","QGIS documentation"]}
    ]},
    {phase:"M.Sc Environmental Science / MBA in Sustainability",color:"#166534",steps:[
      {title:"M.Sc Specializations",desc:"Climate Change, Environmental Management, Biodiversity, Pollution Control, Forest Management",resources:["TERI University","WII M.Sc"]},
      {title:"Environmental Law",desc:"Add LL.B or PG Diploma in Environmental Law — NGT practice, EIA consulting",resources:["NGT India","Environmental law books"]},
      {title:"International Opportunities",desc:"UNEP, WWF, World Bank Environment — UN fellowship programs for Indian students",resources:["UNEP.org","UN Volunteers"]}
    ]},
    {phase:"Professional Career",color:"#052e16",steps:[
      {title:"Government / Regulatory",desc:"MoEFCC (Ministry of Environment), State PCB, CPCB, Forest Dept, WII — policy and oversight roles",resources:["MoEFCC India","CPCB India"]},
      {title:"Consulting",desc:"EIA (Environmental Impact Assessment) consulting — AECOM, ERM, Ramky Environment",resources:["ERM Group India","AECOM India"]},
      {title:"NGO / Conservation",desc:"WWF India, Greenpeace, Sanctuary Asia, CMS Vatavaran — mission-driven environment careers",resources:["WWF India careers","Wildlife SOS"]}
    ]}
  ],
  professionals:[
    {name:"Sunita Narain",title:"Director General",company:"Centre for Science & Environment",linkedin:"https://www.linkedin.com/in/sunita-narain/"},
    {name:"Bittu Sahgal",title:"Founder",company:"Sanctuary Asia",linkedin:"https://www.linkedin.com/in/bittu-sahgal/"},
    {name:"Vandana Shiva",title:"Environmental Activist & Scientist",company:"Navdanya",linkedin:"https://www.linkedin.com/in/vandana-shiva/"},
    {name:"R K Pachauri",title:"Climate Scientist (Late)",company:"TERI / IPCC",linkedin:"https://www.linkedin.com/in/r-k-pachauri/"}
  ]
},

"interior-designer": {
  title:"Interior Designer",icon:"🛋️",category:"Arts & Design",
  keywords:["interior designer","interior design","space design","interior decorating","home design","commercial interior"],
  description:"Design functional and beautiful interior spaces — homes, hotels, offices, restaurants, and retail stores.",
  roadmap:[
    {phase:"Class 11-12: Any Stream",color:"#d97706",steps:[
      {title:"Any Stream + Design Eye",desc:"Observe spaces, follow architecture/interior accounts, develop visual aesthetic sense",resources:["Architectural Digest","Design Milk"]},
      {title:"NATA / Pearl Academy Entrance",desc:"Some programs like B.Des (Interior) require design aptitude — drawing and spatial thinking crucial",resources:["Pearl Academy","Arch Academy Design"]},
      {title:"Sketch & Visualize",desc:"Learn perspective drawing, space sketching, basic AutoCAD — helps in college and career",resources:["YouTube perspective drawing","AutoCAD basics"]}
    ]},
    {phase:"B.Des Interior Design / B.Arch (4-5 Years)",color:"#b45309",steps:[
      {title:"Core Subjects",desc:"Space Planning, Furniture Design, Materials & Finishes, Lighting Design, History of Design, Building Systems",resources:["Francis Ching Interior","Design School textbooks"]},
      {title:"Software Skills",desc:"AutoCAD for plans, 3ds Max / SketchUp / Rhino for 3D, Lumion for renders, Photoshop for presentations",resources:["Autodesk tutorials","Lumion learning"]},
      {title:"Studio Projects",desc:"Residential, commercial, hospitality projects every semester — real client briefs during final year",resources:["College interior projects","Site visits"]}
    ]},
    {phase:"Work Experience & Certifications",color:"#92400e",steps:[
      {title:"Internship at Design Firms",desc:"Work with KSA Design, Studio Lotus, Morph Design Company, Oikos Design Studio — India's leading firms",resources:["Oikos Design","Studio Lotus India"]},
      {title:"Material & Product Knowledge",desc:"Learn flooring, fabrics, lighting products, furniture brands — Livspace, Pepperfry vendor ecosystem",resources:["Livspace Pro","Material explorer"]},
      {title:"CID Certification",desc:"Certified Interior Designer — professional body membership adds credibility for high-ticket projects",resources:["IIID India","NSQF Interior certification"]}
    ]},
    {phase:"Professional Career",color:"#78350f",steps:[
      {title:"Design Studio",desc:"Work at top design firms for 3-5 years to build portfolio, exposure, and network",resources:["Interior design India","Design Dekko"]},
      {title:"Own Practice",desc:"Start your own studio after experience — target high-end residential, luxury hospitality",resources:["Instagram portfolio","Houzz profile"]},
      {title:"Online & Real Estate",desc:"Livspace, HomeLane, Godrej Interio partnerships — growing digital interior design market",resources:["Livspace partner","HomeLane designer"]}
    ]}
  ],
  professionals:[
    {name:"Gauri Khan",title:"Interior Designer",company:"Gauri Khan Designs",linkedin:"https://www.linkedin.com/in/gauri-khan/"},
    {name:"Sussanne Khan",title:"Interior Designer",company:"The Charcoal Project",linkedin:"https://www.linkedin.com/in/sussanne-khan/"},
    {name:"Ravi Vazirani",title:"Principal Designer",company:"Vazirani Design",linkedin:"https://www.linkedin.com/in/ravi-vazirani/"},
    {name:"Kelly Wearstler",title:"Interior Designer",company:"Kelly Wearstler Studio",linkedin:"https://www.linkedin.com/in/kelly-wearstler/"}
  ]
}

};

// ===== MERGE INTO MAIN CAREER_DATA =====
Object.assign(CAREER_DATA, EXTENDED_CAREER_DATA);

// ===== EXTENDED SEARCH ALIASES =====
const EXTENDED_ALIASES = {
  "civil engineering":"civil-engineer","construction engineer":"civil-engineer","structural engineer":"civil-engineer",
  "mechanical engineering":"mechanical-engineer","auto engineer":"mechanical-engineer","automobile engineer":"mechanical-engineer",
  "electrical engineering":"electrical-engineer","electronics engineer":"electrical-engineer","power engineer":"electrical-engineer",
  "chemical engineering":"chemical-engineer","process engineer":"chemical-engineer","petrochemical":"chemical-engineer",
  "aerospace engineering":"aerospace-engineer","aeronautical engineer":"aerospace-engineer","rocket scientist":"aerospace-engineer",
  "mbbs":"medical-doctor","doctor":"medical-doctor","physician":"medical-doctor","medical":"medical-doctor","mbbs doctor":"medical-doctor",
  "bds":"dentist","dental surgeon":"dentist","orthodontist":"dentist","oral surgeon":"dentist",
  "bsc nursing":"nurse","gnm nurse":"nurse","nursing":"nurse","hospital nurse":"nurse",
  "b pharm":"pharmacist","pharmacy":"pharmacist","pharmaceutical":"pharmacist","drug store":"pharmacist",
  "fashion design":"fashion-designer","clothing designer":"fashion-designer","textile designer":"fashion-designer",
  "filmmaking":"film-director","movie director":"film-director","cinema":"film-director","bollywood director":"film-director",
  "ca":"chartered-accountant","icai":"chartered-accountant","accountant":"chartered-accountant","audit":"chartered-accountant",
  "advocate":"lawyer","llb":"lawyer","legal":"lawyer","attorney":"lawyer","barrister":"lawyer",
  "b.arch":"architect","architecture":"architect","building design":"architect","urban design":"architect",
  "commercial pilot":"pilot","cpl":"pilot","airline pilot":"pilot","aviation":"pilot","flight":"pilot",
  "reporter":"journalist","journalism":"journalist","news":"journalist","newsroom":"journalist",
  "physics":"physicist","research scientist":"physicist","quantum physics":"physicist","astrophysics":"physicist",
  "cooking":"chef","culinary":"chef","cook":"chef","head chef":"chef","restaurant chef":"chef",
  "sports":"sports-coach","fitness trainer":"sports-coach","athletic coach":"sports-coach","pe teacher":"school-teacher",
  "gaming":"game-developer","unity developer":"game-developer","unreal developer":"game-developer","indie dev":"game-developer",
  "mental health":"psychologist","counseling":"psychologist","therapist":"psychologist","counsellor":"psychologist",
  "biotech":"biologist","biotechnology":"biologist","microbiology":"biologist","genetics":"biologist",
  "teaching":"school-teacher","teacher":"school-teacher","educator":"school-teacher","b.ed":"school-teacher",
  "ib":"investment-banker","investment banking":"investment-banker","m&a":"investment-banker","capital markets":"investment-banker",
  "startup":"entrepreneur","business founder":"entrepreneur","startup founder":"entrepreneur","small business":"entrepreneur",
  "logo design":"graphic-designer","visual design":"graphic-designer","brand design":"graphic-designer",
  "ias":"ias-civil-services","upsc":"ias-civil-services","civil services":"ias-civil-services","ips":"ias-civil-services","collector":"ias-civil-services",
  "ecology":"environmental-scientist","climate change":"environmental-scientist","wildlife":"environmental-scientist","sustainability":"environmental-scientist",
  "home design":"interior-designer","interior decoration":"interior-designer","space design":"interior-designer"
};
Object.assign(SEARCH_ALIASES, EXTENDED_ALIASES);
// ===== ADDITIONAL CAREERS (Batch 7) =====
const EXTRA_CAREER_DATA = {

"marine-biologist": {
  title:"Marine Biologist",icon:"🐬",category:"Science",
  keywords:["marine biologist","marine biology","ocean","sea","aquatic","marine scientist","oceanography","coral reef","fisheries"],
  description:"Study ocean life — from coral reefs and deep-sea creatures to marine conservation and aquaculture.",
  roadmap:[
    {phase:"Class 11-12: PCB",color:"#0891b2",steps:[
      {title:"PCB Stream",desc:"Biology and Chemistry core — ecology, genetics, and marine life awareness",resources:["NCERT Biology","Ocean documentaries"]},
      {title:"Entrance Exams",desc:"CUET for B.Sc Marine Biology, ICAR for fisheries, CUSAT Kerala, Cochin University",resources:["CUSAT admissions","ICAR fisheries"]},
      {title:"Sea Exposure",desc:"Visit coastal areas, snorkeling, scuba diving — hands-on nature exposure builds passion",resources:["Scuba diving courses","WWF Ocean"]}
    ]},
    {phase:"B.Sc Marine Biology / Oceanography (3 Years)",color:"#0284c7",steps:[
      {title:"Core Subjects",desc:"Marine Ecology, Oceanography, Ichthyology, Phycology, Marine Botany, Fisheries Science",resources:["Nybakken Marine Biology","MBL Woods Hole"]},
      {title:"Diving & Field Skills",desc:"SCUBA certification (PADI), fish identification, plankton sampling, water quality testing",resources:["PADI.com","IOC ICAR Goa"]},
      {title:"Research Stations",desc:"NIO Goa (National Institute of Oceanography), CMFRI internships — India's top marine labs",resources:["NIO Goa","CMFRI Kochi"]}
    ]},
    {phase:"M.Sc / PhD Marine Sciences",color:"#0369a1",steps:[
      {title:"M.Sc Specialization",desc:"Marine Ecology, Fisheries Science, Aquaculture, Coral Reef Biology, Deep Sea Biology",resources:["CUSAT PG","IISc Bangalore"]}    ,
      {title:"International Research",desc:"Woods Hole Oceanographic (USA), Plymouth Marine Lab (UK), KAUST (Saudi Arabia) fellowships",resources:["WHOI fellowship","Fulbright marine"]},
      {title:"Conservation Projects",desc:"Join WWF Oceans, NCF, WCS — participate in marine protected area projects",resources:["WWF India Oceans","NCF India"]}
    ]},
    {phase:"Career",color:"#075985",steps:[
      {title:"Research & Academia",desc:"NIO Goa, NCAOR, CMLRE, ICAR-CMFRI — India's premier marine research institutions",resources:["NIO careers","CMFRI"]},
      {title:"Conservation",desc:"Ocean conservancy NGOs, marine protected area management, coral reef monitoring",resources:["WWF Ocean","Reef Watch India"]},
      {title:"Government & Industry",desc:"Fisheries Department, Coast Guard scientific, aquaculture industry, marine tourism consultancy",resources:["MoFPI India","Blue Economy India"]}
    ]}
  ],
  professionals:[
    {name:"Silas C. Shirley",title:"Marine Ecologist",company:"NCPOR Goa",linkedin:"https://www.linkedin.com/in/silas-shirley/"},
    {name:"Jane Lubchenco",title:"Marine Biologist",company:"Oregon State University",linkedin:"https://www.linkedin.com/in/jane-lubchenco/"},
    {name:"Sylvia Earle",title:"Ocean Explorer & Conservationist",company:"Mission Blue",linkedin:"https://www.linkedin.com/in/sylvia-earle/"},
    {name:"Roshni Subramanian",title:"Marine Researcher",company:"CWS India",linkedin:"https://www.linkedin.com/in/roshni-subramanian/"}
  ]
},

"hr-manager": {
  title:"HR Manager",icon:"👥",category:"Business & Management",
  keywords:["HR","human resources","HR manager","people ops","talent acquisition","recruitment","HRBP","people management","L&D"],
  description:"Manage people strategy — recruitment, training, culture, performance, and employee wellbeing in organizations.",
  roadmap:[
    {phase:"Class 11-12: Commerce / Humanities",color:"#7c3aed",steps:[
      {title:"Commerce or Arts Stream",desc:"Business studies, psychology, sociology all useful — HR blends people skills with business acumen",resources:["NCERT Business Studies","Psychology basics"]},
      {title:"Graduation Plan",desc:"BBA HR, BA Psychology, B.Com — target MBA HR afterward from XLRI/TISS/SIBM",resources:["BBA admissions","XAT prep (XLRI)"]},
      {title:"Communication & Empathy",desc:"HR is people-centric — develop listening, negotiation, and conflict resolution skills",resources:["Carnegie How to Win Friends","Active listening books"]}
    ]},
    {phase:"BBA / BA / B.Com (3 Years)",color:"#6d28d9",steps:[
      {title:"Core Commerce/Business Subjects",desc:"Organizational Behavior, Business Communication, Economics, Statistics, Business Law",resources:["BBA curriculum","Stephen Robbins OB book"]},
      {title:"HR Certification",desc:"Pursue SHRM-CP, PHR basic certifications online — signals commitment before MBA",resources:["SHRM.org","HRCI certifications"]},
      {title:"HR Internships",desc:"Recruitment agencies, corporate HR departments — even helping with campus placements counts",resources:["Internshala HR","LinkedIn HR internships"]}
    ]},
    {phase:"MBA (Human Resources)",color:"#5b21b6",steps:[
      {title:"MBA HR from Premier B-School",desc:"XLRI Jamshedpur (best for HR), TISS Mumbai, SIBM Pune, MDI Gurgaon — XAT/TISS-MAT required",resources:["XLRI BM+HRM","TISSMAT exam"]},
      {title:"Core MBA HR Subjects",desc:"Industrial Relations, Labor Law, Talent Management, OD & Change, Compensation & Benefits, HR Analytics",resources:["XLRI curriculum","Dessler HRM textbook"]},
      {title:"Summer Internship",desc:"SIP at corporate HR teams — Unilever, Infosys, Tata Group are top employers for HR MBAs",resources:["Unilever HR","TCS HR leadership"]}
    ]},
    {phase:"Professional Career",color:"#4c1d95",steps:[
      {title:"Corporate HR Roles",desc:"HR Business Partner → HR Manager → VP HR → CHRO — lead culture and people strategy",resources:["LinkedIn HR","SHRM India"]},
      {title:"Specializations",desc:"Talent Acquisition, L&D, Compensation & Benefits, HR Analytics, Diversity & Inclusion",resources:["LinkedIn Recruiter","Coursera HR Analytics"]},
      {title:"Consulting",desc:"Aon Hewitt, Mercer, Korn Ferry — HR consulting for multiple organizations",resources:["Mercer India","Aon India"]}
    ]}
  ],
  professionals:[
    {name:"Leena Nair",title:"CEO",company:"Chanel (Former CHRO Unilever)",linkedin:"https://www.linkedin.com/in/leena-nair/"},
    {name:"Adil Malia",title:"Group President HR",company:"Essar Group",linkedin:"https://www.linkedin.com/in/adilmalia/"},
    {name:"Sunit Sinha",title:"CHRO India Lead",company:"IBM India",linkedin:"https://www.linkedin.com/in/sunit-sinha/"},
    {name:"Josh Bersin",title:"HR Industry Analyst",company:"Bersin & Associates",linkedin:"https://www.linkedin.com/in/joshbersin/"}
  ]
},

"digital-marketer": {
  title:"Digital Marketer",icon:"📣",category:"Marketing & Media",
  keywords:["digital marketing","marketing","SEO","social media marketing","PPC","content marketing","growth hacker","marketing manager"],
  description:"Drive business growth online through SEO, paid ads, social media, email, and content marketing.",
  roadmap:[
    {phase:"Class 11-12: Commerce / Humanities",color:"#dc2626",steps:[
      {title:"Commerce or Any Stream",desc:"Business Studies, Economics, English — understanding consumer behavior and communication",resources:["NCERT Business Studies","Marketing basics"]},
      {title:"Online Certificates Early",desc:"Google Digital Garage, HubSpot Inbound Marketing — free and impressive on resume",resources:["Google Digital Garage","HubSpot Academy"]},
      {title:"Build Social Media Presence",desc:"Run an Instagram page, YouTube or blog in a niche you love — learn by doing",resources:["Creator Academy","Buffer Blog"]}
    ]},
    {phase:"BBA / B.Com / BA Mass Comm (3 Years)",color:"#b91c1c",steps:[
      {title:"Core Marketing Subjects",desc:"Consumer Behavior, Marketing Management, Brand Management, Research Methods, Digital Media",resources:["Kotler Marketing Management","BBA curriculum"]},
      {title:"Master the Channels",desc:"SEO (Google Search), Paid Ads (Google/Meta Ads), Email Marketing (Mailchimp), Analytics (GA4)",resources:["Google Ads certification","SEMrush Academy"]},
      {title:"Agencies & Startups",desc:"Intern at digital marketing agencies, D2C brands — hands-on campaign management",resources:["Internshala marketing","LinkedIn marketing"]}
    ]},
    {phase:"MBA Marketing / PG Digital Marketing",color:"#991b1b",steps:[
      {title:"MBA Marketing",desc:"IIM, MICA Ahmedabad (India's best for marketing), SP Jain, XLRI — brand and marketing focus",resources:["MICA admissions","CAT for IIM Marketing"]},
      {title:"Advanced Certifications",desc:"Google Analytics 4, Meta Blueprint, HubSpot CMS, Hootsuite Social Media, SEMrush certified",resources:["Google Analytics cert","Meta Blueprint"]},
      {title:"Performance Marketing",desc:"Growth hacking, CRO (conversion rate), A/B testing, attribution models — highly paid specialization",resources:["CXL Institute","Growth.design"]}
    ]},
    {phase:"Professional Career",color:"#7f1d1d",steps:[
      {title:"Agency Career",desc:"WPP, Publicis, Ogilvy, Dentsu India — global agency network with varied client experience",resources:["Ogilvy India","dentsu India"]},
      {title:"In-house at Brands",desc:"D2C brands, e-commerce, tech companies — Nykaa, Mamaearth, MamaEarth, Zomato marketing teams",resources:["Nykaa careers","Zomato marketing"]},
      {title:"Freelance / Consulting",desc:"Run own channels, monetize with brand partnerships, consulting — scalable income",resources:["LinkedIn Creator","Upwork marketing"]}
    ]}
  ],
  professionals:[
    {name:"Neil Patel",title:"Co-Founder",company:"NP Digital",linkedin:"https://www.linkedin.com/in/neilkpatel/"},
    {name:"Prateek Shah",title:"Founder",company:"Digital Defynd",linkedin:"https://www.linkedin.com/in/prateek-shah-digital/"},
    {name:"Sorav Jain",title:"Founder",company:"echoVME & School of Digital Marketing",linkedin:"https://www.linkedin.com/in/soravjain/"},
    {name:"Ann Handley",title:"Chief Content Officer",company:"MarketingProfs",linkedin:"https://www.linkedin.com/in/annhandley/"}
  ]
},

"biomedical-engineer": {
  title:"Biomedical Engineer",icon:"🩺",category:"Engineering",
  keywords:["biomedical","biomedical engineer","medical devices","bioinstrumentation","prosthetics","tissue engineering","clinical engineer"],
  description:"Apply engineering to solve medical problems — design medical devices, prosthetics, diagnostic equipment.",
  roadmap:[
    {phase:"Class 11-12: PCM or PCB",color:"#059669",steps:[
      {title:"PCM (preferred) or PCB",desc:"Biology for understanding human body + Physics and Maths for engineering principles",resources:["NCERT Physics","NCERT Biology"]},
      {title:"JEE / NEET / State CET",desc:"JEE for engineering colleges, NEET for medical-allied biomedical programs",resources:["JEE coaching","Biomedical admissions"]},
      {title:"Science Project Exposure",desc:"Build simple health monitoring devices, Arduino health projects — shows interdisciplinary interest",resources:["Arduino health projects","Instructables"]}
    ]},
    {phase:"B.Tech / B.E. Biomedical (4 Years)",color:"#047857",steps:[
      {title:"Core Subjects",desc:"Anatomy & Physiology, Bioinstrumentation, Biomechanics, Medical Imaging, Biomaterials, Signal Processing",resources:["Enderle Biomedical Eng","Domach Biomedical"]},
      {title:"Software & Tools",desc:"MATLAB, LabVIEW for biomedical signals, SolidWorks for device design, Python bioinformatics",resources:["MATLAB Biomedical","LabVIEW NI"]},
      {title:"Hospital Internship",desc:"Intern in biomedical department of hospitals — maintain MRI, CT, ventilator, ECG equipment",resources:["Teaching hospitals India","AIIMS biomedical"]}
    ]},
    {phase:"M.Tech / MBA Medtech",color:"#065f46",steps:[
      {title:"M.Tech Specializations",desc:"Medical Devices, Neural Engineering, Tissue Engineering, Clinical Engineering, Bioinformatics",resources:["IIT Bombay M.Tech","GATE BM paper"]},
      {title:"Regulatory Affairs",desc:"CDSCO (India), FDA (USA), CE Mark (Europe) med device approval process is a specialized career",resources:["CDSCO India","FDA 510k"]},
      {title:"Startups & Innovation",desc:"Indian MedTech startup ecosystem booming — Skanray, Niramai, SigTuple, Forus Health",resources:["iMedtech India","Startup India MedTech"]}
    ]},
    {phase:"Professional Career",color:"#064e3b",steps:[
      {title:"Medical Device Industry",desc:"Siemens Healthineers, Philips Healthcare, GE Healthcare India — design and develop devices",resources:["Siemens Healthineers India","GE Healthcare"]},
      {title:"Hospitals — Clinical Engineering",desc:"Maintain and manage medical equipment in hospitals — growing department in Indian hospitals",resources:["AIIMS","Apollo hospitals biomedical"]},
      {title:"R&D & Startups",desc:"CSIR-CEERI, IIT lab spinoffs, health-tech startups — build next-gen affordable diagnostics for India",resources:["CSIR CEERI","iHub IIT"]}
    ]}
  ],
  professionals:[
    {name:"Rustom Mascarenhas",title:"Biomedical Engineer & Innovator",company:"IIT Bombay",linkedin:"https://www.linkedin.com/in/rustom-mascarenhas/"},
    {name:"Robert Langer",title:"Institute Professor",company:"MIT — Biomedical Pioneer",linkedin:"https://www.linkedin.com/in/robert-langer-8a31b/"},
    {name:"Padmasree Warrior",title:"Founder & CEO",company:"Fable (ex-Cisco CTO, tech innovator)",linkedin:"https://www.linkedin.com/in/padmasreewarrior/"},
    {name:"Biomedical Dev",title:"Device Lead",company:"Niramai Health",linkedin:"https://www.linkedin.com/in/geetha-manjunath-niramai/"}
  ]
},

"musician": {
  title:"Musician / Music Producer",icon:"🎵",category:"Arts & Entertainment",
  keywords:["musician","music","singer","producer","music producer","composer","songwriter","vocalist","instrumentalist","band"],
  description:"Create and perform music — from classical instruments and vocals to electronic production and composition.",
  roadmap:[
    {phase:"School + Early Training",color:"#7c3aed",steps:[
      {title:"Start Instrument Early",desc:"Piano, guitar, tabla, violin — 5–10 years of practice before professional career",resources:["Local music guru","YouTube music lessons"]},
      {title:"Music Theory Basics",desc:"Ragas, Talas (Indian classical), or Western music theory — scales, chords, rhythm",resources:["Hindustani music","Western music theory"]},
      {title:"Perform Early",desc:"School events, local shows, YouTube — performing conquers stage fear and builds identity",resources:["YouTube channel","School performances"]}
    ]},
    {phase:"B.Music / B.Performing Arts (3-4 Years)",color:"#6d28d9",steps:[
      {title:"Degree Options",desc:"B.Music at Gandharva Mahavidyalaya, BHU, Delhi University; or Berklee Online for Western music",resources:["BHU Music admissions","Berklee Online"]},
      {title:"Production & Technology",desc:"DAW software — FL Studio, Ableton Live, Logic Pro; learn music production and mixing",resources:["Ableton Learning Music","FL Studio tutorials"]},
      {title:"Collaborations",desc:"Jam with other musicians, produce for singers on social media — network is everything",resources:["SoundCloud","Instagram reels music"]}
    ]},
    {phase:"Specialization & Release",color:"#5b21b6",steps:[
      {title:"Recording & Production",desc:"Learn mixing, mastering, studio recording — Avid Pro Tools is industry standard for recording",resources:["Pro Tools tutorials","Landr mastering"]},
      {title:"YouTube / Spotify",desc:"Release music on Spotify, Apple Music via DistroKid — monetize streams and build audience",resources:["DistroKid","Spotify for Artists"]},
      {title:"Film / TV Scoring",desc:"Bollywood background scores, OTT show music, ad jingles — highest-paying Indian music work",resources:["Film scoring courses","Bollywood music houses"]}
    ]},
    {phase:"Professional Career",color:"#4c1d95",steps:[
      {title:"Live Performance",desc:"Concert tours, live sessions, music festivals — Sunburn, NH7 Weekender, Lollapalooza India",resources:["BookMyShow Artists","NH7 Weekender"]},
      {title:"Music Label / Independent",desc:"Sign with T-Series, Sony Music, Zee Music; or go independent with own label",resources:["T-Series","Sony Music India"]},
      {title:"Music Education",desc:"Teach at music school, online platform (Artium Academy) — steady income alongside performing",resources:["Artium Academy","Furtados School of Music"]}
    ]}
  ],
  professionals:[
    {name:"A.R. Rahman",title:"Composer & Producer",company:"KM Music Conservatory",linkedin:"https://www.linkedin.com/in/arrahman/"},
    {name:"Shankar Mahadevan",title:"Singer & Composer",company:"Shankar-Ehsaan-Loy",linkedin:"https://www.linkedin.com/in/shankar-mahadevan/"},
    {name:"Nucleya",title:"Electronic Music Producer",company:"Independent",linkedin:"https://www.linkedin.com/in/nucleya/"},
    {name:"Vidya Vox (Vidya Iyer)",title:"Musician & YouTuber",company:"Independent",linkedin:"https://www.linkedin.com/in/vidya-vox/"}
  ]
},

"social-worker": {
  title:"Social Worker / NGO Professional",icon:"🤝",category:"Social Sciences",
  keywords:["social worker","ngo","social work","MSW","development","community","welfare","nonprofit","humanitarian"],
  description:"Work for social change — support communities, implement development programs, and drive policy advocacy.",
  roadmap:[
    {phase:"Class 11-12: Humanities",color:"#16a34a",steps:[
      {title:"Humanities / Arts Stream",desc:"Sociology, Political Science, Psychology, Economics — strong foundation for social work",resources:["NCERT Sociology","NCERT Political Science"]},
      {title:"Volunteer Work",desc:"Join NSS, local NGOs, community service — real experience beats any classroom learning here",resources:["NSS India","iVolunteer.in"]},
      {title:"TISS / DU Entrance",desc:"Tata Institute of Social Sciences Mumbai (TISSMAT) — India's premier social work institution",resources:["TISSMAT exam","TISS admissions"]}
    ]},
    {phase:"BSW / BA Sociology (3 Years)",color:"#15803d",steps:[
      {title:"Core Subjects",desc:"Social Work Methods, Community Organization, Social Policy, Human Rights, Research Methods",resources:["BSW curriculum","TISS readings"]},
      {title:"Field Work Placements",desc:"200+ hours mandatory fieldwork at NGOs, hospitals, tribal areas, urban slums — real immersion",resources:["NGO fieldwork","IGNOU BSW"]},
      {title:"Development Sector Internship",desc:"CRY, HelpAge, Pratham, Teach For India — India's top development sector organizations",resources:["Teach For India","Pratham India"]}
    ]},
    {phase:"MSW / MA Development Studies (2 Years)",color:"#166534",steps:[
      {title:"MSW at TISS Mumbai",desc:"India's top MSW program — specializations in Family, Medical, Psychiatric, Community Social Work",resources:["TISS MSW","JNU SWS"]},
      {title:"International Programs",desc:"UN Volunteers, UNICEF India, Save the Children — international development career pathways",resources:["UNICEF India","Save the Children India"]},
      {title:"Research & Policy",desc:"CPR India, CSDS, NIPFP — policy research institutes working on India's social challenges",resources:["CPR India","CSDS Delhi"]}
    ]},
    {phase:"Professional Career",color:"#052e16",steps:[
      {title:"NGO / INGO",desc:"Oxfam India, CARE India, ActionAid, Aga Khan Foundation, World Vision — program role",resources:["Oxfam India careers","CARE India jobs"]},
      {title:"Government / NITI Aayog",desc:"District social welfare, ASHA coordinator, ICDS, NITI Aayog consultation roles",resources:["NITI Aayog","MoSJE India"]},
      {title:"CSR & Foundations",desc:"Tata Trusts, Azim Premji Foundation, Infosys Foundation — corporate social responsibility leadership",resources:["Tata Trusts","Azim Premji Foundation"]}
    ]}
  ],
  professionals:[
    {name:"Aruna Roy",title:"Social Activist & RTI Pioneer",company:"Mazdoor Kisan Shakti Sangathan",linkedin:"https://www.linkedin.com/in/aruna-roy/"},
    {name:"Bunker Roy",title:"Founder",company:"Barefoot College",linkedin:"https://www.linkedin.com/in/bunkerroy/"},
    {name:"Jeroo Billimoria",title:"Social Entrepreneur",company:"Aflatoun International",linkedin:"https://www.linkedin.com/in/jeroo-billimoria/"},
    {name:"Ela Bhatt",title:"Founder",company:"SEWA (Self Employed Women's Association)",linkedin:"https://www.linkedin.com/in/ela-bhatt/"}
  ]
},

"veterinarian": {
  title:"Veterinarian (BVSc)",icon:"🐾",category:"Healthcare",
  keywords:["vet","veterinarian","veterinary","animal doctor","BVSc","animal health","livestock","pet clinic","zoology"],
  description:"Diagnose and treat animal diseases — from pets and livestock to wildlife conservation medicine.",
  roadmap:[
    {phase:"Class 11-12: PCB",color:"#92400e",steps:[
      {title:"PCB Stream",desc:"Biology and Chemistry are central — animal physiology, microbiology, pharmacology all apply",resources:["NCERT Biology (Zoology focus)","Animal Kingdom chapter"]},
      {title:"NEET-UG for BVSc",desc:"NEET score determines BVSc admissions — 350-450+ for government veterinary colleges",resources:["NEET coaching","Veterinary college list India"]},
      {title:"Animal Interaction",desc:"Volunteer at animal shelters, farms, zoos — practical animal handling experience essential",resources:["Animal shelters India","PETA India volunteer"]}
    ]},
    {phase:"BVSc & AH (5.5 Years)",color:"#b45309",steps:[
      {title:"Pre-Clinical (1-2 Years)",desc:"Anatomy, Physiology, Biochemistry, Histology — similar to MBBS but for animals",resources:["Miller's Anatomy of the Dog","Swenson Veterinary"]},
      {title:"Clinical Sciences (3-4 Years)",desc:"Veterinary Medicine, Surgery, Gynecology, Pharmacology, Meat Inspection, Livestock Production",resources:["Merck Vet Manual","Ettinger Textbook"]},
      {title:"Rotating Internship",desc:"Mandatory 6-month internship at University Teaching Veterinary Clinical Complex (TVCC)",resources:["vet college TVCC","VCI India"]}
    ]},
    {phase:"MVSc / Specialization",color:"#78350f",steps:[
      {title:"MVSc Specializations",desc:"Companion Animal Practice, Large Animal Surgery, Poultry Medicine, Epidemiology, Wildlife Vet",resources:["ICAR MVSc programs","GADVASU Ludhiana"]},
      {title:"ICAR JRF / SRF",desc:"Research fellowship for MVSc/PhD — ICAR Junior Research Fellowship exam",resources:["ICAR ARS NET","Agricultural research"]},
      {title:"Wildlife Veterinary",desc:"WII Dehradun, Wildlife SOS, WWF — specialize in wild animal conservation medicine",resources:["WII Dehradun","Wildlife SOS veterinary"]}
    ]},
    {phase:"Professional Career",color:"#451a03",steps:[
      {title:"Private Practice",desc:"Pet clinic in urban areas — companion animal practice booming in India's metro cities",resources:["VCI registration","Indian Veterinary Association"]},
      {title:"Government Veterinary",desc:"State AH Departments, NDDB, ICAR labs — government vet with job security",resources:["NDDB India","State AH recruitment"]},
      {title:"International Opportunities",desc:"MRCVS (UK), AVMA (USA) — international veterinary practice with excellent pay",resources:["RCVS UK","AVMA USA"]}
    ]}
  ],
  professionals:[
    {name:"Shiranee Pereira",title:"Veterinarian & Wildlife Conservationist",company:"Wildlife SOS",linkedin:"https://www.linkedin.com/in/shiranee-pereira/"},
    {name:"Yaduraj Khadpekar",title:"Elephant Veterinarian",company:"Wildlife SOS",linkedin:"https://www.linkedin.com/in/yaduraj-khadpekar-vet/"},
    {name:"Jane Goodall",title:"Primatologist & Conservationist",company:"Jane Goodall Institute",linkedin:"https://www.linkedin.com/in/jane-goodall/"},
    {name:"James Herriot",title:"Veterinarian & Author",company:"Yorkshire Vet Practice",linkedin:"https://www.linkedin.com/in/james-herriot/"}
  ]
}

};
Object.assign(CAREER_DATA, EXTRA_CAREER_DATA);

const EXTRA_ALIASES = {
  "marine biology":"marine-biologist","ocean scientist":"marine-biologist","marine science":"marine-biologist",
  "human resources":"hr-manager","hr":"hr-manager","recruitment":"hr-manager","talent acquisition":"hr-manager","people ops":"hr-manager",
  "digital marketing":"digital-marketer","seo":"digital-marketer","social media":"digital-marketer","content marketing":"digital-marketer",
  "biomedical engineering":"biomedical-engineer","medical devices":"biomedical-engineer","clinical engineer":"biomedical-engineer",
  "music":"musician","singer":"musician","music production":"musician","producer":"musician","composer":"musician",
  "ngo":"social-worker","social work":"social-worker","community development":"social-worker","msw":"social-worker",
  "vet":"veterinarian","animal doctor":"veterinarian","pet doctor":"veterinarian","bvsc":"veterinarian","animal hospital":"veterinarian"
};
Object.assign(SEARCH_ALIASES, EXTRA_ALIASES);
