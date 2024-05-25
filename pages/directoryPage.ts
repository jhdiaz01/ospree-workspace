import { Page, expect } from "@playwright/test"
import { HelperBase } from "./helperBase"
import { faker } from '@faker-js/faker'


export class FormDirectoryPage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }
    /**
     * The fields below are for Create Account - Directory.
     */

    async enterAccountID() {
        const randomAccountID = faker.string.numeric(5)
        const referenceId = this.page.locator('input[name="reference_id"]')
        await referenceId.fill(`${'QA-TEST-'}${randomAccountID}`)
    }

    async enterEmail() {
        const email = faker.string.alpha(10).toLowerCase()
        const emailAddress = this.page.locator('input[name="email"]')
        await emailAddress.fill(`${email}@test.com`)
    }

    async enterFirstName() {
        const randomFirstName = faker.person.firstName()
        const firstName = this.page.locator('input[name="name_first"]')
        await firstName.fill(randomFirstName)
    }

    async enterMiddleName() {
        const randomMiddleName = faker.person.middleName()
        const middleName = this.page.locator('input[name="name_middle"]')
        await middleName.fill(randomMiddleName)
    }

    async enterLastName() {
        const randomLastName = faker.person.lastName()
        const lastName = this.page.locator('input[name="name_last"]')
        await lastName.fill(randomLastName)
    }

    async selectBirthDate() {
        await this.page.locator('[class="sc-eDtABA jSTcSr"]').click()
        await this.page.locator('[class="yearselect"]').nth(0).selectOption({ value: '2006' })
        await this.page.getByRole('cell', { name: '1', exact: true }).first().click();
        await this.page.getByRole('button', { name: 'Apply' }).click()
    }

    async enterBirthplace() {
        const randomPlace = faker.location.city()
        const birthPlace = this.page.locator('input[name="place_of_birth"]')
        await birthPlace.fill(randomPlace)
    }

    async selectNationality() {
        await this.page.locator('[class="sc-iMrobD frlvbE"]').nth(0).click()
        await this.page.locator('[class="sc-fDMmqs hWdbUf"]').getByText('Belgium').click()
    }

    async expandStructuredAddress() {
        await this.page.locator('[class="sc-dordOn eCLrcf"]').nth(0).click()
    }

    async enterStreetNumber() {
        const randomStreetNo = faker.number.int(5).toString()
        await this.page.locator('[name="address_street_no"]').fill(randomStreetNo)
    }

    async enterStreetName() {
        const randomStreet = faker.location.street()
        const streetAddress = this.page.locator('input[name="address_street_name"]')
        await streetAddress.fill(randomStreet)
    }

    async enterBuildingName() {
        const randomBuildingName = faker.commerce.department()
        await this.page.locator('[name="address_building_name"]').fill(`${randomBuildingName} Bldg.`)
    }

    async enterAddressFloor() {
        const randomFloorLevel = faker.number.int(30).toString()
        await this.page.locator('[name="address_floor"]').fill(randomFloorLevel)
    }

    async enterRoom() {
        const randomRoom = faker.string.alpha()
        await this.page.locator('[name="address_room"]').fill(randomRoom)
    }

    async enterDepartment() {
        const randomDepartment = faker.commerce.department()
        await this.page.locator('[name="address_department"]').fill(randomDepartment)
    }

    async enterPostbox() {
        const randomPostbox = faker.location.zipCode()
        await this.page.locator('[name="address_postbox"]').fill(randomPostbox)
    }

    async enterCityLocation() {
        const randomCityLocation = faker.location.city()
        await this.page.locator('[name="address_city_location"]').fill(randomCityLocation)
    }

    async enterCityAddress() {
        const randomCity = faker.location.city()
        const cityAddress = this.page.locator('input[name="address_city"]')
        await cityAddress.fill(randomCity)
    }

    async enterRegion() {
        const randomRegion = faker.location.country()
        const regionAddress = this.page.locator('input[name="address_region"]')
        await regionAddress.fill(randomRegion)
    }

    async enterDistrict() {
        const randomDistrict = faker.number.int(10)
        await this.page.locator('[name="address_district"]').fill(`District ${randomDistrict}`)
    }

    async enterZipcode() {
        const randomZipCode = faker.location.zipCode()
        const zipCode = this.page.locator('input[name="address_postcode"]')
        await zipCode.fill(randomZipCode)
    }

    async selectCountry() {
        await this.page.locator('[class="sc-iMrobD frlvbE"]').nth(1).click()
        await this.page.locator('[class="sc-fDMmqs hWdbUf"]').getByText('Spain').click()
    }

    async clickCreateAccountButton() {
        await this.page.locator('[class="sc-hmjpVf htKmAy"]', ({ hasText: 'Create' })).click()
        await expect(this.page.locator('[class="MuiSnackbar-root MuiSnackbar-anchorOriginBottomRight sc-htJRVC iOQvin"]')).toHaveText("Successfully created record")
    }

    async enterLegalName() {
        const randomLegalName = faker.company.name()
        const legalName = this.page.locator('input[name="name_legal"]')
        await legalName.fill(randomLegalName)
    }

    async enterBusinessName() {
        const randomBusinessName = faker.company.name()
        const businessName = this.page.locator('input[name="name_business"]')
        await businessName.fill(randomBusinessName)
    }

    async enterCountryOfIncorporation() {
        await this.page.locator('[class="sc-iMrobD frlvbE"]').nth(0).click()
        await this.page.locator('[class="sc-fDMmqs hWdbUf"]').getByText('Belgium').click()
    }
}