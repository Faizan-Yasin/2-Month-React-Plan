# 🎬 Movie Browser App

A modern Movie Browser application built with **React**, **Vite**, **TanStack Query**, **Zustand**, **React Router**, **Axios**, and **Tailwind CSS**. The app uses the **TMDB API** to browse trending movies, search movies, view movie details, and manage favourite movies.

---

## 🌐 Live Demo

🔗 https://2-month-react-plan-r8om.vercel.app

---

## ✨ Features

- 🔥 Trending Movies
- 🔍 Search Movies
- 🎥 Movie Detail Page
- ❤️ Favourite Movies
- 🌙 Dark / Light Theme
- ⚡ Fast Data Fetching with TanStack Query
- 💾 Persistent Favourites using Zustand Persist
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 🚀 Production Ready Architecture

---

## 🛠 Tech Stack

### Frontend

- React 19
- Vite
- React Router DOM
- Tailwind CSS

### State Management

- Zustand
- Zustand Persist Middleware

### Server State

- TanStack Query

### HTTP Client

- Axios

### Icons

- React Icons

### Animation

- Motion

### API

- TMDB (The Movie Database)

---

## 📂 Project Structure

```text
src
│
├── api
│   ├── tmdbClient.js
│   └── movieService.js
│
├── components
│   ├── Navbar
│   ├── Footer
│   ├── MovieCard
│   ├── SearchBar
│   ├── Skeletons
│   └── ErrorBoundary
│
├── pages
│   ├── Home
│   ├── Search
│   ├── MovieDetail
│   └── Favourites
│
├── hooks
│
├── layouts
│
├── store
│
├── routes
│
└── utils
```

---

## 🏗 Architecture Decisions

### TanStack Query

Used for all server state because it provides:

- Automatic caching
- Background refetching
- Request deduplication
- Loading states
- Error handling
- Stale data management

---

### Zustand

Used for client-side state because:

- Lightweight
- Simple API
- Persist middleware
- Perfect for favourite movies and theme

---

### Axios

A centralized Axios client is used with:

- Base URL
- Timeout
- Request interceptors
- Response interceptors
- Centralized error handling

---

### React Router

Application uses nested routes with a shared Layout containing:

- Navbar
- Footer
- Page Outlet

---

### Tailwind CSS

Tailwind is used for:

- Responsive layouts
- Utility-first styling
- Fast development
- Consistent design system

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone <your-repository-url>
```

---

### Install Dependencies

```bash
npm install
```

---

### Create Environment File

Create:

```text
.env.local
```

Add your TMDB API Key:

```env
VITE_TMDB_KEY=YOUR_TMDB_API_KEY
```

---

### Start Development Server

```bash
npm run dev
```

---

### Build for Production

```bash
npm run build
```

---

## 🔑 TMDB API

This project uses data from:

https://www.themoviedb.org/

You need your own API key to run the project locally.

---

## 📸 Screens

- Home Page
- Search Page
- Movie Detail
- Favourite Movies
- Dark Mode
- Mobile Responsive Layout

---

## 📚 Learning Goals

This project was built while following a structured **2-Month React Learning Plan** focusing on:

- React Fundamentals
- React Router
- TanStack Query
- Zustand
- Axios
- API Integration
- Production Project Structure
- Clean Code Practices

---

## 👨‍💻 Author

**Faizan Yasin**

GitHub: https://github.com/YOUR_GITHUB_USERNAME

YouTube: **Faizan Yasin Tech Guide**