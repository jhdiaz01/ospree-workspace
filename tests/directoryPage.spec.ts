import { test } from '../test-options';

test.describe.configure({ mode: 'parallel' });

test.describe('Directory - Account Creation', () => {

    test('should create an Individual account successfully', async ({ pageManager }) => {
        // Navigate to Directory section
        await pageManager.onSideBarPage().goToDirectory();
        
        // Navigate to Individual account form
        await pageManager.onTheDirectorySection().navigateToTheIndividualFormOfTheAccountsDirectory();
        
        // Fill in personal information
        await pageManager.onCreateAccountFormDirectory().enterAccountID();
        await pageManager.onCreateAccountFormDirectory().enterEmail();
        await pageManager.onCreateAccountFormDirectory().enterFirstName();
        await pageManager.onCreateAccountFormDirectory().enterMiddleName();
        await pageManager.onCreateAccountFormDirectory().enterLastName();
        
        // Fill in birth information
        await pageManager.onCreateAccountFormDirectory().selectBirthDate();
        await pageManager.onCreateAccountFormDirectory().enterBirthplace();
        await pageManager.onCreateAccountFormDirectory().selectNationality();
        
        // Fill in address information
        await pageManager.onCreateAccountFormDirectory().expandStructuredAddress();
        await pageManager.onCreateAccountFormDirectory().enterStreetNumber();
        await pageManager.onCreateAccountFormDirectory().enterStreetName();
        await pageManager.onCreateAccountFormDirectory().enterBuildingName();
        await pageManager.onCreateAccountFormDirectory().enterAddressFloor();
        await pageManager.onCreateAccountFormDirectory().enterRoom();
        await pageManager.onCreateAccountFormDirectory().enterDepartment();
        await pageManager.onCreateAccountFormDirectory().enterPostbox();
        await pageManager.onCreateAccountFormDirectory().enterCityLocation();
        await pageManager.onCreateAccountFormDirectory().enterCityAddress();
        await pageManager.onCreateAccountFormDirectory().enterRegion();
        await pageManager.onCreateAccountFormDirectory().enterDistrict();
        await pageManager.onCreateAccountFormDirectory().enterZipcode();
        await pageManager.onCreateAccountFormDirectory().selectCountry();
        
        // Submit the form
        await pageManager.onCreateAccountFormDirectory().clickCreateAccountButton();
    });

    test('should create an Entity account successfully', async ({ pageManager }) => {
        // Navigate to Directory section
        await pageManager.onSideBarPage().goToDirectory();
        
        // Navigate to Entity account form
        await pageManager.onTheDirectorySection().navigateToTheEntityFormOfTheAccountsDirectory();
        
        // Fill in entity information
        await pageManager.onCreateAccountFormDirectory().enterAccountID();
        await pageManager.onCreateAccountFormDirectory().enterEmail();
        await pageManager.onCreateAccountFormDirectory().enterLegalName();
        await pageManager.onCreateAccountFormDirectory().enterBusinessName();
        await pageManager.onCreateAccountFormDirectory().enterCountryOfIncorporation();
        
        // Fill in address information
        await pageManager.onCreateAccountFormDirectory().expandStructuredAddress();
        await pageManager.onCreateAccountFormDirectory().enterStreetNumber();
        await pageManager.onCreateAccountFormDirectory().enterStreetName();
        await pageManager.onCreateAccountFormDirectory().enterBuildingName();
        await pageManager.onCreateAccountFormDirectory().enterAddressFloor();
        await pageManager.onCreateAccountFormDirectory().enterRoom();
        await pageManager.onCreateAccountFormDirectory().enterDepartment();
        await pageManager.onCreateAccountFormDirectory().enterPostbox();
        await pageManager.onCreateAccountFormDirectory().enterCityLocation();
        await pageManager.onCreateAccountFormDirectory().enterCityAddress();
        await pageManager.onCreateAccountFormDirectory().enterRegion();
        await pageManager.onCreateAccountFormDirectory().enterDistrict();
        await pageManager.onCreateAccountFormDirectory().enterZipcode();
        await pageManager.onCreateAccountFormDirectory().selectCountry();
        
        // Submit the form
        await pageManager.onCreateAccountFormDirectory().clickCreateAccountButton();
    });

});