from selenium.webdriver.chrome.webdriver import WebDriver

class ActivityBook:
    def __init__(self, driver: WebDriver):
        self.driver = driver

    def tickets(self):
        return self.driver.find_element_by_id('lift-tickets')

    def users(self):
        return self.driver.find_element_by_id("numRooms")

    def next_button(self):
        return self.driver.find_element_by_id('next')

    def add_button(self):
        return self.driver.find_element_by_id('equipment')

    def trail_box(self):
        return self.driver.find_element_by_id('trail-name')

    def trail_box_two(self):
        return self.driver.find_element_by_id('camp-name')

