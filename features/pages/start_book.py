from selenium.webdriver.chrome.webdriver import WebDriver

class StartBook:

    def __init__(self, driver: WebDriver):
        self.driver = driver

    def first_name_field(self):
        return self.driver.find_element_by_id('prime_fname')

    def m_initial_field(self):
        return self.driver.find_element_by_id('prime_mname')

    def last_name_field(self):
        return self.driver.find_element_by_id('prime_lname')

    def email_field(self):
        return self.driver.find_element_by_id('primaryemail')

    def age_field(self):
        return self.driver.find_element_by_id('primaryAge')

    def skill_field(self):
        return self.driver.find_element_by_id('primarySkill')

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

    def add_group_member(self):
        return self.driver.find_element_by_id('add-group')

    def group_first_name(self):
        return self.driver.find_element_by_id('firstname1')

    def group_middle_initial(self):
        return self.driver.find_element_by_id('middlename1')

    def group_last_name(self):
        return self.driver.find_element_by_id('lastname1')

    def group_age(self):
        return self.driver.find_element_by_id('primaryAge1')

    def group_skill(self):
        return self.driver.find_element_by_id('primarySkill1')

    def home_bc(self):
        return self.driver.find_element_by_id('home-bc')