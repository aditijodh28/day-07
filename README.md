# 🚀 Day 7 — Next.js + Node.js Employee Management Dashboard

A full-stack **Employee Management Dashboard** developed as part of the PugArch Internship Technical Training Program.

This project demonstrates modern frontend development using **Next.js and TypeScript**, along with backend **REST API development using Node.js and Express.js**.

---

## 📌 Project Overview

The Day 7 project converts the Employee Dashboard into a modern full-stack application.

### Frontend

Built using:

* Next.js
* React
* TypeScript
* Tailwind CSS
* App Router

### Backend

Built using:

* Node.js
* Express.js
* REST API
* Middleware
* Controllers
* Services
* Models
* Validation
* Authentication basics
* Error handling

---

## 🎯 Objective

The main objectives of this project are:

* Understand modern React application development
* Learn the Next.js App Router
* Create static and dynamic routes
* Understand Server and Client Components
* Fetch data from a backend API
* Create loading and error states
* Build REST APIs using Express
* Understand routing and controllers
* Implement middleware
* Implement request validation
* Understand authentication basics
* Handle API errors
* Organize backend code using a logical architecture

---

## ✨ Features

### Employee Dashboard

* View all employees
* View individual employee details
* Create a new employee
* REST API integration
* Responsive user interface
* Loading states
* Error handling

### REST API

The backend provides:

* GET employees
* GET employee by ID
* POST new employee
* PUT employee
* DELETE employee

### Backend Architecture

The backend follows:

```text
Routes
   ↓
Middleware
   ↓
Controllers
   ↓
Services
   ↓
Models
   ↓
Response
```

---

## 🛠️ Technologies Used

| Technology   | Purpose                        |
| ------------ | ------------------------------ |
| Next.js      | Frontend framework             |
| React        | UI development                 |
| TypeScript   | Type-safe JavaScript           |
| Tailwind CSS | Styling                        |
| Node.js      | Backend runtime                |
| Express.js   | REST API framework             |
| npm          | Package management             |
| REST API     | Frontend-backend communication |
| Git & GitHub | Version control                |

---

# 📂 Project Structure

```text
day-07/
│
├── nextjs-app/
│   │
│   ├── app/
│   │   ├── employees/
│   │   │   ├── page.tsx
│   │   │   │
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   └── globals.css
│   │
│   ├── public/
│   ├── package.json
│   └── ...
│
├── node-api/
│   │
│   ├── src/
│   │   ├── controllers/
│   │   │   └── employeeController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   └── errorMiddleware.js
│   │   │
│   │   ├── models/
│   │   │   └── employeeModel.js
│   │   │
│   │   ├── routes/
│   │   │   └── employeeRoutes.js
│   │   │
│   │   ├── services/
│   │   │   └── employeeService.js
│   │   │
│   │   ├── utils/
│   │   │   └── validation.js
│   │   │
│   │   └── server.js
│   │
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
└── README.md
```

---

# 🌐 Application Routes

The Next.js application contains the following routes:

| Route               | Description        |
| ------------------- | ------------------ |
| `/`                 | Home page          |
| `/employees`        | Employee dashboard |
| `/employees/create` | Create employee    |
| `/employees/[id]`   | Employee details   |

### Dynamic Route

The following route is dynamic:

```text
/employees/[id]
```

Examples:

```text
/employees/1
/employees/2
/employees/3
```

---

# 🔌 Backend API Endpoints

The Express backend runs on:

```text
http://localhost:5000
```

## Get All Employees

```http
GET /api/employees
```

Returns all employees.

---

## Get Employee By ID

```http
GET /api/employees/:id
```

Example:

```http
GET /api/employees/1
```

---

## Create Employee

```http
POST /api/employees
```

Example request:

```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "salary": 65000,
  "department": "Marketing"
}
```

---

## Update Employee

```http
PUT /api/employees/:id
```

Example:

```http
PUT /api/employees/1
```

Request body:

```json
{
  "name": "Aditi Sharma",
  "email": "aditi.sharma@example.com",
  "salary": 75000,
  "department": "IT"
}
```

---

## Delete Employee

```http
DELETE /api/employees/:id
```

Example:

```http
DELETE /api/employees/5
```

---

# 🔐 Authentication

The API demonstrates basic authentication using an API key.

Request header:

```text
x-api-key: day7-secret-key
```

The API key is stored in an environment variable.

Example:

```env
API_KEY=day7-secret-key
```

> For a production application, a stronger authentication system such as JWT or session-based authentication should be used.

---

# ⚙️ Environment Variables

Create a `.env` file inside:

```text
node-api/
```

Add:

```env
PORT=5000
API_KEY=day7-secret-key
```

The `.env` file should not be committed to GitHub.

---

# 📦 Installation

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd day-07
```

---

# 🖥️ Run Backend

Open a terminal:

```bash
cd node-api
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Backend will run at:

```text
http://localhost:5000
```

---

# 🌐 Run Frontend

Open another terminal:

```bash
cd nextjs-app
```

Install dependencies:

```bash
npm install
```

Start Next.js:

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:3000
```

---

# 🧪 Testing

The API can be tested using:

* Postman
* Thunder Client
* REST Client
* Browser for GET requests

Test the following operations:

```text
GET
POST
PUT
DELETE
```

Example:

```text
GET http://localhost:5000/api/employees
```

Required header:

```text
x-api-key: day7-secret-key
```

---

# 📊 Sample Employee Data

The application contains sample employee records such as:

| ID | Name   |  Salary | Department |
| -: | ------ | ------: | ---------- |
|  1 | Aditi  | ₹50,000 | IT         |
|  2 | Kartik | ₹60,000 | HR         |
|  3 | Sneha  | ₹45,000 | Finance    |
|  4 | Priya  | ₹55,000 | IT         |
|  5 | Neha   | ₹70,000 | IT         |

---

# 🧩 Concepts Learned

## Next.js

* App Router
* Pages
* Layouts
* Dynamic Routes
* Server Components
* Client Components
* Data Fetching
* Loading States
* Error Handling
* Environment Variables

## Node.js

* Node.js runtime
* npm
* Modules
* Environment variables
* Server creation

## Express.js

* Express application
* Routing
* Controllers
* Middleware
* REST APIs
* Request and Response
* Validation
* Authentication basics
* Error handling

---

# 🏗️ Backend Architecture

The project follows a layered architecture.

### Routes

Defines API endpoints.

```text
routes/
```

### Controllers

Handles HTTP requests and responses.

```text
controllers/
```

### Services

Contains business logic.

```text
services/
```

### Models

Stores and represents employee data.

```text
models/
```

### Middleware

Handles tasks such as authentication and errors.

```text
middleware/
```

### Utils

Contains reusable helper functions.

```text
utils/
```

---

# 🔄 Application Flow

```text
                 ┌─────────────────────┐
                 │      Next.js UI     │
                 │   localhost:3000    │
                 └──────────┬──────────┘
                            │
                            │ HTTP Request
                            ▼
                 ┌─────────────────────┐
                 │    Express Server   │
                 │   localhost:5000    │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │      Middleware     │
                 │ Authentication      │
                 │ Validation          │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │     Controller      │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │       Service       │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │        Model        │
                 │  Employee Data      │
                 └─────────────────────┘
