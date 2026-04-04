# CURA Healthcare Appointment Test Plan

## Overview
This document outlines the test strategy and scenarios for making an appointment on the CURA Healthcare Service website (https://katalon-demo-cura.herokuapp.com/).

## Assumptions
- For all scenarios, the starting state is a fresh browser session (no active sessions).
- Credentials for testing:
    - **Username:** John Doe
    - **Password:** ThisIsNotAPassword
- Date format: `dd/mm/yyyy` as per site convention.

---

## Scenario 1: Happy Path - Successful Appointment Booking
**Assumptions about starting state:** Blank/fresh state, user has the correct login credentials.

**Step-by-step instructions:**
1. Navigate to `https://katalon-demo-cura.herokuapp.com/`.
2. Locate and click on the "Make Appointment" button.
3. On the login page, enter **John Doe** in the "Username" field.
4. Enter **ThisIsNotAPassword** in the "Password" field.
5. Click the "Login" button.
6. On the "Make Appointment" page, fill in the following:
   - **Facility:** Tokyo CURA Healthcare Center
   - **Apply for hospital readmission:** No (Default)
   - **Healthcare Program:** Medicare (Default)
   - **Visit Date:** 25/03/2026
7. Click the "Book Appointment" button.

**Expected outcomes:**
- User is authenticated successfully and redirected to the appointment form.
- The appointment is booked and the user is redirected to the "Appointment Confirmation" page.
- The summary details correctly display:
    - **Facility:** Tokyo CURA Healthcare Center
    - **Apply for hospital readmission:** No
    - **Healthcare Program:** Medicare
    - **Visit Date:** 25/03/2026

**Success criteria:**
- User is on the URL: `https://katalon-demo-cura.herokuapp.com/appointment.php#summary`.
- The heading "Appointment Confirmation" is visible.
- All summary details match the input given.

**Failure conditions:**
- Login fails with valid credentials.
- Error message appears on booking attempt.
- User is not redirected to the summary page.
- Summary details do not match inputs.

---

## Scenario 2: Error Handling - Unauthorized Appointment Access
**Assumptions about starting state:** User is not logged in.

**Step-by-step instructions:**
1. Directly attempt to navigate to `https://katalon-demo-cura.herokuapp.com/#appointment`.
2. Observe redirection.

**Expected outcomes:**
- User should be redirected to the login page (URL usually contains `#login`).

**Success criteria:** Redirect happens correctly to prevent unauthorized booking.

---

## Scenario 3: Validation - Missing Visit Date
**Assumptions about starting state:** User is logged in.

**Step-by-step instructions:**
1. Navigate to the appointment form.
2. Select any facility and healthcare program.
3. Leave the "Visit Date" field empty.
4. Attempt to click "Book Appointment".

**Expected outcomes:**
- The field is marked as required.
- Form submission is prevented.

**Success criteria:** Correct browser-level or application-level validation alert is shown.
