/**
 * Dynamically retrieves PDF URLs for Probability section.
 * Assumes folders are structured as Math-Problems/Probability/XXX/XX.pdf
 * where XXX is zero-padded problem number (001, 002, ...) and XX is the file prefix.
 */

function getProbabilityPdfs(count = 100) {
    const pdfs = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(3, '0');
        pdfs[`probability-${i}`] = `Math-Problems/Probability/${folderNum}/${fileNum}.pdf`;
    }
    return pdfs;
}

// Usage example:
const probabilityPdfs = getProbabilityPdfs();

