# 🎬 Movie Browser App

A modern, responsive Movie Browser application built with **React, TypeScript, Vite, TanStack Query, Zustand, React Router, Axios, and Tailwind CSS**.

The application uses the **TMDB API** to browse trending movies, search movies, view detailed movie information, and manage favourite movies.

The project was also migrated from **JavaScript to TypeScript** and includes automated testing with **Vitest, React Testing Library, and MSW**, along with a **GitHub Actions CI pipeline**.

---

## 🌐 Live Demo

🔗 https://2-month-react-plan-r8om.vercel.app

---

## ✨ Features

* 🔥 Trending Movies
* 🔍 Movie Search
* 🎬 Movie Details
* 🎭 Cast Information
* 🎞️ Similar Movies
* ▶️ YouTube Trailer
* ❤️ Add / Remove Favourite Movies
* 💾 Persistent Favourites with Zustand Persist
* 🌙 Dark / Light Theme
* ⚡ Server State Management with TanStack Query
* 🔄 Infinite Movie Search
* ⏳ Debounced Search
* 📱 Fully Responsive Design
* 🎨 Modern UI with Tailwind CSS
* ✨ Smooth Animations with Motion
* 🛡️ Error Boundary Handling
* 🧪 Unit & Component Testing
* 🌐 API Mocking with MSW
* 📊 Test Coverage
* 🚀 Automated CI with GitHub Actions
* 🏗️ TypeScript-based Architecture

---

## 🛠️ Tech Stack

### Frontend

* React 19
* TypeScript
* Vite
* React Router
* Tailwind CSS

### State Management

* Zustand
* Zustand Persist Middleware

### Server State

* TanStack Query

### HTTP Client

* Axios

### UI & Animation

* React Icons
* Motion
* React Loading Skeleton
* React Toastify

### API

* TMDB API

### Testing

* Vitest
* React Testing Library
* Testing Library User Event
* Jest DOM
* MSW (Mock Service Worker)
* V8 Coverage

### Code Quality & CI

* ESLint
* TypeScript Compiler
* GitHub Actions

---

## 📂 Project Structure

```text
Project
│
├── src
│   │
│   ├── api
│   │   └── tmdbClient.ts
│   │
│   ├── components
│   │   ├── CastCard.tsx
│   │   ├── ErrorFallback.tsx
│   │   ├── Footer.tsx
│   │   ├── MovieCard.tsx
│   │   ├── MovieGrid.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavLinks.tsx
│   │   ├── QueryErrorBoundary.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── skeletons
│   │
│   ├── hooks
│   │   ├── useDebounce.ts
│   │   ├── useInfiniteSearchMovies.ts
│   │   ├── useMovie.ts
│   │   ├── useMovieCredits.ts
│   │   ├── useMovieVideos.ts
│   │   ├── useSimilarMovies.ts
│   │   └── useTrendingMovies.ts
│   │
│   ├── layouts
│   │   └── MainLayout.tsx
│   │
│   ├── mocks
│   │   ├── handlers.ts
│   │   └── server.ts
│   │
│   ├── pages
│   │   ├── FavouritesPage.tsx
│   │   ├── Home.tsx
│   │   ├── MovieDetail.tsx
│   │   ├── NotFound.tsx
│   │   └── SearchPage.tsx
│   │
│   ├── providers
│   │   └── AppProvider.tsx
│   │
│   ├── routes
│   │   └── AppRouter.tsx
│   │
│   ├── services
│   │   └── movieService.ts
│   │
│   ├── store
│   │   ├── favouriteStore.ts
│   │   └── themeStore.ts
│   │
│   ├── test
│   │   └── setup.ts
│   │
│   ├── types
│   │   └── tmdb.ts
│   │
│   └── utils
│       ├── formatDate.ts
│       ├── formatRuntime.ts
│       └── image.ts
│
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

---

## 🏗️ Architecture

### TanStack Query

TanStack Query is used for server state management.

It provides:

* Automatic caching
* Request deduplication
* Background refetching
* Loading states
* Error handling
* Stale data management
* Infinite queries for movie search

---

### Zustand

Zustand is used for client-side state.

It manages:

* Favourite movies
* Theme state

Favourite movies are persisted using Zustand's persist middleware.

---

### Axios

A centralized Axios client is used for TMDB API requests.

The client provides:

* Base URL configuration
* Request timeout
* Request interceptor
* Centralized API configuration
* Environment-based API key

---

### React Router

React Router handles application navigation and provides:

* Nested routes
* Dynamic movie routes
* Shared application layout
* 404 Not Found page
* Navigation between movie pages

---

### Custom Hooks

The application uses custom hooks to keep data-fetching and reusable logic separated from UI components.

Examples:

```text
useMovie()
useMovieCredits()
useMovieVideos()
useSimilarMovies()
useTrendingMovies()
useInfiniteSearchMovies()
useDebounce()
```

---

### TypeScript

The project was migrated from JavaScript to TypeScript to provide:

* Static type checking
* Safer component props
* Typed TMDB API responses
* Better IDE autocomplete
* Safer state management
* Improved maintainability

TypeScript validation is also executed automatically in CI.

---

## 🧪 Testing

The project includes automated tests using:

* **Vitest**
* **React Testing Library**
* **Testing Library User Event**
* **Jest DOM**
* **MSW**

MSW is used to mock TMDB API responses during tests so tests do not depend on the real API.

### Tested Areas

The test suite covers:

* Components
* Pages
* Hooks
* Services
* Zustand stores
* Utility functions
* API interactions
* Loading states
* Empty states
* Movie details
* Search functionality
* Favourite functionality
* Navigation
* Trailer rendering
* Similar movies

### Test Results

Current test suite:

```text
Test Files: 11 passed
Tests:      38 passed
Coverage:   96%+
```

---

## 📊 Test Coverage

The project currently achieves approximately:

```text
Statements: 96%+
Branches:   91%+
Functions:  95%+
Lines:      96%+
```

Coverage is generated using the **V8 coverage provider**.

Run coverage locally:

```bash
npm run test:coverage
```

---

## 🌐 API Mocking with MSW

Mock Service Worker is used during testing to intercept TMDB API requests.

Example:

```text
src/mocks
├── handlers.ts
└── server.ts
```

This allows tests to simulate:

* Successful API responses
* Empty search results
* Movie details
* Cast data
* Similar movies
* Movie videos

The production application continues to use the real TMDB API.

---

## 🔄 Continuous Integration

The project uses **GitHub Actions** for automated CI.

Workflow:

```text
Push / Pull Request
        ↓
