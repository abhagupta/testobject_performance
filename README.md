# testobject_performance

The project demonstrates the appium issue with setting Performance logs on chrome driver on real android device.

Please follow the steps:

```
git clone https://github.com/abhagupta/testobject_performance
cd testobject_performance
npm install
```

- set up environment variables:
 ```
  export TESTOBJECT_KEY=<testobject key>
  export TESTOBJECT_DEVICE = <test object device>

  ```

TestObject device ID has to be a device in TestObject's device form. example, `Google_Pixel_real`
- Run
```
node simple_appium_test.js  //needs node version > 7
```

To fix the WebDriver.createSession error, comment out the lines # 29 and 30
 ```
 var perfLogConf = {enableNetwork: true, enablePage: true};
 chromeOptions.setPerfLoggingPrefs(perfLogConf);
 ```

 in simple_appium_test.js and run script again. You will be able to open the browser successfully on the device.


### Comparison with saucelabs
To compare the execution with simple browser tests in saucelabs, run
```
node simple_selenium_test.js
```

Please note that you will need to set environment variables for saucelabs to run above command. These are
```
export SAUCE_USERNAME=<sauce username>
export SAUCE_ACCESS_KEY=<sauce access key>
```


The test will execute successfully for saucelabs browser test.