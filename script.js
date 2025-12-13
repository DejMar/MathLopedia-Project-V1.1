/**
 * MathLopedia - Mathematics Problems Display System
 * Modern, SEO-optimized solution for displaying solved math problems
 */

// ============================================
// Problem Data Structure
// ============================================
const problemsData = {
    introductory: [
        { id: 'intro-1', title: 'Basic Algebra: Linear Equations', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] },
        { id: 'intro-2', title: 'Quadratic Equations and Factoring', difficulty: 'easy', keywords: ['quadratic', 'factoring', 'polynomials'] },
        { id: 'intro-3', title: 'Systems of Linear Equations', difficulty: 'medium', keywords: ['systems', 'linear', 'elimination'] },
        { id: 'intro-4', title: 'Polynomial Operations', difficulty: 'medium', keywords: ['polynomials', 'operations', 'division'] },
        { id: 'intro-5', title: 'Rational Expressions', difficulty: 'medium', keywords: ['rational', 'fractions', 'expressions'] },
        { id: 'intro-6', title: 'Radical Expressions and Equations', difficulty: 'medium', keywords: ['radicals', 'square roots', 'simplification'] },
        { id: 'intro-7', title: 'Exponential Functions', difficulty: 'medium', keywords: ['exponential', 'functions', 'growth'] },
        { id: 'intro-8', title: 'Logarithmic Functions', difficulty: 'hard', keywords: ['logarithms', 'functions', 'properties'] },
        { id: 'intro-9', title: 'Trigonometric Basics', difficulty: 'medium', keywords: ['trigonometry', 'angles', 'ratios'] },
        { id: 'intro-10', title: 'Complex Numbers', difficulty: 'hard', keywords: ['complex', 'numbers', 'imaginary'] }
    ],
    limits: [
        { id: 'limit-1', title: 'Basic Limit Evaluation', difficulty: 'easy', keywords: ['limits', 'evaluation', 'substitution'] },
        { id: 'limit-2', title: 'Limit at Infinity', difficulty: 'medium', keywords: ['limits', 'infinity', 'asymptotes'] },
        { id: 'limit-3', title: 'One-Sided Limits', difficulty: 'medium', keywords: ['limits', 'one-sided', 'continuity'] },
        { id: 'limit-4', title: 'L\'Hôpital\'s Rule Application', difficulty: 'hard', keywords: ['lhopital', 'derivatives', 'indeterminate'] },
        { id: 'limit-5', title: 'Trigonometric Limits', difficulty: 'medium', keywords: ['limits', 'trigonometry', 'special'] },
        { id: 'limit-6', title: 'Limit with Rationalization', difficulty: 'medium', keywords: ['limits', 'rationalization', 'radicals'] },
        { id: 'limit-7', title: 'Squeeze Theorem', difficulty: 'hard', keywords: ['limits', 'squeeze', 'theorem'] },
        { id: 'limit-8', title: 'Limits of Piecewise Functions', difficulty: 'hard', keywords: ['limits', 'piecewise', 'functions'] },
        { id: 'limit-9', title: 'Continuity Analysis', difficulty: 'medium', keywords: ['continuity', 'limits', 'discontinuity'] },
        { id: 'limit-10', title: 'Advanced Limit Techniques', difficulty: 'hard', keywords: ['limits', 'advanced', 'techniques'] }
    ],
    integrals: [
        { id: 'integral-1', title: 'Basic Indefinite Integrals', difficulty: 'easy', keywords: ['integrals', 'indefinite', 'antiderivatives'] },
        { id: 'integral-2', title: 'U-Substitution Method', difficulty: 'medium', keywords: ['integrals', 'substitution', 'u-sub'] },
        { id: 'integral-3', title: 'Integration by Parts', difficulty: 'medium', keywords: ['integrals', 'integration by parts', 'product'] },
        { id: 'integral-4', title: 'Definite Integrals', difficulty: 'medium', keywords: ['integrals', 'definite', 'evaluation'] },
        { id: 'integral-5', title: 'Trigonometric Integrals', difficulty: 'hard', keywords: ['integrals', 'trigonometry', 'identities'] },
        { id: 'integral-6', title: 'Partial Fractions', difficulty: 'hard', keywords: ['integrals', 'partial fractions', 'rational'] },
        { id: 'integral-7', title: 'Improper Integrals', difficulty: 'hard', keywords: ['integrals', 'improper', 'convergence'] },
        { id: 'integral-8', title: 'Area Under Curves', difficulty: 'medium', keywords: ['integrals', 'area', 'applications'] },
        { id: 'integral-9', title: 'Volume of Revolution', difficulty: 'hard', keywords: ['integrals', 'volume', 'revolution'] },
        { id: 'integral-10', title: 'Arc Length and Surface Area', difficulty: 'hard', keywords: ['integrals', 'arc length', 'surface area'] }
    ],
    differentialEquations: [
        { id: 'de-1', title: 'Separable Differential Equations', difficulty: 'medium', keywords: ['differential', 'separable', 'equations'] },
        { id: 'de-2', title: 'First-Order Linear DE', difficulty: 'medium', keywords: ['differential', 'linear', 'first order'] },
        { id: 'de-3', title: 'Homogeneous Equations', difficulty: 'hard', keywords: ['differential', 'homogeneous', 'substitution'] },
        { id: 'de-4', title: 'Exact Differential Equations', difficulty: 'hard', keywords: ['differential', 'exact', 'integrating factor'] },
        { id: 'de-5', title: 'Bernoulli Equations', difficulty: 'hard', keywords: ['differential', 'bernoulli', 'nonlinear'] },
        { id: 'de-6', title: 'Second-Order Linear Homogeneous', difficulty: 'hard', keywords: ['differential', 'second order', 'homogeneous'] },
        { id: 'de-7', title: 'Method of Undetermined Coefficients', difficulty: 'hard', keywords: ['differential', 'undetermined coefficients', 'particular'] },
        { id: 'de-8', title: 'Variation of Parameters', difficulty: 'hard', keywords: ['differential', 'variation of parameters', 'particular'] },
        { id: 'de-9', title: 'Applications: Population Growth', difficulty: 'medium', keywords: ['differential', 'applications', 'population'] },
        { id: 'de-10', title: 'Applications: Mixing Problems', difficulty: 'medium', keywords: ['differential', 'applications', 'mixing'] }
    ]
};

