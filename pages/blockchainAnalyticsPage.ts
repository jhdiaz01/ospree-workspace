import { Page, expect } from "@playwright/test"
import { HelperBase } from "./helperBase"
import { faker } from '@faker-js/faker'


export class FormBlockchainAnalyticsPage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    async clickOnFirstAddressHash() {
        await this.page.locator('[class="sc-jEItEs cZiuih"]').nth(0).click()
    }

    async clickOnLinkButton() {
        await this.page.locator('[class="sc-hmjpVf TZBDu"]', ({ hasText: 'Link'})).click()
    }

    async enterTheAccount() {
        await this.page.locator('[placeholder="Search for account"]').pressSequentially('QA-TEST')
        await this.page.locator('[class="sc-jNHqnW ehCjTz"]').click()
    }

    async clickOnConfirmButton() {
        await this.page.locator('[class="sc-hAjbQl fTQYEi"]', ({ hasText: 'Confirm' })).click()
    }





}