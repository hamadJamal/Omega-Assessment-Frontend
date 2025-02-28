# Grammar Correction Frontend

## Overview

This is the **React + MUI** frontend for the grammar-correction app.  
It features:

- A **Login** page to obtain a JWT for authorization.
- A **Grammar** page where the user can type text; incorrect words are highlighted in **red**.
- **Logout** functionality to clear the token and return to the login screen.

## Key Features

1. **Login & Logout flow:**
   - Stores JWT in `localStorage`.
   - Protects the `/grammar` page.
2. **Grammar Check:**
   - Debounces user input for ~750ms (via a custom `useDebounce` hook) to minimize API calls.
   - Sends the typed text to the backend, receives a list of incorrect tokens, and **highlights** those tokens in red.
3. **Material UI** for a minimal and clean user interface.

## Prerequisites

- **Node.js** (for local development)
- **npm** or **yarn**

## Setup & Installation

1. **Clone** this repository (the frontend) from your version control system.
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure API URL:**
   By default, in `apiService.js`:
   ```javascript
   const api = axios.create({
     baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000/api",
   });
   ```
   If your backend is deployed elsewhere, update `REACT_APP_API_URL` in `.env` or modify the code to match your deployed backend endpoint.
4. **Run the React app in development mode:**
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

## High-Level Flow

### Login page (`/login`):

- User enters username and password.
- On success, JWT is saved in `localStorage`, and the user is redirected to `/grammar`.

### Grammar page:

- User types text in a multiline text field.
- After 750ms of no typing, the text is sent to the backend.
- The backend returns an array of incorrect tokens (with `index`, `original`, `suggestion`).
- The frontend highlights those tokens in red by matching indexes to the split words in the user’s typed text.

### Logout page:

- Clears the JWT and redirects to `/login`.

## Usage

1. Navigate to `http://localhost:3000/login`.
2. Login using credentials (e.g., `admin` / `1234`).
3. Enter text on `/grammar`. Watch incorrect words highlighted in red above the text field.
4. Logout via the top navigation to clear the token and return to the login page.

## Deployment

Deploy to **Netlify**, **Vercel**, or similar.  
Ensure your `.env` file or the `apiService.js` `baseURL` points to the live backend.
For example:

```bash
REACT_APP_API_URL=https://my-backend.onrender.com/api
```
