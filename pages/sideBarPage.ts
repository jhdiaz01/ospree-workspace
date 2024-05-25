import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";


export class SideBarPage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    async goToBlockchainAnalytics() {
        const currentPage = await this.page.locator('[class="sc-cnHmbd gMRoaF active"]', ({ hasText: 'Blockchain Analytics'})).isVisible()
        if( currentPage ) {

        } else {
            await this.page.getByRole('link', { name: 'Blockchain Analytics' }).click()
        }
        expect(this.page.getByText('Blockchain Analytics').nth(1)).toBeVisible()
    }

    async goToTravelRule() {
        await this.page.getByRole('link', { name: 'Travel Rule' }).click()

    }

    async goToDirectory() {
        await this.page.getByRole('link', { name: 'Directory' }).click()

    }

    async goToReports() {
        await this.page.getByRole('link', { name: 'Reports' }).click()

    }

    async goToCaseManagement() {
        await this.page.getByRole('link', { name: 'Case Management' }).click()

    }

    async gotToSettings() {
        await this.page.getByRole('link', { name: 'Settings' }).click()
    }

}