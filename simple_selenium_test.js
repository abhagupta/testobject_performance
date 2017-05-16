var webdriver = require('selenium-webdriver'),
    logging = require('selenium-webdriver/lib/logging'),
    chrome = require('selenium-webdriver/chrome'),
    builder, driver;


builder = new webdriver.Builder().
withCapabilities({
    'browserName': 'chrome',
    'username': process.env.SAUCE_USERNAME,
    'accessKey': process.env.SAUCE_ACCESS_KEY


}).
usingServer("http://abhagupta:c4cb7cd8-7904-4b1d-b2f9-19e18d4e2a78@ondemand.saucelabs.com:80/wd/hub");

var logPrefs = new webdriver.logging.Preferences();
logPrefs.setLevel(webdriver.logging.Type.PERFORMANCE,
    webdriver.logging.Level.ALL);

var chromeConfig = {};

var chromeOptions = new chrome.Options();

chromeOptions.setLoggingPrefs(logPrefs);
var perfLogConf = {enableNetwork: true, enablePage: true};
chromeOptions.setPerfLoggingPrefs(perfLogConf);

builder.setChromeOptions(chromeOptions);

driver = builder.build();

driver.get("https://www.walmart.com");


driver.getTitle().then(function (title) {
    console.log("title is: " + title);
});

driver.quit();

