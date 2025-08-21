import { Page } from '@playwright/test';
import { FormDirectoryPage } from './directoryPage';
import { FormTravelRulePage } from './travelRulePage';
import { SideBarPage } from './sideBarPage';
import { NavigationPage } from './navigationPage';
import { FormBlockchainAnalyticsPage } from './blockchainAnalyticsPage';

/**
 * Central page manager that provides access to all page objects
 * Implements the Page Object Manager pattern for better test organization
 */
export class PageManager {
    private readonly page: Page;
    private readonly directoryPage: FormDirectoryPage;
    private readonly travelRulePage: FormTravelRulePage;
    private readonly sideBarPage: SideBarPage;
    private readonly navigationPage: NavigationPage;
    private readonly blockchainAnalyticsPage: FormBlockchainAnalyticsPage;

    constructor(page: Page) {
        this.page = page;
        this.directoryPage = new FormDirectoryPage(this.page);
        this.travelRulePage = new FormTravelRulePage(this.page);
        this.sideBarPage = new SideBarPage(this.page);
        this.navigationPage = new NavigationPage(this.page);
        this.blockchainAnalyticsPage = new FormBlockchainAnalyticsPage(this.page);
    }

    /**
     * Get the Directory form page object
     */
    onCreateAccountFormDirectory(): FormDirectoryPage {
        return this.directoryPage;
    }

    /**
     * Get the Travel Rule form page object
     */
    onTransferFormTravelRule(): FormTravelRulePage {
        return this.travelRulePage;
    }

    /**
     * Get the Blockchain Analytics page object
     */
    onBlockchainAnalytics(): FormBlockchainAnalyticsPage {
        return this.blockchainAnalyticsPage;
    }

    /**
     * Get the Sidebar page object
     */
    onSideBarPage(): SideBarPage {
        return this.sideBarPage;
    }

    /**
     * Get the Directory navigation page object
     */
    onTheDirectorySection(): NavigationPage {
        return this.navigationPage;
    }

    /**
     * Get the Travel Rule navigation page object
     */
    onTheTravelRuleSection(): NavigationPage {
        return this.navigationPage;
    }
}