const calculateExperience = require("./lib/calculateExperience");
const calculateLevel = require('./lib/calculateLevel');
const calculateExperienceRemaining = require('./lib/calculateExperienceRemaining');
const calculateExperienceProgress = require('./lib/calculateExperienceProgress');

class LevelAlgorithm {
    constructor({ baseExperience, experienceMultiplier }) {
        this.baseExperience = baseExperience,
        this.experienceMultiplier = experienceMultiplier
    };

    calculateExperience(level) {
        return calculateExperience({ level: level, baseExperience: this.baseExperience, experienceMultiplier: this.experienceMultiplier });
    };
    
    calculateLevel(experience) {
        return calculateLevel({ experience: experience, baseExperience: this.baseExperience, experienceMultiplier: this.experienceMultiplier });
    };

    calculateExperienceRemaining(level, experience) {
        return calculateExperienceRemaining({ level: level, experience: experience, baseExperience: this.baseExperience, experienceMultiplier: this.experienceMultiplier });
    };

    calculateExperienceProgress(level, experience) {
        return calculateExperienceProgress({ level: level, experience: experience, baseExperience: this.baseExperience, experienceMultiplier: this.experienceMultiplier });
    };
};

module.exports = LevelAlgorithm;