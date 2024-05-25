import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";


export class NavigationPage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    async navigateToTheIndividualFormOfTheAccountsDirectory() {
        await this.page.locator('[class="sc-hmjpVf TZBDu"]').first().click()
        //expect(this.page.locator('[class="sc-bnuovn bzMchF active"]', ({ hasText: 'Accounts' })))

        await this.page.locator('[class="sc-lliPmu ddEeTh"]').first().click();
    }

    async navigateToTheEntityFormOfTheAccountsDirectory() {
        await this.page.locator('[class="sc-hmjpVf TZBDu"]').first().click()
        //expect(this.page.locator('[class="sc-bnuovn bzMchF active"]', ({ hasText: 'Accounts' })))

        await this.page.locator('[class="sc-lliPmu ddEeTh"]').last().click();
    }

    async navigateToTheIndividualFormOfTheRecipientsDirectory() {
        await this.page.locator('[class="sc-bnuovn bzMchF"]', ({ hasText: 'Recipients' })).click()
        await this.page.locator('[class="sc-hmjpVf TZBDu"]').first().click()
        //expect(this.page.locator('[class="sc-bnuovn bzMchF active"]', ({ hasText: 'Recipients' })))

        const recipientDropdown = await this.page.locator('div[class="sc-BHvUt fxtiMg dropdown-menu dropdown-menu-end show"]').isVisible()

        if ( recipientDropdown ) {
            await this.page.locator('[class="sc-hFFXrT kXUiC"]').first().click()
        }
    }

    async navigateToTheEntityFormOfTheRecipientsDirectory() {
        await this.page.locator('[class="sc-bnuovn bzMchF"]', ({ hasText: 'Recipients' })).click()
        await this.page.locator('[class="sc-hmjpVf TZBDu"]').first().click()
        //expect(this.page.locator('[class="sc-bnuovn bzMchF active"]', ({ hasText: 'Recipients' })))

        const recipientDropdown = await this.page.locator('div[class="sc-BHvUt fxtiMg dropdown-menu dropdown-menu-end show"]').isVisible()

        if ( recipientDropdown ) {
            await this.page.locator('[class="sc-hFFXrT kXUiC"]').last().click()
        }
    }

    async navigateToTransferFormOfTheTravelRule() {
        await this.page.getByRole('button', { name: 'Transfer' }).click()
        expect(this.page.locator('[class="sc-fmciRz dyjkBB"]').getByText('Amount', { exact: true }))
    }
}