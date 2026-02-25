// ===== SMART CAREER ROADMAP GENERATOR =====
// Works for ANY career — no API key needed

const DOMAINS = {
    tech: {
        keywords: ['software', 'engineer', 'developer', 'programmer', 'coder', 'web', 'app', 'coding', 'tech', 'it', 'computer', 'backend', 'frontend', 'fullstack', 'mobile', 'devops', 'cloud', 'system', 'architect', 'qa', 'tester', 'sre', 'platform', 'infrastructure'],
        phases: ['Foundation', 'Core Development', 'Advanced Skills', 'Professional'],
        colors: ['#6366f1', '#8b5cf6', '#a855f7', '#c084fc'],
        baseProfessionals: [
            { name: 'Linus Torvalds', title: 'Creator of Linux & Git', company: 'Linux Foundation', linkedin: 'https://www.linkedin.com/in/linustorvalds/' },
            { name: 'Martin Fowler', title: 'Chief Scientist', company: 'ThoughtWorks', linkedin: 'https://www.linkedin.com/in/martin-fowler-0bb95b/' },
            { name: 'Uncle Bob (Robert Martin)', title: 'Author & Software Craftsman', company: 'Clean Coders', linkedin: 'https://www.linkedin.com/in/uncle-bob-martin/' },
            { name: 'Kelsey Hightower', title: 'Principal Engineer', company: 'Google', linkedin: 'https://www.linkedin.com/in/kelsey-hightower-849b2937/' },
            { name: 'Scott Hanselman', title: 'Partner Program Manager', company: 'Microsoft', linkedin: 'https://www.linkedin.com/in/shanselman/' },
            { name: 'Cassidy Williams', title: 'Director of Developer Experience', company: 'Netlify', linkedin: 'https://www.linkedin.com/in/cassidoo/' }
        ]
    },
    data: {
        keywords: ['data', 'analyst', 'analytics', 'science', 'scientist', 'statistics', 'sql', 'database', 'bi', 'intelligence', 'reporting', 'tableau', 'power bi', 'insight', 'research', 'quantitative'],
        phases: ['Data Foundations', 'Analysis & Visualization', 'Modeling', 'Production'],
        colors: ['#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd'],
        baseProfessionals: [
            { name: 'DJ Patil', title: 'First U.S. Chief Data Scientist', company: 'White House (Former)', linkedin: 'https://www.linkedin.com/in/dpatil/' },
            { name: 'Kirk Borne', title: 'Principal Data Scientist', company: 'Booz Allen Hamilton', linkedin: 'https://www.linkedin.com/in/kirkdborne/' },
            { name: 'Hilary Mason', title: 'Founder & Data Scientist', company: 'Fast Forward Labs', linkedin: 'https://www.linkedin.com/in/hilarymason/' },
            { name: 'Hadley Wickham', title: 'Chief Scientist', company: 'Posit (RStudio)', linkedin: 'https://www.linkedin.com/in/hadleywickham/' },
            { name: 'Monica Rogati', title: 'Data Science Advisor', company: 'Independent', linkedin: 'https://www.linkedin.com/in/mrogati/' },
            { name: 'Randy Olson', title: 'Senior Data Scientist', company: 'FOXO Technologies', linkedin: 'https://www.linkedin.com/in/randal-olson/' }
        ]
    },
    design: {
        keywords: ['design', 'designer', 'ux', 'ui', 'graphic', 'visual', 'brand', 'creative', 'art', 'illustration', 'motion', 'animation', 'typography', 'figma', 'sketch', 'photoshop', 'illustrator', 'product design', 'interaction'],
        phases: ['Design Fundamentals', 'Tools & Craft', 'Advanced Design', 'Professional Practice'],
        colors: ['#ec4899', '#f472b6', '#f9a8d4', '#fce7f3'],
        baseProfessionals: [
            { name: 'Don Norman', title: 'Author of Design of Everyday Things', company: 'Nielsen Norman Group', linkedin: 'https://www.linkedin.com/in/donnorman/' },
            { name: 'Julie Zhuo', title: 'Co-founder & Author', company: 'Sundial', linkedin: 'https://www.linkedin.com/in/juliezhuo/' },
            { name: 'Chris Do', title: 'Founder & CEO', company: 'The Futur', linkedin: 'https://www.linkedin.com/in/iamchrisdo/' },
            { name: 'Vitaly Friedman', title: 'Editor-in-Chief', company: 'Smashing Magazine', linkedin: 'https://www.linkedin.com/in/vitalyfriedman/' },
            { name: 'Paula Scher', title: 'Graphic Designer & Partner', company: 'Pentagram', linkedin: 'https://www.linkedin.com/in/paula-scher-2803452/' },
            { name: 'Aaron Draplin', title: 'Founder', company: 'Draplin Design Co.', linkedin: 'https://www.linkedin.com/in/aarondraplin/' }
        ]
    },
    business: {
        keywords: ['manager', 'management', 'business', 'entrepreneur', 'startup', 'marketing', 'sales', 'finance', 'accounting', 'hr', 'operations', 'strategy', 'consulting', 'analyst', 'product', 'project', 'agile', 'executive', 'ceo', 'cto', 'cfo', 'leadership'],
        phases: ['Business Fundamentals', 'Core Skills', 'Strategy & Leadership', 'Executive Level'],
        colors: ['#0284c7', '#0369a1', '#0ea5e9', '#38bdf8'],
        baseProfessionals: [
            { name: 'Reid Hoffman', title: 'Co-founder', company: 'LinkedIn', linkedin: 'https://www.linkedin.com/in/reidhoffman/' },
            { name: 'Sheryl Sandberg', title: 'Former COO', company: 'Meta', linkedin: 'https://www.linkedin.com/in/sheryl-sandberg/' },
            { name: 'Marty Cagan', title: 'Founder', company: 'Silicon Valley PM', linkedin: 'https://www.linkedin.com/in/martycagan/' },
            { name: 'Simon Sinek', title: 'Author & Speaker', company: 'SinekPartners', linkedin: 'https://www.linkedin.com/in/simonsinek/' },
            { name: 'Lenny Rachitsky', title: 'Author & PM', company: "Lenny's Newsletter", linkedin: 'https://www.linkedin.com/in/lennyrachitsky/' },
            { name: 'Jason Lemkin', title: 'Founder', company: 'SaaStr', linkedin: 'https://www.linkedin.com/in/jasonmlemkin/' }
        ]
    },
    healthcare: {
        keywords: ['doctor', 'nurse', 'medical', 'health', 'clinical', 'physician', 'surgeon', 'dentist', 'pharmacy', 'pharmacist', 'therapist', 'physiotherapy', 'nutrition', 'dietitian', 'psychologist', 'psychiatrist', 'paramedic', 'radiology', 'laboratory', 'public health'],
        phases: ['Foundational Sciences', 'Clinical Skills', 'Specialization', 'Professional Practice'],
        colors: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0'],
        baseProfessionals: [
            { name: 'Atul Gawande', title: 'Surgeon & Author', company: 'Brigham and Womens Hospital', linkedin: 'https://www.linkedin.com/in/atul-gawande-0832b21/' },
            { name: 'Eric Topol', title: 'Founder & Director', company: 'Scripps Research', linkedin: 'https://www.linkedin.com/in/eric-topol-md/' },
            { name: 'Zubin Damania (ZDoggMD)', title: 'Physician & Educator', company: 'ZDoggMD', linkedin: 'https://www.linkedin.com/in/zdoggmd/' },
            { name: 'Danielle Ofri', title: 'Physician & Author', company: 'NYU Langone Health', linkedin: 'https://www.linkedin.com/in/danielleofri/' },
            { name: 'Paul Farmer', title: 'Physician & Global Health Leader', company: 'Partners in Health', linkedin: 'https://www.linkedin.com/in/paul-farmer-md/' },
            { name: 'Siddhartha Mukherjee', title: 'Oncologist & Author', company: 'Columbia University', linkedin: 'https://www.linkedin.com/in/siddhartha-mukherjee/' }
        ]
    },
    education: {
        keywords: ['teacher', 'teaching', 'educator', 'professor', 'lecturer', 'tutor', 'curriculum', 'school', 'university', 'academic', 'trainer', 'coach', 'instructor', 'pedagogy', 'edtech', 'learning', 'training'],
        phases: ['Foundations of Education', 'Teaching Skills', 'Curriculum & Assessment', 'Professional Growth'],
        colors: ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a'],
        baseProfessionals: [
            { name: 'Sal Khan', title: 'Founder & CEO', company: 'Khan Academy', linkedin: 'https://www.linkedin.com/in/salkhan/' },
            { name: 'Ken Robinson', title: 'Author & Education Expert', company: 'Independent', linkedin: 'https://www.linkedin.com/in/sirkenrobinson/' },
            { name: 'John Hattie', title: 'Professor of Education', company: 'University of Melbourne', linkedin: 'https://www.linkedin.com/in/john-hattie/' },
            { name: 'Angela Duckworth', title: 'Psychologist & Author', company: 'University of Pennsylvania', linkedin: 'https://www.linkedin.com/in/angela-duckworth-6a77a415/' },
            { name: 'Carol Dweck', title: 'Psychologist & Author', company: 'Stanford University', linkedin: 'https://www.linkedin.com/in/carol-dweck-8a3b5a8/' },
            { name: 'Michael Horn', title: 'Co-founder & Author', company: 'Christensen Institute', linkedin: 'https://www.linkedin.com/in/michaelbhorn/' }
        ]
    },
    finance: {
        keywords: ['finance', 'financial', 'investment', 'banking', 'trading', 'portfolio', 'wealth', 'insurance', 'risk', 'audit', 'tax', 'accounting', 'cpa', 'cfa', 'equity', 'hedge', 'fund', 'fintech', 'economics', 'economist'],
        phases: ['Financial Fundamentals', 'Core Finance Skills', 'Advanced Finance', 'Professional Practice'],
        colors: ['#16a34a', '#22c55e', '#4ade80', '#86efac'],
        baseProfessionals: [
            { name: 'Warren Buffett', title: 'Chairman & CEO', company: 'Berkshire Hathaway', linkedin: 'https://www.linkedin.com/in/warren-buffett-8169551/' },
            { name: 'Ray Dalio', title: 'Founder', company: 'Bridgewater Associates', linkedin: 'https://www.linkedin.com/in/raydalio/' },
            { name: 'Cathie Wood', title: 'Founder & CEO', company: 'ARK Invest', linkedin: 'https://www.linkedin.com/in/cathiewood/' },
            { name: 'Michael Kitces', title: 'Partner & Financial Planner', company: 'Pinnacle Advisory Group', linkedin: 'https://www.linkedin.com/in/michaelkitces/' },
            { name: 'Barry Ritholtz', title: 'Founder & CIO', company: 'Ritholtz Wealth Management', linkedin: 'https://www.linkedin.com/in/barryritholtz/' },
            { name: 'Suze Orman', title: 'Financial Advisor & Author', company: 'Suze Orman Media', linkedin: 'https://www.linkedin.com/in/suzeorman/' }
        ]
    },
    creative: {
        keywords: ['writer', 'author', 'journalist', 'content', 'media', 'film', 'video', 'photographer', 'music', 'musician', 'actor', 'actress', 'director', 'producer', 'podcast', 'youtuber', 'influencer', 'social media', 'storytelling', 'copywriter', 'editor'],
        phases: ['Creative Foundations', 'Craft & Technique', 'Building Audience', 'Professional Career'],
        colors: ['#a855f7', '#c084fc', '#d8b4fe', '#ede9fe'],
        baseProfessionals: [
            { name: 'Casey Neistat', title: 'Director & YouTuber', company: 'Independent', linkedin: 'https://www.linkedin.com/in/caseyneistat/' },
            { name: 'Ann Handley', title: 'Chief Content Officer', company: 'MarketingProfs', linkedin: 'https://www.linkedin.com/in/annhandley/' },
            { name: 'Gary Vaynerchuk', title: 'CEO', company: 'VaynerMedia', linkedin: 'https://www.linkedin.com/in/garyvaynerchuk/' },
            { name: 'Austin Kleon', title: 'Author & Artist', company: 'Independent', linkedin: 'https://www.linkedin.com/in/austinkleon/' },
            { name: 'David Perell', title: 'Writer & Educator', company: 'Write of Passage', linkedin: 'https://www.linkedin.com/in/davidperell/' },
            { name: 'Tim Urban', title: 'Writer & Illustrator', company: 'Wait But Why', linkedin: 'https://www.linkedin.com/in/tim-urban/' }
        ]
    },
    engineering: {
        keywords: ['mechanical', 'civil', 'electrical', 'chemical', 'aerospace', 'structural', 'environmental', 'industrial', 'manufacturing', 'robotics', 'automation', 'materials', 'process', 'petroleum', 'biomedical', 'engineer'],
        phases: ['Engineering Fundamentals', 'Core Engineering', 'Specialization', 'Professional Engineering'],
        colors: ['#f97316', '#fb923c', '#fdba74', '#fed7aa'],
        baseProfessionals: [
            { name: 'Elon Musk', title: 'CEO & Chief Engineer', company: 'SpaceX & Tesla', linkedin: 'https://www.linkedin.com/in/elonmusk/' },
            { name: 'Shelli Brunswick', title: 'Chief Operating Officer', company: 'Space Foundation', linkedin: 'https://www.linkedin.com/in/shellibrunswick/' },
            { name: 'Gwynne Shotwell', title: 'President & COO', company: 'SpaceX', linkedin: 'https://www.linkedin.com/in/gwynne-shotwell/' },
            { name: 'Mary Barra', title: 'Chairman & CEO', company: 'General Motors', linkedin: 'https://www.linkedin.com/in/marybarra/' },
            { name: 'Henry Petroski', title: 'Author & Professor', company: 'Duke University', linkedin: 'https://www.linkedin.com/in/henry-petroski-11ba1011/' },
            { name: 'Neil Gershenfeld', title: 'Director', company: 'MIT Center for Bits and Atoms', linkedin: 'https://www.linkedin.com/in/neilgershenfeld/' }
        ]
    }
};

