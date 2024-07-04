const calculateExperience = require('./calculateExperience');

/**
 * Calculate the level based on the current experience.
 * 
 * @param {object} params - Parameters for calculation.
 * @param {number} params.experience - The current experience points.
 * @param {number} params.baseExperience - The base experience points.
 * @param {number} params.experienceMultiplier - The multiplier applied per level.
 * @returns {number} - The calculated level.
 */
module.exports = function calculateLevel({ experience, baseExperience, experienceMultiplier }) {
    let level = 1;

    // Increment level until the required experience for the next level exceeds the current experience
    while (experience >= calculateExperience({ level, baseExperience, experienceMultiplier })) {
        level++;
    }
    
    return level;
};
