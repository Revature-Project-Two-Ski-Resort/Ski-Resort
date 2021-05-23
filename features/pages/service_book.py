from selenium.webdriver.chrome.webdriver import WebDriver

class ServiceBook:
    def __init__(self, driver: WebDriver):
        self.driver = driver

    def helmets(self):
        return self.driver.find_element_by_id('rental1')

    def skis(self):
        return self.driver.find_element_by_id('rental2')

    def next_button(self):
        return self.driver.find_element_by_id('next')