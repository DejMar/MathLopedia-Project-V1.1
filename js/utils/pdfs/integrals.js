/**
 * Dynamically retrieves PDF URLs for Integrals section.
 * Assumes folders are structured as Math-Problems/Integrals/XXX/XX.pdf
 * where XXX is zero-padded problem number (001, 002, ...) and XX is the file prefix.
 */

function getIntegralsPdfs(count = 20) {
    const pdfs = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        pdfs[`integral-${i}`] = `Math-Problems/Integrals/${folderNum}/${fileNum}.pdf`;
    }
    return pdfs;
}

// Usage example:
const integralsPdfs = getIntegralsPdfs();
