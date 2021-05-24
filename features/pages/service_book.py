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

    def trail_box(self):
        return self.driver.find_element_by_id('camp-name1')

    def trail_box_two(self):
        return self.driver.find_element_by_id('camp-name2')

    def trail_box_three(self):
        return self.driver.find_element_by_id('camp-name3')

    def num_of_kids(self):
        return self.driver.find_element_by_id('kids')

    def num_of_kids(self):
        return self.driver.find_element_by_id('kids')
