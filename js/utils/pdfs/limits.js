/**
 * Dynamically retrieves PDF URLs for Limits section.
 * Assumes folders are structured as Math-Problems/Limits/XXX/XX.pdf
 * where XXX is zero-padded problem number (001, 002, ...) and XX is the file prefix.
 */

function getLimitsPdfs(count = 100) {
    const pdfs = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        pdfs[`limit-${i}`] = `Math-Problems/Limits/${folderNum}/${fileNum}.pdf`;
    }
    return pdfs;
}

// Usage example:
const limitsPdfs = getLimitsPdfs();
