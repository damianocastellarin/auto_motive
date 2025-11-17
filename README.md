# FuturaDrive - Infotainment UI

`FuturaDrive` is a prototype of a modern vehicle infotainment interface, built entirely with **React**, **Tailwind CSS**, and **React Router**. It simulates a digital dashboard for managing comfort, autonomy, diagnostics, settings, and more.


*A preview of the main dashboard of the FuturaDrive system.*

---

## Core Features

The system is divided into main modules, each managing a specific aspect of the vehicle:

* **Dashboard:** The central hub with quick access to all main functions and an at-a-glance vehicle status.
* **Autonomy:** Displays remaining range, a range map, and consumption graphs (using `recharts`).
* **Comfort:** Granular control over climate, seat heating/ventilation, and ambient lighting.
* **Diagnostics:** System status scanning, monitoring of "vitals" (temperatures, pressures), and test execution.
* **Service:** Displays maintenance history and upcoming service deadlines (check-ups, inspections).
* **Profile:** User profile management and overall driving statistics.
* **Energy Saving:** Selection of driving modes (Eco, Normal, Sport) to optimize performance.
* **Telemetry:** Recording and viewing driving session data.
* **Intertime:** Monitors continuous driving time to manage breaks.
* **Settings:** Configuration of system preferences (display, sound, connectivity).

---

## Tech Stack

This project is built using a modern and high-performance technology stack:

* **Frontend:** [React](https://reactjs.org/) (v18+)
* **Routing:** [React Router](https://reactrouter.com/) (v6) for client-side navigation.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a utility-first, responsive design system.
* **Icons:** [Lucide React](https://lucide.dev/) for lightweight and consistent SVG icons.
* **Charts:** [Recharts](https://recharts.org/) for consumption and autonomy graphs.
* **Build Tool:** [Vite](https://vitejs.dev/) (assumed) for a lightning-fast development experience.

---

## Quick Start

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/futura-drive.git](https://github.com/your-username/futura-drive.git)
    cd futura-drive
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open your browser to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Project Structure

The source code is organized logically to promote maintainability and scalability:

```
/src
├── /components
│   ├── /layout       # Structural components (AppHeader, AppFooter)
│   └── /ui           # Atomic UI components (Card, Button, StatItem, ActionItem)
│
├── /constants
│   └── colors.js     # Centralized Tailwind color definitions (Theming)
│
├── /pages
│   ├── Dashboard.jsx # Main application pages
│   ├── Autonomy.jsx  # (and all other pages...)
│   └── ...
│
├── router.js         # Route definitions (React Router config)
├── App.jsx           # Root layout with Header, Footer, and Outlet
├── main.jsx          # Application entry point (React DOM)
└── index.css         # Global styles and Tailwind directives
```

---

## Best Practices Implemented

* **Clean Architecture:** Clear separation between `pages`, `layout`, and `ui` components.
* **Modern Routing:** Use of `createBrowserRouter` and `<Outlet>` from React Router 6.
* **Centralized Theming:** Tailwind classes are managed in `colors.js` to ensure visual consistency and easy theme updates.
* **Reusable Components:** Abstraction of UI logic into reusable components like `StatItem` and `ActionItem` to reduce code duplication.
* **Accessibility (a11y):** Use of `role` and `aria-*` attributes (e.g., in `ToggleSwitch`) to improve the experience for screen readers.