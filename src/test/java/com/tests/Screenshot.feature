Feature: Screenshot feature

  Background: Browser Setup
    #opening native chrome from default insatlled location
    * configure driver = { type: 'chrome' }
    #launching the test url of website
    * driver 'https://www.saucedemo.com/'
    #maximizing the browser window
    * maximize()
    #giving delay of 2 seconds
    * delay(2000)

  Scenario: Take screenshot of entire browser viewport, section and a html element
    #Taking screenshot of entire browser viewport
    * screenshot()
    * delay(2000)
    #Taking screenshot of section of web page
    * screenshot("//div[@id='login_button_container']",false)
    * delay(2000)
    #Taking screenshot of section of a html element
    * screenshot("#login-button",false)
    * delay(2000)

  Scenario: Saving screenshot to a file
    * def bytes = screenshot(false)
    * def file = karate.write(bytes, 'test.png')
    * print 'screenshot saved to:', file
