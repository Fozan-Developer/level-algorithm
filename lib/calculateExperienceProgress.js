const calculateExperience = require('./calculateExperience');
const calculateExperienceRemaining = require('./calculateExperienceRemaining');

module.exports = function calculateExperienceProgress({ level, experience, baseExperience, experienceMultiplier }) {
    let requiredExperience = calculateExperience({ level, baseExperience, experienceMultiplier}); // Опыт, необходимый для текущего уровня
    let experienceProgress = (experience / requiredExperience) * 100; // Процент прогресса опыта
    
    let experienceRemaining = calculateExperienceRemaining({ level, experience, baseExperience, experienceMultiplier }); // Опыт, оставшийся до нового уровня
    let experienceRemainingProgress = (experienceRemaining / requiredExperience) * 100; // Процент оставшегося опыта
    
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