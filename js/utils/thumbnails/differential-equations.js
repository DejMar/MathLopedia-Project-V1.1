/**
 * Thumbnail URLs for Differential Equations section (dynamically generated)
 */
function getDifferentialEquationsThumbnails(count = 10) {
    const thumbnails = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        thumbnails[`de-${i}`] = `Math-Problems/DifferentialEquations/${folderNum}/${fileNum}_page-0001.jpg`;
    }
    return thumbnails;
}

const differentialEquationsThumbnails = getDifferentialEquationsThumbnails();
