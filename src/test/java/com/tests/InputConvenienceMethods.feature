Feature: Input convenience methods

  Background: Browser Setup
    #opening native chrome from default insatlled location
    * configure driver = { type: 'chrome' }
    #launching the test url of website
    * driver 'https://www.saucedemo.com/'
    #maximizing the browser window
    * maximize()
    #giving delay of 2 seconds
    * delay(2000)

  Scenario: Input convenience methods
    # passing an array as the second argument to input method
    
    * input('#user-name',['standard_','user',Key.ENTER])
    * delay(2000)
    * clear('input[placeholder=Username]')
    * delay(2000)
    
    #passing third argument time-delay (in milliseconds) that will be applied 
    #before each array value. This is sometimes needed to “slow down” keystrokes, especially 
    #when there is a lot of JavaScript or security-validation behind the scenes.
     
    * input('#user-name',['stand','ard_','user',Key.ENTER],1000)
    * delay(2000)
    * clear('input[placeholder=Username]')
    * delay(2000)
    
    #passing a string as the second argument and Karate 
    #will split the string and fire the delay before each character
    
    * input('#user-name','standard_user',1000)
    * delay(2000)
