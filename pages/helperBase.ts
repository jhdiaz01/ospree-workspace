import { Page } from '@playwright/test';

/**
 * Base helper class for all Page Object Model classes
 * Contains common utility methods shared across page objects
 */
export class HelperBase {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Wait for a specified number of seconds
     * @param timeInSeconds - Time to wait in seconds
     */
    async waitForNumberOfSeconds(timeInSeconds: number): Promise<void> {
        await this.page.waitForTimeout(timeInSeconds * 1000);
    }

    /**
     * Wait for the page to be fully loaded
     */
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Scroll an element into view
     * @param selector - CSS selector or locator string
     */
    async scrollIntoView(selector: string): Promise<void> {
        await this.page.locator(selector).scrollIntoViewIfNeeded();
    }
}