import { test, expect } from '@playwright/test';

test.describe('VWO Login Flow', () => {
  test('Verify invalid credentials error message', async ({ page }) => {
    // Navigate to VWO login page
    await page.goto('https://app.vwo.com/#/login');

    // 1. Enter an invalid email/username
    await page.locator('#login-username').fill('invalid_user@abc.com');

    // 2. Enter an invalid password
    await page.locator('#login-password').fill('P@ssw0rd123!invalid');

    // 3. Click the login/submit button
    await page.locator('#js-login-btn').click();

    // 4. Wait for and assert the error message is visible
    const errorMessage = page.locator('#js-notification-box-msg');
    await expect(errorMessage).toBeVisible({ timeout: 10000 });
    
    // Validate the exact error text behavior (typically VWO shows a specific error message)
    await expect(errorMessage).toContainText('Your email, password, IP address or location did not match');
  });
});