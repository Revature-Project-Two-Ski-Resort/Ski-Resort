from selenium.webdriver.chrome.webdriver import WebDriver

class LodgeBook:
    def __init__(self, driver: WebDriver):
        self.driver = driver

    def suite_drop(self):
        return self.driver.find_element_by_id('mtn_bed')

    def add_room_button(self):
        return self.driver.find_element_by_id('add')

    def next_button(self):
        return self.driver.find_element_by_id('next')