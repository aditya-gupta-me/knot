# Knot

A Web based chat app that is secure, fast and reliable.

## Tech Stack

**Backend:** Node.js, Express, PostgreSQL, Sequelize, JWT auth  
**Frontend:** React, Vite, TailwindCSS, Material-UI

## Getting Started

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file with your database credentials:

```
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=knot
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Start the server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app should now be running on `http://localhost:5173`

## Features

- User authentication with JWT
- Role-based access control (user, moderator, admin)
- PostgreSQL database with Sequelize ORM
- Clean REST API structure

## Project Structure

```
backend/
  ├── config/       # DB and auth configuration
  ├── controllers/  # Request handlers
  ├── middlewares/  # JWT verification & validation
  ├── models/       # Sequelize models
  └── routes/       # API routes

frontend/
  └── src/
      ├── components/
      └── pages/
```
