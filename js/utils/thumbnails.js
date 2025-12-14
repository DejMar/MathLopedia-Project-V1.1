/**
 * Get thumbnail image URL for a problem
 * Returns the thumbnail image path for problem cards
 */
function getThumbnailUrl(problemId, sectionKey) {
    // For integral-1, use first image as thumbnail
    if (problemId === 'integral-1' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/001/01_page-0001.jpg';
    }
    if (problemId === 'integral-2' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/002/02_page-0001.jpg';
    }
    if (problemId === 'integral-3' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/003/03_page-0001.jpg';
    }
    if (problemId === 'integral-4' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/004/04_page-0001.jpg';
    }
    if (problemId === 'integral-5' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/005/05_page-0001.jpg';
    }
    if (problemId === 'integral-6' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/006/06_page-0001.jpg';
    }
    if (problemId === 'integral-7' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/007/07_page-0001.jpg';
    }
    if (problemId === 'integral-8' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/008/08_page-0001.jpg';
    }
    if (problemId === 'integral-9' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/009/09_page-0001.jpg';
    }
    if (problemId === 'integral-10' && sectionKey === 'integrals') {
        return 'Math-Problems/Integrals/010/10_page-0001.jpg';
    }       
    if (problemId === 'de-1' && sectionKey === 'differential-equations') {
        return 'Math-Problems/DifferentialEquations/001/01_page-0001.jpg';
    }
    if (problemId === 'de-2' && sectionKey === 'differential-equations') {
        return 'Math-Problems/DifferentialEquations/002/02_page-0001.jpg';
    }
    if (problemId === 'de-3' && sectionKey === 'differential-equations') {
        return 'Math-Problems/DifferentialEquations/003/03_page-0001.jpg';
    }
    if (problemId === 'de-4' && sectionKey === 'differential-equations') {
        return 'Math-Problems/DifferentialEquations/004/04_page-0001.jpg';
    }
    if (problemId === 'de-5' && sectionKey === 'differential-equations') {
        return 'Math-Problems/DifferentialEquations/005/05_page-0001.jpg';
    }
    if (problemId === 'de-6' && sectionKey === 'differential-equations') {
        return 'Math-Problems/DifferentialEquations/006/06_page-0001.jpg';
    }
    if (problemId === 'de-7' && sectionKey === 'differential-equations') {
        return 'Math-Problems/DifferentialEquations/007/07_page-0001.jpg';
    }
    if (problemId === 'de-8' && sectionKey === 'differential-equations') {
        return 'Math-Problems/DifferentialEquations/008/08_page-0001.jpg';
    }
    if (problemId === 'de-9' && sectionKey === 'differential-equations') {
        return 'Math-Problems/DifferentialEquations/009/09_page-0001.jpg';
    }
    if (problemId === 'de-10' && sectionKey === 'differential-equations') {
        return 'Math-Problems/DifferentialEquations/010/10_page-0001.jpg';
    }   
    // For other problems, use placeholder
    return `https://via.placeholder.com/300x300/4299e1/ffffff?text=${problemId}`;
}

