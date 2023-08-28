import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PaymentProcessingPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get paymentResult () {
        return $('//div[@data-testid="payment-completed"]/div/div/div/p');
    }

    public get failedPaymentResult () {
        return $('//div[@data-testid="payment-failed"]/div/div/div/p');
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new PaymentProcessingPage();
