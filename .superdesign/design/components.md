# Reusable Components (shadcn/ui Mapping)

This document maps the required reusable components to their corresponding `shadcn/ui` primitives.

| Component | shadcn/ui Primitive | CLI Command | Notes |
|---|---|---|---|
| **Button** | `Button` | `npx shadcn-ui@latest add button` | Used for all clickable actions. Variants: primary (CTA), secondary, destructive, ghost, link. |
| **Card** | `Card` | `npx shadcn-ui@latest add card` | The primary container for content sections like announcements and help posts. |
| **Input** | `Input` | `npx shadcn-ui@latest add input` | For all text-based form fields. |
| **Textarea** | `Textarea` | `npx shadcn-ui@latest add textarea` | For multi-line text input, like post descriptions or comments. |
| **Modal** | `Dialog` | `npx shadcn-ui@latest add dialog` | For interrupting actions like confirming a deletion. Use `Sheet` for non-modal side panels. |
| **Toast** | `Toast` | `npx shadcn-ui@latest add toast` | For non-intrusive feedback, like "Post created successfully." |
| **TabNav** | `Tabs` | `npx shadcn-ui@latest add tabs` | Used in the Admin dashboard to switch between management views. |
| **Skeleton** | `Skeleton` | `npx shadcn-ui@latest add skeleton` | Used as a loading placeholder for cards and content to reduce layout shift. |
| **Avatar** | `Avatar` | `npx shadcn-ui@latest add avatar` | To display user profile pictures or initials. |
| **Badge** | `Badge` | `npx shadcn-ui@latest add badge` | To display tags on help posts (e.g., "Urgent", "Errands"). |
| **Sheet** | `Sheet` | `npx shadcn-ui@latest add sheet` | For the slide-out mobile navigation menu. |
| **Navbar** | *Custom* | - | A custom component built with Flexbox, containing the Logo, navigation links, and Profile button. |
