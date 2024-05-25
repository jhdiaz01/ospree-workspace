import { test as base } from '@playwright/test'
import { PageManager } from './pages/pageManager'
import { expect } from '@playwright/test'

require('dotenv').config()

export type TestOptions = {
    globalURL: string
    submitTheCredentialsToLoginToOspree: string
    pageManager: PageManager
}

export const test = base.extend<TestOptions>({
    globalURL: ['', { option: true }],

    submitTheCredentialsToLoginToOspree: [async ({ page }, use) => {
        await page.goto(process.env.URL!);
        console.log(process.env.URL)
        const emailField = page.locator('input[name="username"]')
        const passwordField = page.locator('input[name="password"]')
        await emailField.fill(process.env.emailCredential!);
        console.log(process.env.emailCredential)
        await passwordField.fill(process.env.passwordCredential!)
        console.log(process.env.passwordCredential)
        await page.getByRole('button', { name: 'Sign in' }).click()
        expect('sc-fezjOJ hFeLtU').toBeTruthy()
        await use('')
    }, { auto: true }],


    pageManager: async ({ page, submitTheCredentialsToLoginToOspree }, use) => {
        const pm = new PageManager(page)
        await use(pm)

    }

})
