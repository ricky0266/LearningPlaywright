// @ts-check
const { test, expect } = require('@playwright/test');

const LOGIN_URL = 'https://app.vwo.com/#/login';

test.describe('VWO Invalid Login Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
    // Wait for the login form to be ready
    await page.locator('[data-qa="hocewoqisi"]').waitFor({ state: 'visible', timeout: 15000 });
  });

  test('TC-001: Invalid login with Arabic email and password', async ({ page }) => {
    // Step 3: Click on email field
    const emailField = page.locator('[data-qa="hocewoqisi"]');
    await emailField.click();

    // Step 4: Type Arabic email
    await emailField.fill('مستخدم@بريد.كوم');

    // Step 5-6: Click password field and type Arabic password
    const passwordField = page.locator('[data-qa="jobodapuxe"]');
    await passwordField.click();
    await passwordField.fill('كلمة_المرور123');

    // Step 7: Click Sign in
    await page.getByRole('button', { name: 'Sign in', exact: false }).first().click();

    // Step 8: Wait for error message
    await page.waitForTimeout(5000);

    // Take screenshot
    await page.screenshot({ path: 'Lecture_Playwright_MCP/demo/screenshots/TC001_arabic_login_result.png', fullPage: true });

    // Verify: user remains on login page
    expect(page.url()).toContain('/login');

    // Verify: page did not crash — email field should still be visible
    await expect(emailField).toBeVisible();

    console.log('TC-001 PASSED: Arabic login was rejected gracefully, no crash detected.');
  });

  test('TC-002: Invalid login with Chinese email and password', async ({ page }) => {
    // Step 3: Click on email field
    const emailField = page.locator('[data-qa="hocewoqisi"]');
    await emailField.click();

    // Step 4: Type Chinese email
    await emailField.fill('用户名@邮件.中国');

    // Step 5-6: Click password field and type Chinese password
    const passwordField = page.locator('[data-qa="jobodapuxe"]');
    await passwordField.click();
    await passwordField.fill('密码测试123');

    // Step 7: Click Sign in
    await page.getByRole('button', { name: 'Sign in', exact: false }).first().click();

    // Step 8: Wait for error message
    await page.waitForTimeout(5000);

    // Take screenshot
    await page.screenshot({ path: 'Lecture_Playwright_MCP/demo/screenshots/TC002_chinese_login_result.png', fullPage: true });

    // Verify: user remains on login page
    expect(page.url()).toContain('/login');

    // Verify: page did not crash
    await expect(emailField).toBeVisible();

    console.log('TC-002 PASSED: Chinese login was rejected gracefully, no crash detected.');
  });

  test('TC-003: Invalid login with fake/dummy credentials', async ({ page }) => {
    // Step 3: Click on email field
    const emailField = page.locator('[data-qa="hocewoqisi"]');
    await emailField.click();

    // Step 4: Type dummy email
    await emailField.fill('fakeuser.dummy2026@yopmail.com');

    // Step 5-6: Click password field and type dummy password
    const passwordField = page.locator('[data-qa="jobodapuxe"]');
    await passwordField.click();
    await passwordField.fill('WrongPassword@123!');

    // Step 7: Click Sign in
    await page.getByRole('button', { name: 'Sign in', exact: false }).first().click();

    // Step 8: Wait for error message
    await page.waitForTimeout(5000);

    // Take screenshot
    await page.screenshot({ path: 'Lecture_Playwright_MCP/demo/screenshots/TC003_dummy_login_result.png', fullPage: true });

    // Verify: user remains on login page
    expect(page.url()).toContain('/login');

    // Verify: page did not crash
    await expect(emailField).toBeVisible();

    // Try to capture error message text
    const pageContent = await page.textContent('body');
    console.log('TC-003 Page content snippet:', pageContent?.substring(0, 500));
    console.log('TC-003 PASSED: Dummy credentials login was rejected.');
  });

  test('TC-004: Invalid login with SQL injection in email and password', async ({ page }) => {
    // Step 3: Click on email field
    const emailField = page.locator('[data-qa="hocewoqisi"]');
    await emailField.click();

    // Step 4: Type SQL injection string in email
    await emailField.fill("admin' OR '1'='1' --");

    // Step 5-6: Click password field and type SQL injection string
    const passwordField = page.locator('[data-qa="jobodapuxe"]');
    await passwordField.click();
    await passwordField.fill("' OR '1'='1' --");

    // Step 7: Click Sign in
    await page.getByRole('button', { name: 'Sign in', exact: false }).first().click();

    // Step 8: Wait for error message
    await page.waitForTimeout(5000);

    // Take screenshot
    await page.screenshot({ path: 'Lecture_Playwright_MCP/demo/screenshots/TC004_sql_injection_result.png', fullPage: true });

    // Verify: user remains on login page (no unauthorized access)
    expect(page.url()).toContain('/login');

    // Verify: page did not crash and no SQL errors shown
    const pageContent = await page.textContent('body');
    expect(pageContent).not.toContain('SQL');
    expect(pageContent).not.toContain('syntax error');
    expect(pageContent).not.toContain('Exception');

    // Verify: email field still visible (page didn't navigate away)
    await expect(emailField).toBeVisible();

    console.log('TC-004 PASSED: SQL injection was handled safely, no unauthorized access.');
  });

  test('TC-005: Invalid login with empty email and password fields', async ({ page }) => {
    // Step 2-3: Verify fields are empty
    const emailField = page.locator('[data-qa="hocewoqisi"]');
    const passwordField = page.locator('[data-qa="jobodapuxe"]');
    
    await expect(emailField).toHaveValue('');
    await expect(passwordField).toHaveValue('');

    // Step 4: Click Sign in without entering any data
    await page.getByRole('button', { name: 'Sign in', exact: false }).first().click();

    // Step 5: Wait for validation message
    await page.waitForTimeout(3000);

    // Take screenshot
    await page.screenshot({ path: 'Lecture_Playwright_MCP/demo/screenshots/TC005_empty_fields_result.png', fullPage: true });

    // Verify: user remains on login page
    expect(page.url()).toContain('/login');

    // Verify: page did not crash
    await expect(emailField).toBeVisible();

    // Step 9: Enter valid email only, leave password empty, click sign in
    await emailField.fill('testuser@example.com');
    await page.getByRole('button', { name: 'Sign in', exact: false }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Lecture_Playwright_MCP/demo/screenshots/TC005_email_only_result.png', fullPage: true });

    // Step 10: Clear email, enter password only, click sign in
    await emailField.clear();
    await passwordField.fill('SomePassword123!');
    await page.getByRole('button', { name: 'Sign in', exact: false }).first().click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Lecture_Playwright_MCP/demo/screenshots/TC005_password_only_result.png', fullPage: true });

    // Verify: still on login page
    expect(page.url()).toContain('/login');

    console.log('TC-005 PASSED: Empty field validation worked correctly.');
  });
});
