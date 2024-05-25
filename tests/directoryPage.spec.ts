import { test } from '../test-options'

test.describe.configure({ mode: 'parallel' });

test.describe('Accounts creation - Directory', () => {

    test('Navigate to the Directory section then create an Individual account', async ({ pageManager }) => {

        await pageManager.onSideBarPage().goToDirectory()
        await pageManager.onTheDirectorySection().navigateToTheIndividualFormOfTheAccountsDirectory()
        await pageManager.onCreateAccountFormDirectory().enterAccountID()
        await pageManager.onCreateAccountFormDirectory().enterEmail()
        await pageManager.onCreateAccountFormDirectory().enterFirstName()
        await pageManager.onCreateAccountFormDirectory().enterMiddleName()
        await pageManager.onCreateAccountFormDirectory().enterLastName()
        await pageManager.onCreateAccountFormDirectory().selectBirthDate()
        await pageManager.onCreateAccountFormDirectory().enterBirthplace()
        await pageManager.onCreateAccountFormDirectory().selectNationality()
    
        await pageManager.onCreateAccountFormDirectory().expandStructuredAddress()
        await pageManager.onCreateAccountFormDirectory().enterStreetNumber()
        await pageManager.onCreateAccountFormDirectory().enterStreetName()
        await pageManager.onCreateAccountFormDirectory().enterBuildingName()
        await pageManager.onCreateAccountFormDirectory().enterAddressFloor()
        await pageManager.onCreateAccountFormDirectory().enterRoom()
        await pageManager.onCreateAccountFormDirectory().enterDepartment()
        await pageManager.onCreateAccountFormDirectory().enterPostbox()
        await pageManager.onCreateAccountFormDirectory().enterCityLocation()
        await pageManager.onCreateAccountFormDirectory().enterCityAddress()
        await pageManager.onCreateAccountFormDirectory().enterRegion()
        await pageManager.onCreateAccountFormDirectory().enterDistrict()
        await pageManager.onCreateAccountFormDirectory().enterZipcode()
        await pageManager.onCreateAccountFormDirectory().selectCountry()
    
        await pageManager.onCreateAccountFormDirectory().clickCreateAccountButton()
    })

    test('Navigate to the Directory section then create an Entity account', async ({ pageManager }) => {

        await pageManager.onSideBarPage().goToDirectory()
        await pageManager.onTheDirectorySection().navigateToTheEntityFormOfTheAccountsDirectory()
        await pageManager.onCreateAccountFormDirectory().enterAccountID()
        await pageManager.onCreateAccountFormDirectory().enterEmail()
        await pageManager.onCreateAccountFormDirectory().enterLegalName()
        await pageManager.onCreateAccountFormDirectory().enterBusinessName()
        await pageManager.onCreateAccountFormDirectory().enterCountryOfIncorporation()
    
        await pageManager.onCreateAccountFormDirectory().expandStructuredAddress()
        await pageManager.onCreateAccountFormDirectory().enterStreetNumber()
        await pageManager.onCreateAccountFormDirectory().enterStreetName()
        await pageManager.onCreateAccountFormDirectory().enterBuildingName()
        await pageManager.onCreateAccountFormDirectory().enterAddressFloor()
        await pageManager.onCreateAccountFormDirectory().enterRoom()
        await pageManager.onCreateAccountFormDirectory().enterDepartment()
        await pageManager.onCreateAccountFormDirectory().enterPostbox()
        await pageManager.onCreateAccountFormDirectory().enterCityLocation()
        await pageManager.onCreateAccountFormDirectory().enterCityAddress()
        await pageManager.onCreateAccountFormDirectory().enterRegion()
        await pageManager.onCreateAccountFormDirectory().enterDistrict()
        await pageManager.onCreateAccountFormDirectory().enterZipcode()
        await pageManager.onCreateAccountFormDirectory().selectCountry()
    
        await pageManager.onCreateAccountFormDirectory().clickCreateAccountButton()
    })
})

