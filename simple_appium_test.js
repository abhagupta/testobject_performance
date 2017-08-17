var webdriver = require('selenium-webdriver'),
    logging = require('selenium-webdriver/lib/logging'),
    chrome = require('selenium-webdriver/chrome'),
    builder, driver;



builder = new webdriver.Builder().
    withCapabilities({
    'testobject_appium_version': '1.6.4',
    'testobject_api_key' :'138A6077BDDD4336AC17F65B0099561E',
    'testobject_device':'Samsung_Galaxy_S8_wm8',
    'browserName': 'browser',
    'enablePerformanceLogging': 'true',
    'platformName': 'Android'

}).
usingServer("https://app.testobject.com/api/appium/wd/hub");
//usingServer("https://us1.appium.testobject.com/wd/hub/session");

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

