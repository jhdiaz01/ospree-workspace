import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';

/**
 * Page Object Model for the sidebar navigation
 */
export class SideBarPage extends HelperBase {

    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigate to Blockchain Analytics section
     */
    async goToBlockchainAnalytics(): Promise<void> {
        const isCurrentPageActive = await this.page.locator('[class*="active"]')
            .getByText('Blockchain Analytics').isVisible();
            
        if (!isCurrentPageActive) {
            await this.page.getByRole('link', { name: 'Blockchain Analytics' }).click();
        }
        
        await expect(this.page.getByText('Blockchain Analytics').nth(1)).toBeVisible();
    }

    /**
     * Navigate to Travel Rule section
     */
    async goToTravelRule(): Promise<void> {
        await this.page.getByRole('link', { name: 'Travel Rule' }).click();
        await expect(this.page.locator('text="Travel Rule"')).toBeVisible();
    }

    /**
     * Navigate to Directory section
     */
    async goToDirectory(): Promise<void> {
        await this.page.getByRole('link', { name: 'Directory' }).click();
        await expect(this.page.locator('text="Directory"')).toBeVisible();
    }

    /**
     * Navigate to Reports section
     */
    async goToReports(): Promise<void> {
        await this.page.getByRole('link', { name: 'Reports' }).click();
        await expect(this.page.locator('text="Reports"')).toBeVisible();
    }

    /**
     * Navigate to Case Management section
     */
    async goToCaseManagement(): Promise<void> {
        await this.page.getByRole('link', { name: 'Case Management' }).click();
        await expect(this.page.locator('text="Case Management"')).toBeVisible();
    }

    /**
     * Navigate to Settings section
     */
    async goToSettings(): Promise<void> {
        await this.page.getByRole('link', { name: 'Settings' }).click();
        await expect(this.page.locator('text="Settings"')).toBeVisible();
    }
}