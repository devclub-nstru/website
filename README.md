# DevClub Website
**Create. Innovate. Collaborate.**

Welcome to the official repository for the DevClub website!

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## About

This project is the online presence for DevClub NSTxRU, showcasing our projects, events, and achievements. It is built with a modern React frontend and an Express backend, designed for scalability and ease of contribution.

---

## Features

- Responsive landing page with animated sections
- Projects showcase with status and tech stack
- Events carousel with registration links
- Themed UI with custom fonts and styles
- Modular, maintainable codebase
- Easy local development and deployment

---

## Tech Stack

- **Frontend:** React 19, Vite, Styled Components, React Router, Embla Carousel, AOS (Animate On Scroll)
- **Backend:** Node.js, Express
- **Styling:** CSS-in-JS (styled-components), custom fonts
- **Other:** ESLint, Prettier

---

## Project Structure

```
/
├── client/         # React frontend
│   ├── public/     # Static assets (images, fonts)
│   ├── src/        # Source code (components, pages, styles)
│   └── ...
├── server/         # Express backend
│   ├── src/        # Server source code
│   └── ...
├── README.md
└── LICENSE
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the repository

```sh
git clone https://github.com/devclub-nstru/website.git
cd website
```

### 2. Install dependencies

#### Frontend

```sh
cd client
yarn install
or
npm install
```

#### Backend

```sh
cd ../server
yarn install
or
npm install
```

### 3. Run the development servers

#### Start the backend

```sh
cd server
yarn dev
or 
npm run dev
```

#### Start the frontend

Open a new terminal:

```sh
cd client
yarn dev
or 
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:8000](http://localhost:8000)

---

## Available Scripts

### Frontend (`client/`)

- `npm run dev` / `yarn dev` – Start the React development server
- `npm run build` / `yarn build` – Build for production
- `npm run preview` / `yarn preview` – Preview the production build
- `npm run lint` / `yarn lint` – Lint the code

### Backend (`server/`)

- `npm run dev` / `yarn dev` – Start the Express server with auto-reload
- `npm run lint` / `yarn lint` – Lint the server code
- `npm run lint:fix` / `yarn lint:fix` – Lint and fix issues

---

## Contributing

See the [CONTRIBUTING.md]() for the contribution guidelines.

---

## License

This project is licensed under the [Apache License 2.0](LICENSE).

---

## Contributors
Thank you to all the contributors for helping to develop and maintain this website.
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![Contributors](https://contrib.rocks/image?repo=devclub-nstru/website)](https://github.com/devclub-nstru/website/graphs/contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->