Checkout repository
        ↓
Install dependencies
        ↓
TypeScript check
        ↓
ESLint
        ↓
Vitest tests
        ↓
Coverage
        ↓
Production build
        ↓
CI PASS ✅
```

The workflow is located at:

```text
.github/workflows/ci.yml
```

CI automatically verifies that the project:

* Passes TypeScript checks
* Passes ESLint
* Passes all tests
* Generates test coverage
* Builds successfully for production

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/Faizan-Yasin/2-Month-React-Plan.git
```

```bash
cd "Week 6/Day 6/Project"
```

### 2. Install Dependencies

```bash
npm install
```

For CI environments:

```bash
npm ci
```

### 3. Create Environment File

Create:

```text
.env.local
```

Add your TMDB API key:

```env
VITE_TMDB_KEY=YOUR_TMDB_API_KEY
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Run TypeScript Check

```bash
npm run tsc
```

### 6. Run ESLint

```bash
npm run lint
```

### 7. Run Tests

```bash
npm test
```

### 8. Run Tests Once

```bash
npx vitest run
```

### 9. Run Tests with Coverage

```bash
npm run test:coverage
```

### 10. Build for Production

```bash
npm run build
```

---

## 📜 Available Scripts

| Command                 | Description                  |
| ----------------------- | ---------------------------- |
| `npm run dev`           | Start development server     |
| `npm run build`         | Create production build      |
| `npm run preview`       | Preview production build     |
| `npm run lint`          | Run ESLint                   |
| `npm run tsc`           | Run TypeScript type checking |
| `npm test`              | Run Vitest in watch mode     |
| `npm run test:coverage` | Run tests with coverage      |

---

## 🔑 TMDB API

This project uses the **TMDB API** to retrieve movie information.

You need your own TMDB API key to run the project locally.

TMDB:

https://www.themoviedb.org/

The API key should be stored in `.env.local`:

```env
VITE_TMDB_KEY=YOUR_TMDB_API_KEY
```

**Never commit your `.env.local` or API key to GitHub.**

---

## 📸 Screens

The application includes:

* 🏠 Home / Trending Movies
* 🔍 Search Movies
* 🎬 Movie Details
* ❤️ Favourite Movies
* 🌙 Dark / Light Theme
* 📱 Responsive Mobile Layout
* ❌ 404 Not Found Page

---

## 🎯 Project Goals

This project was built as part of a structured **2-Month React Learning Plan**.

The project focuses on practical React development and production-oriented concepts including:

* React fundamentals
* TypeScript
* React Router
* TanStack Query
* Zustand
* Axios
* API integration
* Custom hooks
* Error boundaries
* Responsive UI
* Testing
* API mocking
* Test coverage
* ESLint
* CI/CD fundamentals
* Production project architecture

---

## 👨‍💻 Author

**Faizan Yasin**

GitHub: https://github.com/Faizan-Yasin

---

## ⭐ Acknowledgements

Movie data and images are provided by **TMDB (The Movie Database)**.

This project is built for educational and portfolio purposes.