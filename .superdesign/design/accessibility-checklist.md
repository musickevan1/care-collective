# Accessibility Checklist (WCAG 2.2 AA)

This checklist is a guide to ensure the CARE Collective web app meets WCAG 2.2 Level AA conformance.

## Perceivable

- [ ] **1.1 Text Alternatives:** All non-text content (images, icons) has a text alternative (e.g., `alt` attribute).
- [ ] **1.2 Time-Based Media:** No pre-recorded video/audio content in the MVP. (If added later, provide captions and transcripts).
- [ ] **1.3 Adaptable:** Content can be presented in different ways (e.g., responsive design) without losing information or structure.
- [ ] **1.4 Distinguishable:**
  - [ ] **1.4.1 Use of Color:** Color is not the only means of conveying information (e.g., icons + text for error states).
  - [ ] **1.4.3 Contrast (Minimum):** Text and images of text have a contrast ratio of at least 4.5:1. (The "Sunset Glow" theme has been checked against this).
  - [ ] **1.4.4 Resize Text:** Text can be resized up to 200% without loss of content or functionality.
  - [ ] **1.4.11 Non-text Contrast:** UI components and graphical objects have a contrast ratio of at least 3:1.

## Operable

- [ ] **2.1 Keyboard Accessible:** All functionality is operable through a keyboard interface.
- [ ] **2.1.1 Keyboard:** No keyboard trap. All interactive elements are focusable and can be activated by key press.
- [ ] **2.2 Enough Time:** No time limits on tasks.
- [ ] **2.3 Seizures and Physical Reactions:** No content flashes more than three times in any one-second period.
- [ ] **2.4 Navigable:**
  - [ ] **2.4.1 Bypass Blocks:** A "Skip to main content" link is available.
  - [ ] **2.4.3 Focus Order:** Focus order is logical and preserves meaning.
  - [ ] **2.4.4 Link Purpose (In Context):** The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context.
  - [ ] **2.4.7 Focus Visible:** Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

## Understandable

- [ ] **3.1 Readable:** The default human language of each page can be programmatically determined (`<html lang="en">`).
- [ ] **3.2 Predictable:**
  - [ ] **3.2.1 On Focus:** Components do not initiate a change of context upon receiving focus.
  - [ ] **3.2.2 On Input:** Changing the setting of any user interface component does not automatically cause a change of context.
- [ ] **3.3 Input Assistance:**
  - [ ] **3.3.1 Error Identification:** If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.
  - [ ] **3.3.2 Labels or Instructions:** Labels are provided when user input is required.

## Robust

- [ ] **4.1 Compatible:**
  - [ ] **4.1.1 Parsing:** No major parsing errors in HTML.
  - [ ] **4.1.2 Name, Role, Value:** For all UI components, the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.

---

## Supabase Auth Error Display Patterns

- **Login Error:** When Supabase returns an `Invalid login credentials` error, display a toast notification and also show a message directly below the password field: `"Invalid email or password."`. Do not clear the email field.
- **Sign Up Error (User Exists):** If a user tries to sign up with an email that already exists, show a message below the email field: `"A user with this email already exists. [Link to Login Page]"`.
- **General Auth Error:** For any other Supabase auth errors, display a generic error toast: `"Authentication error. Please try again later."`. Log the specific error to the console for debugging.