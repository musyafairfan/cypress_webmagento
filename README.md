# QA Automation - Cypress

## 🔧 Tools
- Cypress
- JavaScript (Node.js)
- Allure Report (optional)
- GitHub Actions (CI/CD - optional)

## 🗂️ Struktur Folder
- `cypress/e2e`: Semua test case ditulis di sini
- `fixtures`: Data testing berbasis file JSON
- `support`: Reusable function & global setup

## 🚀 Cara Jalanin Tes
```bash
npm install
npx cypress open   # UI mode
npx cypress run    # Headless
