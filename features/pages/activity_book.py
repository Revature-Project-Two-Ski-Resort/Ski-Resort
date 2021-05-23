from selenium.webdriver.chrome.webdriver import WebDriver

class ActivityBook:
    def __init__(self, driver: WebDriver):
        self.driver = driver

    def tickets(self):
        return self.driver.find_element_by_id('numTickets')

    def users(self):
        return self.driver.find_element_by_id("numRooms")

    def next_button(self):
        return self.driver.find_element_by_id('next')

    def add_button(self):
        return self.driver.find_element_by_id('equipment')