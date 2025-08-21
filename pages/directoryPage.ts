import { Page, expect } from '@playwright/test';
import { HelperBase } from './helperBase';
import { faker } from '@faker-js/faker';

/**
 * Page Object Model for Directory form functionality
 * Handles both Individual and Entity account creation
 */
export class FormDirectoryPage extends HelperBase {

    constructor(page: Page) {
        super(page);
    }

    // Individual Account Form Methods

    /**
     * Enter a random Account ID for the form
     */
    async enterAccountID(): Promise<void> {
        const randomAccountID = faker.string.numeric(5);
        const referenceId = this.page.locator('input[name="reference_id"]');
        await referenceId.fill(`QA-TEST-${randomAccountID}`);
    }

    /**
     * Enter a random email address
     */
    async enterEmail(): Promise<void> {
        const email = faker.string.alpha(10).toLowerCase();
        const emailField = this.page.locator('input[name="email"]');
        await emailField.fill(`${email}@test.com`);
    }

    /**
     * Enter a random first name
     */
    async enterFirstName(): Promise<void> {
        const randomFirstName = faker.person.firstName();
        const firstNameField = this.page.locator('input[name="name_first"]');
        await firstNameField.fill(randomFirstName);
    }

    /**
     * Enter a random middle name
     */
    async enterMiddleName(): Promise<void> {
        const randomMiddleName = faker.person.middleName();
        const middleNameField = this.page.locator('input[name="name_middle"]');
        await middleNameField.fill(randomMiddleName);
    }

    /**
     * Enter a random last name
     */
    async enterLastName(): Promise<void> {
        const randomLastName = faker.person.lastName();
        const lastNameField = this.page.locator('input[name="name_last"]');
        await lastNameField.fill(randomLastName);
    }

    /**
     * Select a birth date using the date picker
     */
    async selectBirthDate(): Promise<void> {
        await this.page.locator('[class*="date-picker"]').click();
        await this.page.locator('[class="yearselect"]').selectOption({ value: '2006' });
        await this.page.getByRole('cell', { name: '1', exact: true }).first().click();
        await this.page.getByRole('button', { name: 'Apply' }).click();
    }

    /**
     * Enter a random birth place
     */
    async enterBirthplace(): Promise<void> {
        const randomPlace = faker.location.city();
        const birthPlaceField = this.page.locator('input[name="place_of_birth"]');
        await birthPlaceField.fill(randomPlace);
    }

    /**
     * Select nationality from dropdown
     */
    async selectNationality(): Promise<void> {
        await this.page.getByRole('combobox', { name: 'Nationality' }).click();
        await this.page.getByText('Spain').click();
    }

    // Address Form Methods

    /**
     * Expand the structured address section
     */
    async expandStructuredAddress(): Promise<void> {
        const addressSection = this.page.locator('[data-testid="structured-address"]');
        if (!(await addressSection.isVisible())) {
            await this.page.getByRole('button', { name: 'Structured Address' }).click();
        }
    }

    /**
     * Enter a random street number
     */
    async enterStreetNumber(): Promise<void> {
        const randomStreetNumber = faker.location.buildingNumber();
        const streetNumberField = this.page.locator('[name="address_street_number"]');
        await streetNumberField.fill(randomStreetNumber);
    }

    /**
     * Enter a random street name
     */
    async enterStreetName(): Promise<void> {
        const randomStreetName = faker.location.street();
        const streetNameField = this.page.locator('[name="address_street_name"]');
        await streetNameField.fill(randomStreetName);
    }

    /**
     * Enter a random building name
     */
    async enterBuildingName(): Promise<void> {
        const randomBuildingName = faker.commerce.department();
        const buildingNameField = this.page.locator('[name="address_building_name"]');
        await buildingNameField.fill(`${randomBuildingName} Bldg.`);
    }

    /**
     * Enter a random floor number
     */
    async enterAddressFloor(): Promise<void> {
        const randomFloorLevel = faker.number.int(30).toString();
        const floorField = this.page.locator('[name="address_floor"]');
        await floorField.fill(randomFloorLevel);
    }

    /**
     * Enter a random room identifier
     */
    async enterRoom(): Promise<void> {
        const randomRoom = faker.string.alpha();
        const roomField = this.page.locator('[name="address_room"]');
        await roomField.fill(randomRoom);
    }

    /**
     * Enter a random department name
     */
    async enterDepartment(): Promise<void> {
        const randomDepartment = faker.commerce.department();
        const departmentField = this.page.locator('[name="address_department"]');
        await departmentField.fill(randomDepartment);
    }

    /**
     * Enter a random postbox number
     */
    async enterPostbox(): Promise<void> {
        const randomPostbox = faker.location.zipCode();
        const postboxField = this.page.locator('[name="address_postbox"]');
        await postboxField.fill(randomPostbox);
    }

    /**
     * Enter a random city location
     */
    async enterCityLocation(): Promise<void> {
        const randomCity = faker.location.city();
        const cityLocationField = this.page.locator('[name="address_city_location"]');
        await cityLocationField.fill(randomCity);
    }

    /**
     * Enter a random city address
     */
    async enterCityAddress(): Promise<void> {
        const randomCityAddress = faker.location.city();
        const cityAddressField = this.page.locator('[name="address_city_address"]');
        await cityAddressField.fill(randomCityAddress);
    }

    /**
     * Enter a random region
     */
    async enterRegion(): Promise<void> {
        const randomRegion = faker.location.state();
        const regionField = this.page.locator('[name="address_region"]');
        await regionField.fill(randomRegion);
    }

    /**
     * Enter a random district
     */
    async enterDistrict(): Promise<void> {
        const randomDistrict = faker.location.county();
        const districtField = this.page.locator('[name="address_district"]');
        await districtField.fill(randomDistrict);
    }

    /**
     * Enter a random zipcode
     */
    async enterZipcode(): Promise<void> {
        const randomZipcode = faker.location.zipCode();
        const zipcodeField = this.page.locator('[name="address_zipcode"]');
        await zipcodeField.fill(randomZipcode);
    }

    /**
     * Select country from dropdown
     */
    async selectCountry(): Promise<void> {
        await this.page.getByRole('combobox', { name: 'Country' }).click();
        await this.page.getByText('Spain').click();
    }

    // Entity Account Form Methods

    /**
     * Enter a random legal name for entity
     */
    async enterLegalName(): Promise<void> {
        const randomLegalName = faker.company.name();
        const legalNameField = this.page.locator('input[name="name_legal"]');
        await legalNameField.fill(randomLegalName);
    }

    /**
     * Enter a random business name
     */
    async enterBusinessName(): Promise<void> {
        const randomBusinessName = faker.company.name();
        const businessNameField = this.page.locator('input[name="name_business"]');
        await businessNameField.fill(randomBusinessName);
    }

    /**
     * Enter a random country of incorporation
     */
    async enterCountryOfIncorporation(): Promise<void> {
        const randomCountry = faker.location.country();
        const countryField = this.page.locator('input[name="country_of_incorporation"]');
        await countryField.fill(randomCountry);
    }

    /**
     * Click Create Account button and verify success
     */
    async clickCreateAccountButton(): Promise<void> {
        await this.page.getByRole('button', { name: 'Create' }).click();
        
        // Wait for success notification
        await expect(this.page.locator('text="Successfully created record"'))
            .toBeVisible({ timeout: 10000 });
    }
}