// Phase step templates per domain
const PHASE_TEMPLATES = {
    tech: [
        [
            { t: 'Programming Fundamentals', d: 'Learn core programming concepts: variables, functions, OOP, data structures, algorithms', r: ['CS50 Harvard', 'freeCodeCamp'] },
            { t: 'Version Control with Git', d: 'Master Git, GitHub workflows, branching strategies, pull requests, code review', r: ['Pro Git Book', 'GitHub Docs'] },
            { t: 'Computer Science Basics', d: 'Operating systems, networking, databases, HTTP, APIs, command line', r: ['OSTEP', 'MDN Web Docs'] }
        ],
        [
            { t: 'Core {career} Skills', d: 'Master the fundamental tools, frameworks, and practices of {career}', r: ['Official Docs', 'Udemy'] },
            { t: 'Building Real Projects', d: 'Apply your skills building 3-5 portfolio projects from scratch', r: ['GitHub', 'The Odin Project'] },
            { t: 'Testing & Debugging', d: 'Unit testing, integration testing, debugging techniques, code quality', r: ['Testing Library', 'Jest Docs'] }
        ],
        [
            { t: 'System Design', d: 'Scalability, architecture patterns, microservices, load balancing, caching', r: ['System Design Primer', 'Designing Data-Intensive Apps'] },
            { t: 'Performance & Optimization', d: 'Profiling, optimization strategies, memory management, best practices', r: ['Web.dev', 'High Performance Browser'] },
            { t: 'Cloud & Deployment', d: 'AWS/GCP/Azure fundamentals, Docker, CI/CD pipelines, monitoring', r: ['AWS Free Tier', 'Docker Docs'] }
        ],
        [
            { t: 'Open Source Contribution', d: 'Contribute to OSS projects, build reputation, networking with engineers', r: ['GitHub', 'First Contributions'] },
            { t: 'Interviewing & Job Search', d: 'LeetCode, system design interviews, behavioural questions, negotiation', r: ['LeetCode', 'Grokking Interviews'] },
            { t: 'Continuous Learning', d: 'Stay current with industry trends, attend conferences, build in public', r: ['Tech blogs', 'Hacker News'] }
        ]
    ],
    data: [
        [
            { t: 'Statistics & Mathematics', d: 'Descriptive statistics, probability, distributions, hypothesis testing', r: ['StatQuest YouTube', 'Khan Academy'] },
            { t: 'Python or R', d: 'Data manipulation with Pandas or dplyr, visualization basics', r: ['DataCamp', 'Kaggle Learn'] },
            { t: 'SQL & Databases', d: 'Joins, aggregations, window functions, query optimization', r: ['Mode SQL Tutorial', 'SQLZoo'] }
        ],
        [
            { t: 'Exploratory Data Analysis', d: 'Pandas profiling, seaborn, plotly, data cleaning, outlier detection', r: ['Towards Data Science', 'Kaggle'] },
            { t: 'Data Visualization', d: 'Tableau, Power BI, Matplotlib — effective storytelling with charts', r: ['Tableau Public', 'Storytelling with Data'] },
            { t: '{career} Domain Knowledge', d: 'Apply analytical skills to solve real problems in {career} domain', r: ['Industry blogs', 'Case studies'] }
        ],
        [
            { t: 'Machine Learning Basics', d: 'Regression, classification, clustering, model evaluation', r: ['Scikit-learn Docs', 'ML Mastery'] },
            { t: 'Advanced Analytics', d: 'A/B testing, cohort analysis, forecasting, attribution modeling', r: ['Netflix Tech Blog', 'Airbnb Data Science'] },
            { t: 'Big Data Tools', d: 'Spark, dbt, data warehouses, ETL/ELT pipelines', r: ['dbt Learn', 'Apache Spark Docs'] }
        ],
        [
            { t: 'Dashboard & Reporting', d: 'Automated reporting, Streamlit apps, stakeholder presentations', r: ['Streamlit Docs', 'Looker'] },
            { t: 'Data Storytelling', d: 'Communicate insights to non-technical stakeholders effectively', r: ['Storytelling with Data Book', 'Cole Nussbaumer'] },
            { t: 'Portfolio & Career', d: 'Build data portfolio on Kaggle, GitHub; practice SQL & case interviews', r: ['Kaggle', 'Stratascratch'] }
        ]
    ],
    generic: [
        [
            { t: 'Core Fundamentals', d: 'Learn the essential principles, theory, and core concepts of {career}', r: ['Industry textbooks', 'Coursera'] },
            { t: 'Tools & Workflow', d: 'Master the primary software, tools, and workflows used by {career} professionals', r: ['Official documentation', 'YouTube tutorials'] },
            { t: 'Entry-Level Projects', d: 'Apply your learning to beginner projects that build your foundation', r: ['Online communities', 'Udemy'] }
        ],
        [
            { t: 'Intermediate {career} Skills', d: 'Develop deeper expertise in the key areas that define an effective {career}', r: ['Specialty courses', 'LinkedIn Learning'] },
            { t: 'Real-World Practice', d: 'Work on real projects, internships, or volunteering to gain experience', r: ['Local organizations', 'Freelance platforms'] },
            { t: 'Industry Standards & Best Practices', d: 'Study how top professionals work, quality standards, and industry norms', r: ['Professional associations', 'Industry publications'] }
        ],
        [
            { t: 'Advanced Specialization', d: 'Choose a specialization within {career} and develop deep mastery', r: ['Advanced courses', 'Mentors'] },
            { t: 'Leadership & Communication', d: 'Present your work, lead projects, and collaborate effectively with teams', r: ['Toastmasters', 'Public Speaking courses'] },
            { t: 'Emerging Trends', d: 'Stay current with AI tools, new methodologies, and evolving best practices in {career}', r: ['Industry blogs', 'Podcasts'] }
        ],
        [
            { t: 'Professional Network', d: 'Build your LinkedIn, attend meetups and conferences, find mentors', r: ['LinkedIn', 'Meetup.com'] },
            { t: 'Portfolio & Personal Brand', d: 'Showcase your work, case studies, and achievements publicly', r: ['Personal website', 'GitHub / Behance'] },
            { t: 'Career Advancement', d: 'Job search strategy, salary negotiation, continuous skill development', r: ['Glassdoor', 'Levels.fyi'] }
        ]
    ]
};

