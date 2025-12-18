/**
 * Get thumbnail image URL for a problem
 * Returns the thumbnail image path for problem cards
 */

// Mapping of section keys to their thumbnail data objects
const sectionThumbnailMaps = {
    'integrals': integralsThumbnails,
    'limits': limitsThumbnails,
    'introductory': introductoryThumbnails,
    'differential-equations': differentialEquationsThumbnails,
    'series': seriesThumbnails,
    'differential-calculus': differentialCalculusThumbnails,
};

function getThumbnailUrl(problemId, sectionKey) {
    const sectionThumbnails = sectionThumbnailMaps[sectionKey];
    if (sectionThumbnails && sectionThumbnails[problemId]) {
        return sectionThumbnails[problemId];
    }
    // For other problems, use placeholder
    return `https://via.placeholder.com/300x300/4299e1/ffffff?text=${problemId}`;
}
