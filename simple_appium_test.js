var webdriver = require('selenium-webdriver'),
    logging = require('selenium-webdriver/lib/logging'),
    chrome = require('selenium-webdriver/chrome'),
    builder, driver;



builder = new webdriver.Builder().
withCapabilities({
    'testobject_appium_version': '1.6.4',
    'testobject_api_key' :process.env.TESTOBJECT_KEY,
    'testobject_device':process.env.TESTOBJECT_DEVICE,
    'browserName': 'chrome'


}).
usingServer("https://app.testobject.com/api/appium/wd/hub");

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

