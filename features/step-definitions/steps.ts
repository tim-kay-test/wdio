import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import CreatePaymentSessionPage from '../pageobjects/createsession.page.js';
import SelectBankPage from '../pageobjects/selectbank.page.js'
import EnterAccountDetailsPage from '../pageobjects/enteraccountdetails.page.js'
import PaymentProcessingPage from '../pageobjects/paymentprocessing.page.js'

const pages = {
    createpaymentsession: CreatePaymentSessionPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When (/^I create a session with region (\w+)$/, async (region) => {
    await CreatePaymentSessionPage.hostedCheckout(region);
});

Then (/^I select to Pay By Bank to (.*)$/, async (bank) => {
    await SelectBankPage.selectBank(bank);
});

Then (/^I enter in my (.*), (.*) and (.*)$/, async (accountname, bsb, accountnumber) => {
    await EnterAccountDetailsPage.enterAccountDetails(accountname, bsb, accountnumber);
});

Then (/^I confirm the payment has been processed with the correct outcome (.*)$/, async (paymentoutcome) => {
    await expect(PaymentProcessingPage.checkingBankDetails).toBeExisting();
    await PaymentProcessingPage.paymentResult.waitUntil(async function () {
        return (await this.getText()) === paymentoutcome
    },{
        timeout: 120000
    });
    await expect(PaymentProcessingPage.paymentResult).toBeExisting();
    await expect(PaymentProcessingPage.paymentResult).toHaveTextContaining(paymentoutcome);
});

Then (/^I confirm the payment has failed with the reason (.*)$/, async (failedpaymentoutcome) => {
    await expect(PaymentProcessingPage.checkingBankDetails).toBeExisting();
    await PaymentProcessingPage.failedPaymentResult.waitUntil(async function () {
        return (await this.getText()) === failedpaymentoutcome
    }, {
        timeout: 120000
    });
    await expect(PaymentProcessingPage.failedPaymentResult).toBeExisting();
    await expect(PaymentProcessingPage.failedPaymentResult).toHaveTextContaining(failedpaymentoutcome);
});
