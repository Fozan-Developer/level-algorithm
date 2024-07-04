# level-algorithm

`level-algorithm` is a JavaScript library for managing level-based calculations, particularly useful for applications involving experience points and level progression.

## Installation

To install `level-algorithm`, use npm (Node Package Manager):

```bash
npm install level-algorithm
```

## Usage

```javascript
const LevelAlgorithm = require('level-algorithm');

// Example configuration
const levelAlgorithm = new LevelAlgorithm({
  baseExperience: 100,
  experienceMultiplier: 1.5
});

// Calculate level based on experience
const currentExperience = 350;
const currentLevel = levelAlgorithm.calculateLevel({
  experience: currentExperience,
  baseExperience: levelAlgorithm.baseExperience,
  experienceMultiplier: levelAlgorithm.experienceMultiplier
});
console.log(`Current level: ${currentLevel}`);
```

## Documentation

For detailed usage instructions and API documentation, please visit [Full Documentation](https://fozan.gitbook.io/level).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
