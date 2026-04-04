# VWO Login Page Test Plan

## Overview
This document outlines the test strategy and scenarios for the VWO web application login page (https://app.vwo.com/#/login). 

## Assumptions
- For all scenarios, the starting state is a fresh/blank browser session with no active cookies or active sessions for VWO.
- Passwords are obfuscated by default.
- Internet connectivity is stable.

---

## Scenario 1: Happy Path - Successful Login with Valid Credentials
**Assumptions about starting state:** Blank/fresh state, user has a valid registered account.
**Step-by-step instructions:**
1. Navigate to `https://app.vwo.com/#/login`.
2. Locate the "Email address" textbox.
3. Enter a valid registered email address.
4. Locate the "Password" textbox.
5. Enter the correct password associated with the email address.
6. Click the "Sign in" button.
**Expected outcomes:**
- User is successfully authenticated.
- User is navigated to the VWO dashboard or their default landing page.
**Success criteria:** The dashboard page loads successfully containing user-specific data, and an active session is created.
**Failure conditions:** The page reloads showing the login form, an error message is displayed, or the user remains unauthenticated.

---

## Scenario 2: Error Handling - Invalid Credentials (Wrong Password)
**Assumptions about starting state:** Blank/fresh state, user has a valid registered account.
**Step-by-step instructions:**
1. Navigate to `https://app.vwo.com/#/login`.
2. Enter a valid registered email address in the "Email address" textbox.
3. Enter an incorrect password in the "Password" textbox.
4. Click the "Sign in" button.
**Expected outcomes:**
- An error message (e.g., "Invalid credentials" or similar) should be rendered on the page clearly.
- The password field might be cleared.
**Success criteria:** User remains on the login page and an appropriate error message is displayed to the user.
**Failure conditions:** The application crashes, the user is authenticated, or no sensible error message is displayed.

---

## Scenario 3: Validation - Empty Fields Submission
**Assumptions about starting state:** Blank/fresh state.
**Step-by-step instructions:**
1. Navigate to `https://app.vwo.com/#/login`.
2. Leave both the "Email address" and "Password" textboxes empty.
3. Click the "Sign in" button.
**Expected outcomes:**
- Inline validation errors should appear indicating that email and password are required.
- The login request should not be sent to the server.
**Success criteria:** UI-level validation successfully prevents empty submission and alerts the user.
**Failure conditions:** The page submits anyway resulting in an unexpected server error, or no visual cues are given for empty inputs.

---

## Scenario 4: Edge Case - Password Visibility Toggle
**Assumptions about starting state:** Blank/fresh state.
**Step-by-step instructions:**
1. Navigate to `https://app.vwo.com/#/login`.
2. Enter a value (e.g., "SecurePass123!") into the "Password" textbox.
3. Observe that the password characters are obfuscated.
4. Click the "Toggle password visibility" button (typically an eye icon).
5. Observe the password characters.
6. Click the "Toggle password visibility" button again.
**Expected outcomes:**
- Step 3: Password is obfuscated (e.g., bullet points or asterisks).
- Step 5: Password is in plain text and clearly readable, matching the exact entered value.
- Step 6: Password is obfuscated again.
**Success criteria:** The toggle effectively switches the input type between `password` and `text` visually without altering the value.
**Failure conditions:** The password does not reveal itself, reveals an incorrect string, or cannot be toggled back.

---

## Scenario 5: User Flow - "Remember me" Functionality
**Assumptions about starting state:** Blank/fresh state with a valid account.
**Step-by-step instructions:**
1. Navigate to `https://app.vwo.com/#/login`.
2. Enter valid credentials.
3. Check the "Remember me" checkbox.
4. Click "Sign in" to successfully log in.
5. Close the browser tab/window and open a new browser session (preserving local cookies/storage).
6. Navigate to `https://app.vwo.com/#/login` or the dashboard URL.
**Expected outcomes:**
- The user should be automatically logged in and redirected to the dashboard, or the email field should be pre-filled on the login page depending on the exact implementation of "Remember me".
**Success criteria:** The session persists or the identifier is remembered in the browser storage beyond a single session.
**Failure conditions:** The user is forced to completely re-authenticate or re-enter their email despite checking "Remember me" (unless local storage/cookies were purposefully cleared).

---

## Scenario 6: User Flow - Forgot Password
**Assumptions about starting state:** Blank/fresh state.
**Step-by-step instructions:**
1. Navigate to `https://app.vwo.com/#/login`.
2. Click the "Forgot Password?" button/link.
**Expected outcomes:**
- User is navigated to the password recovery page or a modal opens.
- The recovery page/modal prompts for an email address to send reset instructions.
**Success criteria:** The navigation or modal trigger works smoothly without errors.
**Failure conditions:** The link is broken (404), or clicking it causes a page error.

---

## Scenario 7: Alternative Logins & External Linking
**Assumptions about starting state:** Blank/fresh state.
**Step-by-step instructions:**
1. Navigate to `https://app.vwo.com/#/login`.
2. Verify the rendering and clickability of the following buttons:
   - "Sign in with Google"
   - "Sign in using SSO"
   - "Sign in with Passkey"
3. Verify the "Start a FREE TRIAL" link opens the appropriate signup flow (`https://vwo.com/free-trial/...`).
4. Verify the footer links "Privacy policy" and "Terms" navigate correctly.
**Expected outcomes:**
- Alternative sign-in buttons trigger the respective 3rd party or SSO authentication flows.
- Links navigate to correct external URLs in matching/new tabs.
**Success criteria:** All interactive alternative sign-in options and auxiliary links are functional.
**Failure conditions:** Missing href attributes, broken links, or dead buttons.
