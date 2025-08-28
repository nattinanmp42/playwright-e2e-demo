# 🎭 Playwright E2E Demo

End-to-End automation testing project built with **Playwright**.  
This project demonstrates automated testing of an **e-commerce website** covering login, product selection, checkout, and order verification.

---

## ✨ Features
- 🔑 Login with test account  
- 🛒 Add products to cart  
- 💳 Checkout process with payment details  
- 🌍 Select country dynamically  
- 📦 Validate order success page  
- 📜 Verify order history  

---

## 🛠 Tech Stack
- **Language**: JavaScript  
- **Framework**: [Playwright Test](https://playwright.dev/)  
- **Runtime**: Node.js  

---

## 🚀 Getting Started

### 1. Clone this repository
```bash
git clone https://github.com/nattinanmp42/playwright-e2e-demo.git
cd playwright-e2e-demo
2. Install dependencies
bash
Copy code
npm install
3. Run tests
bash
Copy code
npm test
4. View test report
bash
Copy code
npm run report
📊 Test Flow Overview
Go to login page and sign in with credentials

Add multiple products to cart

Proceed to checkout and enter payment details

Confirm order and verify success message

Validate order history contains placed order

📷 Example Report
You can generate and view reports with:

bash
Copy code
npx playwright show-report
