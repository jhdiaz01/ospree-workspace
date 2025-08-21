import { test as base } from '@playwright/test';
import { PageManager } from './pages/pageManager';
import { expect } from '@playwright/test';

require('dotenv').config();

export type TestOptions = {
    globalURL: string;
    submitTheCredentialsToLoginToOspree: string;
    pageManager: PageManager;
};

export const test = base.extend<TestOptions>({
    globalURL: ['', { option: true }],

    submitTheCredentialsToLoginToOspree: [async ({ page }, use) => {
        // Validate environment variables are set
        if (!process.env.URL || !process.env.emailCredential || !process.env.passwordCredential) {
            throw new Error('Missing required environment variables. Please check your .env file.');
        }

        await page.goto(process.env.URL);
        
        const emailField = page.locator('input[name="username"]');
        const passwordField = page.locator('input[name="password"]');
        
        await emailField.fill(process.env.emailCredential);
        await passwordField.fill(process.env.passwordCredential);
        await page.getByRole('button', { name: 'Sign in' }).click();
        
        // Wait for successful login - look for a specific element that indicates login success
        await expect(page.locator('[class*="sc-fezjOJ"], [class*="hFeLtU"]')).toBeVisible({ timeout: 10000 });
        
        await use('');
    }, { auto: true }],

    pageManager: async ({ page, submitTheCredentialsToLoginToOspree }, use) => {
        const pm = new PageManager(page);
        await use(pm);
    }
});
