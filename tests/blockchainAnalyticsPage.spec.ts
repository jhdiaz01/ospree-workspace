import { test } from '../test-options';

test.describe('Blockchain Analytics', () => {

    test('should successfully link an address hash to an account', async ({ pageManager }) => {
        // Navigate to Blockchain Analytics section
        await pageManager.onSideBarPage().goToBlockchainAnalytics();
        
        // Select first address hash from the list
        await pageManager.onBlockchainAnalytics().clickOnFirstAddressHash();
        
        // Initiate linking process
        await pageManager.onBlockchainAnalytics().clickOnLinkButton();
        
        // Enter account information
        await pageManager.onBlockchainAnalytics().enterTheAccount();
        
        // Confirm the linking action
        await pageManager.onBlockchainAnalytics().clickOnConfirmButton();
    });

});