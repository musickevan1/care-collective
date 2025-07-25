# Wireframe: Home Page

This document contains ASCII wireframes for the Home Page across mobile, tablet, and desktop breakpoints.

---

## Mobile (<= 640px)

**Notes:** Single-column layout, focused on core message and primary CTA. Navigation is collapsed into a menu icon.

```
┌───────────────────────────────────┐
│ [Logo]               [Menu Icon]  │
│ (flex justify-between items-center) │
├───────────────────────────────────┤
│                                   │
│        [Hero Image/Graphic]       │
│        (w-full h-64 object-cover) │
│                                   │
├───────────────────────────────────┤
│                                   │
│ "Community Care, Simplified."     │
│ (text-4xl font-bold text-center)  │
│                                   │
│ [Brief Intro Text]                │
│ (text-lg text-center mt-4)        │
│                                   │
│ [Get Started - CTA]               │
│ (btn btn-primary mt-8 mx-auto)    │
│                                   │
├───────────────────────────────────┤
│                                   │
│      [Feature 1 Icon]             │
│      (text-primary w-12 h-12)     │
│      [Feature 1 Title]            │
│      (text-xl font-semibold mt-4) │
│      [Feature 1 Text]             │
│      (text-base text-muted-fg)    │
│                                   │
├───────────────────────────────────┤
│                                   │
│      "Testimonial..."             │
│      (italic text-center)         │
│      - Jane D. (mt-2)             │
│                                   │
├───────────────────────────────────┤
│ [Logo] [About] [FAQ]              │
│ (flex justify-center gap-4 py-4)  │
└───────────────────────────────────┘
```

---

## Tablet (641px - 1024px)

**Notes:** Two-column hero section for more impact. Features are laid out in a grid. Full navigation is visible.

```
┌──────────────────────────────────────────────────────────┐
│ [Logo]         [About] [FAQ] [Sign In] [Get Started CTA] │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ <div class="grid md:grid-cols-2 gap-8 items-center">     │
│                                                          │
│  <div>                                                   │
│    <h1 class="text-5xl font-bold">...</h1>               │
│    <p class="text-xl mt-4">...</p>                        │
│    <button class="btn btn-primary mt-8">...</button>      │
│  </div>                                                  │
│                                                          │
│  <div class="w-full h-96">                               │
│    [Hero Image/Graphic]                                  │
│  </div>                                                  │
│                                                          │
│ </div>                                                   │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  <div class="grid md:grid-cols-3 gap-8 py-16">           │
│    [Feature 1] [Feature 2] [Feature 3]                   │
│  </div>                                                  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│      "Testimonial..." (text-lg text-center)              │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ [Logo] [Copyright]               [Socials]               │
└──────────────────────────────────────────────────────────┘
```

---

## Desktop (>= 1025px)

**Notes:** Increased spacing and larger typography for a more spacious feel. Layout is similar to tablet but with more whitespace.

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ [Logo]  [About] [FAQ]                  [Sign In] [Get Started CTA]             │
├────────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│  <div class="flex items-center w-full py-24">                                  │
│                                                                                │
│    <div class="w-1/2 pr-12">                                                   │
│      <h1 class="text-6xl font-bold">Community Care, Simplified.</h1>           │
│      <p class="text-xl mt-6">Brief intro text...</p>                           │
│      <button class="btn btn-primary mt-10">Get Started</button>                │
│    </div>                                                                      │
│                                                                                │
│    <div class="w-1/2">                                                         │
│      [Hero Image/Graphic] (w-full h-auto rounded-lg shadow-xl)                 │
│    </div>                                                                      │
│                                                                                │
│  </div>                                                                        │
├────────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│  <div class="grid grid-cols-3 gap-12 text-center py-24">                       │
│    <div>[Feature 1]</div>                                                      │
│    <div>[Feature 2]</div>                                                      │
│    <div>[Feature 3]</div>                                                      │
│  </div>                                                                        │
│                                                                                │
├────────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│  <div class="text-center w-2/3 mx-auto py-16">                                 │
│    <p class="text-2xl italic">"Testimonial..."</p>                              │
│    <p class="mt-4 font-semibold">- Jane D.</p>                                  │
│  </div>                                                                        │
│                                                                                │
├────────────────────────────────────────────────────────────────────────────────┤
│ [Logo] [Copyright]                                     [About] [FAQ] [Contact] │
└────────────────────────────────────────────────────────────────────────────────┘
```
