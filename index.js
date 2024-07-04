const {
    calculateExperience,
    calculateLevel,
    calculateExperienceRemaining,
    calculateExperienceProgress
} = require('./lib');

class LevelAlgorithm {
    constructor({ baseExperience, experienceMultiplier }) {
        this.baseExperience = baseExperience;
        this.experienceMultiplier = experienceMultiplier;
    }

    calculateExperience(level) {
        return calculateExperience({ level, baseExperience: this.baseExperience, experienceMultiplier: this.experienceMultiplier });
    }
    
    calculateLevel(experience) {
        return calculateLevel({ experience, baseExperience: this.baseExperience, experienceMultiplier: this.experienceMultiplier });
    }

    calculateExperienceRemaining(level, experience) {
        return calculateExperienceRemaining({ level, experience, baseExperience: this.baseExperience, experienceMultiplier: this.experienceMultiplier });
    }

    calculateExperienceProgress(level, experience) {
        return calculateExperienceProgress({ level, experience, baseExperience: this.baseExperience, experienceMultiplier: this.experienceMultiplier });
    }
}

module.exports = LevelAlgorithm;
