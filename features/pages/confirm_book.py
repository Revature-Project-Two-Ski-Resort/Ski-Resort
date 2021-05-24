from selenium.webdriver.chrome.webdriver import WebDriver

class ConfirmBook:
    def __init__(self, driver: WebDriver):
        self.driver = driver

    def first_name(self):
        return self.driver.find_element_by_id('inputEmail4')

    def initial(self):
        return self.driver.find_element_by_id("inputPassword4")

    def last_name(self):
        return self.driver.find_element_by_id('lname')

    def equipment(self):
        return self.driver.find_element_by_id('mtn-bed')

    def add_button(self):
        return self.driver.find_element_by_id('add')

    def next_button(self):
        return self.driver.find_element_by_id('next')