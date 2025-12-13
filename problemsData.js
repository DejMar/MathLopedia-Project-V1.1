/**
 * MathLopedia - Problems Data
 * Combines all problem data from separate category files
 * 
 * Note: This file expects the following data objects to be loaded first:
 * - introductoryData
 * - limitsData
 * - integralsData
 * - differentialEquationsData
 * - seriesData
 * - differentialCalculusData
 */

// ============================================
// Problem Data Structure
// ============================================
// Combine all category data into a single problemsData object
const problemsData = {
    introductory: introductoryData,
    limits: limitsData,
    integrals: integralsData,
    'differential-equations': differentialEquationsData,
    series: seriesData,
    'differential-calculus': differentialCalculusData
};

