Feature: Run Karate test in firefox using headless mode

  Scenario: Headless mode
  * configure driver = { type: 'geckodriver', executable: 'geckodriver', webDriverSession: { "capabilities": { "alwaysMatch": { "moz:firefoxOptions": { args: ["-headless"] } } } }}
  * driver 'https://www.saucedemo.com/'
  * maximize()
  * print "title is:",driver.title
  * delay(2000)
  
  