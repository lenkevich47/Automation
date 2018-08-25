var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('https://www.youtube.com/')
  .then(function() {
    return driver.findElement(webdriver.By.id('search')).sendKeys('webdriver');
  })
  .then(function() {
    return driver.findElement(webdriver.By.id('search-icon-legacy')).submit();
  })
  .then(function() {
    return driver.getCurrentUrl();
  })
  .then(function(currentUrl) {
    if (currentUrl === 'https://www.youtube.com/results?search_query=webdriver') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }   
  })
  .then(function() {
    return driver.quit();
  });
