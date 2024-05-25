import { test, expect } from '@playwright/test';

test('test', async ({ page, request }) => {
  await page.goto('https://analytics-v3.onrender.com/');
  await page.goto('https://analytics-v3.onrender.com/login');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('john@example.com');
  await page.locator('input[name="username"]').press('Tab');
  await page.locator('input[name="password"]').fill('admin!@#');
  await page.locator('input[name="password"]').press('Enter');
  await page.getByText('Blockchain Analytics').nth(1).click();
  await page.getByText('bc1qas2h2de67v2024-05-0399%').click();
  await page.locator('.sc-gqkXGg').first().click();
  await page.locator('li:nth-child(2) > .sc-gqkXGg').first().click();
  await page.getByRole('heading', { name: 'Address is not linked with' }).click();
  await page.getByRole('button', { name: 'Link' }).click();
  await page.getByPlaceholder('Search for account').click();
  await page.getByPlaceholder('Search for account').fill('kleenex');
  await page.getByText('KLEENEX01').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.locator('div').filter({ hasText: /^bc1qas2rvpejpvncd6z5hcscvw52n4wxw5th2de67v2024-05-03$/ }).getByRole('img').nth(1).click();
  await page.locator('div').filter({ hasText: /^bc1qas2rvpejpvncd6z5hcscvw52n4wxw5th2de67vCopied!2024-05-03$/ }).getByRole('img').nth(1).click();
  await page.locator('.sc-hLVXRe').first().click();
  await page.locator('div').filter({ hasText: /^bc1qas2rvpejpvncd6z5hcscvw52n4wxw5th2de67v2024-05-03$/ }).getByRole('img').nth(1).click();
  await page.getByText('Copied!').click();
});