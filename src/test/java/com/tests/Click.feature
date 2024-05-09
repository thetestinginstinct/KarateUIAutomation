Feature: Using click

  Background: Browser Setup
    #opening native chrome from default installed location
    * configure driver = { type: 'chrome' }
    #launching the test url of website
    * driver 'https://www.saucedemo.com/'
    #maximizing the browser window
    * maximize()
    #giving delay of 2 seconds
    * delay(2000)

  Scenario: Click on Login button using click()
  * click('#login-button')
  * delay(2000)
  
  
    
