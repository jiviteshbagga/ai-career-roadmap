const CAREER_DATA = {
  "machine-learning-engineer": {
    title: "Machine Learning Engineer",
    icon: "🤖",
    category: "AI & Data",
    keywords: ["machine learning", "ml", "deep learning", "neural network", "tensorflow", "pytorch", "sklearn", "scikit", "ai", "artificial intelligence", "python", "model", "training", "classification", "regression", "nlp", "computer vision", "data science", "kaggle", "xgboost"],
    description: "Build and deploy intelligent systems that learn from data to make predictions and decisions.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#6366f1",
        steps: [
          { title: "Python Mastery", desc: "Core Python, NumPy, Pandas, Matplotlib", resources: ["Python.org", "Real Python"] },
          { title: "Mathematics for ML", desc: "Linear algebra, calculus, probability, statistics", resources: ["3Blue1Brown", "Khan Academy"] },
          { title: "Data Wrangling", desc: "Data cleaning, EDA, feature engineering", resources: ["Kaggle Learn", "Towards Data Science"] }
        ]
      },
      {
        phase: "Core ML",
        color: "#8b5cf6",
        steps: [
          { title: "Classical ML Algorithms", desc: "Regression, classification, clustering, decision trees", resources: ["Scikit-learn docs", "ML Mastery"] },
          { title: "Model Evaluation", desc: "Cross-validation, metrics, overfitting/underfitting", resources: ["Kaggle", "Fast.ai"] },
          { title: "Feature Engineering", desc: "Selection, transformation, dimensionality reduction", resources: ["Feature Engineering Book"] }
        ]
      },
      {
        phase: "Deep Learning",
        color: "#a855f7",
        steps: [
          { title: "Neural Networks", desc: "Perceptrons, backprop, activation functions", resources: ["Deep Learning Book", "3Blue1Brown"] },
          { title: "TensorFlow / PyTorch", desc: "Framework mastery, custom layers, training loops", resources: ["TensorFlow.org", "PyTorch.org"] },
          { title: "CNNs & RNNs", desc: "Image recognition, sequence modeling, LSTMs", resources: ["CS231n Stanford", "Fast.ai"] }
        ]
      },
      {
        phase: "Advanced & MLOps",
        color: "#c084fc",
        steps: [
          { title: "NLP & Transformers", desc: "BERT, GPT, fine-tuning, HuggingFace", resources: ["HuggingFace", "Andrej Karpathy"] },
          { title: "ML System Design", desc: "Scalable pipelines, feature stores, A/B testing", resources: ["ML System Design Interview"] },
          { title: "MLOps & Deployment", desc: "Docker, Kubernetes, MLflow, model serving", resources: ["MLOps.community", "Full Stack Deep Learning"] }
        ]
      }
    ],
    professionals: [
      { name: "Andrew Ng", title: "Co-founder, Coursera | Stanford Prof", company: "DeepLearning.AI", linkedin: "https://www.linkedin.com/in/andrewyng/" },
      { name: "Andrej Karpathy", title: "Former Head of AI at Tesla", company: "OpenAI", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Andrej+Karpathy+OpenAI" },
      { name: "Chip Huyen", title: "ML Systems Engineer & Author", company: "NVIDIA", linkedin: "https://www.linkedin.com/in/chip-huyen/" },
      { name: "Jeremy Howard", title: "Co-founder Fast.ai", company: "Fast.ai", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Jeremy+Howard+Fast.ai" },
      { name: "Sujith Ravi", title: "VP of AI / ML", company: "Amazon (Former Google AI Lead)", linkedin: "https://www.linkedin.com/in/sujithravi/" },
      { name: "Manish Gupta", title: "Director of Research", company: "Google India", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Manish+Gupta+Google+India+Research" },
      { name: "Kalyan Veeramachaneni", title: "Principal Research Scientist", company: "MIT CSAIL", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Kalyan+Veeramachaneni+MIT" }
    ]
  },

  "data-scientist": {
    title: "Data Scientist",
    icon: "📊",
    category: "AI & Data",
    keywords: ["data science", "statistics", "analytics", "sql", "r language", "data analysis", "visualization", "tableau", "power bi", "hypothesis testing", "a/b testing", "excel", "business intelligence", "bi", "data", "insight", "report", "dashboard"],
    description: "Extract insights from complex datasets to drive business decisions using statistical analysis and visualization.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#0ea5e9",
        steps: [
          { title: "Statistics & Probability", desc: "Distributions, hypothesis testing, Bayesian thinking", resources: ["StatQuest YouTube", "Think Stats Book"] },
          { title: "Python or R", desc: "Data manipulation with Pandas/dplyr, visualization basics", resources: ["DataCamp", "Kaggle Learn"] },
          { title: "SQL Mastery", desc: "Joins, window functions, CTEs, query optimization", resources: ["Mode SQL Tutorial", "SQLZoo"] }
        ]
      },
      {
        phase: "Data Analysis",
        color: "#38bdf8",
        steps: [
          { title: "Exploratory Data Analysis", desc: "Pandas profiling, seaborn, plotly, storytelling", resources: ["Towards Data Science"] },
          { title: "Data Visualization", desc: "Tableau, Power BI, matplotlib, effective charts", resources: ["Tableau Public", "Storytelling with Data"] },
          { title: "A/B Testing", desc: "Experiment design, p-values, statistical significance", resources: ["Udacity", "Netflix Tech Blog"] }
        ]
      },
      {
        phase: "Machine Learning",
        color: "#7dd3fc",
        steps: [
          { title: "Predictive Modeling", desc: "Regression, classification, time series forecasting", resources: ["Scikit-learn", "Prophet"] },
          { title: "Feature Engineering", desc: "Domain knowledge, encoding, scaling", resources: ["Kaggle Competitions"] },
          { title: "Model Interpretability", desc: "SHAP, LIME, explainable AI", resources: ["SHAP docs", "Interpretable ML Book"] }
        ]
      },
      {
        phase: "Production",
        color: "#bae6fd",
        steps: [
          { title: "Dashboards & Reports", desc: "Automated reporting, Streamlit apps", resources: ["Streamlit docs"] },
          { title: "Data Storytelling", desc: "Communicating insights to stakeholders", resources: ["Storytelling with Data Book"] },
          { title: "Cloud Data Tools", desc: "BigQuery, Snowflake, dbt, Spark basics", resources: ["dbt Learn", "Google Cloud"] }
        ]
      }
    ],
    professionals: [
      { name: "DJ Patil", title: "First U.S. Chief Data Scientist", company: "White House (Former)", linkedin: "https://www.linkedin.com/in/dpatil/" },
      { name: "Hilary Mason", title: "Founder & Data Scientist", company: "Fast Forward Labs", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Hilary+Mason+Fast+Forward+Labs" },
      { name: "Hadley Wickham", title: "Chief Scientist", company: "Posit (RStudio)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Hadley+Wickham+Posit+RStudio" },
      { name: "Monica Rogati", title: "Data Science Advisor", company: "Equity.org", linkedin: "https://www.linkedin.com/in/mrogati/" },
      { name: "Kunal Jain", title: "Founder & CEO", company: "Analytics Vidhya", linkedin: "https://www.linkedin.com/in/kunal-jain-1426a816/" },
      { name: "Srikanth Velamakanni", title: "Co-founder & Group CEO", company: "Fractal Analytics", linkedin: "https://www.linkedin.com/in/srikanth-velamakanni-6b52a/" },
      { name: "Sudalai Rajkumar", title: "Kaggle Grandmaster & Data Scientist", company: "H2O.ai", linkedin: "https://www.linkedin.com/in/sudalairajkumar/" }
    ]
  },

  "frontend-developer": {
    title: "Frontend Developer",
    icon: "🎨",
    category: "Web Development",
    keywords: ["frontend", "front-end", "html", "css", "javascript", "js", "react", "vue", "angular", "typescript", "web design", "ui", "ux", "tailwind", "sass", "webpack", "next.js", "gatsby", "figma", "responsive", "dom", "browser"],
    description: "Create beautiful, interactive user interfaces and web experiences that users love.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#f59e0b",
        steps: [
          { title: "HTML5 Semantics", desc: "Document structure, semantic tags, accessibility", resources: ["MDN Web Docs", "web.dev"] },
          { title: "CSS Mastery", desc: "Flexbox, Grid, animations, responsive design", resources: ["CSS Tricks", "Kevin Powell YouTube"] },
          { title: "JavaScript Core", desc: "ES6+, DOM manipulation, fetch API, async/await", resources: ["javascript.info", "Eloquent JavaScript"] }
        ]
      },
      {
        phase: "Modern Frameworks",
        color: "#fbbf24",
        steps: [
          { title: "React.js", desc: "Components, hooks, state management, React Router", resources: ["React docs", "Full Stack Open"] },
          { title: "TypeScript", desc: "Type safety, interfaces, generics", resources: ["TypeScript Handbook"] },
          { title: "State Management", desc: "Redux Toolkit, Zustand, React Query", resources: ["Redux docs", "TanStack Query"] }
        ]
      },
      {
        phase: "Advanced Frontend",
        color: "#fcd34d",
        steps: [
          { title: "Performance Optimization", desc: "Code splitting, lazy loading, Core Web Vitals", resources: ["web.dev", "Chrome DevTools"] },
          { title: "Testing", desc: "Jest, React Testing Library, Cypress E2E", resources: ["Testing Library docs"] },
          { title: "Build Tools", desc: "Vite, Webpack, ESLint, CI/CD", resources: ["Vite docs"] }
        ]
      },
      {
        phase: "Professional",
        color: "#fde68a",
        steps: [
          { title: "UI/UX Principles", desc: "Figma collaboration, design systems, WCAG accessibility", resources: ["Figma", "Nielsen Norman Group"] },
          { title: "Next.js & SSR", desc: "Server-side rendering, static generation, App Router", resources: ["Next.js docs"] },
          { title: "Portfolio & Job Search", desc: "Open source contribution, portfolio projects", resources: ["GitHub", "Dev.to"] }
        ]
      }
    ],
    professionals: [
      { name: "Evan You", title: "Creator of Vue.js", company: "Void Zero", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Evan+You+Vue.js+creator" },
      { name: "Addy Osmani", title: "Engineering Manager", company: "Google Chrome", linkedin: "https://www.linkedin.com/in/addyosmani/" },
      { name: "Sarah Drasner", title: "VP of Developer Experience", company: "Netlify", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Sarah+Drasner+Netlify" },
      { name: "Kent C. Dodds", title: "Full Stack Developer & Educator", company: "EpicWeb.dev", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Kent+C+Dodds+EpicWeb" },
      { name: "Aman Mittal", title: "Senior Documentation Engineer", company: "Expo (React Native)", linkedin: "https://www.linkedin.com/in/amandeepmittal/" },
      { name: "Tapas Adhikary", title: "Developer Advocate & Frontend Educator", company: "Auth0 (India)", linkedin: "https://www.linkedin.com/in/tapasadhikary/" },
      { name: "Piyush Garg", title: "Software Engineer & Content Creator", company: "Independent (India)", linkedin: "https://www.linkedin.com/in/piyushgarg-dev/" }
    ]
  },

  "backend-developer": {
    title: "Backend Developer",
    icon: "⚙️",
    category: "Web Development",
    keywords: ["backend", "back-end", "server", "api", "rest", "graphql", "node", "nodejs", "express", "django", "flask", "spring", "java", "golang", "go", "php", "ruby", "rails", "database", "postgresql", "mysql", "mongodb", "redis", "microservices"],
    description: "Build robust server-side applications, APIs, and databases that power web applications.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#10b981",
        steps: [
          { title: "A Programming Language", desc: "Node.js, Python, Go, or Java — master one deeply", resources: ["Node.js docs", "The Go Programming Language"] },
          { title: "HTTP & Web Fundamentals", desc: "HTTP methods, status codes, cookies, sessions", resources: ["MDN HTTP", "HTTP: The Definitive Guide"] },
          { title: "Databases", desc: "SQL (PostgreSQL), NoSQL (MongoDB), schema design", resources: ["PostgreSQL Tutorial", "MongoDB University"] }
        ]
      },
      {
        phase: "API Development",
        color: "#34d399",
        steps: [
          { title: "REST API Design", desc: "CRUD, versioning, pagination, error handling", resources: ["REST API Tutorial"] },
          { title: "Authentication & Security", desc: "JWT, OAuth2, bcrypt, HTTPS, OWASP Top 10", resources: ["Auth0 docs", "OWASP"] },
          { title: "ORMs & Query Builders", desc: "Prisma, Sequelize, SQLAlchemy", resources: ["Prisma docs"] }
        ]
      },
      {
        phase: "Scalability",
        color: "#6ee7b7",
        steps: [
          { title: "Caching Strategies", desc: "Redis, in-memory caching, CDN", resources: ["Redis University"] },
          { title: "Message Queues", desc: "RabbitMQ, Kafka, job queues", resources: ["CloudAMQP", "Confluent"] },
          { title: "Microservices Basics", desc: "Service decomposition, Docker, API gateways", resources: ["Microservices.io"] }
        ]
      },
      {
        phase: "Production",
        color: "#a7f3d0",
        steps: [
          { title: "Testing", desc: "Unit, integration, API testing with Jest/Pytest", resources: ["Testing Node.js Apps"] },
          { title: "DevOps Basics", desc: "CI/CD, Docker containers, environment management", resources: ["GitHub Actions"] },
          { title: "System Design", desc: "Load balancing, rate limiting, monitoring", resources: ["System Design Primer"] }
        ]
      }
    ],
    professionals: [
      { name: "Ryan Dahl", title: "Creator of Node.js & Deno", company: "Deno Land", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Ryan+Dahl+Deno+Node.js" },
      { name: "Kelsey Hightower", title: "Principal Engineer", company: "Google", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Kelsey+Hightower+Google" },
      { name: "Armon Dadgar", title: "Co-founder & CTO", company: "HashiCorp", linkedin: "https://www.linkedin.com/in/armon-dadgar/" },
      { name: "Mitchell Hashimoto", title: "Co-founder", company: "HashiCorp", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Mitchell+Hashimoto+HashiCorp" },
      { name: "Nitin Dahyabhai", title: "Software Engineer", company: "Google (India)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Nitin+Dahyabhai+Google" },
      { name: "Anand Iyer", title: "Founder & Backend Architect", company: "Trusted (YC)", linkedin: "https://www.linkedin.com/in/anandiyer/" },
      { name: "Gireendra Kasmalkar", title: "CEO", company: "iGATE Mastech", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Gireendra+Kasmalkar+iGATE" }
    ]
  },

  "devops-engineer": {
    title: "DevOps Engineer",
    icon: "🔧",
    category: "Infrastructure",
    keywords: ["devops", "ci/cd", "docker", "kubernetes", "k8s", "jenkins", "ansible", "terraform", "cloud", "aws", "azure", "gcp", "linux", "bash", "shell", "infrastructure", "deployment", "monitoring", "prometheus", "grafana", "helm"],
    description: "Bridge development and operations to enable fast, reliable software delivery through automation.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#f97316",
        steps: [
          { title: "Linux & Scripting", desc: "Command line, bash scripting, file system, networking", resources: ["Linux Command", "The Linux Command Line"] },
          { title: "Version Control (Git)", desc: "Branching strategies, Git workflows, code review", resources: ["Pro Git Book", "Atlassian Git"] },
          { title: "Networking Basics", desc: "TCP/IP, DNS, HTTP/S, firewalls, load balancers", resources: ["Networking for DevOps"] }
        ]
      },
      {
        phase: "Containerization",
        color: "#fb923c",
        steps: [
          { title: "Docker", desc: "Images, containers, volumes, networking, Compose", resources: ["Docker docs", "Play with Docker"] },
          { title: "Kubernetes", desc: "Pods, services, deployments, ingress, Helm", resources: ["Kubernetes docs", "CKAD prep"] },
          { title: "Container Registries", desc: "Docker Hub, ECR, GCR, image scanning", resources: ["Docker Hub"] }
        ]
      },
      {
        phase: "CI/CD & IaC",
        color: "#fdba74",
        steps: [
          { title: "CI/CD Pipelines", desc: "GitHub Actions, Jenkins, GitLab CI", resources: ["GitHub Actions docs"] },
          { title: "Infrastructure as Code", desc: "Terraform, Ansible, CloudFormation", resources: ["Terraform docs", "HashiCorp Learn"] },
          { title: "Cloud Platforms", desc: "AWS/Azure/GCP core services, IAM, VPC", resources: ["AWS Free Tier", "ACloudGuru"] }
        ]
      },
      {
        phase: "Advanced",
        color: "#fed7aa",
        steps: [
          { title: "Monitoring & Observability", desc: "Prometheus, Grafana, ELK Stack, alerting", resources: ["Prometheus docs"] },
          { title: "Security (DevSecOps)", desc: "SAST, secrets management, vault, policy as code", resources: ["HashiCorp Vault", "Snyk"] },
          { title: "GitOps & ArgoCD", desc: "Declarative deployments, drift detection", resources: ["ArgoCD docs"] }
        ]
      }
    ],
    professionals: [
      { name: "Kelsey Hightower", title: "Principal Engineer", company: "Google", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Kelsey+Hightower+Google" },
      { name: "Patrick Debois", title: "DevOps Pioneer", company: "Independent Consultant", linkedin: "https://www.linkedin.com/in/patrickdebois/" },
      { name: "Liz Rice", title: "Chief Open Source Officer", company: "Isovalent", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Liz+Rice+Isovalent+eBPF" },
      { name: "Charity Majors", title: "Co-founder & CTO", company: "Honeycomb.io", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Charity+Majors+Honeycomb" },
      { name: "Janakiram MSV", title: "Principal Analyst & DevOps Expert", company: "Janakiram & Associates (India)", linkedin: "https://www.linkedin.com/in/janakiramm/" },
      { name: "Kiran Oliver", title: "Senior Cloud Engineer", company: "CNCF Ambassador", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Kiran+Oliver+CNCF" },
      { name: "Prarthan Shah", title: "DevOps Architect", company: "Infosys", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Prarthan+Shah+Infosys+DevOps" }
    ]
  },

  "cybersecurity-analyst": {
    title: "Cybersecurity Analyst",
    icon: "🛡️",
    category: "Security",
    keywords: ["cybersecurity", "security", "hacking", "ethical hacking", "penetration testing", "pentest", "ctf", "networking", "kali linux", "malware", "encryption", "firewall", "soc", "siem", "vulnerability", "owasp", "nmap", "burpsuite", "forensics", "incident response"],
    description: "Protect organizations from cyber threats through monitoring, analysis, and incident response.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#ef4444",
        steps: [
          { title: "Networking Fundamentals", desc: "OSI model, TCP/IP, protocols, Wireshark", resources: ["CompTIA Network+", "Professor Messer"] },
          { title: "Operating Systems", desc: "Linux admin, Windows security, command line", resources: ["OverTheWire Bandit"] },
          { title: "Security Concepts", desc: "CIA triad, threats, vulnerabilities, risk management", resources: ["CompTIA Security+"] }
        ]
      },
      {
        phase: "Core Security",
        color: "#f87171",
        steps: [
          { title: "Ethical Hacking Basics", desc: "Reconnaissance, scanning, exploitation basics", resources: ["TryHackMe", "Hack The Box"] },
          { title: "Web Application Security", desc: "OWASP Top 10, SQL injection, XSS, BurpSuite", resources: ["PortSwigger Web Academy"] },
          { title: "Cryptography", desc: "Symmetric/asymmetric encryption, PKI, hashing", resources: ["Cryptography I - Coursera"] }
        ]
      },
      {
        phase: "Advanced",
        color: "#fca5a5",
        steps: [
          { title: "Penetration Testing", desc: "Methodology, Kali Linux, Metasploit, reporting", resources: ["PWK/OSCP", "TCM Security"] },
          { title: "SOC & Incident Response", desc: "SIEM tools, log analysis, threat hunting", resources: ["Blue Team Labs Online"] },
          { title: "Malware Analysis", desc: "Reverse engineering basics, sandboxing, indicators", resources: ["Malware Unicorn"] }
        ]
      },
      {
        phase: "Certifications",
        color: "#fecaca",
        steps: [
          { title: "CompTIA Security+", desc: "Entry-level industry cert - foundational", resources: ["CompTIA"] },
          { title: "CEH / eJPT", desc: "Ethical hacking certifications", resources: ["EC-Council", "eLearnSecurity"] },
          { title: "OSCP / CISSP", desc: "Advanced professional certifications", resources: ["Offensive Security"] }
        ]
      }
    ],
    professionals: [
      { name: "Bruce Schneier", title: "Security Technologist & Author", company: "Harvard Kennedy School", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Bruce+Schneier+Harvard+Security" },
      { name: "Troy Hunt", title: "Microsoft Regional Director, Creator of HaveIBeenPwned", company: "haveibeenpwned.com", linkedin: "https://www.linkedin.com/in/troyhunt/" },
      { name: "Mikko Hyppönen", title: "Chief Research Officer", company: "WithSecure", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Mikko+Hypponen+WithSecure" },
      { name: "Katie Moussouris", title: "Founder & CEO", company: "Luta Security", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Katie+Moussouris+Luta+Security" },
      { name: "Rakshit Tandon", title: "Cyber Security Expert & Advisor", company: "Internet Society (India)", linkedin: "https://www.linkedin.com/in/rakshittandon/" },
      { name: "Sunny Vaghela", title: "Ethical Hacker & Founder", company: "TechDefence Labs (India)", linkedin: "https://www.linkedin.com/in/sunnyvaghela/" },
      { name: "Sivaram Prathap", title: "Cybersecurity Researcher", company: "CERT-In (India)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Sivaram+Prathap+CERT-In+India" }
    ]
  },

  "cloud-architect": {
    title: "Cloud Architect",
    icon: "☁️",
    category: "Infrastructure",
    keywords: ["cloud", "aws", "azure", "gcp", "google cloud", "cloud architect", "solutions architect", "infrastructure", "serverless", "lambda", "ec2", "s3", "rds", "vpc", "iam", "kubernetes", "terraform", "cost optimization", "well-architected"],
    description: "Design scalable, secure, and cost-effective cloud infrastructure for enterprises.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#06b6d4",
        steps: [
          { title: "Cloud Fundamentals", desc: "IaaS/PaaS/SaaS, regions, availability zones, pricing", resources: ["AWS Cloud Practitioner", "Azure Fundamentals"] },
          { title: "Networking in Cloud", desc: "VPC, subnets, security groups, load balancers", resources: ["AWS Networking Specialty"] },
          { title: "Core Services", desc: "Compute (EC2/VM), Storage (S3/Blob), Database (RDS)", resources: ["AWS Free Tier", "Azure Free Account"] }
        ]
      },
      {
        phase: "Architecture Patterns",
        color: "#22d3ee",
        steps: [
          { title: "High Availability Design", desc: "Multi-AZ, auto-scaling, disaster recovery", resources: ["AWS Well-Architected Framework"] },
          { title: "Security Architecture", desc: "IAM, encryption, compliance, zero-trust", resources: ["AWS Security Specialty"] },
          { title: "Serverless Architecture", desc: "Lambda, API Gateway, event-driven design", resources: ["Serverless Framework"] }
        ]
      },
      {
        phase: "Advanced",
        color: "#67e8f9",
        steps: [
          { title: "Infrastructure as Code", desc: "Terraform, CloudFormation, CDK", resources: ["Terraform Registry"] },
          { title: "Cost Optimization", desc: "Reserved instances, spot, rightsizing, tagging", resources: ["AWS Cost Explorer"] },
          { title: "Multi-Cloud Strategy", desc: "Hybrid cloud, cloud-native patterns", resources: ["CNCF", "Multi-Cloud Book"] }
        ]
      },
      {
        phase: "Certifications",
        color: "#a5f3fc",
        steps: [
          { title: "AWS Solutions Architect Associate", desc: "Most sought-after cloud cert", resources: ["Adrian Cantrill", "TutorialsDojo"] },
          { title: "AWS Solutions Architect Professional", desc: "Advanced professional-level cert", resources: ["ACloudGuru"] },
          { title: "Google Professional Cloud Architect", desc: "GCP architecture certification", resources: ["Google Cloud training"] }
        ]
      }
    ],
    professionals: [
      { name: "Werner Vogels", title: "CTO", company: "Amazon", linkedin: "https://www.linkedin.com/in/wernervogels/" },
      { name: "Adrian Cockcroft", title: "VP Cloud Architecture Strategy", company: "AWS (Former Netflix)", linkedin: "https://www.linkedin.com/in/adriancockcroft/" },
      { name: "Priyanka Vergadia", title: "Developer Advocate", company: "Google Cloud", linkedin: "https://www.linkedin.com/in/pvergadia/" },
      { name: "Corey Quinn", title: "Cloud Economist & Podcaster", company: "The Duckbill Group", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Corey+Quinn+Duckbill+AWS" },
      { name: "Bikram Bose", title: "Director of Cloud Architecture", company: "Google India", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Bikram+Bose+Google+Cloud+India" },
      { name: "Sridhar Vembu", title: "CEO & Cloud Pioneer", company: "Zoho Corporation", linkedin: "https://www.linkedin.com/in/sridhar-vembu-1b36374/" },
      { name: "Avi Srivastava", title: "Cloud Solutions Architect", company: "AWS India", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Avi+Srivastava+AWS+India" }
    ]
  },

  "uiux-designer": {
    title: "UI/UX Designer",
    icon: "✏️",
    category: "Design",
    keywords: ["ui", "ux", "design", "figma", "sketch", "adobe xd", "user experience", "user interface", "wireframe", "prototype", "usability", "design thinking", "user research", "accessibility", "design system", "typography", "color theory", "interaction design", "hci"],
    description: "Create intuitive, beautiful digital experiences through research, design, and iterative prototyping.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#ec4899",
        steps: [
          { title: "Design Principles", desc: "Color theory, typography, layout, visual hierarchy", resources: ["Canva Design School", "Refactoring UI"] },
          { title: "UX Fundamentals", desc: "User research, personas, user journeys, empathy maps", resources: ["Nielsen Norman Group"] },
          { title: "Figma Mastery", desc: "Components, auto-layout, prototyping, variants", resources: ["Figma Academy", "Figma YouTube"] }
        ]
      },
      {
        phase: "UX Research",
        color: "#f472b6",
        steps: [
          { title: "User Research Methods", desc: "Interviews, surveys, usability testing", resources: ["Just Enough Research"] },
          { title: "Information Architecture", desc: "Card sorting, sitemaps, navigation design", resources: ["IA Institute"] },
          { title: "Wireframing", desc: "Low-fi wireframes, sketching, ideation", resources: ["Balsamiq", "Miro"] }
        ]
      },
      {
        phase: "Advanced Design",
        color: "#f9a8d4",
        steps: [
          { title: "Design Systems", desc: "Component libraries, tokens, documentation", resources: ["Storybook", "Zeroheight"] },
          { title: "Interaction Design", desc: "Micro-animations, motion principles, After Effects", resources: ["Principle for Mac", "Framer"] },
          { title: "Accessibility (WCAG)", desc: "A11y standards, contrast ratios, screen readers", resources: ["WebAIM", "a11yproject.com"] }
        ]
      },
      {
        phase: "Professional",
        color: "#fce7f3",
        steps: [
          { title: "Portfolio Building", desc: "Case studies, storytelling, Behance/Dribbble", resources: ["Dribbble", "UX Folio"] },
          { title: "Developer Handoff", desc: "Zeplin, Figma Dev Mode, CSS specs", resources: ["Figma Dev Mode"] },
          { title: "Product Thinking", desc: "Metrics, OKRs, product-design collaboration", resources: ["Inspired by Marty Cagan"] }
        ]
      }
    ],
    professionals: [
      { name: "Don Norman", title: "Author of The Design of Everyday Things", company: "Nielsen Norman Group", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Don+Norman+Nielsen+Norman+Design" },
      { name: "Julie Zhuo", title: "Co-founder & Author", company: "Sundial (Former Facebook VP Design)", linkedin: "https://www.linkedin.com/in/juliezhuo/" },
      { name: "Jared Spool", title: "Founder, UX Expert", company: "Center Centre UIE", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Jared+Spool+UIE+UX" },
      { name: "Chris Do", title: "Founder & CEO", company: "The Futur", linkedin: "https://www.linkedin.com/in/iamchrisdo/" },
      { name: "Siddharth Sahay", title: "Lead Product Designer", company: "Swiggy (India)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Siddharth+Sahay+Swiggy+Product+Designer" },
      { name: "Anirudha Joshi", title: "HCI Researcher & UX Professor", company: "IIT Bombay (India)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Anirudha+Joshi+IIT+Bombay+HCI" },
      { name: "Prasad Naik", title: "Head of Design", company: "Razorpay (India)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Prasad+Naik+Razorpay+Design" }
    ]
  },

  "full-stack-developer": {
    title: "Full Stack Developer",
    icon: "🚀",
    category: "Web Development",
    keywords: ["full stack", "fullstack", "mern", "mean", "lamp", "react", "node", "mongodb", "express", "next.js", "nuxt", "django", "flask", "frontend", "backend", "html", "css", "javascript", "typescript", "python", "database", "api", "rest"],
    description: "Build complete web applications from frontend interfaces to backend APIs and databases.",
    roadmap: [
      {
        phase: "Frontend Basics",
        color: "#8b5cf6",
        steps: [
          { title: "HTML, CSS, JavaScript", desc: "Semantic HTML, responsive CSS, modern JS (ES6+)", resources: ["The Odin Project", "web.dev"] },
          { title: "React.js", desc: "Components, hooks, routing, state management", resources: ["React docs", "Full Stack Open"] },
          { title: "TypeScript Basics", desc: "Types, interfaces, integration with React", resources: ["TypeScript Handbook"] }
        ]
      },
      {
        phase: "Backend Basics",
        color: "#a78bfa",
        steps: [
          { title: "Node.js & Express", desc: "REST APIs, middleware, error handling", resources: ["Node.js docs", "The Odin Project"] },
          { title: "Databases", desc: "PostgreSQL + Prisma, MongoDB + Mongoose", resources: ["Prisma docs", "MongoDB University"] },
          { title: "Authentication", desc: "Sessions, JWT, OAuth, Passport.js", resources: ["Passport.js", "Auth0"] }
        ]
      },
      {
        phase: "Full Stack Projects",
        color: "#c4b5fd",
        steps: [
          { title: "MERN Stack Project", desc: "Build a full-featured app end-to-end", resources: ["Traversy Media", "freeCodeCamp"] },
          { title: "Next.js (App Router)", desc: "SSR, SSG, API routes, deployment on Vercel", resources: ["Next.js docs", "Vercel"] },
          { title: "Testing", desc: "Jest, RTL, Playwright for E2E", resources: ["Playwright docs"] }
        ]
      },
      {
        phase: "Pro Level",
        color: "#ddd6fe",
        steps: [
          { title: "System Design", desc: "Scalability, caching, CDN, microservices basics", resources: ["System Design Primer"] },
          { title: "DevOps Basics", desc: "Docker, CI/CD, deployment to Railway/Render", resources: ["Docker docs", "Railway.app"] },
          { title: "Open Source & Portfolio", desc: "Contribute to OSS, build impressive portfolio", resources: ["GitHub", "Dev.to"] }
        ]
      }
    ],
    professionals: [
      { name: "Guillermo Rauch", title: "CEO & Co-founder", company: "Vercel", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Guillermo+Rauch+Vercel" },
      { name: "Wes Bos", title: "Full Stack Developer & Educator", company: "Syntax.fm", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Wes+Bos+Syntax.fm" },
      { name: "Scott Tolinski", title: "Full Stack Developer & Educator", company: "Syntax.fm", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Scott+Tolinski+Syntax" },
      { name: "Lee Robinson", title: "VP of Product", company: "Vercel", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Lee+Robinson+Vercel" },
      { name: "Harkirat Singh", title: "Full Stack Educator & Founder", company: "100xDevs (India)", linkedin: "https://www.linkedin.com/in/kirat-li/" },
      { name: "Tanay Pratap", title: "Software Engineer & Educator", company: "Microsoft India (Former)", linkedin: "https://www.linkedin.com/in/tanaypratap/" },
      { name: "Roadsidecoder (Piyush Agarwal)", title: "Full Stack Educator", company: "YouTube (India)", linkedin: "https://www.linkedin.com/in/piyush-agarwal-roadsidecoder/" }
    ]
  },

  "blockchain-developer": {
    title: "Blockchain Developer",
    icon: "⛓️",
    category: "Emerging Tech",
    keywords: ["blockchain", "ethereum", "solidity", "web3", "smart contract", "defi", "nft", "crypto", "cryptocurrency", "hardhat", "truffle", "metamask", "polygon", "rust", "near", "solana", "dapp", "decentralized"],
    description: "Build decentralized applications and smart contracts on blockchain networks.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#f59e0b",
        steps: [
          { title: "Blockchain Fundamentals", desc: "How blockchains work, consensus, cryptography basics", resources: ["Bitcoin Whitepaper", "Ethereum.org"] },
          { title: "Solidity Language", desc: "Variables, functions, modifiers, events, inheritance", resources: ["CryptoZombies", "Solidity docs"] },
          { title: "Web3.js / ethers.js", desc: "Connecting frontend to blockchain", resources: ["ethers.js docs"] }
        ]
      },
      {
        phase: "Smart Contracts",
        color: "#fbbf24",
        steps: [
          { title: "Smart Contract Patterns", desc: "ERC20, ERC721, upgradeable contracts, proxies", resources: ["OpenZeppelin", "Ethereum By Example"] },
          { title: "Testing Smart Contracts", desc: "Hardhat, Mocha, fuzzing, coverage", resources: ["Hardhat docs"] },
          { title: "Security Auditing", desc: "Reentrancy, overflow, common vulnerabilities", resources: ["Trail of Bits", "ConsenSys Diligence"] }
        ]
      },
      {
        phase: "DApp Development",
        color: "#fcd34d",
        steps: [
          { title: "Full-Stack DApp", desc: "React + ethers.js + Hardhat + IPFS", resources: ["buildspace.so", "LearnWeb3.io"] },
          { title: "DeFi Protocols", desc: "AMMs, lending protocols, yield farming", resources: ["Uniswap docs", "Aave docs"] },
          { title: "Layer 2 Solutions", desc: "Polygon, Optimism, Arbitrum scaling", resources: ["L2Beat"] }
        ]
      },
      {
        phase: "Advanced",
        color: "#fde68a",
        steps: [
          { title: "Cross-chain Development", desc: "Bridges, Chainlink oracles, multi-chain", resources: ["Chainlink docs"] },
          { title: "Blockchain Architecture", desc: "Consensus algorithms, cryptography, ZK proofs", resources: ["ZK-SNARKs explainer"] },
          { title: "Tokenomics & DAOs", desc: "Governance tokens, DAO structures", resources: ["a16z crypto", "Mirror.xyz"] }
        ]
      }
    ],
    professionals: [
      { name: "Vitalik Buterin", title: "Co-founder", company: "Ethereum Foundation", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Vitalik+Buterin+Ethereum" },
      { name: "Nader Dabit", title: "Developer Relations & Web3 Engineer", company: "EigenLayer", linkedin: "https://www.linkedin.com/in/naderdabit/" },
      { name: "Patrick Collins", title: "Developer Advocate & Educator", company: "Cyfrin", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Patrick+Collins+Cyfrin+Blockchain" },
      { name: "Stani Kulechov", title: "Founder & CEO", company: "Aave", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Stani+Kulechov+Aave" },
      { name: "Sandeep Nailwal", title: "Co-founder", company: "Polygon (India)", linkedin: "https://www.linkedin.com/in/sandeepnailwal/" },
      { name: "Nischal Shetty", title: "Founder & CEO", company: "WazirX (India)", linkedin: "https://www.linkedin.com/in/nischalshetty/" },
      { name: "Raj Kapoor", title: "Founder", company: "India Blockchain Alliance", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Raj+Kapoor+India+Blockchain+Alliance" }
    ]
  },

  "mobile-developer": {
    title: "Mobile Developer",
    icon: "📱",
    category: "Mobile",
    keywords: ["mobile", "android", "ios", "swift", "kotlin", "react native", "flutter", "dart", "xcode", "android studio", "app development", "expo", "firebase", "app store", "google play", "ui/ux mobile", "hybrid", "cross-platform"],
    description: "Build native and cross-platform mobile applications for iOS and Android.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#06b6d4",
        steps: [
          { title: "Choose Your Path", desc: "React Native (JS), Flutter (Dart), or Native (Swift/Kotlin)", resources: ["React Native docs", "Flutter docs"] },
          { title: "Core Language", desc: "JavaScript/TypeScript for RN, Dart for Flutter", resources: ["dart.dev", "javascript.info"] },
          { title: "Mobile UI Concepts", desc: "Navigation, gestures, platform conventions", resources: ["Material Design", "Apple HIG"] }
        ]
      },
      {
        phase: "Core Development",
        color: "#22d3ee",
        steps: [
          { title: "State Management", desc: "Redux, Zustand for RN; Bloc, Provider for Flutter", resources: ["Bloc Library", "Redux docs"] },
          { title: "API Integration", desc: "REST, GraphQL, authentication flows", resources: ["Axios docs", "GraphQL docs"] },
          { title: "Local Storage", desc: "AsyncStorage, SQLite, Realm, Hive", resources: ["MMKV", "WatermelonDB"] }
        ]
      },
      {
        phase: "Advanced",
        color: "#67e8f9",
        steps: [
          { title: "Native Modules", desc: "Bridging native code, device APIs (camera, GPS)", resources: ["React Native Native Modules"] },
          { title: "Performance Optimization", desc: "FlatList, memo, rerendering, profiler", resources: ["React Native Performance"] },
          { title: "Push Notifications", desc: "Firebase Cloud Messaging, local notifications", resources: ["FCM docs"] }
        ]
      },
      {
        phase: "Publishing",
        color: "#a5f3fc",
        steps: [
          { title: "App Store Deployment", desc: "App signing, Apple certificates, TestFlight", resources: ["Apple Developer docs"] },
          { title: "Google Play Deployment", desc: "APK/AAB, signing, release tracks", resources: ["Android docs"] },
          { title: "Analytics & Monitoring", desc: "Crashlytics, Firebase Analytics, Sentry", resources: ["Firebase docs"] }
        ]
      }
    ],
    professionals: [
      { name: "Tim Sneath", title: "Product Manager, Flutter", company: "Google", linkedin: "https://www.linkedin.com/in/timsneath/" },
      { name: "Brent Vatne", title: "Software Engineer", company: "Expo (React Native)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Brent+Vatne+Expo" },
      { name: "Narendra N Shetty", title: "Principal Engineer, Mobile", company: "Shopify", linkedin: "https://www.linkedin.com/in/narendranshetty/" },
      { name: "Evan Bacon", title: "Software Engineer", company: "Expo", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Evan+Bacon+Expo" },
      { name: "Prateek Sharma", title: "Android Engineer", company: "Google India", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Prateek+Sharma+Android+Google+India" },
      { name: "Anuj Pahade", title: "Flutter Developer & GDE", company: "Google Developer Expert (India)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Anuj+Pahade+Flutter+GDE+India" },
      { name: "Vipul Kumar", title: "Senior Mobile Engineer", company: "Flipkart (India)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Vipul+Kumar+Flipkart+Mobile+Engineer" }
    ]
  },

  "data-engineer": {
    title: "Data Engineer",
    icon: "🔄",
    category: "AI & Data",
    keywords: ["data engineering", "etl", "pipeline", "airflow", "spark", "hadoop", "kafka", "dbt", "snowflake", "databricks", "bigquery", "data warehouse", "data lake", "sql", "python", "batch processing", "stream processing", "data pipeline"],
    description: "Design and build systems to collect, store, and prepare large-scale data for analysis.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#7c3aed",
        steps: [
          { title: "SQL & Databases", desc: "Advanced SQL, window functions, database internals", resources: ["Mode Analytics SQL", "Use The Index Luke"] },
          { title: "Python for Data", desc: "Pandas, PySpark, scripting, file I/O", resources: ["Python for Data Analysis Book"] },
          { title: "Bash & Linux", desc: "Shell scripting, cron jobs, file processing", resources: ["Linux Command Line"] }
        ]
      },
      {
        phase: "Data Infrastructure",
        color: "#8b5cf6",
        steps: [
          { title: "Data Warehousing", desc: "Snowflake, BigQuery, Redshift, dimensional modeling", resources: ["Data Warehouse Toolkit Book"] },
          { title: "ETL/ELT Pipelines", desc: "dbt, Airbyte, Fivetran, custom pipelines", resources: ["dbt Learn", "Airbyte docs"] },
          { title: "Workflow Orchestration", desc: "Apache Airflow, Prefect, Dagster", resources: ["Airflow docs"] }
        ]
      },
      {
        phase: "Big Data",
        color: "#a78bfa",
        steps: [
          { title: "Apache Spark", desc: "RDDs, DataFrames, Spark SQL, PySpark", resources: ["Databricks Academy"] },
          { title: "Stream Processing", desc: "Kafka, Flink, real-time pipelines", resources: ["Confluent Kafka Courses"] },
          { title: "Data Lakehouse", desc: "Delta Lake, Apache Iceberg, Hudi", resources: ["Delta Lake docs"] }
        ]
      },
      {
        phase: "Advanced",
        color: "#c4b5fd",
        steps: [
          { title: "Data Modeling", desc: "Star schema, data vault, medallion architecture", resources: ["dbt Style Guide"] },
          { title: "Cloud Data Platforms", desc: "AWS Glue, Azure Data Factory, GCP Dataflow", resources: ["AWS Big Data Specialty"] },
          { title: "DataOps & Monitoring", desc: "Data quality, lineage, observability tools", resources: ["Monte Carlo", "Great Expectations"] }
        ]
      }
    ],
    professionals: [
      { name: "Joe Reis", title: "Author - Fundamentals of Data Engineering", company: "Ternary Data", linkedin: "https://www.linkedin.com/in/josephreis/" },
      { name: "Tristan Handy", title: "Founder & CEO", company: "dbt Labs", linkedin: "https://www.linkedin.com/in/tristanhandy/" },
      { name: "Maxime Beauchemin", title: "Creator of Apache Airflow & Superset", company: "Preset", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Maxime+Beauchemin+Apache+Airflow" },
      { name: "Zhamak Dehghani", title: "Creator of Data Mesh", company: "Thoughtworks", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Zhamak+Dehghani+Data+Mesh" },
      { name: "Gulab Pasha", title: "Data Engineering Lead", company: "Capgemini India", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Gulab+Pasha+Capgemini+Data+Engineering" },
      { name: "Rohit Sharma", title: "Principal Data Engineer", company: "Walmart Global Tech India", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Rohit+Sharma+Walmart+Global+Tech+Data" },
      { name: "Abhishek Singh", title: "Sr. Data Engineer", company: "Uber India", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Abhishek+Singh+Uber+India+Data+Engineer" }
    ]
  },

  "product-manager": {
    title: "Product Manager",
    icon: "📋",
    category: "Business & Strategy",
    keywords: ["product manager", "product management", "pm", "product owner", "roadmap", "agile", "scrum", "kanban", "user stories", "backlog", "okr", "kpi", "market research", "competitive analysis", "go-to-market", "stakeholder", "prioritization", "mvp", "product strategy"],
    description: "Drive product vision, strategy, and execution by bridging business, design, and engineering.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#0284c7",
        steps: [
          { title: "Product Thinking", desc: "User empathy, problem definition, solution framing", resources: ["Inspired by Marty Cagan"] },
          { title: "Agile & Scrum", desc: "Sprints, ceremonies, user stories, backlog", resources: ["Scrum Guide", "Agile Manifesto"] },
          { title: "Business Acumen", desc: "Business models, P&L basics, market analysis", resources: ["Business Model Canvas", "Stratechery"] }
        ]
      },
      {
        phase: "Core PM Skills",
        color: "#0369a1",
        steps: [
          { title: "User Research & Discovery", desc: "Interviews, surveys, Jobs-to-be-Done framework", resources: ["Just Enough Research"] },
          { title: "Prioritization Frameworks", desc: "RICE, ICE, MoSCoW, opportunity scoring", resources: ["ProductBoard blog"] },
          { title: "Data-Driven PM", desc: "SQL basics, A/B testing, analytics tools", resources: ["Mixpanel", "Amplitude"] }
        ]
      },
      {
        phase: "Advanced",
        color: "#0ea5e9",
        steps: [
          { title: "Product Strategy", desc: "Vision, north star metric, OKRs, market positioning", resources: ["Good Product Strategy Book"] },
          { title: "Go-to-Market", desc: "Launch planning, growth loops, retention", resources: ["Lenny's Newsletter"] },
          { title: "Stakeholder Management", desc: "Executive communication, cross-functional alignment", resources: ["PM Interview Book"] }
        ]
      },
      {
        phase: "Senior PM",
        color: "#38bdf8",
        steps: [
          { title: "Product Leadership", desc: "PM team management, career ladders, coaching", resources: ["Reforge"] },
          { title: "Technical Fluency", desc: "APIs, architecture basics, working with eng", resources: ["PM Technical Interview"] },
          { title: "Building in Public", desc: "Writing, speaking, LinkedIn thought leadership", resources: ["Lenny's Newsletter", "Product Hunt"] }
        ]
      }
    ],
    professionals: [
      { name: "Marty Cagan", title: "Founder & Author", company: "Silicon Valley PM", linkedin: "https://www.linkedin.com/in/martycagan/" },
      { name: "Lenny Rachitsky", title: "Author, Former PM at Airbnb", company: "Lenny's Newsletter", linkedin: "https://www.linkedin.com/in/lennyrachitsky/" },
      { name: "Shreyas Doshi", title: "Product Advisor, Former PM", company: "Stripe, Twitter (Former)", linkedin: "https://www.linkedin.com/in/shreyasdoshi/" },
      { name: "Gibson Biddle", title: "Former VP of Product", company: "Netflix", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Gibson+Biddle+Netflix+Product" },
      { name: "Ankur Warikoo", title: "Entrepreneur & Author", company: "Nearbuy (India)", linkedin: "https://www.linkedin.com/in/warikoo/" },
      { name: "Deepak Abbot", title: "Co-founder & CPO", company: "Indiagold (former Paytm Senior VP)", linkedin: "https://www.linkedin.com/in/deepakabbot/" },
      { name: "Bhavik Koladiya", title: "Senior Product Manager", company: "CRED (India)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Bhavik+Koladiya+CRED+Product+Manager" }
    ]
  },

  "game-developer": {
    title: "Game Developer",
    icon: "🎮",
    category: "Creative Tech",
    keywords: ["game", "game development", "game dev", "unity", "unreal engine", "godot", "c#", "c++", "opengl", "physics", "shader", "3d", "2d", "indie", "pygame", "threejs", "webgl", "level design", "game design", "animation", "rendering"],
    description: "Create immersive gaming experiences across platforms using game engines and creative problem solving.",
    roadmap: [
      {
        phase: "Foundation",
        color: "#16a34a",
        steps: [
          { title: "Programming Fundamentals", desc: "C# (Unity) or C++ (Unreal) — OOP, data structures", resources: ["C# for Unity", "Unreal C++"] },
          { title: "Mathematics for Games", desc: "Vectors, matrices, trigonometry, physics basics", resources: ["3Blue1Brown", "Math for Game Devs"] },
          { title: "Game Engine Basics", desc: "Unity or Unreal Engine — UI, scripting, physics", resources: ["Unity Learn", "Unreal Online Learning"] }
        ]
      },
      {
        phase: "Core Development",
        color: "#22c55e",
        steps: [
          { title: "Game Mechanics Design", desc: "Player movement, collision, game loops, state machines", resources: ["Game Design Patterns Book"] },
          { title: "2D Game Development", desc: "Tilemaps, sprites, animation, camera", resources: ["Unity 2D Tutorial"] },
          { title: "3D Game Development", desc: "Models, materials, lighting, physics", resources: ["Brackeys YouTube", "Unity 3D Tutorial"] }
        ]
      },
      {
        phase: "Advanced",
        color: "#4ade80",
        steps: [
          { title: "AI in Games", desc: "Pathfinding (A*), behavior trees, state machines", resources: ["GameAI Book"] },
          { title: "Shader Programming", desc: "HLSL/GLSL, visual effects, post-processing", resources: ["Catlike Coding", "The Book of Shaders"] },
          { title: "Multiplayer / Networking", desc: "Netcode, client prediction, dedicated servers", resources: ["Mirror Networking", "Photon"] }
        ]
      },
      {
        phase: "Publishing",
        color: "#86efac",
        steps: [
          { title: "Performance Optimization", desc: "Profiling, batching, LOD, memory management", resources: ["Unity Profiler", "Unreal Insights"] },
          { title: "Monetization", desc: "IAP, ads, premium model, Steam integration", resources: ["Steam Developer docs"] },
          { title: "Publishing", desc: "Platform submission, marketing, game jams", resources: ["itch.io", "Steam Greenlight"] }
        ]
      }
    ],
    professionals: [
      { name: "Tim Sweeney", title: "Founder & CEO", company: "Epic Games", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Tim+Sweeney+Epic+Games" },
      { name: "John Carmack", title: "Legendary Game Dev & Former CTO", company: "Oculus", linkedin: "https://www.linkedin.com/search/results/people/?keywords=John+Carmack+Oculus+Game+Developer" },
      { name: "Rami Ismail", title: "Indie Game Developer", company: "Vlambeer (Former)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Rami+Ismail+Vlambeer+Indie" },
      { name: "Amy Hennig", title: "Game Director & Writer", company: "Skydance New Media", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Amy+Hennig+Skydance+Game+Director" },
      { name: "Dhruva Interactive", title: "India's Premier Game Studio Lead", company: "Dhruva Interactive (Bangalore)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Rajesh+Rao+Dhruva+Interactive+India" },
      { name: "Rohan Patil", title: "Game Developer & Unity Expert", company: "nCore Games (India)", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Rohan+Patil+nCore+Games+India+Unity" },
      { name: "Siddharth Bhattacharya", title: "Head of Mobile Gaming", company: "Samsung India", linkedin: "https://www.linkedin.com/search/results/people/?keywords=Siddharth+Bhattacharya+Samsung+India+Gaming" }
    ]
  }
};

// Search aliases for fuzzy matching
const SEARCH_ALIASES = {
  "ml": "machine-learning-engineer",
  "machine learning": "machine-learning-engineer",
  "ai": "machine-learning-engineer",
  "deep learning": "machine-learning-engineer",
  "data science": "data-scientist",
  "data analyst": "data-scientist",
  "analyst": "data-scientist",
  "frontend": "frontend-developer",
  "front end": "frontend-developer",
  "react developer": "frontend-developer",
  "web developer": "frontend-developer",
  "backend": "backend-developer",
  "back end": "backend-developer",
  "api developer": "backend-developer",
  "devops": "devops-engineer",
  "sre": "devops-engineer",
  "site reliability": "devops-engineer",
  "cybersecurity": "cybersecurity-analyst",
  "cyber security": "cybersecurity-analyst",
  "security": "cybersecurity-analyst",
  "ethical hacker": "cybersecurity-analyst",
  "cloud": "cloud-architect",
  "aws architect": "cloud-architect",
  "solutions architect": "cloud-architect",
  "ui designer": "uiux-designer",
  "ux designer": "uiux-designer",
  "ui ux": "uiux-designer",
  "product designer": "uiux-designer",
  "full stack": "full-stack-developer",
  "fullstack": "full-stack-developer",
  "mern": "full-stack-developer",
  "blockchain": "blockchain-developer",
  "web3": "blockchain-developer",
  "solidity": "blockchain-developer",
  "mobile": "mobile-developer",
  "android developer": "mobile-developer",
  "ios developer": "mobile-developer",
  "react native": "mobile-developer",
  "flutter": "mobile-developer",
  "data engineer": "data-engineer",
  "etl": "data-engineer",
  "data pipeline": "data-engineer",
  "product manager": "product-manager",
  "pm": "product-manager",
  "product owner": "product-manager",
  "game": "game-developer",
  "unity": "game-developer",
  "unreal": "game-developer",
  "indie developer": "game-developer"
};

// Stop words for portfolio NLP
const STOP_WORDS = new Set([
  "i", "am", "have", "has", "been", "is", "are", "was", "were", "be", "being",
  "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for", "of",
  "with", "by", "from", "as", "into", "through", "during", "my", "your",
  "his", "her", "its", "we", "they", "their", "our", "this", "that", "these",
  "those", "what", "which", "who", "when", "where", "how", "all", "both",
  "each", "other", "some", "few", "more", "most", "also", "just", "can",
  "will", "would", "could", "should", "may", "might", "do", "does", "did",
  "over", "under", "again", "then", "once", "very", "not", "no", "so", "if",
  "about", "above", "after", "before", "between", "used", "using", "like",
  "between", "experience", "years", "year", "work", "working", "build",
  "building", "develop", "developing", "currently", "recently", "good",
  "skills", "skill", "knowledge", "strong", "proficient"
]);
