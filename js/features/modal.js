/**
 * MathLopedia - Modal Feature
 * Handles modal display for problem solutions
 */

import { getImageUrls, getPdfUrl } from '../utils/helpers.js';

let openModalCallback = null;

export function openModal(problem, sectionKey) {
    const modal = document.getElementById('problemModal');
    const modalImageContainer = document.getElementById('modal-image-container');
    const modalTitle = document.getElementById('modal-title');
    const downloadBtn = document.getElementById('downloadPdf');
    
    if (!modal || !modalImageContainer || !modalTitle || !downloadBtn) return;
    
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
    if (closeButton) {
        closeButton.focus();
    }
}

export function closeModal() {
    const modal = document.getElementById('problemModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

export function initModal() {
    const modal = document.getElementById('problemModal');
    if (!modal) return;
    
    const closeButton = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    if (!closeButton || !overlay) return;
    
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
    
    // Set initial ARIA state
    modal.setAttribute('aria-hidden', 'true');
}

