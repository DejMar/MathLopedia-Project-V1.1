/**
 * Dynamically retrieves PDF URLs for Introductory section.
 * Assumes folders are structured as Math-Problems/Introduction/XXX/XX.pdf
 * where XXX is zero-padded problem number (001, 002, ...) and XX is the file prefix.
 */

function getIntroductoryPdfs(count = 30) {
    const pdfs = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        pdfs[`intro-${i}`] = `Math-Problems/Introduction/${folderNum}/${fileNum}.pdf`;
    }
    return pdfs;
}

// Usage example:
const introductoryPdfs = getIntroductoryPdfs();
