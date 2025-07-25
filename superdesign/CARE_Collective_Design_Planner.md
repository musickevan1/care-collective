# CARE Collective – Design & Wireframe Plan

This document outlines the site architecture, user flows, and low-fidelity wireframes for the CARE Collective web application.

### 1. Site Architecture & User Flow

Here is a high-level site map and the primary user flows.

**Site Map:**

```
/ (Public)
├── /home (Landing Page)
├── /about
├── /faq
|
├── /login (Authentication)
├── /signup
├── /password-reset
|
├── /app (Authenticated Users)
│   ├── /onboarding (First-time users)
│   ├── /announcements
│   ├── /help-board
│   │   └── /help-board/{post-id}
│   ├── /profile
│   │   └── /profile/edit
│   └── /admin (Admin users only)
│       ├── /admin/users
│       └── /admin/content
```

**Primary User Flows:**

1.  **New User Onboarding:**
    `Home` -> `Sign Up` -> `Supabase Auth Confirmation` -> `Onboarding Flow` -> `Announcements`

2.  **Existing User Login:**
    `Home` -> `Login` -> `Announcements`

3.  **Seeking Help:**
    `Announcements` -> `Help Board` -> `View Post` or `Create New Post`

4.  **Admin User Management:**
    `Login` -> `Admin Dashboard` -> `Manage Users/Content`

---

### 2. Low-Fidelity Wireframes (Mobile-First)

Here are the ASCII wireframes for the key screens, designed with a mobile-first approach.

**A. Public Pages**

```
// Home Screen
┌───────────────────────────┐
│ [Logo]         [Sign In]  │
├───────────────────────────┤
│                           │
│    Hero Image/Graphic     │
│                           │
├───────────────────────────┤
│                           │
│  "Community Care,         │
│   Simplified." [Headline] │
│                           │
│  [Brief Intro Text]       │
│                           │
│  [Get Started - CTA]      │
│                           │
├───────────────────────────┤
│                           │
│      [Feature 1 Icon]     │
│      [Feature 1 Title]    │
│      [Feature 1 Text]     │
│                           │
├───────────────────────────┤
│                           │
│      [Feature 2 Icon]     │
│      [Feature 2 Title]    │
│      [Feature 2 Text]     │
│                           │
├───────────────────────────┤
│                           │
│      [Testimonial]        │
│                           │
├───────────────────────────┤
│ [Logo] [About] [FAQ]      │
└───────────────────────────┘

// About & FAQ (Similar simple layout)
┌───────────────────────────┐
│ [<- Back]  [About Us]     │
├───────────────────────────┤
│                           │
│  [Page Title]             │
│                           │
│  [Paragraph of text...]   │
│                           │
│  [Another paragraph...]   │
│                           │
└───────────────────────────┘
```

**B. Authentication**

```
// Login / Sign Up
┌───────────────────────────┐
│ [Logo]                    │
├───────────────────────────┤
│                           │
│  [Welcome Back!]          │
│                           │
│  ┌─────────────────────┐  │
│  │ Email Address       │  │
│  └─────────────────────┘  │
│  ┌─────────────────────┐  │
│  │ Password            │  │
│  └─────────────────────┘  │
│                           │
│  [Login Button]           │
│                           │
│  [Forgot Password?]       │
│  [Sign up for an account] │
│                           │
└───────────────────────────┘
```

**C. App Screens**

```
// Onboarding
┌───────────────────────────┐
│ [Logo]                    │
├───────────────────────────┤
│                           │
│  [Step 1 of 3]            │
│  "Tell us about you."     │
│                           │
│  ┌─────────────────────┐  │
│  │ Your Name           │  │
│  └─────────────────────┘  │
│  ┌─────────────────────┐  │
│  │ Your Role (e.g. Son)│  │
│  └─────────────────────┘  │
│                           │
│  [Next Button]            │
│                           │
└───────────────────────────┘

// Announcements (Main Feed)
┌───────────────────────────┐
│ [Menu Icon]  [Logo] [Bell]│
├───────────────────────────┤
│                           │
│  [Announcement Card 1]    │
│   - Title                 │
│   - Excerpt...            │
│   - Date                  │
│                           │
├───────────────────────────┤
│                           │
│  [Announcement Card 2]    │
│                           │
├───────────────────────────┤
│                           │
│  [Announcement Card 3]    │
│                           │
├───────────────────────────┤
│ [Nav: Announce|Board|Help]│
└───────────────────────────┘

// Help Board
┌───────────────────────────┐
│ [Menu Icon]  [Logo] [Bell]│
├───────────────────────────┤
│ [Search Bar...] [Filter]  │
├───────────────────────────┤
│                           │
│  [Post Card 1]            │
│   - User, Time            │
│   - Title                 │
│   - Tags [Urgent] [Advice]│
│                           │
├───────────────────────────┤
│                           │
│  [Post Card 2]            │
│                           │
├───────────────────────────┤
│                           │
│  [+ Create New Post]      │
│                           │
├───────────────────────────┤
│ [Nav: Announce|Board|Help]│
└───────────────────────────┘

// Profile & Admin (Accessed from Menu)
┌───────────────────────────┐
│ [<- Back]  [My Profile]   │
├───────────────────────────┤
│                           │
│  [Avatar]                 │
│  [User Name]              │
│  [User Email]             │
│                           │
│  [Edit Profile Button]    │
│                           │
├───────────────────────────┤
│                           │
│  [Settings Option 1]      │
│  [Settings Option 2]      │
│  [Admin Panel (if admin)] │
│                           │
├───────────────────────────┤
│                           │
│  [Logout Button]          │
│                           │
└───────────────────────────┘
```