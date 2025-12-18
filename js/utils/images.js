/**
 * Get image URLs for a problem
 * Returns an array of image URLs for the modal view
 */
function getImageUrls(problemId, sectionKey) {
    // Map section keys to their image data objects
    const sectionImageMap = {
        'integrals': integralImages,
        'differential-equations': differentialEquationsImages,
        'limits': limitsImages,
        'series': seriesImages,
        'differential-calculus': differentialCalculusImages,
        'introductory': introductoryImages
    };

    const sectionImages = sectionImageMap[sectionKey];
    if (sectionImages && sectionImages[problemId]) {
        return sectionImages[problemId];
    }

    // Fallback placeholder
    return [`https://via.placeholder.com/800x1000/4299e1/ffffff?text=Problem+Solution+${problemId}`];
}

