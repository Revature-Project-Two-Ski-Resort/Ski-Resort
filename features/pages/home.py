from selenium.webdriver.chrome.webdriver import WebDriver

class Home:

    def __init__(self, driver: WebDriver):
        self.driver = driver

    global site_path

    def home_button(self):
        return self.driver.find_element_by_id('home')

    def lodging_button(self):
        return self.driver.find_element_by_id('lodging')

    def services_button(self):
        return self.driver.find_element_by_id('services')

    def mountain_button(self):
        return self.driver.find_element_by_id('mountain')

    def no_mountain_button(self):
        return self.driver.find_element_by_id('no-mountain')

    def activities_button(self):
        return self.driver.find_element_by_id('activities')

    def in_season_button(self):
        return self.driver.find_element_by_id('in-season')

    def off_season_button(self):
        return self.driver.find_element_by_id('off-season')

    def contact_button(self):
        return self.driver.find_element_by_id('contact')

    def book_trip_button(self):
        return self.driver.find_element_by_id('book')

    def home_bc(self):
        return self.driver.find_element_by_id('home_bc')

    def booking_bc(self):
        return self.driver.find_element_by_id('booking_bc')

    def mountain_bc(self):
        return self.driver.find_element_by_id('mountain_bc')

    def no_mountain_bc(self):
        return self.driver.find_element_by_id('no_mountain_bc')

    def spa_bc(self):
        return self.driver.find_element_by_id('spa_bc')

    def rentals_bc(self):
        return self.driver.find_element_by_id('rental_bc')

    def daycare_bc(self):
        return self.driver.find_element_by_id('daycare_bc')

    def onseason_bc(self):
        return self.driver.find_element_by_id('onseason_bc')

    def offseason_bc(self):
        return self.driver.find_element_by_id('offseason_bc')

    def spa_dropdown_button(self):
        return self.driver.find_element_by_id('spa')

    def rentals_dropdown_button(self):
        return self.driver.find_element_by_id('rent')

    def daycare_dropdown_button(self):
        return self.driver.find_element_by_id('daycare')

    def lodging_image(self):
        return self.driver.find_element_by_id('lodging-image')

    def spa_image(self):
        return self.driver.find_element_by_id('spa-image')

    def activity_image(self):
        return self.driver.find_element_by_id('activity-image')