function detectDomain(query) {
    const q = query.toLowerCase();
    for (const [domain, cfg] of Object.entries(DOMAINS)) {
        if (cfg.keywords.some(kw => q.includes(kw))) return domain;
    }
    return 'generic';
}

function fillTemplate(text, career) {
    return text.replace(/\{career\}/g, career);
}

function pickEmoji(query) {
    const q = query.toLowerCase();
    if (/software|developer|coder|programmer/.test(q)) return '💻';
    if (/data|analyst|analytics/.test(q)) return '📊';
    if (/design|ux|ui|graphic/.test(q)) return '🎨';
    if (/product manager|pm/.test(q)) return '📋';
    if (/market/.test(q)) return '📣';
    if (/finance|investment|bank/.test(q)) return '💰';
    if (/doctor|medical|health|nurse/.test(q)) return '⚕️';
    if (/teacher|educator/.test(q)) return '📚';
    if (/engineer/.test(q)) return '⚙️';
    if (/writer|author|content/.test(q)) return '✍️';
    if (/music/.test(q)) return '🎵';
    if (/science|scientist/.test(q)) return '🔬';
    if (/sales/.test(q)) return '🤝';
    if (/security|cyber/.test(q)) return '🛡️';
    if (/cloud|devops/.test(q)) return '☁️';
    if (/robot|automation|ai/.test(q)) return '🤖';
    return '🚀';
}