test.describe('Recipients creation - Directory', () => {

    test('Navigate to the Directory section then create a Recipient individual account', async ({ pageManager }) => {
        
        await pageManager.onSideBarPage().goToDirectory()
        await pageManager.onTheDirectorySection().navigateToTheIndividualFormOfTheRecipientsDirectory()
        await pageManager.onCreateAccountFormDirectory().enterAccountID()
        await pageManager.onCreateAccountFormDirectory().enterEmail()
        await pageManager.onCreateAccountFormDirectory().enterFirstName()
        await pageManager.onCreateAccountFormDirectory().enterMiddleName()
        await pageManager.onCreateAccountFormDirectory().enterLastName()
        await pageManager.onCreateAccountFormDirectory().selectBirthDate()
        await pageManager.onCreateAccountFormDirectory().enterBirthplace()
        await pageManager.onCreateAccountFormDirectory().selectNationality()
    
        await pageManager.onCreateAccountFormDirectory().expandStructuredAddress()
        await pageManager.onCreateAccountFormDirectory().enterStreetNumber()
        await pageManager.onCreateAccountFormDirectory().enterStreetName()
        await pageManager.onCreateAccountFormDirectory().enterBuildingName()
        await pageManager.onCreateAccountFormDirectory().enterAddressFloor()
        await pageManager.onCreateAccountFormDirectory().enterRoom()
        await pageManager.onCreateAccountFormDirectory().enterDepartment()
        await pageManager.onCreateAccountFormDirectory().enterPostbox()
        await pageManager.onCreateAccountFormDirectory().enterCityLocation()
        await pageManager.onCreateAccountFormDirectory().enterCityAddress()
        await pageManager.onCreateAccountFormDirectory().enterRegion()
        await pageManager.onCreateAccountFormDirectory().enterDistrict()
        await pageManager.onCreateAccountFormDirectory().enterZipcode()
        await pageManager.onCreateAccountFormDirectory().selectCountry()
    
        await pageManager.onCreateAccountFormDirectory().clickCreateAccountButton()
    })

    test('Navigate to the Directory section then create a Recipient entity account', async ({ pageManager }) => {
        await pageManager.onSideBarPage().goToDirectory()
        await pageManager.onTheDirectorySection().navigateToTheEntityFormOfTheRecipientsDirectory()
        await pageManager.onCreateAccountFormDirectory().enterAccountID()
        await pageManager.onCreateAccountFormDirectory().enterEmail()
        await pageManager.onCreateAccountFormDirectory().enterLegalName()
        await pageManager.onCreateAccountFormDirectory().enterBusinessName()
        await pageManager.onCreateAccountFormDirectory().enterCountryOfIncorporation()
    
        await pageManager.onCreateAccountFormDirectory().expandStructuredAddress()
        await pageManager.onCreateAccountFormDirectory().enterStreetNumber()
        await pageManager.onCreateAccountFormDirectory().enterStreetName()
        await pageManager.onCreateAccountFormDirectory().enterBuildingName()
        await pageManager.onCreateAccountFormDirectory().enterAddressFloor()
        await pageManager.onCreateAccountFormDirectory().enterRoom()
        await pageManager.onCreateAccountFormDirectory().enterDepartment()
        await pageManager.onCreateAccountFormDirectory().enterPostbox()
        await pageManager.onCreateAccountFormDirectory().enterCityLocation()
        await pageManager.onCreateAccountFormDirectory().enterCityAddress()
        await pageManager.onCreateAccountFormDirectory().enterRegion()
        await pageManager.onCreateAccountFormDirectory().enterDistrict()
        await pageManager.onCreateAccountFormDirectory().enterZipcode()
        await pageManager.onCreateAccountFormDirectory().selectCountry()
    
        await pageManager.onCreateAccountFormDirectory().clickCreateAccountButton()
    })
})