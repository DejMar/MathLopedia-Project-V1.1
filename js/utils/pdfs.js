/**
 * Get PDF download URL for a problem
 * Returns the PDF file path for problem downloads
 */

// Mapping of section keys to their PDF data objects
const sectionPdfMaps = {
    'integrals': integralsPdfs,
    'limits': limitsPdfs,
    'introductory': introductoryPdfs,
    'differential-equations': differentialEquationsPdfs,
    'series': seriesPdfs,
    'differential-calculus': differentialCalculusPdfs,
};

function getPdfUrl(problemId, sectionKey) {
    const sectionPdfs = sectionPdfMaps[sectionKey];
    if (sectionPdfs && sectionPdfs[problemId]) {
        return sectionPdfs[problemId];
    }
    return `#pdf-${problemId}`;
}
