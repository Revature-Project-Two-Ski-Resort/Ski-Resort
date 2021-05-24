from selenium.webdriver.chrome.webdriver import WebDriver

class ServicesSpa:

    def __init__(self, driver: WebDriver):
        self.driver = driver

    def goggles_booking_button(self):
        return self.driver.find_element_by_id('goggles_booking')

    def booking_button(self):
        return self.driver.find_element_by_id('massages')

    def daycare_button(self):
        return self.driver.find_element_by_id('daycare')

    def rentals_button(self):
        return self.driver.find_element_by_id('rentals')

    def spa_bc(self):
        return self.driver.find_element_by_id('spa_bc')