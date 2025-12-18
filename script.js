/**
 * MathLopedia - Mathematics Problems Display System
 * Modern, SEO-optimized solution for displaying solved math problems
 */

// ============================================
// Problem Data Structure
// ============================================
// problemsData is now defined in problemsData.js

// Section name mapping for category keys
const sectionCategoryMap = {
    'introductory': 'introductory',
    'limits': 'limits',
    'integrals': 'integrals',
    'differential-equations': 'differentialEquations',
    'series': 'series',
    'differential-calculus': 'differentialCalculus'
};

// ============================================
// Utility Functions
// ============================================

// getPdfUrl is now defined in js/utils/pdfs.js

/**
 * Get collection PDF URL for a section
 */
function getCollectionPdfUrl(sectionKey) {
    // Map section keys to their collection PDF paths
    const collectionPaths = {
        'introductory': 'Math-Problems/Introduction/Collection.pdf',
        'limits': 'Math-Problems/Limits/Collection.pdf',
        'integrals': 'Math-Problems/Integrals/Collection.pdf',
        'differential-equations': 'Math-Problems/DifferentialEquations/Collection.pdf',
        'series': 'Math-Problems/Series/Collection.pdf',
        'differential-calculus': 'Math-Problems/DifferentialCalculus/Collection.pdf'
    };
    
    return collectionPaths[sectionKey] || `#collection-${sectionKey}`;
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
function createProblemCard(problem, sectionKey) {
    const card = document.createElement('article');
    card.className = 'problem-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('data-category', sectionKey);
    card.setAttribute('data-id', problem.id);
    card.setAttribute('data-keywords', problem.keywords.join(','));
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View solution for ${problem.title}`);
    
    const thumbnailUrl = getThumbnailUrl(problem.id, sectionKey);
    
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
    card.addEventListener('click', () => openModal(problem, sectionKey));
    
    // Add keyboard handler
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(problem, sectionKey);
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

function openModal(problem, sectionKey) {
    const modal = document.getElementById('problemModal');
    const modalImageContainer = document.getElementById('modal-image-container');
    const modalTitle = document.getElementById('modal-title');
    const downloadBtn = document.getElementById('downloadPdf');
    
    // Set modal title
    modalTitle.textContent = problem.title;
    
    // Clear previous images
    modalImageContainer.innerHTML = '';
    
    // Get image URLs for this problem
    const imageUrls = getImageUrls(problem.id, sectionKey);
    
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
        const pdfUrl = getPdfUrl(problem.id, sectionKey);
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
// Pagination State
// ============================================
const PROBLEMS_PER_PAGE = 10;
const paginationState = {};

// ============================================
// Routing System
// ============================================

function navigateToSection(sectionKey) {
    // Update URL hash
    window.location.hash = sectionKey;
    handleRoute();
}

function renderPagination(sectionKey, totalProblems) {
    const totalPages = Math.ceil(totalProblems / PROBLEMS_PER_PAGE);
    if (totalPages <= 1) return '';
    
    const currentPage = paginationState[sectionKey] || 1;
    
    let paginationHTML = '<div class="pagination" role="navigation" aria-label="Pagination">';
    
    // Previous button
    paginationHTML += `<button class="pagination-btn pagination-prev" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}" aria-label="Previous page">← Prev</button>`;
    
    // Page numbers
    paginationHTML += '<div class="pagination-pages">';
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button class="pagination-btn pagination-page ${i === currentPage ? 'active' : ''}" data-page="${i}" aria-label="Page ${i}" ${i === currentPage ? 'aria-current="page"' : ''}>${i}</button>`;
    }
    paginationHTML += '</div>';
    
    // Next button
    paginationHTML += `<button class="pagination-btn pagination-next" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}" aria-label="Next page">Next →</button>`;
    
    paginationHTML += '</div>';
    return paginationHTML;
}

function initPaginationListeners(sectionKey) {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;
    
    paginationContainer.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = parseInt(e.target.dataset.page);
            if (page && !e.target.disabled) {
                paginationState[sectionKey] = page;
                renderSectionProblems(sectionKey);
                window.scrollTo({ top: document.getElementById('problems-grid').offsetTop - 100, behavior: 'smooth' });
            }
        });
    });
}

function renderSectionProblems(sectionKey) {
    const sectionData = problemsData[sectionKey];
    const problemsGrid = document.getElementById('problems-grid');
    const paginationWrapper = document.getElementById('pagination-wrapper');
    
    const currentPage = paginationState[sectionKey] || 1;
    const startIndex = (currentPage - 1) * PROBLEMS_PER_PAGE;
    const endIndex = startIndex + PROBLEMS_PER_PAGE;
    const problemsToShow = sectionData.problems.slice(startIndex, endIndex);
    
    // Clear and populate problems grid
    problemsGrid.innerHTML = '';
    problemsToShow.forEach(problem => {
        const card = createProblemCard(problem, sectionKey);
        problemsGrid.appendChild(card);
    });
    
    // Render pagination if needed
    if (paginationWrapper) {
        paginationWrapper.innerHTML = renderPagination(sectionKey, sectionData.problems.length);
        initPaginationListeners(sectionKey);
    }
}

