from selenium.webdriver.chrome.webdriver import WebDriver

class ActivityBook:
    def __init__(self, driver: WebDriver):
        self.driver = driver

    def first_name_field(self):
        return self.driver.find_element_by_id('inputEmail4')

    def m_initial_field(self):
        return self.driver.find_element_by_id('inputPassword4')

    def last_name_field(self):
        return self.driver.find_element_by_id('')

    def add_equipment_button(self):
        return self.driver.find_element_by_id('equipment')

    def next_step_button(self):
        return self.driver.find_element_by_id('next')

    def equipment_drop(self):
        return self.driver.find_element_by_id('mtn-bed')

    def skis_drop(self):
        return self.driver.find_element_by_id('skis')

    def board_drop(self):
        return self.driver.find_element_by_id('board')

    def goggles_drop(self):
        return self.driver.find_element_by_id('goggles')

    def helmet_drop(self):
        return self.driver.find_element_by_id('helmet')
