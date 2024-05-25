import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://analytics-v3.onrender.com/');
  await page.goto('https://analytics-v3.onrender.com/login');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('john@example.com');
  await page.locator('input[name="username"]').press('Tab');
  await page.locator('input[name="password"]').fill('admin!@#');
  await page.locator('input[name="password"]').press('Enter');
  await page.getByRole('link', { name: 'Travel Rule' }).click();
  await page.getByRole('button', { name: 'Transfer' }).click();
  await page.getByText('Asset').nth(1).click();
  await page.getByText('BTC').click();
  await page.getByText('Flow').click();
  await page.getByText('Flow').click();
  await page.getByPlaceholder('Amount e.g.').click();
  await page.getByPlaceholder('Amount e.g.').fill('15');
  await page.getByText('USD 884,340').click();
  await page.getByText('Conversion Rate', { exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByText('Conversion rates are').click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByPlaceholder('Search for account').click();
});