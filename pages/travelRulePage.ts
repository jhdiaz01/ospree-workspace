import { Page, expect } from "@playwright/test"
import { HelperBase } from "./helperBase"
import { faker } from '@faker-js/faker'

export class FormTravelRulePage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    async enterAmount() {
        const randomAmount = faker.commerce.price()
        await this.page.locator('input[type="number"]').fill(randomAmount)
    }

    async selectAsset() {
        await this.page.getByText('Asset').nth(1).click();
        await this.page.getByText('BTC').click();
    }


    async clickContinue() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }



}