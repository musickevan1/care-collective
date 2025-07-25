# Wireframe: Placeholders & Status Pages

This document contains wireframes for placeholder pages and various system status states (Loading, Empty, Error, Disabled).

---

## 1. Background Check (Placeholder)

**Notes:** A simple page informing the user that the feature is coming soon.

```
┌──────────────────────────────────────────────────────────┐
│ [Sidebar Nav]                                            │
│   <main class="flex-1 p-8 flex items-center justify-center">
│     <div class="text-center">                            │
│       [Icon: Construction] (w-16 h-16 mx-auto)           │
│       <h1 class="text-3xl font-bold mt-4">Coming Soon</h1> │
│       <p class="text-muted-fg mt-2">                     │
│         We are working on a secure background check system.
│       </p>                                               │
│       <button class="btn mt-6" onclick="history.back()">Go Back</button>
│     </div>                                               │
│   </main>                                                │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Status: Loading

**Notes:** Can be used as a full page loader or within a component (e.g., a card).

```
┌───────────────────────────────────┐
│                                   │
│      [Spinner Icon] (animate-spin)│
│                                   │
│      <p class="text-muted-fg">    │
│        Loading...                 │
│      </p>                           │
│                                   │
└───────────────────────────────────┘
```

---

## 3. Status: Empty State

**Notes:** For when a list (like the Help Board) is empty. Provides a clear message and a primary action.

```
┌───────────────────────────────────┐
│                                   │
│      [Icon: Empty Box]            │
│                                   │
│      <h3 class="font-bold mt-4">  │
│        No posts yet               │
│      </h3>                         │
│                                   │
│      <p class="text-muted-fg">    │
│        Get the conversation started.│
│      </p>                           │
│                                   │
│      <button class="btn mt-6">    │
│        Create New Post            │
│      </button>                       │
│                                   │
└───────────────────────────────────┘
```

---

## 4. Status: Error State

**Notes:** A generic error message. Can be adapted for specific errors (e.g., 404, 500).

```
┌───────────────────────────────────┐
│                                   │
│      [Icon: Alert Triangle] (text-error)
│                                   │
│      <h3 class="font-bold mt-4">  │
│        Something went wrong       │
│      </h3>                         │
│                                   │
│      <p class="text-muted-fg">    │
│        We couldn't load this page.  │
│      </p>                           │
│                                   │
│      <button class="btn mt-6">    │
│        Try Again                  │
│      </button>                       │
│                                   │
└───────────────────────────────────┘
```

---

## 5. Status: Account Disabled

**Notes:** A full-page message shown to a user whose account has been disabled by an admin.

```
┌──────────────────────────────────────────────────────────┐
│ <div class="min-h-screen flex items-center justify-center">
│   <div class="text-center max-w-md">                     │
│     [Icon: User X] (w-16 h-16 mx-auto text-error)        │
│     <h1 class="text-3xl font-bold mt-4">Account Disabled</h1>
│     <p class="text-muted-fg mt-2">                     │
│       Your account has been disabled. Please contact support
│       if you believe this is an error.                   │
│     </p>                                               │
│     <a href="/logout" class="btn mt-6">Logout</a>        │
│   </div>                                                 │
│ </div>                                                   │
└──────────────────────────────────────────────────────────┘
```