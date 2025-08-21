import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';

/**
 * Page Object Model for navigation functionality within sections
 */
export class NavigationPage extends HelperBase {

    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigate to the Individual form within the Accounts Directory
     */
    async navigateToTheIndividualFormOfTheAccountsDirectory(): Promise<void> {
        await this.page.getByRole('button', { name: 'Accounts' }).click();
        await expect(this.page.locator('[class*="active"]').getByText('Accounts')).toBeVisible();
        
        await this.page.getByRole('button', { name: 'Individual' }).click();
        await expect(this.page.getByText('Individual Form')).toBeVisible();
    }

    /**
     * Navigate to the Entity form within the Accounts Directory
     */
    async navigateToTheEntityFormOfTheAccountsDirectory(): Promise<void> {
        await this.page.getByRole('button', { name: 'Accounts' }).click();
        await expect(this.page.locator('[class*="active"]').getByText('Accounts')).toBeVisible();
        
        await this.page.getByRole('button', { name: 'Entity' }).click();
        await expect(this.page.getByText('Entity Form')).toBeVisible();
    }

    /**
     * Navigate to the Individual form within the Recipients Directory
     */
    async navigateToTheIndividualFormOfTheRecipientsDirectory(): Promise<void> {
        await this.page.getByRole('button', { name: 'Recipients' }).click();
        await expect(this.page.locator('[class*="active"]').getByText('Recipients')).toBeVisible();

        const recipientDropdown = await this.page.locator('div[class*="dropdown-menu"]').isVisible();
        if (recipientDropdown) {
            await this.page.getByRole('button', { name: 'Individual' }).click();
        }
        
        await expect(this.page.getByText('Individual Recipients Form')).toBeVisible();
    }

    /**
     * Navigate to the Entity form within the Recipients Directory
     */
    async navigateToTheEntityFormOfTheRecipientsDirectory(): Promise<void> {
        await this.page.getByRole('button', { name: 'Recipients' }).click();
        await expect(this.page.locator('[class*="active"]').getByText('Recipients')).toBeVisible();

        await this.page.getByRole('button', { name: 'Entity' }).click();
        await expect(this.page.getByText('Entity Recipients Form')).toBeVisible();
    }

    /**
     * Navigate to Transfer form within the Travel Rule section
     */
    async navigateToTransferFormOfTheTravelRule(): Promise<void> {
        await this.page.getByRole('button', { name: 'Transfer' }).click();
        await expect(this.page.locator('text="Amount"')).toBeVisible();
        await expect(this.page.getByText('Amount', { exact: true })).toBeVisible();
    }
}