Feature: Get text content using text()

  Background: Browser Setup
    * configure driver = { type: 'chrome' }
    * driver 'https://www.saucedemo.com/'
    * maximize()
    * delay(2000)

  Scenario: Get text content
    
    * print 'text content is:', text("//div[@class='login_logo']")
    * click("#login-button")
    * print 'text content is:', text("//h3[@data-test='error']")
    * match text("//div[@class='login_logo']") == "Swag Labs"
    * match text("//h3[@data-test='error']") == "Epic sadface: Username is requireds"