# SMS Web Frontend

This is the frontend application for the SMS Messaging API. It provides a simple and intuitive UI to register, log in, and send SMS messages using the backend service.

---

## Getting Started

### Prerequisites

- Node.js **20.13.1** or higher (recommended)
- npm

---

### Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/JesfrinGnZ/sms-web
  cd sms-web
  ```

2. Install dependencies:

  ```bash
  npm install
  ```

3. Start the development server:

  ```bash
  npm run dev
  ```

4. Visit the app in your browser:

  <http://localhost:5173>

## 🧩 Project Structure

The frontend application follows a modular folder structure for scalability and separation of concerns:

## 📁 Project Folder Overview

- `api/` – Contains the Axios instance and API service functions to interact with the backend.
- `components/` – Reusable and stateless UI components, such as the SMS form.
- `features/` – Feature-based folder structure grouping pages by domain (e.g., `auth`, `sms`).
  - `auth/` – Pages related to authentication like login and registration.
  - `sms/` – Page responsible for sending SMS messages.
- `routes/` – Contains route-related logic, including protected routes (`PrivateRoute`).
- `types/` – Shared TypeScript interfaces and type definitions used across the app.
- `App.css` – Global styling for the application.
- `main.tsx` / `App.tsx` – Entry point and root component of the React application.

### 🔹 Highlights

- **Modular features** (`auth/`, `sms/`) improve maintainability and scalability.
- **Type safety** with dedicated files for DTOs/interfaces in `types/`.
- **Routing logic** is encapsulated in `PrivateRoute.tsx` to protect authenticated views.
- **Reusable UI components** (e.g., `SmsForm`) live under `components/`.

## Notable Dependencies

- **React 19** – Core UI library for building user interfaces.
- **React Hook Form** – Efficient and scalable form management and validation.
- **Axios** – Promise-based HTTP client for API requests.
- **Material UI (MUI)** – Component library for styled and accessible UI elements.
- **React Router DOM v7** – Declarative routing for React applications.
- **Vite** – Fast development server and build tool optimized for modern frameworks.
- **TypeScript** – Adds static typing to improve code reliability and developer experience.

---

## Authentication Flow

- Upon registering or logging in, the backend returns a **JWT token**.
- This token is stored in `localStorage` and automatically included in the `Authorization` header for authenticated API calls.
- After successful login or registration, the user is redirected to the **SMS form page** to send a message.

## 📫 API Integration

Make sure the backend is running at: <http://localhost:8080>

If needed, update the base URL in the Axios `apiClient` configuration file to match your backend environment.
