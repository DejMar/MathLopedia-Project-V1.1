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
 * Cache for links data
 */
let linksCache = null;
let linksLoadPromise = null;

/**
 * Load links from links.json file
 * @returns {Promise<Object>} Object mapping section keys to URLs
 */
export async function loadLinks() {
    if (linksCache) {
        return linksCache;
    }
    
    // If already loading, return the existing promise
    if (linksLoadPromise) {
        return linksLoadPromise;
    }
    
    // Start loading
    linksLoadPromise = (async () => {
        try {
            // Try different possible paths
            const paths = [
                'ProblemsData/links.json',
                './ProblemsData/links.json',
                '/ProblemsData/links.json'
            ];
            
            let response = null;
            let lastError = null;
            
            for (const path of paths) {
                try {
                    response = await fetch(path);
                    if (response.ok) {
                        break;
                    }
                } catch (error) {
                    lastError = error;
                    continue;
                }
            }
            
            if (!response || !response.ok) {
                throw new Error(`Failed to load links.json: ${lastError?.message || response?.statusText || 'Unknown error'}`);
            }
            
            const text = await response.text();
            console.log('Raw response text:', text);
            
            // Parse JSON with error handling
            let linksArray;
            try {
                linksArray = JSON.parse(text);
            } catch (parseError) {
                console.error('JSON parse error:', parseError);
                throw new Error(`Invalid JSON in links.json: ${parseError.message}`);
            }
            
            console.log('Parsed links array:', linksArray);
            
            // Validate it's an array
            if (!Array.isArray(linksArray)) {
                throw new Error('links.json must contain an array of link objects');
            }
            
            // Convert array to object for easier lookup
            linksCache = {};
            linksArray.forEach((link, index) => {
                if (!link || typeof link !== 'object') {
                    console.warn(`Invalid link entry at index ${index}:`, link);
                    return;
                }
                if (link.section && link.url) {
                    const sectionKey = String(link.section).trim();
                    const url = String(link.url).trim();
                    linksCache[sectionKey] = url;
                    console.log(`Mapped section "${sectionKey}" to URL: ${url}`);
                } else {
                    console.warn(`Invalid link entry at index ${index} - missing section or url:`, link);
                }
            });
            
            console.log('Links loaded successfully:', linksCache);
            console.log('Available section keys:', Object.keys(linksCache));
            console.log('Number of links loaded:', Object.keys(linksCache).length);
            
            // Verify all required sections are present
            const requiredSections = ['introductory', 'limits', 'integrals', 'differential-equations', 'series', 'differential-calculus'];
            const missingSections = requiredSections.filter(section => !linksCache[section]);
            if (missingSections.length > 0) {
                console.warn('Missing sections in links.json:', missingSections);
            }
            
            return linksCache;
        } catch (error) {
            console.error('Error loading links.json:', error);
            linksLoadPromise = null; // Reset so we can try again
            return {};
        }
    })();
    
    return linksLoadPromise;
}

/**
 * Get collection link URL for a section from links.json
 * @param {string} sectionKey - The section key (e.g., 'integrals', 'introductory')
 * @returns {Promise<string>} The URL for the section or empty string if not found
 */
export async function getCollectionLinkUrl(sectionKey) {
    try {
        const normalizedKey = String(sectionKey).trim();
        console.log(`Getting link for section key: "${normalizedKey}"`);
        
        const links = await loadLinks();
        console.log('Links object received:', links);
        console.log('Looking for key:', normalizedKey);
        console.log('Available keys in links:', Object.keys(links));
        
        // Try exact match first
        let url = links[normalizedKey] || '';
        
        // If not found, try case-insensitive match
        if (!url) {
            const lowerKey = normalizedKey.toLowerCase();
            for (const key in links) {
                if (key.toLowerCase() === lowerKey) {
                    url = links[key];
                    console.log(`Found case-insensitive match: "${key}" -> ${url}`);
                    break;
                }
            }
        }
        
        if (!url) {
            console.warn(`No link found for section: "${normalizedKey}"`);
            console.warn('Available sections in links:', Object.keys(links));
            console.warn('Section key type:', typeof normalizedKey);
            console.warn('Section key value:', JSON.stringify(normalizedKey));
            console.warn('Links cache contents:', links);
        } else {
            console.log(`Found URL for "${normalizedKey}": ${url}`);
        }
        return url || '';
    } catch (error) {
        console.error(`Error getting link for section ${sectionKey}:`, error);
        console.error('Error stack:', error.stack);
        return '';
    }
}

/**
 * Get collection PDF URL for a section (deprecated - use getCollectionLinkUrl instead)
 * @deprecated Use getCollectionLinkUrl instead
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