function capitalize(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}

function generateSmartRoadmap(searchQuery) {
    const domain = detectDomain(searchQuery);
    const careerTitle = capitalize(searchQuery.trim());
    const domainCfg = DOMAINS[domain] || DOMAINS.tech;

    const phaseTemplates = PHASE_TEMPLATES[domain] || PHASE_TEMPLATES.generic;
    const phases = (domainCfg.phases || ['Foundation', 'Core Skills', 'Advanced', 'Professional']);
    const colors = domainCfg.colors || ['#6366f1', '#8b5cf6', '#a855f7', '#c084fc'];

    const roadmap = phases.map((phase, i) => {
        const steps = phaseTemplates[i].map(step => ({
            title: fillTemplate(step.t, careerTitle),
            desc: fillTemplate(step.d, careerTitle),
            resources: step.r
        }));
        return { phase, color: colors[i], steps };
    });

    const category = {
        tech: 'Technology', data: 'Data & Analytics', design: 'Design',
        business: 'Business', healthcare: 'Healthcare', education: 'Education',
        finance: 'Finance', creative: 'Creative', engineering: 'Engineering'
    }[domain] || 'Professional';

    return {
        title: careerTitle,
        icon: pickEmoji(searchQuery),
        category,
        description: `Build a successful career as a ${careerTitle} with this comprehensive step-by-step roadmap.`,
        roadmap,
        professionals: domainCfg.baseProfessionals || DOMAINS.tech.baseProfessionals
    };
}

