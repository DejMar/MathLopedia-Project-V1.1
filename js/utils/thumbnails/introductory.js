/**
 * Thumbnail URLs for Introductory section (dynamically generated)
 */
function getIntroductoryThumbnails(count = 20) {
    const thumbnails = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        thumbnails[`intro-${i}`] = `Math-Problems/Introduction/${folderNum}/${fileNum}_page-0001.jpg`;
    }
    return thumbnails;
}

const introductoryThumbnails = getIntroductoryThumbnails();
