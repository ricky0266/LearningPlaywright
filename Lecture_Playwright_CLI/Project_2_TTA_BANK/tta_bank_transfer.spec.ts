import { test, expect, Page } from '@playwright/test';

test.describe('TTA Bank - Transfer Funds Flow', () => {

    test('Create dummy signup and transfer funds', async ({ page }: { page: Page }) => {
        // 1. Open the TTA Bank portal
        await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');

        // 2. Create Dummy Signup
        await page.getByRole('button', { name: 'Sign Up' }).click();
        
        // Update locators based on the accessible names/placeholders found in the DOM
        await page.getByRole('textbox', { name: 'John Doe' }).fill('Dummy User');
        await page.getByRole('textbox', { name: 'you@example.com' }).fill('dummyuser1234@ttabank.com');
        await page.getByRole('textbox', { name: '••••••••' }).fill('SecretPass123!');
        await page.getByRole('button', { name: 'Create Account' }).click();

        // 3. Verify that the 50K $ balance is present
        await expect(page.getByRole('heading', { name: '$50,000.00' })).toBeVisible({ timeout: 10000 });

        // 4. In the Transfer Funds Tab, transfer $5000 to default dropdown
        await page.getByRole('button', { name: 'Transfer Funds' }).click();
        
        // Wait for transfer form to load
        await expect(page.getByRole('heading', { name: 'Transfer Funds' })).toBeVisible();
        await page.getByRole('spinbutton').fill('5000');
        await page.getByRole('button', { name: 'Continue' }).click();
        
        // Confirm Transfer
        await expect(page.getByRole('heading', { name: 'Review Transfer' })).toBeVisible();
        await page.getByRole('button', { name: 'Confirm Transfer' }).click();

        // 5. Verify that in the dashboard it will be the 45K $ balance
        await page.getByRole('button', { name: 'Dashboard' }).click();
        await expect(page.getByRole('heading', { name: '$45,000.00' })).toBeVisible({ timeout: 10000 });

        // Take a screenshot of the dashboard before leaving
        await page.screenshot({ path: 'tta_bank_dashboard_45k_ts.png' });

        // 6. Sign out
        await page.getByRole('button', { name: 'Sign Out' }).click();
    });
});
