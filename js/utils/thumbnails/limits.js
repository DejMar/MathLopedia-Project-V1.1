/**
 * Thumbnail URLs for Limits section (dynamically generated)
 */
function getLimitsThumbnails(count = 10) {
    const thumbnails = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        thumbnails[`limit-${i}`] = `Math-Problems/Limits/${folderNum}/${fileNum}_page-0001.jpg`;
    }
    return thumbnails;
}

const limitsThumbnails = getLimitsThumbnails();