function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const homeView = document.getElementById('home-view');
    const sectionView = document.getElementById('section-view');
    const breadcrumbList = document.getElementById('breadcrumb-list');
    
    if (hash === 'home' || hash === '') {
        // Show home view
        homeView.classList.add('active');
        sectionView.classList.remove('active');
        
        // Update breadcrumb
        breadcrumbList.innerHTML = '<li><a href="#home" class="breadcrumb-link">Home</a></li>';
    } else if (problemsData[hash]) {
        // Show section view
        homeView.classList.remove('active');
        sectionView.classList.add('active');
        
        // Load section data
        const sectionData = problemsData[hash];
        const sectionHeading = document.getElementById('section-heading');
        const sectionDescription = document.getElementById('section-description');
        
        // Update section info
        sectionHeading.textContent = sectionData.title;
        sectionDescription.textContent = sectionData.description;
        
        // Initialize pagination state if not set
        if (!paginationState[hash]) {
            paginationState[hash] = 1;
        }
        
        // Render problems with pagination
        renderSectionProblems(hash);
        
        // Update breadcrumb
        const sectionName = sectionData.title;
        breadcrumbList.innerHTML = `
            <li><a href="#home" class="breadcrumb-link">Home</a></li>
            <li aria-current="page">${sectionName}</li>
        `;
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function initRouting() {
    // Handle initial route
    handleRoute();
    
    // Handle hash changes
    window.addEventListener('hashchange', handleRoute);
    
    // Handle section card clicks
    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('click', () => {
            const sectionKey = card.getAttribute('data-section');
            navigateToSection(sectionKey);
        });
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const sectionKey = card.getAttribute('data-section');
                navigateToSection(sectionKey);
            }
        });
    });
    
    // Handle back button
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            navigateToSection('home');
        });
    }
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
            
            // Let routing handle hash navigation
            if (href.startsWith('#') && href !== '#home') {
                // Check if it's a section route
                const sectionKey = href.slice(1);
                if (problemsData[sectionKey] || sectionKey === 'home') {
                    // Routing will handle it via hashchange
                    return;
                }
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
// Download Collections Section
// ============================================

function createDownloadButton(sectionKey, sectionData) {
    const button = document.createElement('button');
    button.className = 'download-collection-btn';
    button.setAttribute('aria-label', `Download complete collection for ${sectionData.title}`);
    
    const icon = document.createElement('span');
    icon.className = 'download-icon';
    icon.textContent = '📥';
    icon.setAttribute('aria-hidden', 'true');
    
    const content = document.createElement('div');
    content.className = 'download-btn-content';
    
    const title = document.createElement('span');
    title.className = 'download-btn-title';
    title.textContent = sectionData.title;
    
    const subtitle = document.createElement('span');
    subtitle.className = 'download-btn-subtitle';
    subtitle.textContent = `${sectionData.problems.length} Problems`;
    
    content.appendChild(title);
    content.appendChild(subtitle);
    
    button.appendChild(icon);
    button.appendChild(content);
    
    button.addEventListener('click', () => {
        const pdfUrl = getCollectionPdfUrl(sectionKey);
        // Trigger PDF download
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${sectionData.title.replace(/\s+/g, '_')}_Collection.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    return button;
}

function initDownloadCollections() {
    const downloadButtonsGrid = document.getElementById('download-buttons-grid');
    if (!downloadButtonsGrid) return;
    
    // Clear any existing buttons
    downloadButtonsGrid.innerHTML = '';
    
    // Create download button for each section
    Object.keys(problemsData).forEach(sectionKey => {
        const sectionData = problemsData[sectionKey];
        const button = createDownloadButton(sectionKey, sectionData);
        downloadButtonsGrid.appendChild(button);
    });
}

// ============================================
// Initialize Application
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initDarkMode();
    initModal();
    initRouting();
    initSmoothScroll();
    initLazyLoading();
    initDownloadCollections();
    
    // Set initial ARIA states
    document.getElementById('problemModal').setAttribute('aria-hidden', 'true');
    
    // Announce page load for screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'visually-hidden';
    announcement.textContent = 'Mathematics problems page loaded. Select a section to view problems.';
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
        getThumbnailUrl,
        getPdfUrl
    };
}


