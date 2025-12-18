/**
 * Thumbnail URLs for Differential Calculus section (dynamically generated)
 */
function getDifferentialCalculusThumbnails(count = 10) {
    const thumbnails = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        thumbnails[`dc-${i}`] = `Math-Problems/DifferentialCalculus/${folderNum}/${fileNum}_page-0001.jpg`;
    }
    return thumbnails;
}

const differentialCalculusThumbnails = getDifferentialCalculusThumbnails();
