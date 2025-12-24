/**
 * MathLopedia - Download Collections Feature
 * Handles download collection buttons for each section
 */

import { problemsData } from '../data/problemsData.js';
import { getCollectionLinkUrl } from '../utils/helpers.js';

function createDownloadButton(sectionKey, sectionData) {
    const button = document.createElement('button');
    button.className = 'download-collection-btn';
    button.setAttribute('aria-label', `Open collection link for ${sectionData.title}`);
    
    const icon = document.createElement('span');
    icon.className = 'download-icon';
    icon.textContent = '📥';
    icon.setAttribute('aria-hidden', 'true');
    
    const content = document.createElement('div');
    content.className = 'download-btn-content';
    
    const title = document.createElement('span');
    title.className = 'download-btn-title';
    title.textContent = sectionData.title;
    
    content.appendChild(title);
    
    button.appendChild(icon);
    button.appendChild(content);
    
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        try {
            console.log(`Button clicked for section: ${sectionKey}`);
            const linkUrl = await getCollectionLinkUrl(sectionKey);
            console.log(`Retrieved URL for ${sectionKey}:`, linkUrl);
            
            if (linkUrl && linkUrl.trim() !== '') {
                // Use anchor element click method to avoid popup blockers
                // This method is more reliable than window.open() for user-initiated actions
                const link = document.createElement('a');
                link.href = linkUrl;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                console.log(`Successfully opened link: ${linkUrl}`);
            } else {
                console.warn(`No link found for section: ${sectionKey}`);
                alert(`No link available for ${sectionData.title}. Please check the links.json file.`);
            }
        } catch (error) {
            console.error(`Error opening link for ${sectionKey}:`, error);
            alert(`Error opening link: ${error.message}`);
        }
    });
    
    return button;
}

export function initDownloadCollections() {
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

