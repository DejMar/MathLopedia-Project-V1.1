/**
 * MathLopedia - Utility Functions
 * Helper functions for image URLs, PDFs, difficulty labels, and problem cards
 */

/**
 * Get image URLs for a problem
 * Returns an array of image URLs for the modal view
 */
export function getImageUrls(problemId, sectionKey) {
    // For integral-1 (first problem in Integrals section)
    if (problemId === 'integral-1' && sectionKey === 'integrals') {
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
export function getThumbnailUrl(problemId, sectionKey) {
    // For integral-1, use first image as thumbnail
    if (problemId === 'integral-1' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/001/0001.jpg';
    }
    
    // For other problems, use placeholder
    return `https://via.placeholder.com/300x300/4299e1/ffffff?text=${problemId}`;
}

/**
 * Get PDF download URL
 */
export function getPdfUrl(problemId, sectionKey) {
    // For integral-1
    if (problemId === 'integral-1' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/001/01.pdf';
    }
    
    // For other problems, placeholder
    return `#pdf-${problemId}`;
}

/**
 * Get collection PDF URL for a section
 */
export function getCollectionPdfUrl(sectionKey) {
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
export function getDifficultyLabel(difficulty) {
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
export function createProblemCard(problem, sectionKey, openModalCallback) {
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
    card.addEventListener('click', () => openModalCallback(problem, sectionKey));
    
    // Add keyboard handler
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModalCallback(problem, sectionKey);
        }
    });
    
    return card;
}

