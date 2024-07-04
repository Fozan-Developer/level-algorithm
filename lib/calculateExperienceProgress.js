const calculateExperience = require('./calculateExperience');
const calculateExperienceRemaining = require('./calculateExperienceRemaining');

/**
 * Calculate the progress towards the next level based on current experience.
 * 
 * @param {object} params - Parameters for calculation.
 * @param {number} params.level - The current level.
 * @param {number} params.experience - The current experience points.
 * @param {number} params.baseExperience - The base experience points.
 * @param {number} params.experienceMultiplier - The multiplier applied per level.
 * @returns {object} - Object containing progress in fractional and whole values.
 */
module.exports = function calculateExperienceProgress({ level, experience, baseExperience, experienceMultiplier }) {
    // Calculate total experience required for current level
    const requiredExperience = calculateExperience({ level, baseExperience, experienceMultiplier });
    
    // Calculate progress in percentage towards current level
    const experienceProgress = (experience / requiredExperience) * 100;
    
    // Calculate experience remaining to reach next level
    const experienceRemaining = calculateExperienceRemaining({ level, experience, baseExperience, experienceMultiplier });
    
    // Calculate progress in percentage towards next level
    const experienceRemainingProgress = (experienceRemaining / requiredExperience) * 100;
    
    // Return progress in both fractional and whole values
    return {
        fractional: {
            progress: experienceProgress,
            remaining: experienceRemainingProgress
        },
        whole: {
            progress: Math.floor(experienceProgress),
            remaining: Math.floor(experienceRemainingProgress)
        }
    };
}
