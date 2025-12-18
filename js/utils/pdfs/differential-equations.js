/**
 * Dynamically retrieves PDF URLs for Differential Equations section.
 * Assumes folders are structured as Math-Problems/DifferentialEquations/XXX/XX.pdf
 * where XXX is zero-padded problem number (001, 002, ...) and XX is the file prefix.
 */

function getDifferentialEquationsPdfs(count = 10) {
    const pdfs = {};
    for (let i = 1; i <= count; i++) {
        const folderNum = String(i).padStart(3, '0');
        const fileNum = String(i).padStart(2, '0');
        pdfs[`de-${i}`] = `Math-Problems/DifferentialEquations/${folderNum}/${fileNum}.pdf`;
    }
    return pdfs;
}

// Usage example:
const differentialEquationsPdfs = getDifferentialEquationsPdfs();
