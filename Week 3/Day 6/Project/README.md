# Week 3 Project - React Dashboard

A multi-section React dashboard built using Context API, Custom Hooks, Compound Components, and Tailwind CSS.

---

## Features

- Theme Switching (Light / Dark)
- Language Switching (English / Urdu)
- User Profile Management
- Notification System
- Compound Tabs Navigation
- Dashboard Cards
- Responsive Layout
- Zero Prop Drilling

---

# Context Architecture

The application uses multiple contexts instead of one large context.

```
App
│
├── ThemeProvider
│
├── LanguageProvider
│
├── UserProvider
│
├── NotificationProvider
│
└── Dashboard
```

Each context manages only one responsibility.

## ThemeContext

Stores:

- theme
- toggleTheme()

Used by:

- Navbar
- Dashboard
- Settings

---

## LanguageContext

Stores:

- locale
- t(key)
- toggleLanguage()

Used by:

- Navbar
- Dashboard
- Settings

---

## UserContext

Stores:

- user
- updateUser()

Used by:

- Navbar
- Profile

---

## NotificationContext

Stores:

- notifications
- addNotification()
- dismissNotification()

Used by every component.

---

# Why Context Splitting?

Instead of storing everything in one context:

```
Theme
User
Language
Notifications
```

we split them into separate contexts.

Benefits:

- Better performance
- Easier maintenance
- Cleaner code
- Components only re-render when required

---

# How to Add a New Context

### Step 1

Create a new file.

```
src/context/NewContext.jsx
```

---

### Step 2

Create Context.

```jsx
const NewContext = createContext();
```

---

### Step 3

Create Provider.

```jsx
export function NewProvider({ children }) {
    return (
        <NewContext.Provider value={{}}>
            {children}
        </NewContext.Provider>
    );
}
```

---

### Step 4

Create custom hook.

```jsx
export function useNew() {

    const context = useContext(NewContext);

    if (!context) {
        throw new Error(
            "useNew must be used within NewProvider"
        );
    }

    return context;
}
```

---

### Step 5

Wrap the Provider.

```jsx
<AppProviders>

<NewProvider>

<App />

</NewProvider>

</AppProviders>
```

---

### Step 6

Use it anywhere.

```jsx
const {} = useNew();
```

No prop drilling is required.

---

# Technologies

- React
- Context API
- Custom Hooks
- Compound Components
- Tailwind CSS
- Vite

---

# Author

Muhammad Faizan Yasin