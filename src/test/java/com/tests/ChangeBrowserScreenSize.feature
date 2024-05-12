Feature: Change Browser Screen Size

  Background: Browser Setup
    #opening native chrome from default installed location
    * configure driver = { type: 'chrome' }
    #launching the test url of website
    * driver 'https://www.saucedemo.com/'
    #giving delay of 2 seconds
    * delay(2000)

  Scenario: Change Browser Screen Size using fullscreen(),maximize(),minimize() & dimensions
    * fullscreen()
    * delay(2000)
    * maximize()
    * delay(2000)
    * driver.dimensions = { x: 0, y: 0, width: 300, height: 800 }
    * delay(2000)
    * minimize()
    * delay(2000)

    
    