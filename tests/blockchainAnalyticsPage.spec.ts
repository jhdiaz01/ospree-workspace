import { test } from '../test-options'

test('Navigate to Blockchain Analyics then link an address hash to an account', async ({ pageManager }) => {

    await pageManager.onSideBarPage().goToBlockchainAnalytics()
    await pageManager.onBlockchainAnalytics().clickOnFirstAddressHash()
    await pageManager.onBlockchainAnalytics().clickOnLinkButton()
    await pageManager.onBlockchainAnalytics().enterTheAccount()
    await pageManager.onBlockchainAnalytics().clickOnConfirmButton()
})