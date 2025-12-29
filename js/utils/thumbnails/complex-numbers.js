/**
 * Thumbnail URLs for Complex Numbers and Functions section (dynamically generated)
 */

function getComplexNumbersThumbnails(count = 10) {
    const thumbnails = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        thumbnails[`complex-${i}`] = `Math-Problems/ComplexNumbers/${folderNum}/${fileNum}_page-0001.jpg`;
    }
    return thumbnails;
}

const complexNumbersThumbnails = getComplexNumbersThumbnails();

