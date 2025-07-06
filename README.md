# Vulnerability Manager

Create, edit, and track your project’s vulnerabilities with ease.

---

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Architecture & Data Flow](#architecture--data-flow)
- [API Endpoints](#api-endpoints)
- [Linting & Formatting](#linting--formatting)
- [Building & Deployment](#building--deployment)

---

## Tech Stack

- **React** + **TypeScript**
- **UI**: React Bootstrap, Bootstrap Icons
- **State & Data Fetching**: TanStack Query
- **HTTP Calls**: Axios
- **Routing**: React Router
- **Tooling**: Prettier, ESLint
- **Deployment**: GitHub Pages

Learn how React and TypeScript bring type-safety and maintainability to modern apps.

---

## Project Structure

- **src/**
  - **components/**
  - **contexts/**
  - **hooks/**
  - **pages/**
  - **services/**
  - **types/**
  - **utils/**
  - `App.tsx`
  - `index.tsx`

- **components/**: reusable UI widgets
- **contexts/**: global state providers (e.g. auth)
- **hooks/**: custom hooks (e.g. useVulnerabilities)
- **pages/**: route-based views
- **services/**: Axios-based API wrappers
- **types/**: shared TypeScript interfaces
- **utils/**: helper functions and constants

---

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm (latest)

### Installation

clone repo
cd vulnerability-manager
npm install
npm run dev

## Configuration

Create .env using .env.example:

REACT_APP_API_URL=https://backend-url.com

This configures Axios base URL.

## Architecture & Data Flow

- **TanStack Query** handles data fetching, caching, loading/error states, background refetching, and request deduplication—reducing boilerplate and improving performance through smart caching strategies
- **Axios** in `services/` manages HTTP communication with the backend.
- **React Router** defines client-side routes—mapping views

## API Endpoints

All communication occurs with a separate backend:

| Method | Endpoint           | Description                   |
| ------ | ------------------ | ----------------------------- |
| POST   | `/auth`            | User login                    |
| GET    | `/auth/me`         | Retrieve current user profile |
| GET    | `/vulnerabilities` | List all vulnerabilities      |
| POST   | `/vulnerabilities` | Create a new vulnerability    |
| PUT    | `/vulnerabilities` | Update vulnerability details  |
| POST   | `/logout`          | Log out the current user      |

## Linting & Formatting

- **ESLint** ensures code quality and consistency by identifying problematic patterns and enforcing coding standards across the codebase.

- **Prettier** auto-formats code on save, ensuring consistent code styling across your project. It eliminates the need for manual formatting.

## Build & Deployment

To build and deploy your React app:

1. **Build the project**:

   npm run build

2. **Deploy the project to Github Pages**:

   npm run deploy
