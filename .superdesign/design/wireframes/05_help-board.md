# Wireframe: Help Board

This document contains wireframes for the Help Board, including the list, detail, and new post views.

---

## 1. Help Board - List View

**Notes:** A feed of cards, each representing a help request. Includes search and filter options.

### Mobile

```
┌───────────────────────────────────┐
│ [Menu]  Help Board         [Bell] │
├───────────────────────────────────┤
│ <div class="p-4">                 │
│   [Search Input] [Filter Button]  │
│ </div>                            │
├───────────────────────────────────┤
│ <div class="p-4 space-y-4">       │
│                                   │
│   <!-- Help Post Card -->         │
│   <div class="card bg-white shadow">│
│     <div class="card-body">       │
│       <div class="flex items-center"> │
│         [Avatar] <div>User Name<br>2h ago</div>
│       </div>                      │
│       <h3 class="font-bold mt-2">Need help with groceries</h3>
│       <div class="mt-2">[Badge: Errands] [Badge: Urgent]</div>
│     </div>                        │
│   </div>                          │
│                                   │
│   [+ New Post FAB]                │
│                                   │
│ </div>                            │
├───────────────────────────────────┤
│ [Nav: Announce|Board|Profile]     │
└───────────────────────────────────┘
```

### Desktop

```
┌──────────────────────────────────────────────────────────┐
│ [Sidebar Nav]                                            │
│   <main class="flex-1 p-8">                              │
│     <div class="flex justify-between items-center">      │
│       <h1 class="text-3xl font-bold">Help Board</h1>     │
│       <button class="btn">Create New Post</button>       │
│     </div>                                               │
│                                                          │
│     <div class="mt-4">[Search] [Filter] [Filter]</div>   │
│                                                          │
│     <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
│       [Help Post Card] [Help Post Card] [Help Post Card] │
│       [Help Post Card] [Help Post Card] [Help Post Card] │
│     </div>                                               │
│   </main>                                                │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Help Board - Detail View

```
┌───────────────────────────────────┐
│ [<- Back] Post Details            │
├───────────────────────────────────┤
│ <div class="p-4">                 │
│   <h1 class="text-2xl font-bold">Need help with groceries</h1>
│   <div class="flex items-center mt-2">[Avatar] User Name</div>
│   <div class="mt-1">[Badge: Errands] [Badge: Urgent]</div>
│   <p class="mt-4">Full post content...</p>
│ </div>                            │
├───────────────────────────────────┤
│ <h3 class="p-4 font-bold">Offers (3)</h3>
│ <div class="p-4 space-y-3">       │
│   <!-- Offer/Comment -->          │
│   <div>[Avatar] Helper Name: "I can help!"</div>
│   <div>[Avatar] Another Helper: "Me too."</div>
│ </div>                            │
├───────────────────────────────────┤
│ <div class="p-4">                 │
│   <textarea placeholder="Write a comment..."></textarea>
│   <button class="btn mt-2">Submit Offer</button>
│ </div>                            │
└───────────────────────────────────┘
```

---

## 3. Help Board - New Post Form

```
┌───────────────────────────────────┐
│ [X Close] Create New Post         │
├───────────────────────────────────┤
│ <div class="p-4 space-y-4">       │
│   <div>                           │
│     <label>Title</label>          │
│     <input type="text">           │
│   </div>                          │
│   <div>                           │
│     <label>Category</label>       │
│     <select>...</select>          │
│   </div>                          │
│   <div>                           │
│     <label>Description</label>     │
│     <textarea rows="5"></textarea> │
│   </div>                          │
│   <div>                           │
│     <label>[ ] Mark as Urgent</label>
│   </div>                          │
│   <button class="btn w-full">Post</button>
│ </div>                            │
└───────────────────────────────────┘
```