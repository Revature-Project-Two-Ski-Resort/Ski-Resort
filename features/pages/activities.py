from selenium.webdriver.chrome.webdriver import WebDriver

class Activities:

    def __init__(self, driver: WebDriver):
        self.driver = driver

    def trial_book_button(self):
        return self.driver.find_element_by_id('trail-book')

