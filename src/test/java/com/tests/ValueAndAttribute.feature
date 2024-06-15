Feature: Get value and attribute value of html element using value() & attribute()

  Background: Browser Setup
    * configure driver = { type: 'chrome' }
    * driver 'https://www.saucedemo.com/'
    * maximize()

  Scenario: Get value of html element
    * print 'value is:', value("#login-button")
    * match value("#login-button") == "Login"

  Scenario: Get the HTML element attribute value by attribute name
    * print 'attribute value is:', attribute("#user-name","placeholder")
    * print 'attribute value is:', attribute("#user-name","autocorrect")
    * match attribute("#user-name","placeholder") == "Username"
    * match attribute("#user-name","autocorrect") == "off"
