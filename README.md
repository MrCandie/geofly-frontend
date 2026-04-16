# StadiumPass – The Elite Stadium Management Portal

StadiumPass is a high-performance, modern web application designed for scouts and sports enthusiasts to manage match tickets, flights, and accommodations in a unified dashboard. Built with a focus on speed, precision, and "charming" UI/UX, it provides a seamless transition between light and dark modes tailored for the modern sports professional.

StadiumPass – The Elite Stadium Management Portal
StadiumPass is a high-performance, modern web application designed for scouts and sports enthusiasts to manage match tickets, flights, and accommodations in a unified dashboard. Built with a focus on speed, precision, and a "charming" UI/UX, it provides a seamless transition between light and dark modes tailored for the modern sports professional.

# Links

## Live Demo: https://geofly-frontend-dun.vercel.app

## Repository: https://github.com/MrCandie/geofly-frontend

# Features

- Unified Dashboard: Manage match tickets, travel flights, and hotel accommodations from a single command center.

- Persistent Identity: Secure and seamless user identification powered by FingerprintJS Pro.

- Dynamic Theming: Smooth, 500ms transition between "Pristine White" and "Stadium Emerald" dark modes.

- Real-Time Sync: Data fetching and state mutations handled via TanStack React Query for zero-latency UI updates.

- Responsive Navigation: A mobile-first approach featuring a bottom-triggered drawer for optimal one-handed use.

- Instant Feedback: Interactive toast notifications via React Toastify for all system actions.

# Tech Stack

- Core: React 18+ (Vite) & TypeScript

- State & Fetching: TanStack React Query (v5)

- Styling: Tailwind CSS

- Icons: Lucide React

- Notifications: React Toastify

# Design Decisions

The "Stadium Emerald" Aesthetic: The UI utilizes a deep palette (#001c10) contrasted with "Stadium Gold" (#e6b810) to evoke the prestige of elite sports venues.

Mobile Drawer Architecture: To combat "reachability" issues on modern devices, the sidebar transforms into a bottom-anchored drawer on mobile, triggered by a floating action button.

Silent OAuth Handshake: The application features a specialized AppLayout that extracts tokens from Google OAuth redirects, authenticates the user, and immediately cleans the URL to protect sensitive data.

Performance Engineering: Extensive use of CSS transitions and backdrop blurs (backdrop-blur-md) ensures the interface feels premium without sacrificing frame rates.

# Setup Instructions

1. Clone the Repository
   git clone https://github.com/MrCandie/geofly-frontend
   cd geofly-frontend

2. Install Dependencies
   npm install

3. Configure Environment Variables

Create a .env file in the project root and set the backend API URL:

### VITE_API_URL=

4. Run Locally
   npm run dev

App will be available at:

http://localhost:5173
