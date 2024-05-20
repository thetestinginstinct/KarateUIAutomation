Feature: Run Karate test in chrome using headless and incognito modes

  #Scenario: Headless mode
  #* configure driver = {type: 'chrome', addOptions: ['--headless=new']}
  #* driver 'https://www.saucedemo.com/'
  #* maximize()
  #* print "title is:",driver.title
  #* delay(2000)
  
  Scenario: Incognito mode
    * configure driver = { type: 'chrome', addOptions: ['--incognito']}
    * driver 'https://www.saucedemo.com/'
    * maximize()
    * print "title is:",driver.title
    * delay(2000)
