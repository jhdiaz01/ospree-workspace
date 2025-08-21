import { test } from '../test-options';

test.describe('Travel Rule', () => {

    test('should create a Transfer transaction successfully', async ({ pageManager }) => {
        // Navigate to Travel Rule section
        await pageManager.onSideBarPage().goToTravelRule();
        
        // Navigate to Transfer form
        await pageManager.onTheTravelRuleSection().navigateToTransferFormOfTheTravelRule();
        
        // Fill in transfer details
        await pageManager.onTransferFormTravelRule().enterAmount();
        await pageManager.onTransferFormTravelRule().selectAsset();
        
        // Proceed with the transaction
        await pageManager.onTransferFormTravelRule().clickContinue();
    });

});