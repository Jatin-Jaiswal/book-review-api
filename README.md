<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

<p align="center">A scalable and high-performance <a href="https://nestjs.com/" target="_blank">NestJS</a> API for managing book reviews, with PostgreSQL, Redis caching, and Prisma ORM.</p>

<p align="center">
  <a href="https://github.com/Jatin-Jaiswal/book-review-api"><img src="https://img.shields.io/github/stars/Jatin-Jaiswal/book-review-api?style=social" alt="GitHub stars" /></a>
  <a href="https://github.com/Jatin-Jaiswal/book-review-api"><img src="https://img.shields.io/github/last-commit/Jatin-Jaiswal/book-review-api" alt="Last commit" /></a>
  <a href="https://www.npmjs.com/package/@nestjs/core"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="License" /></a>
</p>

---

## 📘 Description

`book-review-api` is a full-featured RESTful backend built with **NestJS**, **PostgreSQL**, and **Redis**, ideal for real-world applications where fast, reliable API performance and caching are critical.

> ✅ Features fully functional CRUD, Redis-based caching, Prisma ORM, and complete testing support.

---

## 📚 Features

* 📖 Add, view, and delete book reviews
* 🔁 Redis caching for performance
* 🧾 Prisma for clean database access
* 🧪 Unit + e2e testing with Jest
* 🧹 ESLint + Prettier configured
* 🗂 Modular & clean codebase

---

## 📦 Tech Stack

| Category  | Technology           |
| --------- | -------------------- |
| Language  | TypeScript           |
| Framework | NestJS               |
| Database  | PostgreSQL           |
| ORM       | Prisma               |
| Caching   | Redis                |
| Testing   | Jest, Supertest      |
| Tools     | Docker, Git, VS Code |

---

## 🚀 Project Setup

### 📁 Clone and Install

```bash
git clone https://github.com/Jatin-Jaiswal/book-review-api.git
cd book-review-api
npm install
```

### ⚙️ Setup Environment

Create a `.env` file with your PostgreSQL DB connection:

```env
DATABASE_URL="postgresql://postgres:jatin5555@localhost:5432/book_review"
```

### 🧱 Setup Prisma

```bash
npx prisma db push
npx prisma generate
```

---

## 📦 Run Project

```bash
# Dev mode
npm run start:dev
```

> ✅ App will start on [http://localhost:3000](http://localhost:3000)

---

## 🌐 API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| GET    | /books      | Fetch all books   |
| GET    | /books/\:id | Fetch book by ID  |
| POST   | /books      | Create a new book |
| DELETE | /books/\:id | Delete a book     |

---

## 🧪 Testing

```bash
npm run test          # Unit Tests
npm run test:e2e      # e2e Tests
npm run test:cov      # Test Coverage
```

📸 Test Output <img src="assets/ScreenShots/tests-passing.png" width="600"/>

---

## 📁 Screenshots

📥 POST Book Success <img src="assets/Screenshots/post-book-success.png" width="600"/>

📤 GET All Books (Redis Cached) <img src="assets/Screenshots/get-all-books-redis.png" width="600"/>

📘 GET Single Book by ID <img src="assets/Screenshots/get-single-book.png" width="600"/>

🗑️ DELETE Book by ID <img src="assets/Screenshots/delete-book.png" width="600"/>

❌ Book Not Found (404) <img src="assets/Screenshots/book-not-found.png" width="600"/>

🐳 Redis Container Running <img src="assets/Screenshots/redis-container-running.png" width="600"/>

🟢 NestJS Server Startup <img src="assets/Screenshots/nestjs-server-startup.png" width="600"/>

---

## 📂 Folder Structure

```
src/
│
├── books/
│   ├── book.controller.ts
│   ├── book.service.ts
│   ├── dto/create-book.dto.ts
│   └── books.module.ts
│
├── redis.ts
├── app.module.ts
└── main.ts
```

---

## 🧼 Code Quality

* Type-safe DTOs
* Fully typed Redis & Prisma usage
* Linting with ESLint
* Formatting with Prettier
* `.env` & `.gitignore` properly setup

---

## 👤 Author

* **Jatin Jaiswal**
* GitHub: [@Jatin-Jaiswal](https://github.com/Jatin-Jaiswal)
* LinkedIn: [Jatin Jaiswal](https://linkedin.com/in/jatinjaiswal00)

---

## 📜 License

Licensed under the [MIT License](LICENSE).

---

## 🧭 Next Steps (Optional)

* Add Swagger API Docs (`@nestjs/swagger`)
* Add JWT-based Authentication
* Add pagination & search
* Deploy via Render, Railway, or Docker + VPS