// ===== SKILL DETECTION DATABASE =====
const SKILL_SIGNALS = {
  react:         { tags: ['frontend','javascript'], weight: 3 },
  vue:           { tags: ['frontend','javascript'], weight: 3 },
  angular:       { tags: ['frontend','javascript'], weight: 3 },
  nextjs:        { tags: ['frontend','fullstack'], weight: 3 },
  html:          { tags: ['frontend'], weight: 1 },
  css:           { tags: ['frontend'], weight: 1 },
  javascript:    { tags: ['frontend','fullstack'], weight: 2 },
  typescript:    { tags: ['frontend','fullstack'], weight: 2 },
  node:          { tags: ['backend','fullstack'], weight: 3 },
  express:       { tags: ['backend'], weight: 2 },
  django:        { tags: ['backend'], weight: 3 },
  flask:         { tags: ['backend'], weight: 2 },
  spring:        { tags: ['backend'], weight: 3 },
  graphql:       { tags: ['backend','fullstack'], weight: 2 },
  python:        { tags: ['backend','data','ml'], weight: 2 },
  java:          { tags: ['backend','mobile'], weight: 2 },
  kotlin:        { tags: ['mobile'], weight: 3 },
  swift:         { tags: ['mobile'], weight: 3 },
  flutter:       { tags: ['mobile'], weight: 3 },
  pandas:        { tags: ['data'], weight: 3 },
  numpy:         { tags: ['data','ml'], weight: 2 },
  tensorflow:    { tags: ['ml'], weight: 3 },
  pytorch:       { tags: ['ml'], weight: 3 },
  sklearn:       { tags: ['ml','data'], weight: 3 },
  sql:           { tags: ['data','backend'], weight: 2 },
  tableau:       { tags: ['data'], weight: 3 },
  spark:         { tags: ['data'], weight: 3 },
  docker:        { tags: ['devops'], weight: 3 },
  kubernetes:    { tags: ['devops'], weight: 3 },
  aws:           { tags: ['devops','cloud'], weight: 3 },
  gcp:           { tags: ['devops','cloud'], weight: 3 },
  azure:         { tags: ['devops','cloud'], weight: 3 },
  terraform:     { tags: ['devops'], weight: 3 },
  figma:         { tags: ['design','ux'], weight: 3 },
  sketch:        { tags: ['design'], weight: 3 },
  photoshop:     { tags: ['design'], weight: 2 },
  scrum:         { tags: ['pm','agile'], weight: 2 },
  agile:         { tags: ['pm','agile'], weight: 2 },
  jira:          { tags: ['pm'], weight: 1 },
  'machine learning': { tags: ['ml'], weight: 3 },
  'deep learning':    { tags: ['ml'], weight: 3 },
  'react native':     { tags: ['mobile'], weight: 3 },
  'product manager':  { tags: ['pm'], weight: 3 },
  'user research':    { tags: ['design','ux'], weight: 3 },
  cybersecurity:      { tags: ['security'], weight: 3 },
  penetration:        { tags: ['security'], weight: 3 },
  nlp:           { tags: ['ml','ai'], weight: 3 },
  llm:           { tags: ['ml','ai'], weight: 3 },
};

