/**
 * Dynamically retrieves PDF URLs for Physics section.
 * Assumes folders are structured as Math-Problems/Physics/XXX/XX.pdf
 * where XXX is zero-padded problem number (001, 002, ...) and XX is the file prefix.
 */

function getPhysicsPdfs(count = 100) {
    const pdfs = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        pdfs[`physics-${i}`] = `Math-Problems/Physics/${folderNum}/${fileNum}.pdf`;
    }
    return pdfs;
}

// Usage example:
const physicsPdfs = getPhysicsPdfs();

