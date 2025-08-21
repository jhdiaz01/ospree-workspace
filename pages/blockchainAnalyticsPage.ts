import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';

/**
 * Page Object Model for Blockchain Analytics functionality
 */
export class FormBlockchainAnalyticsPage extends HelperBase {

    constructor(page: Page) {
        super(page);
    }

    /**
     * Clicks on the first address hash in the list
     */
    async clickOnFirstAddressHash(): Promise<void> {
        await this.page.locator('[class="sc-jEItEs cZiuih"]').first().click();
    }

    /**
     * Clicks on the Link button to link an address to an account
     */
    async clickOnLinkButton(): Promise<void> {
        await this.page.getByRole('button', { name: 'Link' }).click();
    }

    /**
     * Enters account information in the search field
     */
    async enterTheAccount(): Promise<void> {
        const searchField = this.page.getByPlaceholder('Search for account');
        await searchField.fill('QA-TEST');
        
        // Wait for search results and click on the result
        await this.page.locator('[class="sc-jNHqnW ehCjTz"]').click();
    }

    /**
     * Clicks the Confirm button to complete the linking process
     */
    async clickOnConfirmButton(): Promise<void> {
        await this.page.getByRole('button', { name: 'Confirm' }).click();
        
        // Add assertion to verify the action was successful
        await expect(this.page.locator('text="Successfully linked"')).toBeVisible({ timeout: 10000 });
    }
}