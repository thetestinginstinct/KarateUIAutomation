Feature: Get current url and title of a web page using karate

  Background: Browser Setup
    * configure driver = { type: 'chrome' }
    * driver 'https://www.saucedemo.com/'
    * delay(3000)

  Scenario: Get current url of web page and doing the assertion in multiple lines using def keyword
    * def currentUrl = driver.url
    * print 'current url is:',currentUrl
    * match currentUrl == 'https://www.saucedemo.com/'

  Scenario: Get title of web page and doing the assertion in single line
    Then match driver.title == 'Swag Labs1'