// ============================================
// Utility Functions
// ============================================

/**
 * Get image URLs for a problem
 * Returns an array of image URLs for the modal view
 */
function getImageUrls(problemId, category) {
    // For integral-1 (first problem in Integrals section)
    if (problemId === 'integral-1' && category === 'integrals') {
        return [
            'Math-Problems/Integrals/001/0001.jpg',
            'Math-Problems/Integrals/001/0002.jpg'
        ];
    }
    
    // For other problems, use placeholder (can be extended)
    const seed = problemId.split('-').join('');
    return [`https://via.placeholder.com/800x1000/4299e1/ffffff?text=Problem+Solution+${problemId}`];
}

/**
 * Get thumbnail image URL
 */
function getThumbnailUrl(problemId, category) {
    // For integral-1, use first image as thumbnail
    if (problemId === 'integral-1' && category === 'integrals') {
        return 'Math-Problems/Integrals/001/0001.jpg';
    }
    
    // For other problems, use placeholder
    return `https://via.placeholder.com/300x300/4299e1/ffffff?text=${problemId}`;
}

/**
 * Get PDF download URL
 */
function getPdfUrl(problemId, category) {
    // For integral-1
    if (problemId === 'integral-1' && category === 'integrals') {
        return 'Math-Problems/Integrals/001/01.pdf';
    }
    
    // For other problems, placeholder
    return `#pdf-${problemId}`;
}

/**
 * Format difficulty label
 */
function getDifficultyLabel(difficulty) {
    const labels = {
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard'
    };
    return labels[difficulty] || difficulty;
}

/**
 * Generate problem card HTML
 */
