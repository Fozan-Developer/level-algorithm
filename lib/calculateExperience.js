module.exports = function calculateExperience({ level, baseExperience, experienceMultiplier }) {
    return baseExperience * Math.pow(experienceMultiplier, level - 1);
};