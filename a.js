var $driver = require('selenium-webdriver');
var $browser = new $driver.Builder().forBrowser('chrome').build();
var syncRequest = require('urllib-sync').request;

$browser.waitForElement = function (locatorOrElement, timeoutMsOpt) {
   return $browser.wait($driver.until.elementLocated(locatorOrElement), timeoutMsOpt || 1000, 'Timed-out waiting for element to be located using: ' + locatorOrElement);
};

$browser.waitForAndFindElement = function (locatorOrElement, timeoutMsOpt) {
   return this.waitForElement(locatorOrElement, timeoutMsOpt)
     .then(function (element) {
       return $browser.wait($driver.until.elementIsVisible(element), timeoutMsOpt || 1000, 'Timed-out waiting for element to be visible using: ' + locatorOrElement)
         .then(function () {
           return element;
         });
     });
};

$browser.getCapabilities().then(function() {})

// Step 1
.then(function() {
  //log(1, '$browser.get("https://signon.google.com/cleartrust/ct_logon.asp?ct_orig_url=/index.html")');
  return $browser.get("https://signon.google.com/cleartrust/ct_logon.asp?ct_orig_url=/index.html"); })
