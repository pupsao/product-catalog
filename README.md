# 📱 Product Catalog – Phones, Tablets & Accessories

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

📌 **About the Project**

A modern and responsive product catalog web application that allows users to seamlessly browse and search for phones, tablets, and accessories. Built with a strong emphasis on high performance, scalable architecture, and a clean UI/UX.

🔗 **Live Demo:** [Product Catalog Frontend](https://pupsao.github.io/product-catalog/)

---

## 🎯 Project Overview

This is a modern e-commerce application featuring:
* **Comprehensive Product Catalog:** Browse phones, tablets, and accessories.
* **Shopping Cart:** Add, remove, and manage items before checkout.
* **Favorites List:** Save items for later.
* **Detailed Views:** Dedicated product detail pages with full specifications.
* **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.

---

## 🚀 Tech Stack

### Frontend Core
* **[React 19](https://react.dev/):** UI library
* **[TypeScript](https://www.typescriptlang.org/):** Static type checking
* **[Vite](https://vitejs.dev/):** Fast build tool and development server
* **[React Router](https://reactrouter.com/):** Client-side routing
* **[CSS Modules (SCSS)](https://sass-lang.com/):** Component-scoped, maintainable styling

### Code Quality & Tooling
* **ESLint:** Code linting (plugins for React, TypeScript, a11y, imports)
* **Prettier:** Consistent code formatting
* **Husky:** Git pre-commit hooks
* **lint-staged:** Runs linters only on staged files

---

## 🛠️ Getting Started

### Prerequisites
* **Node.js:** v20.x or higher
* **npm:** Package manager

### Product Model Example:

TypeScript
```bash
interface Product {
  id: string;        // Unique identifier
  name: string;      // Full product name
  image: string;     // Relative path to image
  price: number;     // Current selling price
  fullPrice: number; // Original price (used to calculate discount)
  year: number;      // Release year (for "Newest" sorting)
  capacity: string;  // Storage capacity (e.g., "64GB")
  color: string;     // Device color (e.g., "Space Gray")
}
```

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/product-catalog-frontend/product-catalog-frontend.git](https://github.com/product-catalog-frontend/product-catalog-frontend.git)
   cd product-catalog-frontend

2. Install dependencies

```bash
npm install
```
Start the development server:
```bash
npm run dev
```
📍 The application will be available at http://localhost:5173
