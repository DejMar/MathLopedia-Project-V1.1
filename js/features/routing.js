/**
 * MathLopedia - Routing Feature
 * Handles client-side routing and navigation
 */

import { problemsData } from '../data/problemsData.js';
import { createProblemCard } from '../utils/helpers.js';
import { openModal } from './modal.js';
import { getClearSearchFunction } from './search.js';

export function navigateToSection(sectionKey) {
    // Update URL hash without causing page reload
    if (window.location.hash !== `#${sectionKey}`) {
        window.location.hash = sectionKey;
    }
    // Always call handleRoute with the sectionKey to ensure it works immediately
    handleRoute(sectionKey);
}

function handleRoute(sectionKey = null) {
    // Use provided sectionKey or get from URL hash
    const hash = sectionKey || window.location.hash.slice(1) || 'home';
    const homeView = document.getElementById('home-view');
    const sectionView = document.getElementById('section-view');
    const breadcrumbList = document.getElementById('breadcrumb-list');
    
    if (!homeView || !sectionView || !breadcrumbList) return;
    
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
        const problemsGrid = document.getElementById('problems-grid');
        
        if (!sectionHeading || !sectionDescription || !problemsGrid) return;
        
        // Update section info
        sectionHeading.textContent = sectionData.title;
        sectionDescription.textContent = sectionData.description;
        
        // Clear and populate problems grid
        problemsGrid.innerHTML = '';
        sectionData.problems.forEach(problem => {
            const card = createProblemCard(problem, hash, openModal);
            problemsGrid.appendChild(card);
        });
        
        // Update breadcrumb
        const sectionName = sectionData.title;
        breadcrumbList.innerHTML = `
            <li><a href="#home" class="breadcrumb-link">Home</a></li>
            <li aria-current="page">${sectionName}</li>
        `;
        
        // Clear search
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
            const clearSearch = getClearSearchFunction();
            if (clearSearch) {
                clearSearch();
            } else {
                // Fallback: manually clear search results
                const allCards = document.querySelectorAll('.problem-card');
                allCards.forEach(card => card.classList.remove('hidden'));
                const clearSearchBtn = document.getElementById('clearSearch');
                if (clearSearchBtn) clearSearchBtn.style.display = 'none';
                const searchResults = document.getElementById('searchResults');
                if (searchResults) searchResults.textContent = '';
            }
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

export function initRouting() {
    // Handle initial route
    handleRoute();
    
    // Handle hash changes
    window.addEventListener('hashchange', handleRoute);
    
    // Handle section card clicks
    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const sectionKey = card.getAttribute('data-section');
            if (sectionKey) {
                navigateToSection(sectionKey);
            }
        });
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                const sectionKey = card.getAttribute('data-section');
                if (sectionKey) {
                    navigateToSection(sectionKey);
                }
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

export function initSmoothScroll() {
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
                    // Prevent default and let routing handle it
                    e.preventDefault();
                    navigateToSection(sectionKey);
                    return;
                }
            }
            
            // Handle home navigation
            if (href === '#home' || href === '#') {
                e.preventDefault();
                navigateToSection('home');
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

