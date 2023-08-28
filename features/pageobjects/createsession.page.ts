import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreatePaymentSessionPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get radioNewCustomer () {
        return $('#new-customer');
    }

    public get dropDwnRegion () {
        return $('#region');
    }

    public get btnCreateHostedCheckout () {
        return $('//button[text()="Create Hosted Checkout"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to create the session using new customer, region AU and create hosted checkout
     */
    public async hostedCheckout (region: string) {
        await this.radioNewCustomer.click();
        await this.dropDwnRegion.selectByVisibleText(region);
        await this.btnCreateHostedCheckout.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new CreatePaymentSessionPage();
