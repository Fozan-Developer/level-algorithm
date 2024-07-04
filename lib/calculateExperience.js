/**
 * Calculate the total experience required to reach a specific level.
 * 
 * @param {object} params - Parameters for calculation.
 * @param {number} params.level - The target level.
 * @param {number} params.baseExperience - The base experience points.
 * @param {number} params.experienceMultiplier - The multiplier applied per level.
 * @returns {number} - The total experience required for the specified level.
 */
module.exports = function calculateExperience({ level, baseExperience, experienceMultiplier }) {
    // Calculate experience using the formula: baseExperience * experienceMultiplier^(level - 1)
    return baseExperience * Math.pow(experienceMultiplier, level - 1);
};
