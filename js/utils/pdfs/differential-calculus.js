/**
 * Dynamically retrieves PDF URLs for Differential Calculus section.
 * Assumes folders are structured as Math-Problems/DifferentialCalculus/XXX/XX.pdf
 * where XXX is zero-padded problem number (001, 002, ...) and XX is the file prefix.
 */

function getDifferentialCalculusPdfs(count = 10) {
    const pdfs = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        pdfs[`dc-${i}`] = `Math-Problems/DifferentialCalculus/${folderNum}/${fileNum}.pdf`;
    }
    return pdfs;
}

// Usage example:
const differentialCalculusPdfs = getDifferentialCalculusPdfs();
