/**
 * Get image URLs for a problem
 * Returns an array of image URLs for the modal view
 */
function getImageUrls(problemId, sectionKey) {
    // For integral-1 (first problem in Integrals section)
    if (problemId === 'integral-1' && sectionKey === 'integrals') {
        return [
            //'Math-Problems/Integrals/001/01_page-0001.jpg',
            //'Math-Problems/Integrals/001/01_page-0002.jpg'
            'Math-Problems/Integrals/001/Merged_image.jpg'
        ];
    }
    if (problemId === 'integral-2' && sectionKey === 'integrals') {
        return [
            'Math-Problems/Integrals/002/02_page-0001.jpg'
        ];
    }
    if (problemId === 'integral-3' && sectionKey === 'integrals') {
        return [
            'Math-Problems/Integrals/003/03_page-0001.jpg'
        ];
    }
    if (problemId === 'integral-4' && sectionKey === 'integrals') {
        return [
            'Math-Problems/Integrals/004/04_page-0001.jpg'
        ];
    }
    if (problemId === 'integral-5' && sectionKey === 'integrals') {
        return [
            'Math-Problems/Integrals/005/05_page-0001.jpg'
        ];
    }
    if (problemId === 'integral-6' && sectionKey === 'integrals') {
        return [
            'Math-Problems/Integrals/006/06_page-0001.jpg'
        ];
    }
    if (problemId === 'integral-7' && sectionKey === 'integrals') {
        return [
            'Math-Problems/Integrals/007/07_page-0001.jpg'
        ];
    }
    if (problemId === 'integral-8' && sectionKey === 'integrals') {
        return [
            'Math-Problems/Integrals/008/08_page-0001.jpg'
        ];
    }
    if (problemId === 'integral-9' && sectionKey === 'integrals') {
        return [
            'Math-Problems/Integrals/009/09_page-0001.jpg'
        ];
    }
    if (problemId === 'integral-10' && sectionKey === 'integrals') {
        return [
            'Math-Problems/Integrals/010/10_page-0001.jpg'
        ];
    }
    if (problemId === 'de-1' && sectionKey === 'differential-equations') {
        return [
            'Math-Problems/DifferentialEquations/001/01_page-0001.jpg',
            'Math-Problems/DifferentialEquations/001/01_page-0002.jpg'
        ];
    }
    if (problemId === 'de-2' && sectionKey === 'differential-equations') {
        return [
            'Math-Problems/DifferentialEquations/002/02_page-0001.jpg',
            'Math-Problems/DifferentialEquations/002/02_page-0002.jpg'
        ];
    }
    if (problemId === 'de-3' && sectionKey === 'differential-equations') {
        return [
            'Math-Problems/DifferentialEquations/003/03_page-0001.jpg',
            'Math-Problems/DifferentialEquations/003/03_page-0002.jpg'
        ];
    }
    if (problemId === 'de-4' && sectionKey === 'differential-equations') {
        return [
            'Math-Problems/DifferentialEquations/004/04_page-0001.jpg',
            'Math-Problems/DifferentialEquations/004/04_page-0002.jpg',
            'Math-Problems/DifferentialEquations/004/04_page-0003.jpg'
        ];
    }
    if (problemId === 'de-5' && sectionKey === 'differential-equations') {
        return [
            'Math-Problems/DifferentialEquations/005/05_page-0001.jpg',
            'Math-Problems/DifferentialEquations/005/05_page-0002.jpg'
        ];
    }
    if (problemId === 'de-6' && sectionKey === 'differential-equations') {
        return [
            'Math-Problems/DifferentialEquations/006/06_page-0001.jpg',
            'Math-Problems/DifferentialEquations/006/06_page-0002.jpg',
            'Math-Problems/DifferentialEquations/006/06_page-0003.jpg'
        ];
    }
    if (problemId === 'de-7' && sectionKey === 'differential-equations') {
        return [
            'Math-Problems/DifferentialEquations/007/07_page-0001.jpg',
            'Math-Problems/DifferentialEquations/007/07_page-0002.jpg',
            'Math-Problems/DifferentialEquations/007/07_page-0003.jpg',
            'Math-Problems/DifferentialEquations/007/07_page-0004.jpg'
        ];
    }
    if (problemId === 'de-8' && sectionKey === 'differential-equations') {
        return [
            'Math-Problems/DifferentialEquations/008/08_page-0001.jpg',
            'Math-Problems/DifferentialEquations/008/08_page-0002.jpg'
        ];
    }
    if (problemId === 'de-9' && sectionKey === 'differential-equations') {
        return [
            'Math-Problems/DifferentialEquations/009/09_page-0001.jpg',
            'Math-Problems/DifferentialEquations/009/09_page-0002.jpg'
        ];
    }
    if (problemId === 'de-10' && sectionKey === 'differential-equations') {
        return [
            'Math-Problems/DifferentialEquations/010/10_page-0001.jpg',
            'Math-Problems/DifferentialEquations/010/10_page-0002.jpg'
        ];
    }
    if (problemId === 'limit-1' && sectionKey === 'limits') {
        return [
            'Math-Problems/Limits/001/01_page-0001.jpg'
        ];
    }
    if (problemId === 'limit-2' && sectionKey === 'limits') {
        return [
            'Math-Problems/Limits/002/02_page-0001.jpg'
        ];
    }
    if (problemId === 'limit-3' && sectionKey === 'limits') {
        return [
            'Math-Problems/Limits/003/03_page-0001.jpg'
        ];
    }
    if (problemId === 'limit-4' && sectionKey === 'limits') {
        return [
            'Math-Problems/Limits/004/04_page-0001.jpg'
        ];
    }
    if (problemId === 'limit-5' && sectionKey === 'limits') {
        return [
            'Math-Problems/Limits/005/05_page-0001.jpg'
        ];
    }
    if (problemId === 'limit-6' && sectionKey === 'limits') {
        return [
            'Math-Problems/Limits/006/06_page-0001.jpg'
        ];
    }
    if (problemId === 'limit-7' && sectionKey === 'limits') {
        return [
            'Math-Problems/Limits/007/07_page-0001.jpg'
        ];
    }
    if (problemId === 'limit-8' && sectionKey === 'limits') {
        return [
            'Math-Problems/Limits/008/08_page-0001.jpg'
        ];
    }
    if (problemId === 'limit-9' && sectionKey === 'limits') {
        return [
            'Math-Problems/Limits/009/09_page-0001.jpg'
        ];
    }
    if (problemId === 'limit-10' && sectionKey === 'limits') {
        return [
            'Math-Problems/Limits/010/10_page-0001.jpg'
        ];
    }
    if (problemId === 'series-1' && sectionKey === 'series') {
        return [
            'Math-Problems/Series/001/01_page-0001.jpg',
            'Math-Problems/Series/001/01_page-0002.jpg'
        ];
    }
    if (problemId === 'series-2' && sectionKey === 'series') {
        return [
            'Math-Problems/Series/002/02_page-0001.jpg'
        ];
    }
    if (problemId === 'series-3' && sectionKey === 'series') {
        return [
            'Math-Problems/Series/003/03_page-0001.jpg',
            'Math-Problems/Series/003/03_page-0002.jpg'
        ];
    }
    if (problemId === 'series-4' && sectionKey === 'series') {
        return [
            'Math-Problems/Series/004/04_page-0001.jpg',
            'Math-Problems/Series/004/04_page-0002.jpg'
        ];
    }
    if (problemId === 'series-5' && sectionKey === 'series') {
        return [
            'Math-Problems/Series/005/05_page-0001.jpg',
            'Math-Problems/Series/005/05_page-0002.jpg'
        ];
    }
    if (problemId === 'series-6' && sectionKey === 'series') {
        return [
            'Math-Problems/Series/006/06_page-0001.jpg',
            'Math-Problems/Series/006/06_page-0002.jpg'
        ];
    }
    if (problemId === 'series-7' && sectionKey === 'series') {
        return [
            'Math-Problems/Series/007/07_page-0001.jpg',
            'Math-Problems/Series/007/07_page-0002.jpg'
        ];
    }
    if (problemId === 'series-8' && sectionKey === 'series') {
        return [
            'Math-Problems/Series/008/08_page-0001.jpg',
            'Math-Problems/Series/008/08_page-0002.jpg'
        ];
    }
    if (problemId === 'series-9' && sectionKey === 'series') {
        return [
            'Math-Problems/Series/009/09_page-0001.jpg',
            'Math-Problems/Series/009/09_page-0002.jpg'
        ];
    }
    if (problemId === 'series-10' && sectionKey === 'series') {
        return [
            'Math-Problems/Series/010/10_page-0001.jpg',
            'Math-Problems/Series/010/10_page-0002.jpg'
        ];
    }
    if (problemId === 'dc-1' && sectionKey === 'differential-calculus') {
        return [
            'Math-Problems/DifferentialCalculus/001/01_page-0001.jpg',
            'Math-Problems/DifferentialCalculus/001/01_page-0002.jpg'
        ];
    }
    if (problemId === 'dc-2' && sectionKey === 'differential-calculus') {
        return [        
            'Math-Problems/DifferentialCalculus/002/02_page-0001.jpg',
            'Math-Problems/DifferentialCalculus/002/02_page-0002.jpg'
        ];
    }
    if (problemId === 'dc-3' && sectionKey === 'differential-calculus') {
        return [
            'Math-Problems/DifferentialCalculus/003/03_page-0001.jpg',
            'Math-Problems/DifferentialCalculus/003/03_page-0002.jpg'
        ];
    }
    if (problemId === 'dc-4' && sectionKey === 'differential-calculus') {
        return [
            'Math-Problems/DifferentialCalculus/004/04_page-0001.jpg',
            'Math-Problems/DifferentialCalculus/004/04_page-0002.jpg'
        ];
    }
    if (problemId === 'dc-5' && sectionKey === 'differential-calculus') {
        return [
            'Math-Problems/DifferentialCalculus/005/05_page-0001.jpg'
        ];
    }
    if (problemId === 'dc-6' && sectionKey === 'differential-calculus') {
        return [
            'Math-Problems/DifferentialCalculus/006/06_page-0001.jpg'
        ];
    }
    if (problemId === 'dc-7' && sectionKey === 'differential-calculus') {
        return [
            'Math-Problems/DifferentialCalculus/007/07_page-0001.jpg'
        ];
    }
    if (problemId === 'dc-8' && sectionKey === 'differential-calculus') {
        return [
            'Math-Problems/DifferentialCalculus/008/08_page-0001.jpg'
        ];
    }
    if (problemId === 'dc-9' && sectionKey === 'differential-calculus') {
        return [
            'Math-Problems/DifferentialCalculus/009/09_page-0001.jpg'
        ];
    }
    if (problemId === 'dc-10' && sectionKey === 'differential-calculus') {
        return [
            'Math-Problems/DifferentialCalculus/010/10_page-0001.jpg'
        ];
    }
    if (problemId === 'intro-1' && sectionKey === 'introductory') {
        return [
            'Math-Problems/Introduction/001/01_page-0001.jpg'
        ];
    }   
    if (problemId === 'intro-2' && sectionKey === 'introductory') {
        return [
            'Math-Problems/Introduction/002/02_page-0001.jpg',
            'Math-Problems/Introduction/002/02_page-0002.jpg',
            'Math-Problems/Introduction/002/02_page-0003.jpg'
        ];
    }
    if (problemId === 'intro-3' && sectionKey === 'introductory') {
        return [
            'Math-Problems/Introduction/003/03_page-0001.jpg',
            'Math-Problems/Introduction/003/03_page-0002.jpg',
            'Math-Problems/Introduction/003/03_page-0003.jpg'
        ];
    }
    if (problemId === 'intro-4' && sectionKey === 'introductory') {
        return [
            'Math-Problems/Introduction/004/04_page-0001.jpg',
            'Math-Problems/Introduction/004/04_page-0002.jpg',
            'Math-Problems/Introduction/004/04_page-0003.jpg'
        ];
    }
    if (problemId === 'intro-5' && sectionKey === 'introductory') {
        return [
            'Math-Problems/Introduction/005/05_page-0001.jpg',
            'Math-Problems/Introduction/005/05_page-0002.jpg',
            'Math-Problems/Introduction/005/05_page-0003.jpg'
        ];
    }
    if (problemId === 'intro-6' && sectionKey === 'introductory') {
        return [
            'Math-Problems/Introduction/006/06_page-0001.jpg',
            'Math-Problems/Introduction/006/06_page-0002.jpg',
            'Math-Problems/Introduction/006/06_page-0003.jpg'
        ];
    }
    if (problemId === 'intro-7' && sectionKey === 'introductory') {
        return [
            'Math-Problems/Introduction/007/07_page-0001.jpg',
            'Math-Problems/Introduction/007/07_page-0002.jpg',
            'Math-Problems/Introduction/007/07_page-0003.jpg'
        ];
    }
    if (problemId === 'intro-8' && sectionKey === 'introductory') {
        return [
            'Math-Problems/Introduction/008/08_page-0001.jpg',
            'Math-Problems/Introduction/008/08_page-0002.jpg',
            'Math-Problems/Introduction/008/08_page-0003.jpg'
        ];
    }
    if (problemId === 'intro-9' && sectionKey === 'introductory') {
        return [
            'Math-Problems/Introduction/009/09_page-0001.jpg',
            'Math-Problems/Introduction/009/09_page-0002.jpg',
            'Math-Problems/Introduction/009/09_page-0003.jpg',
            'Math-Problems/Introduction/009/09_page-0004.jpg'
        ];
    }
    if (problemId === 'intro-10' && sectionKey === 'introductory') {
        return [
            'Math-Problems/Introduction/010/10_page-0001.jpg',
            'Math-Problems/Introduction/010/10_page-0002.jpg',
            'Math-Problems/Introduction/010/10_page-0003.jpg'
        ];
    }
    // For other problems, use placeholder (can be extended)
    const seed = problemId.split('-').join('');
    return [`https://via.placeholder.com/800x1000/4299e1/ffffff?text=Problem+Solution+${problemId}`];
}

