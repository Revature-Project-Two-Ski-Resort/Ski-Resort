from selenium.webdriver.chrome.webdriver import WebDriver

class ServicesRentals:

    def __init__(self, driver: WebDriver):
        self.driver = driver

    def goggles_booking_button(self):
        return self.driver.find_element_by_id('goggles_booking')

    def ski_booking_button(self):
        return self.driver.find_element_by_id('ski_booking')

    def sb_booking_button(self):
        return self.driver.find_element_by_id('sb_booking')

    def spa_button(self):
        return self.driver.find_element_by_id('spa')

    def rentals_button(self):
        return self.driver.find_element_by_id('rentals')

    def daycare_button(self):
        return self.driver.find_element_by_id('daycare')

    def ski_drop(self):
        return self.driver.find_element_by_id('ski-size')

    def sb_drop(self):
        return self.driver.find_element_by_id('sb-size')

    def goggles_drop(self):
        return self.driver.find_element_by_id('goggles-style')