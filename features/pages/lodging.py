from selenium.webdriver.chrome.webdriver import WebDriver

class Lodging:

    def __init__(self, driver: WebDriver):
        self.driver = driver

    def standard_drop(self):
        return self.driver.find_element_by_id('standard-bed')

    def mountain_view_drop(self):
        return self.driver.find_element_by_id('mtn-bed')

    def mountain_booking_button(self):
        return self.driver.find_element_by_id('standard_booking')

    def no_mountain_booking_button(self):
        return self.driver.find_element_by_id('mountain_booking')