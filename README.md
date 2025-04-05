# React + Vite Application README Setup

# React + Vite Application

This is a [React.js](https://react.dev/) project bootstrapped with [`create-vite`](https://github.com/vitejs/vite/tree/main/packages/create-vite).

---

## 🚀 Getting Started

### 1. Install Project Dependencies

``bash
npm install

# or

yarn install
``

### 2. Run the Development Server

``bash
npm run dev

# or

yarn dev
``

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
- 🔄 **Uninterruptible navigation** – users can interact with sections of the page while data is still loading.
- ⏱️ **Non-blocking UI** – avoids waiting for all data before rendering the full page.

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

---

## 📝 Notes

> ⚠️ The following notes are specific to **Next.js** and are **not applicable** to this React + Vite application. Please disregard if you're not working with Next.js:

- In Next.js version 13+, app routing was introduced as an alternative to page routing.
- Also in the latest versions of Next.js, components are _Server Components_ by default.
- Data fetching no longer uses `getServerSideProps`, `getStaticProps`, or `getInitialProps`. Instead, you fetch data directly in server components via async functions.

---

EOF
