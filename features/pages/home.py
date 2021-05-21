from selenium.webdriver.chrome.webdriver import WebDriver

class Home:

    def __init__(self, driver: WebDriver):
        self.driver = driver


    def home_button(self):
        return self.driver.find_element_by_class_name_id('home')

    def lodging_button(self):
        return self.driver.find_element_by_id('lodging')

    def services_button(self):
        return self.driver.find_element_by_id('services')

    def mountain_button(self):
        return self.driver.find_element_by_link_text('mountain')

    def no_mountain_button(self):
        return self.driver.find_element_by_link_text('no_mountain')

    def activities_button(self):
        return self.driver.find_element_by_id('activities')

    def contact_button(self):
        return self.driver.find_element_by_id('contact')

    def book_trip_button(self):
        return self.driver.find_element_by_id('book')

    def mountain_bc(self):
        return self.driver.find_element_by_id('mountain_bc')

    def no_mountain_bc(self):
        return self.driver.find_element_by_id('no_mountain_bc')

    def spa_bc(self):
        return self.driver.find_element_by_id('spa_bc')

    def rentals_bs(self):
        return self.driver.find_element_by_link_text('rental_bc')

    def daycare_bc(self):
        return self.driver.find_element_by_link_text('daycare_bc')

    def onseason_bc(self):
        return self.driver.find_element_by_link_text('onseason_bc')

    def offseason_bc(self):
        return self.driver.find_element_by_link_text('offseason_bc')


