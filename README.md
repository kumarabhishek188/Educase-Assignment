# PopX Assignment

A small mobile-first React app that mimics a 4-step flow with a boxed "phone" UI, bottom navigation, and simple auth-like behavior using localStorage.

## 🚀 Live Demo
Here is my live link: [Live Project](https://educase-abhishek.netlify.app/)

## Tech Stack
- React 19 + React Router 7
- Vite 7
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- ESLint (flat config)

## Features
- Pages: Landing (step 1), Signup (step 2), Signin (step 3), Account Settings (step 4)
- Boxed “phone” layout with Home/Prev/Next bottom bar
- Sign up form with real-time controlled inputs
  - Phone number restricted to exactly 10 digits
- Sign in form
  - Login button enables and turns purple when inputs are valid
  - Validates against users saved during sign up (localStorage)
- Account Settings shows the logged-in user’s name and email
  - If not logged in or invalid login, defaults are shown
- Data persistence with `localStorage`

## Getting Started
1. Install
   - macOS/Linux/Windows (Node 18+ recommended)
   ```bash
   npm install
   ```
2. Run dev server
   ```bash
   npm run dev
   ```
   Vite will print a local URL (e.g. http://localhost:5173)
3. Build for production
   ```bash
   npm run build
   ```
4. Preview production build
   ```bash
   npm run preview
   ```

## How it works
- Signup: saves/updates a user in `localStorage` under `users` and sets `currentUserEmail`
- Signin: checks `users` for matching email/password
  - If valid: sets `currentUserEmail`, navigates to 4th page with user state
  - If invalid: removes `currentUserEmail`, navigates to 4th page showing defaults
- Account Settings (4th page): prefers router state; falls back to `currentUserEmail` lookup; otherwise shows defaults

## Clearing saved data
If you want to reset the app’s saved users, clear site data in the browser DevTools or run in the console:
```js
localStorage.removeItem('users');
localStorage.removeItem('currentUserEmail');
```

## Scripts
- `npm run dev` – start Vite dev server
- `npm run build` – build for production
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## Project Structure
```
src/
  pages/               # Landing, Signup, Signin, AccountSetting
  components/          # Input, BottomNav
  assets/              # Static assets
  main.jsx             # App bootstrap
  App.jsx              # Routes
  index.css            # Tailwind import
```

