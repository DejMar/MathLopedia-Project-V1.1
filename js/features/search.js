/**
 * MathLopedia - Search Feature
 * Handles search functionality for problems
 */

let clearSearchFunction = null;

export function clearSearch() {
    const allCards = document.querySelectorAll('.problem-card');
    allCards.forEach(card => card.classList.remove('hidden'));
    
    const clearSearchBtn = document.getElementById('clearSearch');
    if (clearSearchBtn) {
        clearSearchBtn.style.display = 'none';
    }
    
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.textContent = '';
    }
}

function performSearch(query) {
    const allCards = document.querySelectorAll('.problem-card');
    let visibleCount = 0;
    
    allCards.forEach(card => {
        const title = card.querySelector('.problem-title')?.textContent.toLowerCase() || '';
        const keywords = card.getAttribute('data-keywords')?.toLowerCase() || '';
        const category = card.getAttribute('data-category')?.toLowerCase() || '';
        
        if (title.includes(query) || keywords.includes(query) || category.includes(query)) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    // Update search results announcement
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.textContent = visibleCount > 0 
            ? `Found ${visibleCount} problem${visibleCount !== 1 ? 's' : ''} matching "${query}"`
            : `No problems found matching "${query}"`;
        
        searchResults.setAttribute('aria-live', 'polite');
    }
}

export function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !clearSearchBtn || !searchResults) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        // Only search if we're on a section view
        const sectionView = document.getElementById('section-view');
        if (!sectionView || !sectionView.classList.contains('active')) {
            return;
        }
        
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
    
    // Make clearSearch available globally for routing
    clearSearchFunction = clearSearch;
    window.clearSearch = clearSearch;
}

export function getClearSearchFunction() {
    return clearSearchFunction || clearSearch;
}

