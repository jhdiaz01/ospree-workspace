import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';
import { faker } from '@faker-js/faker';

/**
 * Page Object Model for Travel Rule functionality
 */
export class FormTravelRulePage extends HelperBase {

    constructor(page: Page) {
        super(page);
    }

    /**
     * Enters a random amount in the amount field
     */
    async enterAmount(): Promise<void> {
        const randomAmount = faker.commerce.price();
        const amountField = this.page.locator('input[type="number"]');
        await amountField.fill(randomAmount);
    }

    /**
     * Selects Bitcoin (BTC) as the asset
     */
    async selectAsset(): Promise<void> {
        await this.page.getByText('Asset').nth(1).click();
        await this.page.getByText('BTC').click();
        
        // Verify asset selection
        await expect(this.page.getByText('BTC')).toBeVisible();
    }

    /**
     * Clicks the Continue button to proceed with the transfer
     */
    async clickContinue(): Promise<void> {
        await this.page.getByRole('button', { name: 'Continue' }).click();
        
        // Wait for the next step to load
        await this.page.waitForLoadState('networkidle');
    }
}