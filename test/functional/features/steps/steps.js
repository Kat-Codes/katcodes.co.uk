const { When, Then, Before, After } = require('@cucumber/cucumber');
const assert = require('assert');
const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

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

When('I navigate to the homepage', async function () {
    await driver.get('http://localhost:3000');
});

Then('I should see a title', async function () {
    const title = await driver.findElement(By.tagName('h2')).getText();
    assert.strictEqual(title, "Good evening, I'm Katie");
});


