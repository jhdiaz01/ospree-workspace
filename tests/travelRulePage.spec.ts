import { PageManager } from '../pages/pageManager'
import { test } from '../test-options'

test('Create a Transfer transaction in Travel Rule', async ({ pageManager }) => {

    await pageManager.onSideBarPage().goToTravelRule()
    await pageManager.onTheTravelRuleSection().navigateToTransferFormOfTheTravelRule()
    await pageManager.onTransferFormTravelRule().enterAmount()
    await pageManager.onTransferFormTravelRule().selectAsset()
    await pageManager.onTransferFormTravelRule().clickContinue()
})