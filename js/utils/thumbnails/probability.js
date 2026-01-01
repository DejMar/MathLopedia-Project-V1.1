/**
 * Thumbnail URLs for Probability section (dynamically generated)
 */
function getProbabilityThumbnails(count = 100) {
    const thumbnails = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(3, '0');
        thumbnails[`probability-${i}`] = `Math-Problems/Probability/${folderNum}/${fileNum}_page-0001.jpg`;
    }
    return thumbnails;
}

const probabilityThumbnails = getProbabilityThumbnails();

