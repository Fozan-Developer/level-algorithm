# ⭐️ Level Algorithm

[![npm package](https://img.shields.io/npm/v/@mr_fozan/json.db?logo=npm&style=flat-square)](https://www.npmjs.org/package/@mr_fozan/json.db)

**Level Algorithm — это мощный модуль [Node.js](https://npmjs.com), который позволяет легко взаимодействовать с системой уровней.**

## 📦 Установка

### GIT

```sh
https://github.com/Fozan-Developer/level-algorithm.git
```

## 🚀 Использование

```js
const LevelAlgorithm = require('./level-algorithm');

const Level = new LevelAlgorithm({ baseExperience: 100, experienceMultiplier: 1.5 });
```

* **baseExperience** - базовый опыт, необходимый для первого уровня
* **experienceMultiplier** - коэффициент, определяющий, как быстро растет необходимый опыт с каждым уровнем

## 📖 Документация

### Метод для определения опыта, необходимого для достижения определенного уровня

```js
var level = 5;

const getExp = Level.calculateExperience(level); // 506.25
```

### Метод для определения текущего уровня игрока на основе его опыта

```js
var exp = 505.20;

const getLevel = Level.calculateLevel(exp); // 5
```

### Метод для определения опыта до нового уровня на основе текущего уровня и текущего опыта

```js
var level = 5;
var exp = 401;

const getExp = Level.calculateExperienceRemaining(level, exp); // 105.25
```

### Метод для определения процента прогресса на основе уровня и опыта

```js
var level = 5;
var exp = 401;

const getExp = Level.calculateExperienceProgress(level, exp);
//{
// fractional: { progress: 79.20987654320987, remaining: 20.790123456790123 },
// whole: { progress: 79, remaining: 20 }
//}
```

* **fractional** - результат с дробными числами
* **whole** - результат с целыми числами

## Лицензия

### The MIT License (MIT)
