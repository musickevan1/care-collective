# Wireframe: Onboarding Flow

This document contains ASCII wireframes for the 3-step user onboarding process.

**Notes:** The layout uses a stepper component at the top to indicate progress. The content area changes for each step. The design is mobile-first and scales to larger screens by centering the content in a card.

---

## Onboarding Container (All Breakpoints)

**Notes:** This is the shell that holds the steps. The content inside the `card` div will be replaced at each step.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│ <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50">
│                                                          │
│   <div class="w-full max-w-md p-8">                      │
│                                                          │
│     [Logo] (mx-auto mb-4)                                │
│                                                          │
│     <!-- Stepper -->                                     │
│     <ol class="flex items-center w-full mb-8">           │
│       <li class="step step-primary">Step 1</li>          │
│       <li class="step">Step 2</li>                        │
│       <li class="step">Step 3</li>                        │
│     </ol>                                                │
│                                                          │
│     <!-- Card for Step Content -->                       │
│     <div class="card bg-white p-8 shadow-md rounded-lg"> │
│                                                          │
│       <!-- Step content goes here -->                     │
│                                                          │
│     </div>                                               │
│                                                          │
│   </div>                                                 │
│                                                          │
│ </div>                                                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## Step 1: User Information

```
┌───────────────────────────────────┐
│ <h2 class="text-2xl font-bold">Welcome! Tell us about you.</h2>
│ <p class="text-muted-fg mt-2">This helps others get to know you.</p>
│                                   │
│ <form class="mt-6 space-y-4">     │
│                                   │
│   <div>                           │
│     <label>Full Name</label>      │
│     <input type="text" ...>       │
│   </div>                          │
│                                   │
│   <div>                           │
│     <label>Your Role</label>      │
│     <input placeholder="e.g., Daughter, Friend, Spouse" ...>
│   </div>                          │
│                                   │
│   <div class="pt-4">              │
│     <button class="btn w-full">Next</button>
│   </div>                          │
│                                   │
│ </form>                           │
└───────────────────────────────────┘
```

---

## Step 2: Care Recipient Information

```
┌───────────────────────────────────┐
│ <h2 class="text-2xl font-bold">Who are you caring for?</h2>
│ <p class="text-muted-fg mt-2">This information remains private.</p>
│                                   │
│ <form class="mt-6 space-y-4">     │
│                                   │
│   <div>                           │
│     <label>Their Name / Nickname</label>
│     <input type="text" ...>       │
│   </div>                          │
│                                   │
│   <div>                           │
│     <label>Relationship to You</label>
│     <input placeholder="e.g., Mother, Father, Friend" ...>
│   </div>                          │
│                                   │
│   <div class="flex gap-4 pt-4">   │
│     <button class="btn-secondary w-1/2">Back</button>
│     <button class="btn w-1/2">Next</button>
│   </div>                          │
│                                   │
│ </form>                           │
└───────────────────────────────────┘
```

---

## Step 3: Availability & Interests

```
┌───────────────────────────────────┐
│ <h2 class="text-2xl font-bold">How can you help?</h2>
│ <p class="text-muted-fg mt-2">Let others know what you can help with.</p>
│                                   │
│ <form class="mt-6 space-y-4">     │
│                                   │
│   <div>                           │
│     <label>I can help with...</label>
│     <div class="grid grid-cols-2 gap-2 mt-2">
│       [ ] Errands   [ ] Respite
│       [ ] Meals     [ ] Transport
│       [ ] Companionship [ ] Other
│     </div>                        │
│   </div>                          │
│                                   │
│   <div class="flex gap-4 pt-4">   │
│     <button class="btn-secondary w-1/2">Back</button>
│     <button class="btn w-1/2">Finish</button>
│   </div>                          │
│                                   │
│ </form>                           │
└───────────────────────────────────┘
```