import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SelectBankPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get bankSearch () {
        return $('//input[@data-testid="search-banks-input"]');
    }

    public get bankResults () {
        return $('//li[@data-testid="bank-search-result"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to create the session using new customer, region AU and create hosted checkout
     */
    public async selectBank (bank: string) {
        await this.bankSearch.setValue(bank);
        await this.bankResults.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new SelectBankPage();
