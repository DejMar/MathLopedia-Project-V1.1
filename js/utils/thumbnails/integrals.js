/**
 * Thumbnail URLs for Integrals section (dynamically generated)
 */

function getIntegralsThumbnails(count = 20) {
    const thumbnails = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        thumbnails[`integral-${i}`] = `Math-Problems/Integrals/${folderNum}/${fileNum}_page-0001.jpg`;
    }
    return thumbnails;
}

const integralsThumbnails = getIntegralsThumbnails();
