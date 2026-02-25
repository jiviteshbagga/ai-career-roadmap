// ===== ROADMAP PAGE SCRIPT =====

const AVATAR_COLORS = [
  ['#6366f1', '#4f46e5'], ['#8b5cf6', '#7c3aed'], ['#06b6d4', '#0891b2'],
  ['#f59e0b', '#d97706'], ['#10b981', '#059669'], ['#ef4444', '#dc2626'],
  ['#ec4899', '#db2777'], ['#f97316', '#ea580c'],
];

function getInitials(name) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
}

function getAvatarColor(name) {
  let hash = 0;
  for (let c of name) hash = (hash * 31 + c.charCodeAt(0)) % AVATAR_COLORS.length;
  return AVATAR_COLORS[Math.abs(hash)];
}

// ===== RENDER ROADMAP =====
function renderRoadmap(career) {
  const wrapper = document.getElementById('roadmap-wrapper');
  if (!wrapper) return;

  wrapper.innerHTML = career.roadmap.map((phase, pi) => `
    <div class="roadmap-phase" style="--phase-color: ${phase.color}">
      <div class="phase-header">
        <div class="phase-number" style="background: ${phase.color}; box-shadow: 0 0 20px ${phase.color}66;">${pi + 1}</div>
        <div>
          <div class="phase-name">${phase.phase}</div>
        </div>
      </div>
      <div class="phase-steps">
        ${phase.steps.map((step, si) => `
          <div class="step-card" style="--step-delay:${si * 0.1}s">
            <div class="step-title">${step.title}</div>
            <div class="step-desc">${step.desc}</div>
            <div class="step-resources">
              ${step.resources.map(r => `<span class="resource-tag">📚 ${r}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  wrapper.querySelectorAll('.roadmap-phase').forEach(el => observer.observe(el));
}

// ===== RENDER PROFESSIONALS =====
function renderProfessionals(career) {
  const grid = document.getElementById('prof-grid');
  if (!grid) return;

  if (!career.professionals || career.professionals.length === 0) {
    grid.innerHTML = `<div class="no-results"><p>No professional data available for this career.</p></div>`;
    return;
  }

  grid.innerHTML = career.professionals.map((prof, i) => {
    const [c1, c2] = getAvatarColor(prof.name);
    const linkedinUrl = prof.linkedin || `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(prof.name)}`;
    return `
      <div class="prof-card" style="transition-delay: ${i * 0.1}s">
        <div class="prof-avatar" style="background: linear-gradient(135deg, ${c1}, ${c2})">
          ${getInitials(prof.name)}
        </div>
        <div class="prof-info">
          <div class="prof-name">${prof.name}</div>
          <div class="prof-title">${prof.title}</div>
          <div class="prof-company">🏢 ${prof.company}</div>
        </div>
        <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="linkedin-btn" title="View ${prof.name} on LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          View on LinkedIn
        </a>
      </div>`;
  }).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  grid.querySelectorAll('.prof-card').forEach(el => observer.observe(el));
}

// ===== RENDER PHASE LEGEND =====
function renderLegend(career) {
  const legend = document.getElementById('phase-legend');
  if (!legend) return;
  legend.innerHTML = career.roadmap.map(phase => `
    <div class="phase-badge">
      <div class="phase-dot" style="background:${phase.color}; box-shadow: 0 0 8px ${phase.color}88;"></div>
      ${phase.phase}
    </div>
  `).join('');
}

// ===== SHOW AI GENERATED BADGE =====
function showAiBadge() {
  const hero = document.querySelector('.roadmap-hero');
  if (!hero) return;
  const badge = document.createElement('div');
  badge.className = 'ai-generated-badge';
  badge.innerHTML = '✨ AI Generated Roadmap';
  hero.insertBefore(badge, hero.querySelector('h1'));
}

// ===== PARTICLE BACKGROUND =====
function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  canvas.width = W; canvas.height = H;

  const particles = Array.from({ length: 50 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 1.2 + 0.3,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.3 + 0.05,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initParticles();

  const params = new URLSearchParams(window.location.search);
  const skillParam = decodeURIComponent(params.get('skill') || '');
  const isAI = params.get('ai') === '1';

  let career = null;
  let isAiGenerated = false;

  // 1. Check sessionStorage for AI-generated roadmap
  if (isAI) {
    try {
      const stored = sessionStorage.getItem('ai_roadmap');
      if (stored) {
        career = JSON.parse(stored);
        isAiGenerated = true;
      }
    } catch (e) {
      console.warn('Could not parse AI roadmap from sessionStorage');
    }
  }

  // 2. Try static data
  if (!career) {
    let careerId = skillParam;
    career = CAREER_DATA[careerId];
    if (!career) {
      careerId = SEARCH_ALIASES[skillParam.toLowerCase()] || null;
      career = careerId ? CAREER_DATA[careerId] : null;
    }
  }

  // 3. Default to first career
  if (!career) {
    const firstId = Object.keys(CAREER_DATA)[0];
    career = CAREER_DATA[firstId];
  }

  // Populate hero
  document.getElementById('career-icon').textContent = career.icon || '🚀';
  document.getElementById('career-title').textContent = career.title;
  document.getElementById('career-desc').textContent = career.description;
  document.getElementById('page-title').textContent = `${career.title} Roadmap | AI Career Finder`;

  if (isAiGenerated) showAiBadge();

  renderLegend(career);
  renderRoadmap(career);
  renderProfessionals(career);

  const profHeading = document.getElementById('prof-heading');
  if (profHeading) {
    profHeading.textContent = isAiGenerated
      ? `Top ${career.title} Professionals to Follow`
      : `Top ${career.title}s to Follow`;
  }

  // ---- "Get Started" nav CTA ----
  document.querySelector('.nav-cta')?.addEventListener('click', (e) => {
    // On roadmap page, nav-cta goes back to index — keep default href
  });
});
