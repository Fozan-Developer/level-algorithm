const calculateExperience = require('./calculateExperience');

module.exports = function calculateLevel({ experience, baseExperience, experienceMultiplier }) {
    let level = 1;

    while (experience >= calculateExperience({ level, baseExperience, experienceMultiplier })) {
      level++;
    };
    
    return level;
};