const { When, Then, Before, After, Given } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const selectors = require('../../common/selectors');

require('chromedriver');

Before(function () {
    this.driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .build();
})

After(function () {
    this.driver.close();
})

Given(/^the site is available$/, async function () {
    await this.driver.get('http://localhost:3000');
});

When(/^I navigate to (.*) page$/, async function (name) {
    await this.driver.get(`http://localhost:3000/${name}`);
});

When(/^I click on the (.*)$/, async function (element) {
    const itemSelector = selectors[element];
    this.driver.findElement(By.id(itemSelector));
});

Then(/^I should see a (.*)$/, async function (element) {
    const itemSelector = selectors[element];
    await this.driver.findElement(By.id(itemSelector));
});

Then(/^the (.*) contains (.*)$/, async function (element, contents) {
    const itemSelector = selectors[element];
    const title = await this.driver.findElement(By.id(itemSelector)).getText();
    expect(title).to.contain(contents)
});

