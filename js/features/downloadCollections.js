/**
 * MathLopedia - Download Collections Feature
 * Handles download collection buttons for each section
 */

import { problemsData } from '../data/problemsData.js';
import { getCollectionPdfUrl } from '../utils/helpers.js';

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

