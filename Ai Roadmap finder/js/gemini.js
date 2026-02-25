// ===== GEMINI AI INTEGRATION =====
// Google Gemini 1.5 Flash
// ⚠️ Replace the value below with your Gemini API key from: https://aistudio.google.com/app/apikey
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// ---- Core API Call ----
async function callGemini(prompt) {
    const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
        })
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error?.message || `HTTP ${res.status}`);
    }

    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

// ---- Parse JSON from Gemini response ----
function parseJsonFromResponse(text) {
    const cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*/gi, '').trim();
    const start = cleaned.indexOf('{');
    const end = cleaned.lastIndexOf('}');
    if (start === -1 || end === -1) throw new Error('No JSON in response');
    return JSON.parse(cleaned.slice(start, end + 1));
}

// ---- Generate Dynamic Roadmap for ANY career/skill ----
async function generateRoadmap(skill) {
    const prompt = `You are a career roadmap expert. Generate a comprehensive career roadmap for: "${skill}"

Return ONLY valid JSON (no markdown, no explanation) matching this exact structure:
{
  "title": "Full career title (e.g., Software Engineer)",
  "icon": "A single relevant emoji",
  "category": "Category (e.g., Web Development, AI & Data, Design, etc.)",
  "description": "One sentence description of the career (max 120 chars)",
  "roadmap": [
    {
      "phase": "Phase Name",
      "color": "#hexcolor",
      "steps": [
        { "title": "Step Title", "desc": "Brief description of what to learn", "resources": ["Resource1", "Resource2"] }
      ]
    }
  ],
  "professionals": [
    { "name": "Real Person Name", "title": "Their actual job title", "company": "Their company", "linkedin": "https://www.linkedin.com/in/their-profile/" }
  ]
}

Rules:
- Exactly 4 phases: Foundation → Core Skills → Advanced → Professional
- Each phase has exactly 3 steps with 2 resources each
- Include exactly 6 real, well-known professionals with accurate LinkedIn profile URLs
- Use distinct vibrant hex colors for each phase (e.g. #6366f1, #8b5cf6, #a855f7, #c084fc)
- Make content highly specific and actionable for "${skill}"`;

    const text = await callGemini(prompt);
    const data = parseJsonFromResponse(text);

    if (!data.title || !data.roadmap || !Array.isArray(data.roadmap)) {
        throw new Error('Invalid roadmap structure from AI');
    }
    if (!data.professionals || !Array.isArray(data.professionals)) {
        data.professionals = [];
    }
    return data;
}

// ---- AI Portfolio Analysis ----
async function analyzePortfolioAI(text) {
    const availableCareers = Object.entries(CAREER_DATA)
        .map(([id, c]) => `"${id}" (${c.title})`).join(', ');

    const prompt = `Analyze this person's skills/bio and recommend the best matching career paths.

Bio/skills:
"${text}"

Available careers: ${availableCareers}

Return ONLY valid JSON:
{
  "recommendations": ["career-id-1", "career-id-2", "career-id-3"]
}

Rules: Return 3-6 career IDs ordered by best match. Use EXACT IDs from the list.`;

    const response = await callGemini(prompt);
    const parsed = parseJsonFromResponse(response);
    return parsed.recommendations || [];
}

// ---- Toast Notification ----
function showToast(message, type = 'info') {
    document.getElementById('toast-container')?.remove();
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.innerHTML = `<div class="toast toast-${type}">${message}</div>`;
    document.body.appendChild(container);
    requestAnimationFrame(() => container.querySelector('.toast').classList.add('toast-show'));
    setTimeout(() => {
        container.querySelector('.toast')?.classList.remove('toast-show');
        setTimeout(() => container.remove(), 400);
    }, 3500);
}

// ---- No-op stubs (key management removed) ----
function initGemini() { }   // nothing to init — key is hardcoded
function hasApiKey() { return GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE'; }
