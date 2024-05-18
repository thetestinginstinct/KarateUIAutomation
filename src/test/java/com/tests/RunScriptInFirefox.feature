Feature: Run Script In Firefox

  Background: Browser Setup Firefox
    #* configure driver = { type: 'geckodriver', executable: 'C:/Users/akhil/eclipse-workspace/KarateUIAutomation/src/test/java/BrowserDrivers/geckodriver.exe'}
    * configure driver = { type: 'geckodriver', executable: 'geckodriver'}

  Scenario: Firefox
    * driver 'https://www.saucedemo.com/'
    * maximize()
    * delay(2000)
