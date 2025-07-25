# Wireframe: Authentication

This document contains ASCII wireframes for the authentication pages (Login, Sign Up, Password Reset) across mobile, tablet, and desktop breakpoints.

---

## 1. Login Page

**Notes:** A simple, centered form. The layout remains consistent across breakpoints, with the card width adjusting.

### Mobile (<= 640px)

```
┌───────────────────────────────────┐
│                                   │
│           [Logo]                  │
│      (w-16 h-16 mx-auto)          │
│                                   │
│      <h2 class="text-2xl">         │
│        Sign in to your account    │
│      </h2>                         │
│                                   │
│  <form class="space-y-6">         │
│                                   │
│   <div>                           │
│     <label for="email">Email</label> │
│     <input type="email" ...>      │
│     (input input-bordered w-full) │
│   </div>                          │
│                                   │
│   <div>                           │
│     <label for="password">Pass</label>│
│     <input type="password" ...>   │
│   </div>                          │
│                                   │
│   <button type="submit" class="btn"> │
│     Sign In                       │
│   </button>                       │
│                                   │
│   <p class="text-sm text-center"> │
│     No account? [Sign Up]         │
│     [Forgot Password?]            │
│   </p>                            │
│                                   │
│  </form>                          │
│                                   │
└───────────────────────────────────┘
```

### Tablet & Desktop (>= 641px)

**Notes:** The form is placed within a card with a border and shadow to give it prominence on larger screens.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                                                          │
│      <div class="card w-full max-w-sm mx-auto">          │
│                                                          │
│           [Logo] (mx-auto)                               │
│                                                          │
│           <h2 class="text-center">Sign In</h2>           │
│                                                          │
│           <form>                                         │
│             [Email Input]                                │
│             [Password Input]                             │
│             [Sign In Button]                             │
│           </form>                                        │
│                                                          │
│           <div class="text-center">                      │
│             [Sign Up Link] | [Forgot Password Link]      │
│           </div>                                         │
│                                                          │
│      </div>                                              │
│                                                          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Sign Up Page

**Notes:** Very similar to the Login page, but with an additional field for the user's name and different text.

### Mobile, Tablet & Desktop

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│      <div class="card w-full max-w-sm mx-auto">          │
│                                                          │
│           [Logo]                                         │
│           <h2>Create your account</h2>                    │
│                                                          │
│           <form>                                         │
│             [Full Name Input]                            │
│             [Email Input]                                │
│             [Password Input]                             │
│             [Create Account Button]                      │
│           </form>                                        │
│                                                          │
│           <p class="text-center">                        │
│             Already have an account? [Sign In]           │
│           </p>                                           │
│                                                          │
│      </div>                                              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Password Reset Page

**Notes:** A single-field form to request a password reset link.

### Mobile, Tablet & Desktop

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│      <div class="card w-full max-w-sm mx-auto">          │
│                                                          │
│           [Logo]                                         │
│           <h2>Reset your password</h2>                    │
│           <p class="text-muted-fg">                      │
│             Enter your email to get a reset link.        │
│           </p>                                           │
│                                                          │
│           <form>                                         │
│             [Email Input]                                │
│             [Send Reset Link Button]                     │
│           </form>                                        │
│                                                          │
│           <p class="text-center">                        │
│             Remembered it? [Sign In]                     │
│           </p>                                           │
│                                                          │
│      </div>                                              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```