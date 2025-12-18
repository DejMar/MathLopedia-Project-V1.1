/**
 * Thumbnail URLs for Series section (dynamically generated)
 */
function getSeriesThumbnails(count) {
    const thumbnails = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        thumbnails[`series-${i}`] = `Math-Problems/Series/${folderNum}/${fileNum}_page-0001.jpg`;
    }
    return thumbnails;
}

const seriesThumbnails = getSeriesThumbnails(10);
