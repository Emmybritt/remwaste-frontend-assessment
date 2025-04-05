# React + Vite Application README Setup

# React + Vite Application

This is a [React.js](https://react.dev/) project bootstrapped with [`create-vite`](https://github.com/vitejs/vite/tree/main/packages/create-vite).

---

## 🚀 Getting Started

### 1. Install Project Dependencies

```bash
npm install

# or

yarn install
```

### 2. Run the Development Server

```bash
npm run dev

# or

yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

---

## ⚙️ Optimizations

### 🔄 Partial Rendering

This application optimizes perceived performance through **partial rendering**, a technique where parts of the UI render immediately, while others wait for asynchronous data (like API requests).

In this Vite + React setup:

- **Static UI components** (e.g., `Header`, `HeroSection`) are rendered instantly.
- **Dynamic components** (e.g., `SelectSkipSection`, which fetches external data) are rendered asynchronously after data becomes available.

#### Benefits:

- 🚀 **Fast initial page load** – static components don't wait for API responses.
- ⏱️ **Non-blocking UI** – avoids waiting for all data before rendering the full page.
- **Faster Perceived Loading Time** - Because static content is shown immediately, users perceive the page as loading faster. This can help avoid the "blank screen" experience where everything appears to be stuck while data loads.

### 🦴 Skeleton Loaders

Skeleton loaders are used as fallback UIs for components like `SelectSkipSection` to:

- Reduce Cumulative Layout Shift (CLS)
- Improve perceived speed
- Provide a seamless user experience

---

## 🛠️ Error Handling

Error handling is implemented using standard JavaScript `try...catch` blocks to gracefully handle asynchronous operations like API requests.

This ensures that:

- Errors such as network failures or invalid responses are caught early.
- The user experience isn't broken by unhandled exceptions.
- A utility function is included to consistently extract and display error messages.

---

## 🗂️ Folder Architecture

This application follows a combination of:

- **Domain-Driven Design (DDD)** – for logical separation of concerns
- **Atomic Design principles** – for reusable and scalable component structure

---

## 🌐 Deployment

### ✅ Deploy on Vercel

The easiest way to deploy a Vite app is using the [Vercel platform](https://vercel.com/docs/frameworks/vite), which offers native support for Vite projects.

### 🧩 Other Deployment Options

You can also deploy this app on:

- **Netlify** – Seamless Git integration and continuous deployment
- **AWS Amplify** – Scalable CI/CD with frontend hosting
- **Heroku** – Use a static file server (e.g., Express) for SPA deployment
- **EC2** – For manual or custom server deployments

All these platforms support deploying Vite apps with a `build` script that outputs to the `dist/` directory.

## 🛠️ Key Features & Improvements

Redesign Approach
Layout: The skip selection page was restructured to create a more intuitive flow. The skip options were displayed in a more user-friendly manner, ensuring clarity and ease of selection.

UI/UX: Colors, typography, and spacing were adjusted for better readability and alignment with modern UI trends. Buttons were made larger for better clickability on mobile.

Interactivity: Added hover and focus effects for buttons to improve interactivity.

Accessibility: The design is now more accessible, with sufficient color contrast and ARIA labels for form elements.

Clean & Maintainable React Code
Component Structure: Components were broken down using the atomic design principle. We ensured that the components are reusable and easy to maintain.

State Management: State is handled using React hooks like useState and useEffect, ensuring minimal boilerplate and clear separation of concerns.

Error Handling: Implemented graceful error handling for asynchronous data fetching to ensure the page doesn't break in case of API failures.

Responsiveness
Mobile-First Design: The layout is designed to work seamlessly on both mobile and desktop devices. Media queries are used to adjust the layout based on screen size.

Grid System: A flexible grid system is employed to ensure that the page scales well across different devices.

Testing: The design has been tested on multiple devices to ensure that it is fully responsive and provides a consistent experience.

UI/UX Enhancements
Skeleton Loaders: Used skeleton loaders to improve the perceived loading speed for dynamic data fetching, ensuring a smooth user experience while waiting for the skips data.

Asynchronous Data Loading: The skip options are fetched asynchronously, and loading states are managed to improve the user experience.

Improved Visual Hierarchy: The typography and layout were improved to highlight key actions and make the selection process more intuitive.
