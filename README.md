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
- 💨 **Faster Perceived Loading Time** - Because static content is shown immediately, users perceive the page as loading faster. This can help avoid the "blank screen" experience where everything appears to be stuck while data loads.

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
- A utility function is included to consistently extract and display proper error messages.

---

## 🗂️ Folder Architecture

This application follows a combination of:

- **Domain-Driven Design (DDD)** – for logical separation of concerns
- **[Atomic Design principles](https://rjroopal.medium.com/atomic-design-pattern-structuring-your-react-application-970dd57520f8)** – for reusable and scalable component structure

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

### ✨ Redesign Approach

- **Layout:** The skip selection page was restructured for a more intuitive flow. Skip options are now clearer and easier to interact with.
- **UI/UX Enhancements:**
  - Improved colors, typography, and spacing for better readability.
  - Enlarged buttons for easier interaction, especially on mobile devices.
  - Added hover and focus states for better interactivity.
- **Accessibility:**
  - Ensured sufficient color contrast.
  - Included ARIA labels for form elements to support screen readers.

### 🧼 Clean & Maintainable React Code

- **Component Structure:**
  - Followed [Atomic Design](https://rjroopal.medium.com/atomic-design-pattern-structuring-your-react-application-970dd57520f8) for reusable and scalable components.
- **State Management:**
  - Used React hooks (`useState`, `useEffect`) to manage state with clear separation of concerns.
- **Error Handling:**
  - Wrapped async calls in `try...catch` blocks to prevent UI crashes and handle failures gracefully.

### 📱 Responsiveness

- **Mobile-First Design:** Optimized layout to adapt seamlessly across mobile, tablet, and desktop.
- **Responsive Grid System:** Ensures consistent alignment and spacing across screen sizes.
- **Cross-Device Testing:** Verified layout and behavior across various devices for consistent UX.

### ⚡ UI & Performance Enhancements

- **Skeleton Loaders:** Improve perceived speed by showing placeholders while data loads.
- **Async Data Fetching:** Skip options are fetched dynamically; users receive immediate feedback through loading indicators.
- **Visual Hierarchy:** Clean typography and layout guide the user toward key actions and simplify the decision-making process.
