# HirePath

A modern job application tracking app built with Next.js 16, React 19, and TypeScript. Organize, manage, and follow up on your job applications from wishlist to offer — all in one place with a clean, responsive interface.

## Features

- **Application Tracking** — Manage applications across statuses: Wishlist, Applied, Screening, Interviewing, Offer, Accepted, Rejected, and Withdrawn
- **Interview Stage Management** — Log and track multiple interview rounds per application (phone screen, technical, behavioral, onsite, panel, final)
- **Notes** — Attach freeform notes to any application for context and reference
- **Follow-Up Tasks** — Create follow-ups with due dates and statuses (pending, completed, skipped)
- **Dashboard Overview** — At-a-glance stats on your active applications and recent activity
- **Authentication** — Secure sign-in and sign-up with Clerk, with protected routes
- **Responsive Design** — Sidebar layout for desktop, collapsible mobile nav for smaller screens
- **Server-Side Rendering** — Fast initial loads with Next.js App Router and server actions

## Tech Stack

**Framework & Language:**

- Next.js 16.1.6 — React framework with App Router
- React 19.2.3 — UI library
- TypeScript 5 — Type safety

**Styling & Icons:**

- Tailwind CSS v4 — Utility-first CSS framework
- Lucide React 0.564.0 — SVG icon library

**Auth & Database:**

- Clerk 6.38.0 — Authentication and user management
- Drizzle ORM 0.45.1 — TypeScript-first ORM
- Neon Serverless 1.0.2 — Serverless PostgreSQL driver

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A [Clerk](https://clerk.com) account (free tier works)
- A [Neon](https://neon.tech) database (free tier works)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd hire-path
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
DATABASE_URL=your_neon_postgres_connection_string
```

4. Push the database schema:

```bash
npx drizzle-kit push
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
hire-path/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Auth route group
│   │   ├── sign-in/            # Clerk sign-in page
│   │   └── sign-up/            # Clerk sign-up page
│   ├── (main)/                 # Protected route group
│   │   └── applications/       # Applications section
│   │       ├── new/            # Create new application
│   │       └── [id]/           # Application detail & edit
│   ├── _components/            # Dashboard components
│   │   ├── DashboardContents.tsx
│   │   └── DashboardStats.tsx
│   ├── actions/                # Server actions (CRUD)
│   │   ├── applications.ts
│   │   ├── followUps.ts
│   │   ├── interviews.ts
│   │   └── notes.ts
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/                 # Reusable UI components
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── MobileNav.tsx
│   │   ├── NavLink.tsx
│   │   └── SignOutButton.tsx
│   ├── Card.tsx
│   ├── StandardButton.tsx
│   ├── StatusBadge.tsx
│   └── SpinningLoadingCircle.tsx
├── db/                         # Database layer
│   ├── schema.ts               # Drizzle schema definitions
│   ├── queries/                # Reusable DB queries
│   └── index.ts                # DB client
├── types/                      # TypeScript type definitions
├── constants/                  # App-wide constants
├── utils/                      # Utility functions
└── public/                     # Static assets
```

## Available Scripts

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build production bundle
npm start        # Start production server
npm run lint     # Run ESLint code linting
npx drizzle-kit push      # Push schema changes to the database
npx drizzle-kit studio    # Open Drizzle Studio to browse your database
```

## Key Features Implementation

### Authentication

Clerk handles all auth flows. Routes under `(main)/` are protected via middleware in `proxy.ts`. Sign-in and sign-up pages use Clerk's hosted components under `(auth)/`.

### Application CRUD

All data mutations use Next.js Server Actions located in `app/actions/`. Each entity (applications, interviews, notes, follow-ups) has its own actions file with full create, update, and soft-delete support.

### Database Schema

Four tables managed with Drizzle ORM:

- **applications** — Core job application data (company, position, status, salary, dates, URLs)
- **interviewStages** — Interview rounds linked to an application
- **notes** — Freeform notes per application
- **followUps** — Follow-up tasks with due dates and completion status

All records use soft deletes (`deleted_at`) and are scoped per user via `clerk_user_id`.

### Responsive Layout

Desktop uses a persistent sidebar (`components/layout/Sidebar.tsx`). On mobile, the sidebar collapses into a bottom navigation bar (`components/layout/MobileNav.tsx`).

## Deployment

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add all required environment variables (see table below)
4. Deploy

### Other Platforms

HirePath is a standard Next.js application and can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/deploying) for detailed instructions.

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for client-side auth | Yes |
| `CLERK_SECRET_KEY` | Clerk secret key for server-side auth | Yes |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Path to the sign-in page (`/sign-in`) | Yes |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Path to the sign-up page (`/sign-up`) | Yes |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | Redirect after sign-in (e.g. `/`) | Yes |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | Redirect after sign-up (e.g. `/`) | Yes |
| `DATABASE_URL` | Neon PostgreSQL connection string | Yes |
