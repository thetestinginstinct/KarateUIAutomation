Feature: Open Swag Labs login page in Chrome Feature

  Background: Browser Setup

  #To use native chrome use below line. It will be picked up from default chrome
  #installation location
  #* configure driver = { type: 'chrome'}
  #To use chromedriver with full-path version 122
  #* configure driver = { type: 'chromedriver', executable: 'C:/Users/akhil/eclipse-workspace/KarateUIAutomation/src/test/java/BrowserDrivers/chromedriver.exe'}
  #To use chrome driver version 122 added in System path variable
  * configure driver = { type: 'chromedriver', executable: 'chromedriver' }
  
  Scenario: Open Swag Labs login page in Chrome Scenario
    Given driver 'https://www.saucedemo.com/'
    * delay(2000)