function createProblemCard(problem, category) {
    const card = document.createElement('article');
    card.className = 'problem-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('data-category', category);
    card.setAttribute('data-id', problem.id);
    card.setAttribute('data-keywords', problem.keywords.join(','));
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View solution for ${problem.title}`);
    
    const thumbnailUrl = getThumbnailUrl(problem.id, category);
    
    card.innerHTML = `
        <div class="problem-thumbnail-container">
            <img 
                src="${thumbnailUrl}" 
                alt="Mathematics problem: ${problem.title} - Step-by-step solution available"
                class="problem-thumbnail"
                loading="lazy"
            >
        </div>
        <div class="problem-info">
            <p class="problem-number">Problem ${problem.id.split('-')[1]}</p>
            <h3 class="problem-title">${problem.title}</h3>
            <span class="difficulty-badge difficulty-${problem.difficulty}">
                ${getDifficultyLabel(problem.difficulty)}
            </span>
        </div>
    `;
    
    // Add click handler
    card.addEventListener('click', () => openModal(problem, category));
    
    // Add keyboard handler
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(problem, category);
        }
    });
    
    return card;
}

// ============================================
// Dark Mode Toggle
// ============================================

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const theme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', theme);
    
    // Toggle handler
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Announce theme change for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'visually-hidden';
        announcement.textContent = `Theme changed to ${newTheme} mode`;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    });
}

// ============================================
// Modal Functionality
// ============================================

function openModal(problem, category) {
    const modal = document.getElementById('problemModal');
    const modalImageContainer = document.getElementById('modal-image-container');
    const modalTitle = document.getElementById('modal-title');
    const downloadBtn = document.getElementById('downloadPdf');
    
    // Set modal title
    modalTitle.textContent = problem.title;
    
    // Clear previous images
    modalImageContainer.innerHTML = '';
    
    // Get image URLs for this problem
    const imageUrls = getImageUrls(problem.id, category);
    
    // Create and append image elements
    imageUrls.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Problem solution ${index + 1} for ${problem.title}`;
        img.className = 'modal-image';
        img.loading = 'eager';
        modalImageContainer.appendChild(img);
    });
    
    // Set download handler
    downloadBtn.onclick = () => {
        const pdfUrl = getPdfUrl(problem.id, category);
        // Trigger PDF download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    // Show modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const closeButton = modal.querySelector('.modal-close');
    closeButton.focus();
}

function closeModal() {
    const modal = document.getElementById('problemModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function initModal() {
    const modal = document.getElementById('problemModal');
    const closeButton = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    // Close button
    closeButton.addEventListener('click', closeModal);
    
    // Overlay click
    overlay.addEventListener('click', closeModal);
    
    // Keyboard navigation
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Trap focus within modal
    modal.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' || !modal.classList.contains('active')) return;
        
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    });
}

// ============================================
// Search Functionality
// ============================================

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const searchResults = document.getElementById('searchResults');
    
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim().toLowerCase();
        
        searchTimeout = setTimeout(() => {
            if (query.length === 0) {
                clearSearch();
                return;
            }
            
            performSearch(query);
            clearSearchBtn.style.display = 'block';
        }, 300);
    });
    
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearch();
    });
    
    function performSearch(query) {
        const allCards = document.querySelectorAll('.problem-card');
        let visibleCount = 0;
        
        allCards.forEach(card => {
            const title = card.querySelector('.problem-title').textContent.toLowerCase();
            const keywords = card.getAttribute('data-keywords').toLowerCase();
            const category = card.getAttribute('data-category');
            
            if (title.includes(query) || keywords.includes(query) || category.includes(query)) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });
        
        // Update search results announcement
        searchResults.textContent = visibleCount > 0 
            ? `Found ${visibleCount} problem${visibleCount !== 1 ? 's' : ''} matching "${query}"`
            : `No problems found matching "${query}"`;
        
        searchResults.setAttribute('aria-live', 'polite');
    }
    
    function clearSearch() {
        const allCards = document.querySelectorAll('.problem-card');
        allCards.forEach(card => card.classList.remove('hidden'));
        clearSearchBtn.style.display = 'none';
        searchResults.textContent = '';
    }
}

// ============================================
// Initialize Problem Grids
// ============================================

function initializeProblems() {
    const gridMappings = {
        'intro-grid': { data: problemsData.introductory, category: 'introductory' },
        'limits-grid': { data: problemsData.limits, category: 'limits' },
        'integrals-grid': { data: problemsData.integrals, category: 'integrals' },
        'de-grid': { data: problemsData.differentialEquations, category: 'differentialEquations' }
    };
    
    Object.entries(gridMappings).forEach(([gridId, config]) => {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        
        config.data.forEach(problem => {
            const card = createProblemCard(problem, config.category);
            grid.appendChild(card);
        });
    });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#download' || href === '#contact') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Lazy Loading Enhancement
// ============================================

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// Initialize Application
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initDarkMode();
    initModal();
    initSearch();
    initializeProblems();
    initSmoothScroll();
    initLazyLoading();
    
    // Set initial ARIA states
    document.getElementById('problemModal').setAttribute('aria-hidden', 'true');
    
    // Announce page load for screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'visually-hidden';
    announcement.textContent = 'Mathematics problems page loaded. Use search to find specific problems.';
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 3000);
    
    console.log('MathLopedia initialized successfully');
});

// ============================================
// Export for testing (if needed)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        problemsData,
        createProblemCard,
        getImageUrl,
        getPdfUrl
    };
}

