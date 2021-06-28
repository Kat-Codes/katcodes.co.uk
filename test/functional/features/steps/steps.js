const { When, Then, Before, After, Given } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

require('chromedriver');

let driver;

Before(function () {
    driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();
})

After(function() {
    driver.close();
})

Given(/^the site is available$/, async function () {
    await driver.get('http://localhost:3000');
});

When(/^I navigate to the (.*) page$/, async function (name) {
    await driver.get(`http://localhost:3000/${name}`);
});

Then(/^I should see a title$/, async function () {
    const title = await driver.findElement(By.tagName('h2')).getText();
    assert.strictEqual(title, "Good evening, I'm Katie");
});


