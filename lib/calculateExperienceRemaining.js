const calculateExperience = require('./calculateExperience');

module.exports = function calculateExperienceRemaining({ level, experience, baseExperience, experienceMultiplier }) {
    let requiredExperience = calculateExperience({ level, baseExperience, experienceMultiplier }); // Опыт, необходимый для текущего уровня
    let experienceRemaining = requiredExperience - experience; // Опыт, оставшийся до нового уровня
    
    return experienceRemaining;
};