function detectLevel(text) {
  const t = text.toLowerCase();
  const m = t.match(/(\d+)\+?\s*years?/i);
  if (m) { const y = parseInt(m[1]); return y >= 7 ? 'senior' : y >= 3 ? 'mid' : 'junior'; }
  if (/senior|lead|principal|architect|staff/.test(t)) return 'senior';
  if (/junior|entry|intern|fresher|graduate|beginner/.test(t)) return 'junior';
  return 'mid';
}

const JOB_ROLES = [
  {
    title: 'Frontend Developer', icon: '🖥️', tags: ['frontend'], minScore: 3,
    levels: {
      junior: { salary: '₹50k–₹75k', label: 'Junior Frontend Developer', companies: ['Shopify', 'HubSpot', 'startups', 'agencies'] },
      mid:    { salary: '₹80k–₹115k', label: 'Frontend Developer', companies: ['Airbnb', 'Spotify', 'Netflix', 'product companies'] },
      senior: { salary: '₹125k–₹180k', label: 'Senior Frontend Engineer', companies: ['Google', 'Apple', 'Meta', 'top tech firms'] },
    },
    skills: ['React / Vue / Angular', 'TypeScript', 'CSS & Design Systems', 'Performance'],
    searchKey: 'frontend-developer'
  },
  {
    title: 'Full Stack Developer', icon: '⚡', tags: ['frontend','backend'], minScore: 4,
    levels: {
      junior: { salary: '₹55k–₹80k', label: 'Junior Full Stack Developer', companies: ['startups', 'agencies', 'SaaS companies'] },
      mid:    { salary: '₹90k–₹130k', label: 'Full Stack Developer', companies: ['Stripe', 'Notion', 'Figma', 'scale-ups'] },
      senior: { salary: '₹140k–₹200k', label: 'Senior Full Stack Engineer', companies: ['Atlassian', 'Dropbox', 'Shopify', 'FAANG'] },
    },
    skills: ['React + Node/Django', 'Databases & APIs', 'Auth & Security', 'Deployment'],
    searchKey: 'full-stack-developer'
  },
  {
    title: 'Backend Developer', icon: '⚙️', tags: ['backend'], minScore: 3,
    levels: {
      junior: { salary: '₹55k–₹78k', label: 'Junior Backend Developer', companies: ['fintech startups', 'SaaS', 'agencies'] },
      mid:    { salary: '₹90k–₹125k', label: 'Backend Engineer', companies: ['Twilio', 'Cloudflare', 'Vercel', 'mid-size tech'] },
      senior: { salary: '₹130k–₹185k', label: 'Senior Backend Engineer', companies: ['AWS', 'Stripe', 'Uber', 'FAANG'] },
    },
    skills: ['APIs & Microservices', 'Databases', 'System Design', 'Security'],
    searchKey: 'full-stack-developer'
  },
  {
    title: 'ML / AI Engineer', icon: '🤖', tags: ['ml','ai'], minScore: 3,
    levels: {
      junior: { salary: '₹80k–₹115k', label: 'ML Engineer', companies: ['AI startups', 'research labs', 'mid-size tech'] },
      mid:    { salary: '₹125k–₹170k', label: 'ML Engineer', companies: ['OpenAI', 'Anthropic', 'Cohere', 'AWS AI'] },
      senior: { salary: '₹180k–₹300k', label: 'Senior ML / AI Engineer', companies: ['Google DeepMind', 'Meta AI', 'OpenAI'] },
    },
    skills: ['PyTorch / TensorFlow', 'LLMs & Transformers', 'MLOps', 'Cloud GPU'],
    searchKey: 'machine-learning-engineer'
  },
  {
    title: 'Data Scientist', icon: '📊', tags: ['data','ml'], minScore: 3,
    levels: {
      junior: { salary: '₹60k–₹85k', label: 'Junior Data Scientist', companies: ['analytics firms', 'healthcare', 'finance'] },
      mid:    { salary: '₹95k–₹135k', label: 'Data Scientist', companies: ['Netflix', 'Airbnb', 'LinkedIn', 'DoorDash'] },
      senior: { salary: '₹150k–₹220k', label: 'Senior Data Scientist', companies: ['Google', 'Apple', 'Amazon', 'hedge funds'] },
    },
    skills: ['Python/R', 'ML Algorithms', 'Statistics', 'Data Storytelling'],
    searchKey: 'data-scientist'
  },
  {
    title: 'Data Analyst', icon: '📈', tags: ['data'], minScore: 2,
    levels: {
      junior: { salary: '₹45k–₹65k', label: 'Junior Data Analyst', companies: ['retail', 'banking', 'consulting'] },
      mid:    { salary: '₹70k–₹95k', label: 'Data Analyst', companies: ['Deloitte', 'McKinsey', 'Salesforce', 'SaaS'] },
      senior: { salary: '₹100k–₹140k', label: 'Senior Data Analyst', companies: ['HubSpot', 'Tableau', 'Snowflake'] },
    },
    skills: ['SQL', 'Python / Excel', 'Tableau / Power BI', 'Stakeholder comms'],
    searchKey: 'data-scientist'
  },
  {
    title: 'DevOps / Cloud Engineer', icon: '☁️', tags: ['devops','cloud'], minScore: 3,
    levels: {
      junior: { salary: '₹65k–₹90k', label: 'Junior DevOps Engineer', companies: ['cloud-native startups', 'IT firms'] },
      mid:    { salary: '₹105k–₹140k', label: 'DevOps / Cloud Engineer', companies: ['HashiCorp', 'Datadog', 'CircleCI'] },
      senior: { salary: '₹150k–₹215k', label: 'Senior SRE / Platform Engineer', companies: ['AWS', 'Netflix', 'Uber', 'GCP'] },
    },
    skills: ['Docker & Kubernetes', 'CI/CD Pipelines', 'Terraform', 'AWS / GCP / Azure'],
    searchKey: 'devops-engineer'
  },
  {
    title: 'Mobile Developer', icon: '📱', tags: ['mobile'], minScore: 2,
    levels: {
      junior: { salary: '₹55k–₹80k', label: 'Junior Mobile Developer', companies: ['app agencies', 'startups'] },
      mid:    { salary: '₹90k–₹120k', label: 'iOS / Android Developer', companies: ['Airbnb', 'Lyft', 'Duolingo', 'SuperCell'] },
      senior: { salary: '₹135k–₹185k', label: 'Senior Mobile Engineer', companies: ['Apple', 'Google', 'Spotify', 'Snap'] },
    },
    skills: ['Swift / Kotlin or React Native', 'App Store / Play Store', 'APIs', 'Performance'],
    searchKey: 'mobile-app-developer'
  },
  {
    title: 'Cybersecurity Analyst', icon: '🛡️', tags: ['security'], minScore: 2,
    levels: {
      junior: { salary: '₹55k–₹80k', label: 'Security Analyst (SOC)', companies: ['MSPs', 'banks', 'government', 'consulting'] },
      mid:    { salary: '₹95k–₹130k', label: 'Cybersecurity Engineer', companies: ['CrowdStrike', 'Palo Alto', 'SentinelOne'] },
      senior: { salary: '₹140k–₹200k', label: 'Senior Security Engineer', companies: ['FAANG', 'defense contractors', 'Big 4'] },
    },
    skills: ['Network Security', 'Pen Testing', 'SIEM & SOC', 'Cloud Security'],
    searchKey: 'cybersecurity-analyst'
  },
  {
    title: 'UX / Product Designer', icon: '🎨', tags: ['design','ux'], minScore: 2,
    levels: {
      junior: { salary: '₹45k–₹70k', label: 'Junior UX Designer', companies: ['agencies', 'e-commerce', 'SaaS startups'] },
      mid:    { salary: '₹80k–₹115k', label: 'UX / Product Designer', companies: ['Figma', 'Canva', 'Miro', 'product companies'] },
      senior: { salary: '₹125k–₹175k', label: 'Senior Product Designer', companies: ['Google', 'Airbnb', 'Stripe', 'Meta'] },
    },
    skills: ['Figma & Prototyping', 'User Research', 'Design Systems', 'Team Collaboration'],
    searchKey: 'ux-ui-designer'
  },
  {
    title: 'Product Manager', icon: '📋', tags: ['pm','agile'], minScore: 2,
    levels: {
      junior: { salary: '₹65k–₹95k', label: 'Associate Product Manager', companies: ['startups', 'SaaS companies'] },
      mid:    { salary: '₹110k–₹150k', label: 'Product Manager', companies: ['HubSpot', 'Atlassian', 'Intercom', 'scale-ups'] },
      senior: { salary: '₹160k–₹240k', label: 'Senior / Group PM', companies: ['Google', 'Amazon', 'Stripe', 'FAANG'] },
    },
    skills: ['Product Strategy', 'Agile / Scrum', 'Data-driven Decisions', 'Stakeholder Management'],
    searchKey: 'product-manager'
  },
];

function analyzePortfolioSmart(text) {
  const lower = text.toLowerCase();
  const level = detectLevel(text);
  const tagScores = {};
  for (const [skill, cfg] of Object.entries(SKILL_SIGNALS)) {
    if (lower.includes(skill)) {
      cfg.tags.forEach(tag => { tagScores[tag] = (tagScores[tag] || 0) + cfg.weight; });
    }
  }
  const results = [];
  for (const role of JOB_ROLES) {
    const score = role.tags.reduce((s, tag) => s + (tagScores[tag] || 0), 0);
    if (score >= role.minScore) {
      const levelData = role.levels[level] || role.levels.mid;
      results.push({ role, score, level, levelData });
    }
  }
  results.sort((a, b) => b.score - a.score);
  return { jobs: results.slice(0, 5), level };
}
