# Test Cases: VWO Login Page — Invalid Login Scenarios

| Field | Value |
|-------|-------|
| **Version** | 2.0 |
| **Author** | QA Team |
| **Date** | 2026-04-01 |
| **Total Test Cases** | 5 |

---

## Test Case Format

Each test case follows this structure:

| Field | Description |
|-------|-------------|
| **TC ID** | Unique identifier (TC-001, TC-002, ...) |
| **Title** | Brief description of what is tested |
| **Preconditions** | What must be true before the test |
| **Steps** | Step-by-step instructions |
| **Expected Result** | What should happen |
| **Priority** | High / Medium / Low |
| **Category** | Smoke / Functional / Negative |
| **Spec File** | Corresponding Playwright spec file |

---

## Test Cases

### TC-001: Invalid Login with Arabic Email and Password

| Field | Details |
|-------|---------|
| **TC ID** | TC-001 |
| **Title** | Verify login fails gracefully with Arabic Unicode characters in email and password |
| **Preconditions** | 1. Browser is open. 2. User is on the VWO login page (`https://app.vwo.com/#/login`). 3. No user is currently logged in. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `specs/invalid-login.spec.js` |

**Test Data:**

| Field | Value |
|-------|-------|
| Email | `مستخدم@بريد.كوم` |
| Password | `كلمة_المرور123` |

**Steps:**

| Step # | Action | Expected Behavior |
|--------|--------|-------------------|
| 1 | Navigate to `https://app.vwo.com/#/login` | Login page loads successfully with VWO logo, email field, password field, and "Sign in" button visible |
| 2 | Click on the "Email address" input field | Email field receives focus with blue border highlight |
| 3 | Type `مستخدم@بريد.كوم` in the email field | Arabic characters are accepted and displayed in the email field (RTL text rendering) |
| 4 | Click on the "Password" input field | Password field receives focus |
| 5 | Type `كلمة_المرور123` in the password field | Password is entered and masked with dots (●●●●●●●●●●●●) |
| 6 | Click the "Sign in" button | Form submission is initiated |
| 7 | Wait for server response (up to 10 seconds) | An error message is displayed indicating invalid credentials or invalid email format |

**Expected Result:**
- The login attempt should **fail** with a clear error message (e.g., *"Your email, password, IP address or location did not match"* or *"Please enter a valid email address"*)
- The application should NOT crash, hang, or display an unhandled exception
- The user should remain on the login page with the ability to retry
- No SQL errors or stack traces should be exposed in the UI

---

### TC-002: Invalid Login with Chinese Email and Password

| Field | Details |
|-------|---------|
| **TC ID** | TC-002 |
| **Title** | Verify login fails gracefully with Chinese Unicode characters in email and password |
| **Preconditions** | 1. Browser is open. 2. User is on the VWO login page (`https://app.vwo.com/#/login`). 3. No user is currently logged in. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `specs/invalid-login.spec.js` |

**Test Data:**

| Field | Value |
|-------|-------|
| Email | `用户名@邮件.中国` |
| Password | `密码测试123` |

**Steps:**

| Step # | Action | Expected Behavior |
|--------|--------|-------------------|
| 1 | Navigate to `https://app.vwo.com/#/login` | Login page loads successfully with all form elements visible |
| 2 | Click on the "Email address" input field | Email field receives focus |
| 3 | Type `用户名@邮件.中国` in the email field | Chinese characters are accepted and rendered in the email field |
| 4 | Click on the "Password" input field | Password field receives focus |
| 5 | Type `密码测试123` in the password field | Password is entered and masked with dots |
| 6 | Click the "Sign in" button | Form submission is initiated |
| 7 | Wait for server response (up to 10 seconds) | An error message is displayed indicating invalid credentials or invalid email format |

