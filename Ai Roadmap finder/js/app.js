// ===== PARTICLE BACKGROUND =====
function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;
    const particles = Array.from({ length: 70 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
    }));
    function draw() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`; ctx.fill();
        });
        requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });
}

// ===== LOCAL PORTFOLIO ANALYSIS =====
function analyzePortfolioLocal(text) {
    if (!text || text.trim().length < 10) return [];
    const lower = text.toLowerCase();
    const words = lower.split(/[\s,./\-_()]+/).filter(w => w.length > 2 && !STOP_WORDS.has(w));
    const wordSet = new Set(words);
    const scores = {};
    Object.entries(CAREER_DATA).forEach(([id, career]) => {
        let score = 0;
        career.keywords.forEach(keyword => {
            const kw = keyword.toLowerCase();
            if (lower.includes(kw)) score += kw.includes(' ') ? 3 : 2;
            else keyword.split(' ').forEach(k => { if (wordSet.has(k) && k.length > 2) score += 1; });
        });
        if (score > 0) scores[id] = score;
    });
    return Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([id]) => id);
}

// ===== AUTOCOMPLETE =====
function getSearchMatches(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase().trim();
    const results = []; const seen = new Set();
    Object.entries(SEARCH_ALIASES).forEach(([alias, id]) => {
        if (alias.includes(q) && !seen.has(id)) { seen.add(id); results.push({ id, score: alias.startsWith(q) ? 3 : 2 }); }
    });
    Object.entries(CAREER_DATA).forEach(([id, career]) => {
        if (seen.has(id)) return;
        const titleMatch = career.title.toLowerCase().includes(q);
        const kwMatch = career.keywords.some(k => k.includes(q));
        if (titleMatch || kwMatch) { results.push({ id, score: titleMatch ? 2 : 1 }); seen.add(id); }
    });
    return results.sort((a, b) => b.score - a.score).slice(0, 7).map(r => r.id);
}

// ===== NAVIGATION =====
function goToRoadmap(careerId, aiData = null) {
    if (aiData) {
        sessionStorage.setItem('ai_roadmap', JSON.stringify(aiData));
        sessionStorage.setItem('ai_roadmap_skill', careerId);
        window.location.href = `roadmap.html?skill=${encodeURIComponent(careerId)}&ai=1`;
    } else {
        sessionStorage.removeItem('ai_roadmap');
        window.location.href = `roadmap.html?skill=${encodeURIComponent(careerId)}`;
    }
}

// ===== UI =====
function renderChips(careerIds, label, isAI = false) {
    const container = document.getElementById('chips-container');
    const chipsLabel = document.getElementById('chips-label');
    if (!container) return;
    if (chipsLabel) chipsLabel.textContent = label;
    container.innerHTML = careerIds.map((id, i) => {
        const career = CAREER_DATA[id];
        if (!career) return '';
        return `<a class="skill-chip ${isAI ? 'ai-recommended' : ''}"
         href="roadmap.html?skill=${encodeURIComponent(id)}"
         style="animation-delay:${i * 0.06}s">${career.icon} ${career.title}</a>`;
    }).join('');
}

function getDropdown() {
    let el = document.getElementById('autocomplete-dropdown');
    if (!el) {
        el = document.createElement('div');
        el.id = 'autocomplete-dropdown';
        el.className = 'autocomplete-dropdown';
        document.body.appendChild(el);
    }
    return el;
}

function positionDropdown() {
    const wrapper = document.querySelector('.search-wrapper');
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (!wrapper || !dropdown) return;
    const rect = wrapper.getBoundingClientRect();
    dropdown.style.top = (rect.bottom + 8) + 'px';
    dropdown.style.left = rect.left + 'px';
    dropdown.style.width = rect.width + 'px';
}

function renderDropdown(careerIds) {
    const dropdown = getDropdown();
    if (careerIds.length === 0) {
        dropdown.classList.remove('visible');
        dropdown.innerHTML = '';
        return;
    }
    positionDropdown();
    dropdown.innerHTML = careerIds.map(id => {
        const career = CAREER_DATA[id];
        if (!career) return '';
        return `<div class="autocomplete-item" data-id="${id}" tabindex="-1">
        <span class="item-icon">${career.icon}</span>
        <span class="item-title">${career.title}</span>
        <span class="item-category">${career.category}</span>
      </div>`;
    }).join('');
    dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('mousedown', e => { e.preventDefault(); goToRoadmap(item.dataset.id); });
    });
    dropdown.classList.add('visible');
}

function showGeneratingOverlay(skill) {
    document.getElementById('ai-loading-overlay')?.remove();
    const overlay = document.createElement('div');
    overlay.id = 'ai-loading-overlay';
    overlay.innerHTML = `
    <div class="ai-loading-box">
      <div class="ai-loading-spinner"></div>
      <div class="ai-loading-title">🤖 Building Your Roadmap</div>
      <div class="ai-loading-subtitle">Creating a personalized roadmap for <strong>${skill}</strong>...</div>
      <div class="ai-loading-steps">
        <div class="ai-step ai-step-active" id="lstep1">📋 Analyzing career domain</div>
        <div class="ai-step" id="lstep2">🗺️ Generating roadmap phases</div>
        <div class="ai-step" id="lstep3">👥 Finding top professionals</div>
      </div>
    </div>`;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('visible'));
    setTimeout(() => {
        document.getElementById('lstep1')?.classList.replace('ai-step-active', 'ai-step-done');
        document.getElementById('lstep2')?.classList.add('ai-step-active');
    }, 600);
    setTimeout(() => {
        document.getElementById('lstep2')?.classList.replace('ai-step-active', 'ai-step-done');
        document.getElementById('lstep3')?.classList.add('ai-step-active');
    }, 1100);
    return overlay;
}

function hideOverlay() {
    const overlay = document.getElementById('ai-loading-overlay');
    if (overlay) { overlay.classList.remove('visible'); setTimeout(() => overlay.remove(), 300); }
}

function showToast(message, type = 'info') {
    document.getElementById('toast-container')?.remove();
    const c = document.createElement('div');
    c.id = 'toast-container';
    c.innerHTML = `<div class="toast toast-${type}">${message}</div>`;
    document.body.appendChild(c);
    requestAnimationFrame(() => c.querySelector('.toast').classList.add('toast-show'));
    setTimeout(() => { c.querySelector('.toast')?.classList.remove('toast-show'); setTimeout(() => c.remove(), 400); }, 3500);
}

// ===== MAIN SEARCH =====
async function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const q = searchInput?.value.trim();
    if (!q) { searchInput?.focus(); return; }

    // 1. Direct static match
    const norm = q.toLowerCase().replace(/\s+/g, '-');
    if (CAREER_DATA[norm]) { goToRoadmap(norm); return; }

    // 2. Alias match
    const alias = SEARCH_ALIASES[q.toLowerCase()];
    if (alias) { goToRoadmap(alias); return; }

    // 3. Autocomplete close match
    const matches = getSearchMatches(q);
    if (matches.length > 0) {
        const topTitle = CAREER_DATA[matches[0]]?.title.toLowerCase() || '';
        if (topTitle.includes(q.toLowerCase()) || q.toLowerCase().includes(topTitle)) {
            goToRoadmap(matches[0]); return;
        }
    }

    // 4. Smart AI generation — always works, no API key needed
    showGeneratingOverlay(q);
    await new Promise(r => setTimeout(r, 1400)); // brief delay for animation
    const roadmapData = generateSmartRoadmap(q);
    hideOverlay();
    goToRoadmap(q, roadmapData);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();

    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const dropdown = document.getElementById('autocomplete-dropdown');
    const portfolioToggle = document.getElementById('portfolio-toggle');
    const portfolioBox = document.getElementById('portfolio-box');
    const portfolioText = document.getElementById('portfolio-text');
    const analyzeBtn = document.getElementById('analyze-btn');

    const defaultCareers = ['machine-learning-engineer', 'frontend-developer', 'full-stack-developer', 'data-scientist', 'devops-engineer', 'cybersecurity-analyst'];
    renderChips(defaultCareers, 'Popular Career Paths');

    let activeIndex = -1, currentMatches = [];

    searchInput?.addEventListener('input', () => {
        const q = searchInput.value.trim();
        currentMatches = getSearchMatches(q);
        activeIndex = -1;
        renderDropdown(q.length >= 2 ? currentMatches : []);
    });

    searchInput?.addEventListener('keydown', e => {
        const items = dropdown?.querySelectorAll('.autocomplete-item') || [];
        if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, items.length - 1); items.forEach((el, i) => el.classList.toggle('active', i === activeIndex)); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, -1); items.forEach((el, i) => el.classList.toggle('active', i === activeIndex)); }
        else if (e.key === 'Enter') { e.preventDefault(); activeIndex >= 0 && currentMatches[activeIndex] ? goToRoadmap(currentMatches[activeIndex]) : handleSearch(); }
        else if (e.key === 'Escape') { dropdown?.classList.remove('visible'); }
    });

    searchInput?.addEventListener('blur', () => setTimeout(() => { dropdown?.classList.remove('visible'); }, 150));
    searchInput?.addEventListener('focus', () => { if (searchInput.value.trim().length >= 2) renderDropdown(currentMatches); });

    // Keep dropdown aligned to search box on scroll/resize
    window.addEventListener('scroll', () => {
        const dd = document.getElementById('autocomplete-dropdown');
        if (dd?.classList.contains('visible')) positionDropdown();
    }, { passive: true });
    window.addEventListener('resize', () => {
        const dd = document.getElementById('autocomplete-dropdown');
        if (dd?.classList.contains('visible')) positionDropdown();
    });
    searchBtn?.addEventListener('click', handleSearch);

    portfolioToggle?.addEventListener('click', () => {
        const open = portfolioBox?.classList.contains('visible');
        portfolioBox?.classList.toggle('visible', !open);
        portfolioToggle.classList.toggle('open', !open);
    });

    async function doAnalysis() {
        const text = portfolioText?.value || '';
        if (text.trim().length < 15) {
            portfolioText?.focus();
            showToast('📝 Tell us more — paste your skills, experience, or a short bio.', 'info');
            return;
        }

        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = `<span class="loading-dots"><span></span><span></span><span></span></span> Analyzing your profile...`;

        await new Promise(r => setTimeout(r, 900)); // analysis animation
        const result = analyzePortfolioSmart(text);
        analyzeBtn.innerHTML = '✨ Analyze My Portfolio';
        analyzeBtn.disabled = false;

        const chipsLabel = document.getElementById('chips-label');
        const container = document.getElementById('chips-container');
        if (!container) return;

        if (result.jobs.length === 0) {
            if (chipsLabel) chipsLabel.textContent = 'Popular Career Paths';
            renderChips(defaultCareers, 'Popular Career Paths');
            showToast('💡 Add specific skills or tools (e.g. Python, React, Figma) for better results.', 'info');
            return;
        }

        const levelLabel = { junior: '🟢 Entry Level', mid: '🟡 Mid Level', senior: '🔴 Senior Level' }[result.level] || '🟡 Mid Level';

        if (chipsLabel) chipsLabel.textContent = `✨ Best Roles For You  ·  ${levelLabel}`;

        container.innerHTML = result.jobs.map((item, i) => {
            const { role, levelData } = item;
            return `
            <div class="job-card" style="animation-delay:${i * 0.1}s">
              <div class="job-card-header">
                <span class="job-icon">${role.icon}</span>
                <div class="job-card-info">
                  <div class="job-title">${levelData.label}</div>
                  <div class="job-salary">${levelData.salary} / year</div>
                </div>
                <span class="job-level-badge job-level-${result.level}">${result.level}</span>
              </div>
              <div class="job-skills">
                ${role.skills.map(s => `<span class="job-skill-tag">${s}</span>`).join('')}
              </div>
              <div class="job-companies">
                🏢 <strong>Who's hiring:</strong> ${levelData.companies.join(', ')}
              </div>
              <button class="job-roadmap-btn" onclick="goToRoadmap('${role.searchKey}')">
                View Learning Roadmap →
              </button>
            </div>`;
        }).join('');

        container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        showToast(`🎯 Found ${result.jobs.length} roles matching your profile!`, 'success');
    }


    analyzeBtn?.addEventListener('click', doAnalysis);
    portfolioText?.addEventListener('keydown', e => { if (e.key === 'Enter' && e.ctrlKey) doAnalysis(); });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; observer.unobserve(entry.target); }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .career-card').forEach((el, i) => {
        el.style.opacity = '0'; el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.5s ${i * 0.07}s ease, transform 0.5s ${i * 0.07}s ease`;
        observer.observe(el);
    });

    document.querySelector('.nav-cta')?.addEventListener('click', e => {
        e.preventDefault(); searchInput?.focus();
        searchInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // ===== ABOUT MODALS =====
    const overlay = document.getElementById('about-modal-overlay');
    const closeBtn = document.getElementById('about-modal-close');

    function openModal(panelId) {
        if (!overlay) return;
        // Hide all panels
        document.querySelectorAll('.about-panel').forEach(p => p.classList.remove('active'));
        // Show the requested panel
        const panel = document.getElementById('panel-' + panelId);
        if (panel) panel.classList.add('active');
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!overlay) return;
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function switchPanel(panelId) {
        document.querySelectorAll('.about-panel').forEach(p => p.classList.remove('active'));
        const panel = document.getElementById('panel-' + panelId);
        if (panel) panel.classList.add('active');
    }

    // Expose globally for inline onclick handlers inside panels
    window.closeModal = closeModal;
    window.switchPanel = switchPanel;

    // Wire up all [data-modal] links
    document.querySelectorAll('[data-modal]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            openModal(link.dataset.modal);
        });
    });

    // Close on button
    closeBtn?.addEventListener('click', closeModal);

    // Close on overlay backdrop click
    overlay?.addEventListener('click', e => {
        if (e.target === overlay) closeModal();
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay?.classList.contains('open')) closeModal();
    });
});
