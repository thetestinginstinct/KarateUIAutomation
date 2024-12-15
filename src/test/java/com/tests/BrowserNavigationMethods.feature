Feature: Browser Navigation Methods

  Scenario: back(), forward(), refresh(), reload()
    * configure driver = { type: 'chrome' }
    * driver 'https://the-internet.herokuapp.com/'
    * maximize()
    * print "title is:",driver.title
    * delay(2000)
    * driver 'https://www.saucedemo.com/'
    * print "title is:",driver.title
    * delay(2000)
    * back()
    * print "title is:",driver.title
    * delay(2000)
    * forward()
    * print "title is:",driver.title
    * delay(2000)
    * input('#user-name','standard_user')
    * delay(2000)
    * refresh()
    * delay(2000)
    * input("//input[@name='password']",'secret_sauce')
    * delay(2000)
    * reload()
    * delay(2000)
