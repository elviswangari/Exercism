# Exercism Solutions Repository

Welcome to my **Exercism Solutions** repository! This repository contains my solutions to various exercises from [Exercism](https://exercism.org/), organized by programming language and exercise track. These exercises help improve problem-solving skills, mastery of language features, and familiarity with common coding patterns.

---

## 📂 Repository Structure

The repository is organized by programming language and then by exercise track:

```
exercism-solutions/
├─ javascript/
│  ├─ lasagna/
│  │  ├─ lasagna.js
│  │  └─ lasagna.spec.js
│  ├─ annalyns-infiltration/
│  │  ├─ annalyns-infiltration.js
│  │  └─ annalyns-infiltration.spec.js
│  ├─ freelancer-rates/
│  │  ├─ freelancer-rates.js
│  │  └─ freelancer-rates.spec.js
│  └─ resistor-color/
│     ├─ resistor-color.js
│     └─ resistor-color.spec.js
├─ typescript/
│  ├─ two-fer/
│  │  ├─ two-fer.ts
│  │  └─ two-fer.spec.ts
│  └─ resistor-color-duo/
│     ├─ resistor-color-duo.ts
│     └─ resistor-color-duo.spec.ts
└─ README.md
```

- **Language folders**: `javascript/`, `typescript/`, etc.
- **Exercise folders**: Named after the exercise (e.g., `lasagna/`, `freelancer-rates/`).
- **Implementation files**: Contain your solution code.
- **Test files**: Copied from Exercism to verify correctness.

---

## 🧩 Exercises Included

Here are some examples of the exercises solved in this repository:

| Exercise | Language | Description |
|----------|---------|-------------|
| Two Fer | TypeScript | Implements a function that returns "One for X, one for me." with default handling. |
| Resistor Color | JavaScript/TypeScript | Maps resistor color bands to numerical values and provides utility functions. |
| Resistor Color Duo | TypeScript | Calculates the value of a resistor from the first two color bands. |
| Lasagna | JavaScript | Calculates preparation time, remaining oven time, and total working time for a lasagna recipe. |
| Annalyn’s Infiltration | JavaScript | Implements logic to decide if certain actions can be performed depending on guards’ states. |
| Freelancer Rates | JavaScript | Calculates day rates, project days, and discounted monthly project pricing. |

> Each solution includes clear, well-commented code with `@param` and `@returns` annotations for better readability.

---

## 🚀 Getting Started

To run and test these exercises locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/exercism-solutions.git
   cd exercism-solutions
   ```

2. **Install dependencies (if applicable):**
   ```bash
   npm install
   ```

3. **Run tests:**
   ```bash
   # JavaScript tests with Jest
   npm test
   # or for TypeScript
   npx tsc && npm test
   ```

> Each exercise folder contains a `.spec.js` or `.spec.ts` file copied from Exercism that contains the automated tests.

---

## 📝 Notes on Implementation

- Code follows **idiomatic JavaScript/TypeScript** style.
- Functions are written to pass **Exercism’s automated tests** while being readable and maintainable.
- Where applicable, **JSDoc** comments are included for type hinting and clarity.
- Exercises are often implemented in multiple ways:
  - Using default parameters
  - Using arrow functions vs. standard functions
  - Minimal vs. verbose style

---

## 🎯 Learning Goals

This repository demonstrates:

- Problem-solving using small, focused functions.
- Understanding of JavaScript and TypeScript types and syntax.
- Familiarity with arrays, objects, and conditional logic.
- Basic functional programming concepts in JavaScript/TypeScript.
- Using `Math`, string templates, and other built-in language utilities.

---

## 🛠 Tools & Technologies

- **Languages:** JavaScript (ES6+), TypeScript
- **Testing:** Jest (via Exercism-provided `.spec.js` / `.spec.ts` files)
- **IDE Support:** VSCode or any modern editor with TypeScript/JS support
- **Linting & Type Checking:** Optional `@ts-check` for JavaScript files

---

## 📖 References

- [Exercism.org](https://exercism.org/) — platform where exercises are sourced.
- [JavaScript Track](https://exercism.org/tracks/javascript)
- [TypeScript Track](https://exercism.org/tracks/typescript)

---

## ✨ Contribution

This is a **personal solutions repository**, but you are welcome to:

- Fork the repository
- Study the implementations
- Suggest improvements via Pull Requests

---

## 📜 License

This repository is **MIT licensed**. Feel free to use it for learning purposes.
