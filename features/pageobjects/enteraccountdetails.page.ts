import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EnterAccountDetailsPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputAccountName () {
        return $('//input[@data-testid="ACCOUNT_NAME"]');
    }

    public get inputBSB () {
        return $('//input[@data-testid="BSB_NUMBER"]');
    }

    public get inputAccountNumber () {
        return $('//input[@data-testid="ACCOUNT_NUMBER"]');
    }

    public get btnContinue () {
        return $('//button[text()="Continue"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to create the session using new customer, region AU and create hosted checkout
     */
    public async enterAccountDetails (accountname: string, bsb: string, accountnumber: number ) {
        await this.inputAccountName.setValue(accountname);
        await this.inputBSB.setValue(bsb);
        await this.inputAccountNumber.setValue(accountnumber);
        await this.btnContinue.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new EnterAccountDetailsPage();