**Expected Result:**
- The login attempt should **fail** with a clear, user-friendly error message
- The Chinese characters should not cause encoding issues, JavaScript errors, or page crashes
- The error message should be displayed in English (the application's default language)
- The user should remain on the login page with both fields still populated
- No raw error codes, stack traces, or database errors should be visible

---

### TC-003: Invalid Login with Fake/Dummy Credentials

| Field | Details |
|-------|---------|
| **TC ID** | TC-003 |
| **Title** | Verify login fails with unregistered dummy email and incorrect password |
| **Preconditions** | 1. Browser is open. 2. User is on the VWO login page (`https://app.vwo.com/#/login`). 3. No user is currently logged in. 4. The email `fakeuser.dummy2026@yopmail.com` is NOT registered on VWO. |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `specs/invalid-login.spec.js` |

**Test Data:**

| Field | Value |
|-------|-------|
| Email | `fakeuser.dummy2026@yopmail.com` |
| Password | `WrongPassword@123!` |

**Steps:**

| Step # | Action | Expected Behavior |
|--------|--------|-------------------|
| 1 | Navigate to `https://app.vwo.com/#/login` | Login page loads successfully |
| 2 | Click on the "Email address" input field | Email field is active and ready for input |
| 3 | Type `fakeuser.dummy2026@yopmail.com` in the email field | Email is entered and displayed in the field; email format is valid (contains `@` and domain) |
| 4 | Click on the "Password" input field | Password field receives focus |
| 5 | Type `WrongPassword@123!` in the password field | Password is entered and masked |
| 6 | Click the "Sign in" button | Form submits; a loading spinner or indicator may briefly appear |
| 7 | Wait for server response (up to 10 seconds) | An error message appears on screen |
| 8 | Verify the error message text | Error message reads: *"Your email, password, IP address or location did not match"* (or similar) |
| 9 | Verify the URL has NOT changed to a dashboard | URL remains `https://app.vwo.com/#/login` |

**Expected Result:**
- The login should **fail** with error message: *"Your email, password, IP address or location did not match"*
- The "Sign in" button should become clickable again after the error
- The password field should be cleared (or remain filled, depending on UX design)
- No redirection to dashboard or any authenticated page should occur
- The error message should NOT reveal whether the email exists or not (security best practice)

---

### TC-004: Invalid Login with SQL Injection in Email and Password

| Field | Details |
|-------|---------|
| **TC ID** | TC-004 |
| **Title** | Verify the application is not vulnerable to SQL injection via login fields |
| **Preconditions** | 1. Browser is open. 2. User is on the VWO login page (`https://app.vwo.com/#/login`). 3. No user is currently logged in. |
| **Priority** | High |
| **Category** | Negative (Security) |
| **Spec File** | `specs/invalid-login.spec.js` |

**Test Data:**

| Field | Value |
|-------|-------|
| Email | `admin' OR '1'='1' --` |
| Password | `' OR '1'='1' --` |

**Steps:**

| Step # | Action | Expected Behavior |
|--------|--------|-------------------|
| 1 | Navigate to `https://app.vwo.com/#/login` | Login page loads successfully |
| 2 | Click on the "Email address" input field | Email field receives focus |
| 3 | Type `admin' OR '1'='1' --` in the email field | The SQL injection string is entered as plain text in the field |
| 4 | Click on the "Password" input field | Password field receives focus |
| 5 | Type `' OR '1'='1' --` in the password field | The SQL injection string is entered and masked |
| 6 | Click the "Sign in" button | Form submission is initiated |
| 7 | Wait for server response (up to 10 seconds) | An error message or validation error is displayed |
| 8 | Verify no unauthorized access was granted | User remains on the login page; no dashboard content is shown |
| 9 | Open browser DevTools → Console tab | No SQL errors, stack traces, or database exception messages visible |
| 10 | Open browser DevTools → Network tab, inspect the login API response | Response should be a standard 401/403 error, not a 500 server error |

**Expected Result:**
- The login should **fail** with a standard error message (e.g., *"Please enter a valid email address"* or *"Your email, password, IP address or location did not match"*)
- **NO unauthorized access** is granted — the user must NOT be redirected to any authenticated page
- No SQL error messages, database details, or stack traces are exposed in the UI or API response
- The server should return HTTP 401 (Unauthorized) or 400 (Bad Request), NOT HTTP 500 (Internal Server Error)
- The input should be properly sanitized/escaped on the server side

---

### TC-005: Invalid Login with Empty Email and Password Fields

| Field | Details |
|-------|---------|
| **TC ID** | TC-005 |
| **Title** | Verify validation messages appear when submitting the login form with empty fields |
| **Preconditions** | 1. Browser is open. 2. User is on the VWO login page (`https://app.vwo.com/#/login`). 3. No user is currently logged in. 4. Both email and password fields are empty (default state). |
| **Priority** | High |
| **Category** | Negative |
| **Spec File** | `specs/invalid-login.spec.js` |

**Test Data:**

| Field | Value |
|-------|-------|
| Email | *(empty)* |
| Password | *(empty)* |

**Steps:**

| Step # | Action | Expected Behavior |
|--------|--------|-------------------|
| 1 | Navigate to `https://app.vwo.com/#/login` | Login page loads successfully; email field has placeholder "Enter email ID"; password field has placeholder "Enter password" |
| 2 | Verify the email field is empty | Email field shows placeholder text only, no value entered |
| 3 | Verify the password field is empty | Password field shows placeholder text only, no value entered |
| 4 | Click the "Sign in" button without entering any data | Form validation is triggered (client-side) |
| 5 | Wait for validation message(s) to appear (up to 3 seconds) | Validation error message(s) appear near the email and/or password fields |
| 6 | Verify validation message for the email field | An inline validation message appears (e.g., *"Your email, password, IP address or location did not match"* or *"Please enter your email"*) |
| 7 | Verify the form was NOT submitted to the server | No network request to the login API endpoint should be made (check DevTools Network tab) — OR — if the request was made, the server should return a validation error |
| 8 | Verify the URL has NOT changed | URL remains `https://app.vwo.com/#/login` |
| 9 | Enter a valid email, leave password empty, and click "Sign in" | A validation message should appear specifically for the password field |
| 10 | Clear email, enter a password, leave email empty, and click "Sign in" | A validation message should appear specifically for the email field |

**Expected Result:**
- The form should NOT submit successfully with empty fields
- Clear, inline validation messages should be displayed indicating which fields are required
- The user should remain on the login page
- The "Sign in" button should remain functional for retry
- No API call should be made with empty credentials (client-side validation should catch it)
- Tab index and focus should move to the first invalid field after validation

---

## Summary

| Priority | Count |
|----------|-------|
| High | 5 |
| Medium | 0 |
| Low | 0 |
| **Total** | **5** |

| Category | Count |
|----------|-------|
| Smoke | 0 |
| Functional | 0 |
| Negative | 5 |

---

## Notes

- **All 5 test cases are Negative tests** designed to validate the application's behavior when given invalid, malicious, or empty input.
- **TC-001 & TC-002** focus on internationalization (i18n) handling — ensuring non-Latin Unicode characters (Arabic RTL and Chinese CJK) don't crash the application or bypass authentication.
- **TC-003** tests the most common invalid login scenario with properly formatted but unregistered credentials.
- **TC-004** is a basic security test for SQL injection vulnerability through the login form.
- **TC-005** validates client-side form validation for required field enforcement.
- **Spec File**: All 5 test cases map to `specs/invalid-login.spec.js` for Playwright automation.
