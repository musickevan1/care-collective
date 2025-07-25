---
marp: true
theme: default
footer: "CARE Collective MVP — ©2025"
paginate: true
---

<!-- _class: lead -->

# CARE Collective MVP Kick-Off

**July 22, 2025**

Presenter: Evan Musick

---

# Agenda

| Activity | Duration | Description |
|----------|----------|-------------|
| Welcome & Introductions | 5 min | Opening remarks and attendee introductions |
| Discovery Q&A | 15 min | Vision, users, content, and compliance discussion |
| Technical Architecture | 10 min | Proposed tech stack and data model review |
| Feature Prioritization | 15 min | MVP scope and timeline discussion |
| Next Steps & Timeline | 5 min | Action items and follow-up schedule |

---

# Discovery Questions: Vision & Outcomes

• What is your primary vision for how CARE Collective will transform the caregiving experience in your community?

• What specific outcomes would define success for this MVP launch?

• How do you envision measuring community engagement and help exchange effectiveness?

• What are the biggest pain points caregivers face that this platform should address first?

• How important is mobile accessibility versus desktop usage for your target users?

• What existing community resources or partnerships should we integrate or complement?

---

# Discovery Questions: Users & Operations

• Who are the primary user personas beyond family caregivers (healthcare providers, volunteers, organizations)?

• What content moderation and community guidelines will be needed for announcements and help requests?

• How should user verification and background check processes be implemented?

• What compliance requirements exist for health information or user data in your region?

• How will community administrators manage events, announcements, and user roles?

• What branding guidelines, colors, or visual identity should we incorporate?

---

<!-- _class: lead -->

# Proposed Technical Architecture

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 15 with TypeScript, Tailwind CSS v4, shadcn/ui |
| **Authentication** | Supabase Auth (magic links, social providers) |
| **Database** | Supabase Postgres with Row Level Security |
| **Real-time** | Supabase Realtime for live help board updates |
| **CMS** | Payload CMS for announcements and content management |
| **Hosting** | Vercel with edge functions and automatic deployments |
| **Background Checks** | Third-party API integration (vendor TBD) |

---

# Data Model Snapshot

• **Users & Profiles**: Extended user profiles with caregiver details, preferences, and verification status

• **Help Requests/Offers**: Core help exchange with categories, urgency levels, and response tracking

• **Community Announcements**: Admin-managed announcements with rich content and scheduling

• **Events & RSVP**: Community events with attendance tracking and calendar integration

• **Background Checks**: Verification records with status tracking and expiration management

• **Help Responses**: Messaging and coordination between help requesters and providers

---

# MVP Timeline & Hours Estimate

| Feature | Hours | Description |
|---------|-------|-------------|
| User Authentication & Onboarding | 3 hrs | Magic link auth, profile setup flow |
| Help Exchange Board | 4 hrs | Request/offer CRUD, real-time updates |
| Community Announcements | 2 hrs | Admin CMS integration, public display |
| Events Calendar & RSVP | 3 hrs | Event creation, attendance tracking |
| Basic Background Check Flow | 2 hrs | API integration, status management |
| Mobile Responsive Design | 2 hrs | Touch-friendly UI, accessibility features |
| Testing & Documentation | 2 hrs | E2E tests, deployment docs |
| Deployment & Launch Prep | 2 hrs | Production setup, monitoring |
| **Total** | **20 hrs** | **2-3 week delivery timeline** |

---

# Next Steps

• **Gather Discovery Answers**: Complete questionnaire responses and clarify requirements by end of week

• **Confirm Vendor Selection**: Finalize background check API provider and any other third-party integrations

• **Share Design Kit**: Provide Figma component library and branding guidelines for review and approval

• **Establish Weekly Syncs**: Schedule recurring check-ins for progress updates and feedback sessions

• **Grant Development Access**: Provide necessary credentials for Supabase, Vercel, and any existing systems
