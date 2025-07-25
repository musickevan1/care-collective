# Wireframe: Announcements

This document contains ASCII wireframes for the Announcements page.

**Notes:** The main view is a feed of announcement cards. The layout is a single column on mobile and expands to a wider, centered column on larger screens.

---

## Mobile (<= 640px)

```
┌───────────────────────────────────┐
│ [Menu]  Announcements      [Bell] │
│ (flex justify-between p-4 border-b) │
├───────────────────────────────────┤
│                                   │
│ <div class="p-4 space-y-4">       │
│                                   │
│   <!-- Announcement Card -->      │
│   <div class="card bg-white shadow">│
│     <div class="card-body">       │
│       <h3 class="font-bold">New Feature</h3>
│       <p class="text-sm mt-1">We've added...</p>
│       <p class="text-xs text-muted-fg mt-2">Sep 1, 2025</p>
│     </div>                        │
│   </div>                          │
│                                   │
│   <!-- Another Card -->           │
│   <div class="card bg-white shadow">│
│     ...                           │
│   </div>                          │
│                                   │
│ </div>                            │
│                                   │
├───────────────────────────────────┤
│ [Nav: Announce|Board|Profile]     │
│ (btm-nav)                         │
└───────────────────────────────────┘
```

---

## Tablet & Desktop (>= 641px)

**Notes:** A two-column layout with navigation on the left and content on the right.

```
┌──────────────────────────────────────────────────────────┐
│ [Logo] [Search Bar]                            [Profile] │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ <div class="flex">                                       │
│                                                          │
│   <!-- Left Sidebar Navigation -->                       │
│   <aside class="w-64 p-4 border-r">                      │
│     <ul>                                                 │
│       <li class="font-bold">[Announcements]</li>         │
│       <li>[Help Board]</li>                               │
│       <li>[Profile]</li>                                  │
│       <li>[Admin]</li>                                    │
│     </ul>                                                │
│   </aside>                                               │
│                                                          │
│   <!-- Main Content -->                                  │
│   <main class="flex-1 p-8">                              │
│     <h1 class="text-3xl font-bold">Announcements</h1>     │
│                                                          │
│     <div class="mt-6 space-y-6 max-w-3xl">             │
│       <!-- Announcement Card -->                         │
│       <div class="card ...">...</div>                    │
│       <!-- Announcement Card -->                         │
│       <div class="card ...">...</div>                    │
│     </div>                                               │
│                                                          │
│   </main>                                                │
│                                                          │
│ </div>                                                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```