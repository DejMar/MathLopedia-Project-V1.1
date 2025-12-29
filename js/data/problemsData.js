/**
 * MathLopedia - Problems Data
 * Contains all problem data structures and section mappings
 */

export const problemsData = {
    introductory: {
        title: 'Introductory Problems in Mathematics',
        description: 'Master the fundamentals with our collection of introductory mathematics problems. These foundational problems cover essential concepts and techniques that form the basis for advanced mathematical study.',
        problems: [
            { id: 'intro-1', title: 'Basic Algebra', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] },
            { id: 'intro-2', title: 'Basic Algebra', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] },
            { id: 'intro-3', title: 'Basic Algebra', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] },
            { id: 'intro-4', title: 'Basic Algebra', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] },
            { id: 'intro-5', title: 'Basic Algebra', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] },
            { id: 'intro-6', title: 'Basic Algebra', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] },
            { id: 'intro-7', title: 'Basic Algebra', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] },
            { id: 'intro-8', title: 'Basic Algebra', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] },
            { id: 'intro-9', title: 'Basic Algebra', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] },
            { id: 'intro-10', title: 'Basic Algebra', difficulty: 'easy', keywords: ['algebra', 'linear', 'equations'] }
        ]
    },
    limits: {
        title: 'Limits',
        description: 'Understand limit concepts and techniques with detailed solutions. Explore problems involving one-sided limits, infinite limits, continuity, and L\'Hôpital\'s rule applications.',
        problems: [
            { id: 'limit-1', title: 'Basic Limit Evaluation', difficulty: 'easy', keywords: ['limits', 'evaluation', 'substitution'] },
            { id: 'limit-2', title: 'Limit at Infinity', difficulty: 'medium', keywords: ['limits', 'infinity', 'asymptotes'] },
            { id: 'limit-3', title: 'One-Sided Limits', difficulty: 'medium', keywords: ['limits', 'one-sided', 'continuity'] },
            { id: 'limit-4', title: 'L\'Hôpital\'s Rule Application', difficulty: 'hard', keywords: ['lhopital', 'derivatives', 'indeterminate'] },
            { id: 'limit-5', title: 'Trigonometric Limits', difficulty: 'medium', keywords: ['limits', 'trigonometry', 'special'] },
            { id: 'limit-6', title: 'Limit with Rationalization', difficulty: 'medium', keywords: ['limits', 'rationalization', 'radicals'] },
            { id: 'limit-7', title: 'Squeeze Theorem', difficulty: 'hard', keywords: ['limits', 'squeeze', 'theorem'] },
            { id: 'limit-8', title: 'Limits of Piecewise Functions', difficulty: 'hard', keywords: ['limits', 'piecewise', 'functions'] },
            { id: 'limit-9', title: 'Continuity Analysis', difficulty: 'medium', keywords: ['continuity', 'limits', 'discontinuity'] },
            { id: 'limit-10', title: 'Advanced Limit Techniques', difficulty: 'hard', keywords: ['limits', 'advanced', 'techniques'] }
        ]
    },
    integrals: {
        title: 'Integrals',
        description: 'Comprehensive solved integral problems covering definite and indefinite integrals, integration by parts, substitution methods, trigonometric integrals, and applications of integration.',
        problems: [
            { id: 'integral-1', title: 'Basic Indefinite Integrals', difficulty: 'easy', keywords: ['integrals', 'indefinite', 'antiderivatives'] },
            { id: 'integral-2', title: 'U-Substitution Method', difficulty: 'medium', keywords: ['integrals', 'substitution', 'u-sub'] },
            { id: 'integral-3', title: 'Integration by Parts', difficulty: 'medium', keywords: ['integrals', 'integration by parts', 'product'] },
            { id: 'integral-4', title: 'Definite Integrals', difficulty: 'medium', keywords: ['integrals', 'definite', 'evaluation'] },
            { id: 'integral-5', title: 'Trigonometric Integrals', difficulty: 'hard', keywords: ['integrals', 'trigonometry', 'identities'] },
            { id: 'integral-6', title: 'Partial Fractions', difficulty: 'hard', keywords: ['integrals', 'partial fractions', 'rational'] },
            { id: 'integral-7', title: 'Improper Integrals', difficulty: 'hard', keywords: ['integrals', 'improper', 'convergence'] },
            { id: 'integral-8', title: 'Area Under Curves', difficulty: 'medium', keywords: ['integrals', 'area', 'applications'] },
            { id: 'integral-9', title: 'Volume of Revolution', difficulty: 'hard', keywords: ['integrals', 'volume', 'revolution'] },
            { id: 'integral-10', title: 'Arc Length and Surface Area', difficulty: 'hard', keywords: ['integrals', 'arc length', 'surface area'] }
        ]
    },
    'differential-equations': {
        title: 'Differential Equations',
        description: 'Solve differential equations with confidence using our step-by-step solutions. Includes problems on separable equations, linear differential equations, homogeneous equations, and applications.',
        problems: [
            { id: 'de-1', title: 'Separable Differential Equations', difficulty: 'medium', keywords: ['differential', 'separable', 'equations'] },
            { id: 'de-2', title: 'First-Order Linear DE', difficulty: 'medium', keywords: ['differential', 'linear', 'first order'] },
            { id: 'de-3', title: 'Homogeneous Equations', difficulty: 'hard', keywords: ['differential', 'homogeneous', 'substitution'] },
            { id: 'de-4', title: 'Exact Differential Equations', difficulty: 'hard', keywords: ['differential', 'exact', 'integrating factor'] },
            { id: 'de-5', title: 'Bernoulli Equations', difficulty: 'hard', keywords: ['differential', 'bernoulli', 'nonlinear'] },
            { id: 'de-6', title: 'Second-Order Linear Homogeneous', difficulty: 'hard', keywords: ['differential', 'second order', 'homogeneous'] },
            { id: 'de-7', title: 'Method of Undetermined Coefficients', difficulty: 'hard', keywords: ['differential', 'undetermined coefficients', 'particular'] },
            { id: 'de-8', title: 'Variation of Parameters', difficulty: 'hard', keywords: ['differential', 'variation of parameters', 'particular'] },
            { id: 'de-9', title: 'Applications: Population Growth', difficulty: 'medium', keywords: ['differential', 'applications', 'population'] },
            { id: 'de-10', title: 'Applications: Mixing Problems', difficulty: 'medium', keywords: ['differential', 'applications', 'mixing'] }
        ]
    },
    series: {
        title: 'Series',
        description: 'Master infinite series and sequences with comprehensive solved problems. Explore convergence tests, power series, Taylor series, Fourier series, and applications of series in mathematical analysis.',
        problems: [
            { id: 'series-1', title: 'Arithmetic and Geometric Series', difficulty: 'easy', keywords: ['series', 'arithmetic', 'geometric', 'sum'] },
            { id: 'series-2', title: 'Convergence Tests: Divergence Test', difficulty: 'medium', keywords: ['series', 'convergence', 'divergence', 'test'] },
            { id: 'series-3', title: 'Integral Test for Convergence', difficulty: 'medium', keywords: ['series', 'integral test', 'convergence'] },
            { id: 'series-4', title: 'Comparison Test and Limit Comparison', difficulty: 'medium', keywords: ['series', 'comparison test', 'limit comparison'] },
            { id: 'series-5', title: 'Ratio Test and Root Test', difficulty: 'hard', keywords: ['series', 'ratio test', 'root test', 'convergence'] },
            { id: 'series-6', title: 'Alternating Series Test', difficulty: 'medium', keywords: ['series', 'alternating', 'convergence', 'test'] },
            { id: 'series-7', title: 'Power Series and Interval of Convergence', difficulty: 'hard', keywords: ['series', 'power series', 'convergence', 'interval'] },
            { id: 'series-8', title: 'Taylor Series and Maclaurin Series', difficulty: 'hard', keywords: ['series', 'taylor', 'maclaurin', 'expansion'] },
            { id: 'series-9', title: 'Fourier Series', difficulty: 'hard', keywords: ['series', 'fourier', 'trigonometric', 'periodic'] },
            { id: 'series-10', title: 'Applications of Series', difficulty: 'hard', keywords: ['series', 'applications', 'approximation', 'analysis'] }
        ]
    },
    'differential-calculus': {
        title: 'Differential Calculus',
        description: 'Explore the fundamentals of differential calculus with step-by-step solutions. Master derivatives, differentiation rules, chain rule, product rule, quotient rule, implicit differentiation, and applications including optimization and related rates.',
        problems: [
            { id: 'dc-1', title: 'Basic Derivatives: Power Rule', difficulty: 'easy', keywords: ['derivatives', 'power rule', 'differentiation'] },
            { id: 'dc-2', title: 'Product Rule and Quotient Rule', difficulty: 'medium', keywords: ['derivatives', 'product rule', 'quotient rule'] },
            { id: 'dc-3', title: 'Chain Rule for Composite Functions', difficulty: 'medium', keywords: ['derivatives', 'chain rule', 'composite functions'] },
            { id: 'dc-4', title: 'Implicit Differentiation', difficulty: 'medium', keywords: ['derivatives', 'implicit', 'differentiation'] },
            { id: 'dc-5', title: 'Higher Order Derivatives', difficulty: 'medium', keywords: ['derivatives', 'higher order', 'second derivative'] },
            { id: 'dc-6', title: 'Derivatives of Trigonometric Functions', difficulty: 'medium', keywords: ['derivatives', 'trigonometric', 'sine', 'cosine'] },
            { id: 'dc-7', title: 'Derivatives of Exponential and Logarithmic Functions', difficulty: 'medium', keywords: ['derivatives', 'exponential', 'logarithmic', 'e', 'ln'] },
            { id: 'dc-8', title: 'Applications: Tangent Lines and Normal Lines', difficulty: 'medium', keywords: ['derivatives', 'applications', 'tangent', 'normal'] },
            { id: 'dc-9', title: 'Optimization Problems', difficulty: 'hard', keywords: ['derivatives', 'optimization', 'maxima', 'minima'] },
            { id: 'dc-10', title: 'Related Rates Problems', difficulty: 'hard', keywords: ['derivatives', 'related rates', 'applications', 'time'] }
        ]
    },
    physics: {
        title: 'Physics',
        description: 'Explore fundamental physics concepts with detailed step-by-step solutions. Master mechanics, thermodynamics, electromagnetism, optics, and modern physics through comprehensive solved problems.',
        problems: [
            { id: 'physics-1', title: 'Kinematics: Motion in One Dimension', difficulty: 'easy', keywords: ['kinematics', 'motion', 'velocity', 'acceleration'] },
            { id: 'physics-2', title: 'Kinematics: Projectile Motion', difficulty: 'medium', keywords: ['kinematics', 'projectile', 'two-dimensional', 'motion'] },
            { id: 'physics-3', title: 'Newton\'s Laws of Motion', difficulty: 'medium', keywords: ['newton', 'forces', 'laws', 'mechanics'] },
            { id: 'physics-4', title: 'Work and Energy', difficulty: 'medium', keywords: ['work', 'energy', 'kinetic', 'potential'] },
            { id: 'physics-5', title: 'Momentum and Collisions', difficulty: 'medium', keywords: ['momentum', 'collisions', 'conservation', 'impulse'] },
            { id: 'physics-6', title: 'Rotational Motion', difficulty: 'hard', keywords: ['rotation', 'angular', 'torque', 'moment of inertia'] },
            { id: 'physics-7', title: 'Gravitation', difficulty: 'medium', keywords: ['gravity', 'gravitation', 'orbital', 'kepler'] },
            { id: 'physics-8', title: 'Thermodynamics: Heat and Temperature', difficulty: 'medium', keywords: ['thermodynamics', 'heat', 'temperature', 'thermal'] },
            { id: 'physics-9', title: 'Electric Fields and Forces', difficulty: 'hard', keywords: ['electric', 'fields', 'forces', 'coulomb'] },
            { id: 'physics-10', title: 'Magnetic Fields and Forces', difficulty: 'hard', keywords: ['magnetic', 'fields', 'forces', 'lorentz'] }
        ]
    },
    probability: {
        title: 'Probability',
        description: 'Master probability theory with comprehensive solved problems. Explore basic probability, conditional probability, Bayes\' theorem, random variables, distributions, and statistical inference through step-by-step solutions.',
        problems: [
            { id: 'probability-1', title: 'Basic Probability: Sample Spaces', difficulty: 'easy', keywords: ['probability', 'sample space', 'outcomes', 'events'] },
            { id: 'probability-2', title: 'Conditional Probability', difficulty: 'medium', keywords: ['probability', 'conditional', 'dependent', 'independent'] },
            { id: 'probability-3', title: 'Bayes\' Theorem', difficulty: 'medium', keywords: ['probability', 'bayes', 'theorem', 'posterior'] },
            { id: 'probability-4', title: 'Combinatorics: Permutations and Combinations', difficulty: 'medium', keywords: ['probability', 'combinatorics', 'permutations', 'combinations'] },
            { id: 'probability-5', title: 'Binomial Distribution', difficulty: 'medium', keywords: ['probability', 'binomial', 'distribution', 'discrete'] },
            { id: 'probability-6', title: 'Normal Distribution', difficulty: 'hard', keywords: ['probability', 'normal', 'distribution', 'gaussian', 'continuous'] },
            { id: 'probability-7', title: 'Poisson Distribution', difficulty: 'hard', keywords: ['probability', 'poisson', 'distribution', 'discrete'] },
            { id: 'probability-8', title: 'Expected Value and Variance', difficulty: 'medium', keywords: ['probability', 'expected value', 'variance', 'mean'] },
            { id: 'probability-9', title: 'Central Limit Theorem', difficulty: 'hard', keywords: ['probability', 'central limit theorem', 'sampling', 'statistics'] },
            { id: 'probability-10', title: 'Hypothesis Testing', difficulty: 'hard', keywords: ['probability', 'hypothesis testing', 'statistics', 'significance'] }
        ]
    },
    'complex-numbers': {
        title: 'Complex Numbers and Functions',
        description: 'Master complex numbers and complex functions with comprehensive solved problems. Explore complex arithmetic, polar form, De Moivre\'s theorem, complex functions, analytic functions, and applications in engineering and physics.',
        problems: [
            { id: 'complex-1', title: 'Basic Complex Arithmetic', difficulty: 'easy', keywords: ['complex numbers', 'arithmetic', 'addition', 'subtraction', 'multiplication'] },
            { id: 'complex-2', title: 'Complex Conjugates and Modulus', difficulty: 'easy', keywords: ['complex numbers', 'conjugate', 'modulus', 'absolute value'] },
            { id: 'complex-3', title: 'Polar Form and Euler\'s Formula', difficulty: 'medium', keywords: ['complex numbers', 'polar form', 'euler', 'exponential form'] },
            { id: 'complex-4', title: 'De Moivre\'s Theorem', difficulty: 'medium', keywords: ['complex numbers', 'de moivre', 'powers', 'roots'] },
            { id: 'complex-5', title: 'Complex Roots of Polynomials', difficulty: 'medium', keywords: ['complex numbers', 'roots', 'polynomials', 'fundamental theorem'] },
            { id: 'complex-6', title: 'Complex Functions: Limits and Continuity', difficulty: 'hard', keywords: ['complex functions', 'limits', 'continuity', 'analysis'] },
            { id: 'complex-7', title: 'Analytic Functions and Cauchy-Riemann Equations', difficulty: 'hard', keywords: ['complex functions', 'analytic', 'cauchy-riemann', 'differentiability'] },
            { id: 'complex-8', title: 'Complex Integration', difficulty: 'hard', keywords: ['complex functions', 'integration', 'contour', 'cauchy'] },
            { id: 'complex-9', title: 'Residue Theorem and Applications', difficulty: 'hard', keywords: ['complex functions', 'residue theorem', 'poles', 'applications'] },
            { id: 'complex-10', title: 'Applications: Engineering and Physics', difficulty: 'hard', keywords: ['complex numbers', 'applications', 'engineering', 'physics', 'signal processing'] }
        ]
    }
};

// Section name mapping for category keys
export const sectionCategoryMap = {
    'introductory': 'introductory',
    'limits': 'limits',
    'integrals': 'integrals',
    'differential-equations': 'differentialEquations',
    'series': 'series',
    'differential-calculus': 'differentialCalculus',
    'physics': 'physics',
    'probability': 'probability',
    'complex-numbers': 'complexNumbers'
};

