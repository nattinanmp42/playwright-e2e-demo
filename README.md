# 🎭 Playwright E2E Demo  

A sample end-to-end testing project using [Playwright](https://playwright.dev/) with **JavaScript** and **Node.js**.  

---

## 🛠️ Tech Stack  

- **Language**: JavaScript  
- **Framework**: [Playwright Test](https://playwright.dev/docs/test-intro)  
- **Runtime**: Node.js  

---

## 🚀 Getting Started  

### 1. Clone this repository  
```bash
git clone https://github.com/<your-username>/playwright-e2e-demo.git
cd playwright-e2e-demo
```

### 2. Install dependencies  
```bash
npm install
```

### 3. Run tests  
```bash
npm test
```

### 4. View test report  
```bash
npm run report
```

---

## 📊 Test Flow Overview  

This demo covers a typical e-commerce flow:  

1. Go to login page and **sign in** with credentials  
2. Add multiple products to cart  
3. Proceed to checkout and enter payment details  
4. Confirm order and verify success message  
5. Validate order history contains placed order  

---

## 🖼️ Example Report  

Generate and view an interactive test report with:  

```bash
npx playwright show-report
```

---

## 📌 Project Structure  

```
playwright-e2e-demo/
├── tests/              # Test cases
│   ├── login.spec.js
│   ├── checkout.spec.js
│   └── order-history.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

---

## 🤝 Contributing  

Contributions are welcome! Feel free to fork this repo, create a feature branch, and submit a pull request.  

---
