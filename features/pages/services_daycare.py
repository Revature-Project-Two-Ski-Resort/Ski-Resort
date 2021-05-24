from selenium.webdriver.chrome.webdriver import WebDriver

class ServicesDaycare:

    def __init__(self, driver: WebDriver):
        self.driver = driver

    def daycare_drop_button(self):
        return self.driver.find_element_by_id('child_num')

    def booking_button(self):
        return self.driver.find_element_by_id('daycare_booking')

    def spa_button(self):
        return self.driver.find_element_by_id('spa')

    def rentals_button(self):
        return self.driver.find_element_by_id('rentals')
