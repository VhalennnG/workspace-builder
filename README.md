# Workspace Designer 🖥️✨

**Workspace Designer** is an interactive web application that allows users to visualize and build their dream desk setups. Users can select and customize various types of desks, chairs, and accessories.

This project is built using [Next.js](https://nextjs.org/) (Pages Router) and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Tech Stack

- **Framework:** Next.js 14.2 (React 18)
- **Styling:** Tailwind CSS (with PostCSS & Autoprefixer)
- **Routing:** Next.js Pages Router

## 📁 Directory Structure

Below is an overview of the project's primary structure:

```text
workspace-builder/
├── components/           # Collection of reusable UI components
│   ├── AccessoryCard.jsx # Card component for accessory items
│   ├── CheckoutModal.jsx # Modal for order summary & checkout
│   ├── ItemCard.jsx      # Card component for primary items (Desks & Chairs)
│   ├── SuccessView.jsx   # Post-checkout success screen
│   ├── WorkspacePreview.jsx # Desk setup canvas/visualization
│   └── data.js           # Mock data (Desks, Chairs, Accessories, and Categories)
├── pages/                # App routing (Next.js Pages Router)
│   ├── _app.js           # Next.js application entry point
│   ├── _document.js      # Basic HTML document structure
│   └── index.js          # Main application page (Canvas builder, etc.)
├── styles/               # Global styles
│   └── globals.css       # Main CSS file importing Tailwind directives
├── public/               # Static assets like images or SVG icons
└── tailwind.config.js    # Tailwind CSS configuration (themes, custom colors, etc.)
```

## 🛠️ Development Flow (Developer Guide)

For developers looking to extend or develop new features, please follow this workflow:

### 1\. Running the Project Locally

Ensure you have Node.js installed. Run the following commands in your terminal:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to view the application.

### 2\. Adding or Modifying Item Data

To add new Desk, Chair, or Accessory options, you don't need to modify UI components. Simply edit `components/data.js`.
This file exports constant data such as `DESKS`, `CHAIRS`, and `ACCESSORIES`. Ensure all data properties are complete, specifically `id` (for unique keys) and `svgKey` (if related to graphic rendering on the canvas).

### 3\. Managing the Workspace Canvas

The logic for visualizing data and handling item positioning/interactions within the setup is managed by `components/WorkspacePreview.jsx`. If you encounter visual issues regarding desk placement or canvas asset interactions, focus your debugging and design changes on this file.

### 4\. State Management & Main Page

The application state—including items currently on the canvas, price calculations, and modal status—is centralized in `pages/index.js`. This page acts as the coordinator, managing the state and passing it down via _props_ to the items in the `components/` folder.

### 5\. Interface & Styling

- **Utility-First CSS:** The UI is built using Tailwind CSS utility classes. You can modify the look of components directly within the `components/` folder.
- **Theme Modification:** To overhaul the style system (e.g., adding custom branding colors, font families, etc.), edit `tailwind.config.js`.
- **Advanced Styling:** Any styles that cannot be handled directly by Tailwind utilities are placed in `styles/globals.css`.

### 6\. Building for Production

Use the standard Next.js commands to build the application before deploying to a production server (such as Vercel, Netlify, or a custom Linux server).

```bash
npm run build
npm run start
```
