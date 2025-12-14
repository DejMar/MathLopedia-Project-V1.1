/**
 * MathLopedia - Main Entry Point
 * Initializes all application features
 */

import { initDarkMode } from './features/darkMode.js';
import { initModal } from './features/modal.js';
import { initSearch } from './features/search.js';
import { initRouting, initSmoothScroll } from './features/routing.js';
import { initLazyLoading } from './features/lazyLoading.js';
import { initDownloadCollections } from './features/downloadCollections.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initDarkMode();
    initModal();
    initSearch();
    initRouting();
    initSmoothScroll();
    initLazyLoading();
    initDownloadCollections();
    
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

