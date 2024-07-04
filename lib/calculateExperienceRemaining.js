const calculateExperience = require('./calculateExperience');

/**
 * Calculate the experience remaining to reach the next level.
 * 
 * @param {object} params - Parameters for calculation.
 * @param {number} params.level - The current level.
 * @param {number} params.experience - The current experience points.
 * @param {number} params.baseExperience - The base experience points.
 * @param {number} params.experienceMultiplier - The multiplier applied per level.
 * @returns {number} - The experience remaining to reach the next level.
 */
module.exports = function calculateExperienceRemaining({ level, experience, baseExperience, experienceMultiplier }) {
    // Calculate total experience required for current level
    const requiredExperience = calculateExperience({ level, baseExperience, experienceMultiplier });
    
    // Calculate experience remaining to reach next level
    const experienceRemaining = requiredExperience - experience;
    
    return experienceRemaining;
};
