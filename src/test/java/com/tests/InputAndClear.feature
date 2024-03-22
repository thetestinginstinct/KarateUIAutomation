Feature: Use of input and clear commands

  Background: Browser Setup
    #opening native chrome from default insatlled location
    * configure driver = { type: 'chrome' }
    #launching the test url of website
    * driver 'https://www.saucedemo.com/'
    #maximizing the browser window
    * maximize()
    #giving delay of 2 seconds
    * delay(2000)

  Scenario: Using input and clear commands to enter and clear text from input boxes
    #using id value with input command
    And input('#user-name','standard_user')
    * delay(2000)
    #using xpath value with input command
    And input("//input[@name='password']",'secret_sauce')
    * delay(2000)
    #using css value with clear command
    * clear('input[placeholder=Username]')
    * delay(2000)
    #using xpath value with clear command
    * clear("//input[@name='password']")
    * delay(2000)
