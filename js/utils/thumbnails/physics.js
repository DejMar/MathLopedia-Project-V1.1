/**
 * Thumbnail URLs for Physics section (dynamically generated)
 */
function getPhysicsThumbnails(count = 100) {
    const thumbnails = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        thumbnails[`physics-${i}`] = `Math-Problems/Physics/${folderNum}/${fileNum}_page-0001.jpg`;
    }
    return thumbnails;
}

const physicsThumbnails = getPhysicsThumbnails();

