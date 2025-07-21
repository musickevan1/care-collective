# CARE Collective - Claude Development Guide

## Project Overview

CARE Collective is an accessible web application designed for family caregivers to offer or request help, view community announcements and events, and optionally run background-check flows.

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Database**: Supabase (Postgres, Auth, Realtime, Storage)
- **CMS**: Payload CMS for announcements
- **Hosting**: Vercel
- **Automation**: Vercel Cron
- **Testing**: Playwright for E2E tests

## Development Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run typecheck       # Run TypeScript compiler check

# Setup
./scripts/setup.sh      # Run setup script to check environment

# Database (when Supabase CLI is set up)
supabase start          # Start local Supabase
supabase db reset       # Reset local database
supabase db push        # Push migrations to remote

# GitHub CLI
gh auth login           # Authenticate GitHub CLI
gh repo create          # Create GitHub repository
gh auth status          # Check authentication status

# Vercel CLI
vercel login            # Authenticate Vercel CLI
vercel                  # Deploy to Vercel
vercel whoami           # Check authentication status
vercel env              # Manage environment variables
```

## CLI Tools Setup

### GitHub CLI
```bash
# Install (if not already installed)
# - macOS: brew install gh
# - Linux: https://cli.github.com/manual/installation
# - Windows: winget install --id GitHub.cli

# Authenticate
gh auth login

# Create repository (after authentication)
gh repo create care-collective --public --description "An accessible web application for family caregivers to offer or request help"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/care-collective.git
git push -u origin master
```

### Vercel CLI
```bash
# Install globally
npm install -g vercel

# Authenticate
vercel login

# Deploy
vercel

# Manage environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Database Schema

### Core Tables
- **profiles**: User profiles extending auth.users
- **help_items**: Help requests and offers
- **announcements**: Community announcements (admin-only)
- **events**: Community events with RSVP
- **event_attendees**: Event attendance tracking
- **help_responses**: Responses to help items

### Key Features
- Row Level Security (RLS) enabled on all tables
- Real-time subscriptions for help_items
- Automatic profile creation on user signup
- Role-based access (admin, caregiver)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   ├── help/              # Help exchange pages
│   └── onboarding/        # Profile setup
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── auth/              # Auth-related components
│   └── help/              # Help exchange components
├── lib/                   # Utilities and configurations
│   ├── supabase/          # Supabase client configurations
│   └── utils.ts           # Utility functions (cn, etc.)
└── middleware.ts          # Auth middleware

supabase/
└── migrations/            # Database migrations
```

## Key Implementation Details

### Authentication
- Magic link authentication via Supabase Auth
- Automatic profile creation on signup
- Protected routes with middleware
- Onboarding flow for new users

### Help Exchange Board
- Real-time updates using Supabase Realtime
- CRUD operations for help requests/offers
- Filtering by type (request/offer)
- Category-based organization
- Urgency levels (low/medium/high)

### UI Components
- Built with shadcn/ui and Tailwind CSS v4
- Responsive design with mobile-first approach
- Accessible components with keyboard navigation
- Dark mode support (via CSS custom properties)

## Development Status

### ✅ Completed Features
1. Next.js 15 project setup with TypeScript
2. Tailwind CSS v4 + shadcn/ui configuration
3. Supabase integration with auth
4. Database schema design and migrations
5. Email-link authentication flow
6. Profile onboarding system
7. Help Exchange Board with real-time updates
8. Role-based access control (RLS policies)

### 🔄 In Progress
- Payload CMS integration for announcements
- CLAUDE.md documentation

### 📋 Pending Tasks
- Events calendar functionality
- Responsive navigation layout
- Playwright testing setup
- Vercel deployment configuration
- Production deployment

## Common Workflows

### Adding New Components
1. Create component in appropriate directory
2. Follow existing patterns for shadcn/ui integration
3. Use TypeScript for type safety
4. Implement accessibility features

### Database Changes
1. Create migration file in `supabase/migrations/`
2. Test locally with `supabase db reset`
3. Deploy to production with `supabase db push`

### Adding New Pages
1. Create page in `src/app/` following App Router conventions
2. Add authentication checks if needed
3. Use server components where possible
4. Implement proper error handling

## Troubleshooting

### Common Issues
- **Tailwind not working**: Ensure using v4 syntax with `@import "tailwindcss"`
- **shadcn/ui components not styled**: Check CSS custom properties in globals.css
- **Auth redirect loops**: Verify middleware configuration and RLS policies
- **Database connection issues**: Check environment variables and Supabase project settings

### Debug Commands
```bash
# Check types
npm run typecheck

# Lint code
npm run lint

# Build without deployment
npm run build
```

## Security Notes

- All database tables use Row Level Security (RLS)
- Environment variables properly configured for client/server separation
- Middleware protects authenticated routes
- Admin-only features properly restricted

## Performance Considerations

- Server components used where possible
- Real-time subscriptions cleaned up properly
- Image optimization with Next.js Image component
- Database indexes on frequently queried columns