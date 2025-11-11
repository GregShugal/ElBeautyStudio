# Studio 535

**Bespoke Design & Precision Fabrication Studio**

A full-stack web application for managing custom engraving and fabrication projects with a streamlined 5-step workflow.

---

## Features

### Client-Facing
- **Professional Homepage** - Showcase services with hero section and process overview
- **Quote Request Form** - Detailed intake form for project specifications
- **Portfolio Gallery** - Display completed projects and showcase work
- **Process Page** - Explain the 5-step workflow to clients
- **Responsive Design** - Mobile-friendly interface with warm bronze/charcoal theme

### Admin Dashboard
- **Project Management** - Track all client projects across workflow stages
- **5-Step Workflow Tracking**:
  1. **Intake & Quote** - Client request details and quote generation
  2. **Custom Design** - Design development with mockups and revisions
  3. **Client Approval** - Status updates and communication
  4. **Production Setup** - Manufacturing preparation and settings
  5. **Fulfillment** - Packaging, shipping, and delivery tracking
- **Authentication** - Secure admin access with role-based permissions
- **Database Integration** - Full CRUD operations for all workflow stages

---

## Tech Stack

- **Frontend**: React 19 + TypeScript + Tailwind CSS 4
- **Backend**: Node.js + Express + tRPC 11
- **Database**: MySQL/TiDB with Drizzle ORM
- **Authentication**: Manus OAuth
- **UI Components**: shadcn/ui
- **Fonts**: Playfair Display (headings) + Inter (body)

---

## Getting Started

### Prerequisites
- Node.js 22.x
- pnpm package manager
- MySQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GregShugal/ElBeautyStudio.git
cd ElBeautyStudio
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env` file with the following variables:
```env
DATABASE_URL=mysql://user:password@host:port/database
JWT_SECRET=your-secret-key
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im
VITE_APP_TITLE=Studio 535
VITE_APP_ID=your-app-id
OWNER_OPEN_ID=your-owner-openid
OWNER_NAME=Your Name
```

4. Push database schema:
```bash
pnpm db:push
```

5. Start development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

---

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable UI components
│   │   ├── lib/        # tRPC client setup
│   │   └── App.tsx     # Routes and layout
├── server/             # Backend Node.js application
│   ├── routers.ts      # tRPC procedures
│   ├── db.ts           # Database query helpers
│   └── _core/          # Framework core (OAuth, context)
├── drizzle/            # Database schema and migrations
│   └── schema.ts       # Table definitions
└── shared/             # Shared types and constants
```

---

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm db:push` - Push database schema changes
- `pnpm db:studio` - Open Drizzle Studio (database GUI)

---

## Deployment

This is a full-stack application requiring:
1. **Backend hosting** - Node.js server (Vercel, Railway, Render, etc.)
2. **Database** - MySQL/TiDB instance
3. **Environment variables** - Configure all required env vars

### Recommended Platforms
- **Vercel** - Easy deployment with automatic builds
- **Railway** - Includes database hosting
- **Render** - Free tier available

---

## Workflow Overview

### 1. Intake & Quote
- Client submits project request via form
- Admin reviews details and generates quote
- Quote includes breakdown, timeline, and clarifying questions

### 2. Custom Design Development
- Design team creates mockups based on specifications
- Multiple revisions supported
- Design themes, fonts, and layouts tracked

### 3. Client Approval & Status Updates
- Regular communication with client
- Progress updates and feedback collection
- Design approval workflow

### 4. Production Setup
- Manufacturing checklist preparation
- Engraver settings configuration
- Packaging setup and timeline estimation

### 5. Fulfillment & Delivery
- Final quality inspection
- Custom packaging with care instructions
- Shipping tracking and delivery confirmation

---

## Admin Access

To access the admin dashboard:
1. Navigate to `/admin`
2. Sign in with Manus OAuth
3. Owner account automatically has admin role
4. Manage all projects and workflow stages

---

## Customization

### Branding
- Update `VITE_APP_TITLE` in environment variables
- Modify color palette in `client/src/index.css`
- Replace logo by updating `APP_LOGO` in `client/src/const.ts`

### Database
- Extend schema in `drizzle/schema.ts`
- Add query helpers in `server/db.ts`
- Create new procedures in `server/routers.ts`

---

## License

All rights reserved © 2025 Studio 535

---

## Support

For questions or issues, please open an issue on GitHub or contact the development team.
