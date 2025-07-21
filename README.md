# CARE Collective

An accessible web application designed for family caregivers to offer or request help, view community announcements and events, and connect with their support network.

## Features

- **Help Exchange Board**: Post and respond to help requests and offers
- **Community Announcements**: Stay informed with important community updates
- **Events Calendar**: Discover and RSVP to community events
- **User Profiles**: Complete profiles with role-based access
- **Real-time Updates**: Live updates for help items and community activity
- **Secure Authentication**: Magic link authentication via Supabase
- **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Database**: Supabase (PostgreSQL + Auth + Realtime)
- **CMS**: Payload CMS for content management
- **Hosting**: Vercel
- **Testing**: Playwright (E2E tests)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/care-collective.git
   cd care-collective
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your Supabase credentials in `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. Set up the database:
   - Go to your Supabase project dashboard
   - Run the SQL migrations found in `supabase/migrations/`
   - Or use the Supabase CLI: `supabase db push`

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Commands

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript compiler check
```

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
│   └── utils.ts           # Utility functions
└── middleware.ts          # Auth middleware

supabase/
└── migrations/            # Database migrations
```

## Database Schema

The application uses several core tables:

- **profiles**: User profiles extending Supabase auth.users
- **help_items**: Help requests and offers with categories and urgency levels
- **announcements**: Community announcements (admin-only)
- **events**: Community events with RSVP functionality
- **event_attendees**: Event attendance tracking
- **help_responses**: Responses to help items

All tables implement Row Level Security (RLS) for data protection.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Development Notes

See [CLAUDE.md](./CLAUDE.md) for detailed development information, including:
- Database schema details
- Component architecture
- Authentication flow
- Development workflows
- Troubleshooting guides

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue on GitHub or contact the maintainers.
