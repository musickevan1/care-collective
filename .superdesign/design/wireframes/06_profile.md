# Wireframe: Profile & Admin

This document contains wireframes for the user-facing Profile page and the Admin dashboard.

---

## 1. User Profile Page

**Notes:** A standard user profile view. The layout is simple and clean, providing access to edit functionality and settings.

### Mobile & Desktop

```
┌──────────────────────────────────────────────────────────┐
│ [Sidebar Nav]                                            │
│   <main class="flex-1 p-8">                              │
│     <h1 class="text-3xl font-bold">My Profile</h1>         │
│                                                          │
│     <div class="card bg-white mt-6 p-8">                 │
│                                                          │
│       <div class="flex items-center space-x-6">          │
│         [Avatar (lg)]                                    │
│         <div>                                            │
│           <h2 class="text-2xl font-bold">User Name</h2>   │
│           <p class="text-muted-fg">user@email.com</p>     │
│         </div>                                           │
│         <button class="btn btn-secondary ml-auto">Edit Profile</button>
│       </div>                                             │
│                                                          │
│       <div class="divider my-8"></div>                   │
│                                                          │
│       <h3 class="font-bold">Settings</h3>                │
│       <div class="space-y-4 mt-4">                       │
│         <a href="/profile/background-check">[Background Check Status]</a>
│         <a href="#">[Notification Preferences]</a>         │
│       </div>                                             │
│                                                          │
│       <div class="divider my-8"></div>                   │
│                                                          │
│       <button class="btn btn-error">Logout</button>      │
│                                                          │
│     </div>                                               │
│   </main>                                                │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Admin Dashboard

**Notes:** A functional dashboard for admins, using tabs to switch between user and content management.

### Mobile & Desktop

```
┌──────────────────────────────────────────────────────────┐
│ [Sidebar Nav]                                            │
│   <main class="flex-1 p-8">                              │
│     <h1 class="text-3xl font-bold">Admin Dashboard</h1>   │
│                                                          │
│     <div class="tabs mt-6">                              │
│       <a class="tab tab-bordered tab-active">User Management</a>
│       <a class="tab tab-bordered">Content Management</a>   │
│     </div>                                               │
│                                                          │
│     <!-- User Management Table -->                       │
│     <div class="overflow-x-auto mt-4">                   │
│       <table class="table w-full">                       │
│         <thead><tr><th>User</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead>
│         <tbody>                                          │
│           <tr>                                           │
│             <td>User One</td><td>one@...</td><td>Admin</td><td>[Active]</td><td>[Edit] [Disable]</td>
│           </tr>                                          │
│           <tr>                                           │
│             <td>User Two</td><td>two@...</td><td>Member</td><td>[Active]</td><td>[Edit] [Disable]</td>
│           </tr>                                          │
│         </tbody>                                         │
│       </table>                                           │
│     </div>                                               │
│                                                          │
│   </main>                                                │
└──────────────────────────────────────────────────────────┘
```