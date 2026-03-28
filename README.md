# 🧪 The Testing Suite – Frontend Testing Project

---

A comprehensive frontend testing project built using **React, Jest, and React Testing Library**.
This project demonstrates real-world testing practices including:

* Unit Testing
* Component Testing
* User Interaction Testing
* API Mocking
* Test Coverage Analysis

---

## 🚀 Features

### ✅ Level 1 – Unit & Component Testing

* Setup of **Jest + React Testing Library**
* Tested reusable UI components:

  * Button
  * Input
  * Card
* Verified:

  * Component renders correctly
  * Props are displayed correctly

---

### ✅ Level 2 – Interaction Testing

* Simulated real user behavior using `userEvent`
* Tested interactive components:

  * Counter (increment functionality)
  * Input field typing behavior
* Verified:

  * UI updates after user actions
  * State changes correctly reflected

---

### ✅ Level 3 – API Mocking & Advanced Testing

* Tested API-based component (`UserFetcher`)
* Implemented **mocking of fetch API**
* Covered all states:

  * Loading state
  * Success state
  * Error handling
* Used `waitFor` for async testing

---

### ✅ Test Coverage

* Generated coverage report using:

```bash
npm test -- --coverage
```

* Achieved **90%+ overall coverage**
* Most components have **100% coverage**

---

## 🧠 Key Concepts Implemented

* **Test-Driven Thinking**: Focused on user behavior instead of implementation
* **Separation of Concerns**: UI logic tested independently
* **Mocking APIs**: Avoided real network calls in tests
* **Async Testing**: Handled delayed UI updates using `waitFor`
* **Reusable Test Patterns**: Structured test cases for scalability

---

## 📂 Project Structure

```text
Testing/
│
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Button.test.js
│   │   ├── Input.jsx
│   │   ├── Input.test.js
│   │   ├── Card.jsx
│   │   ├── Card.test.js
│   │   ├── Counter.jsx
│   │   ├── Counter.test.js
│   │   ├── UserFetcher.jsx
│   │   ├── UserFetcher.test.js
│   │   ├── LoginForm.jsx
│   │   └── LoginForm.test.js
│
├── jest.config.js
├── jest.setup.js
├── babel.config.js
├── package.json
├── README.md
└── prompts.md
```

---

## 🛠️ Technologies Used

* **Frontend Framework**: React
* **Testing Framework**: Jest
* **Testing Library**: React Testing Library
* **User Simulation**: user-event
* **Mocking**: Jest mocks (`jest.fn`)
* **Environment**: jsdom

---

## 🧪 How to Run Locally

1️⃣ **Clone the repository:**

```bash
git clone <your-repo-url>
cd Testing
```

2️⃣ **Install dependencies:**

```bash
npm install
```

3️⃣ **Run tests:**

```bash
npm test
```

4️⃣ **Run coverage report:**

```bash
npm test -- --coverage
```

---

## 📊 Coverage Report

* Coverage report is generated inside:

```bash
coverage/index.html
```

👉 Open in browser to view detailed stats

---

## 🎯 Learning Outcomes

* Writing effective unit tests
* Testing user interactions realistically
* Mocking APIs for reliable testing
* Debugging and fixing test failures
* Understanding test coverage metrics

---

## 🤖 AI Assistance Disclaimer

AI tools were used for:

* Understanding testing concepts (Jest, RTL)
* Debugging setup issues
* Structuring test cases
* Improving test coverage strategies

All implementations were manually written, tested, and understood.
Detailed prompts are documented in [`prompts.md`](prompts.md).

---

## 👨‍💻 Author

**Krishna Kumar**
Frontend Developer Intern – Prodesk
