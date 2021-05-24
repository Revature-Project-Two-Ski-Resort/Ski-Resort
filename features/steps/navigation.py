from time import sleep
from behave import given, when, then
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep
from behave import given, when, then
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from features.pages.home import Home
from selenium.webdriver.chrome.webdriver import WebDriver
from time import sleep

from features.pages.lodging import Lodging
from features.pages.services_rentals import ServicesRentals
from features.pages.services_spa import ServicesSpa
from features.pages.start_book import StartBook


@given(u'User is on the Home page')
def on_home(context):
    driver: WebDriver = context.driver
    home_page: Home = context.home_page
    driver.get(home_page.site_path + 'home.html')

@when(u'The User clicks the Book Now button')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.book_trip_button().click()
    sleep(3)


@then(u'It goes to the Booking Process')
def step_impl(context):
    driver: WebDriver = context.driver
    assert driver.title == 'Frosty Mountain Booking a trip! Step 1: Personal Information'


@when(u'The User clicks the Home breadcrumb navigation button')
def step_impl(context):
    booking_page: StartBook = context.booking_page
    booking_page.home_bc().click()
    sleep(3)


@then(u'It navigates back to the Home Page')
def step_impl(context):
    driver: WebDriver = context.driver
    assert driver.title == 'Frosty Mountain Ski Resort'

@when(u'The User clicks Spa Services link')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.services_button().click()
    home_page.spa_dropdown_button().click()
    sleep(3)

@then(u'It navigates to Spa Services')
def step_impl(context):
    driver: WebDriver = context.driver
    title = driver.find_element_by_id("full-service").text
    assert title == 'Full-Service Spa and Sauna'
    sleep(3)

@given(u'User is on the Lodge-Booking page')
def step_impl(context):
    driver: WebDriver = context.driver
    home_page: Home = context.home_page
    driver.get(home_page.site_path + 'lodging.html#mtn-view')

@when(u'User clicks Service Rental link')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.services_button().click()
    home_page.rentals_dropdown_button().click()
    sleep(3)

@then(u'It navigates to Rentals')
def step_impl(context):
    driver: WebDriver = context.driver
    title = driver.find_element_by_id("ski-rentals").text
    assert title == 'Ski and Snowboard Rentals'

@when(u'User clicks Daycare link')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.services_button().click()
    home_page.daycare_dropdown_button().click()
    sleep(3)

@then(u'It navigates to Daycare')
def step_impl(context):
    driver: WebDriver = context.driver
    title = driver.find_element_by_id("house-daycare").text
    assert title == 'In-House Daycare'

@when(u'User clicks Lodging drop down link')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.lodging_button().click()
    sleep(3)

@when(u'User clicks Mountain View')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.mountain_button().click()
    sleep(3)

@then(u'It navigates to Mountain View')
def step_impl(context):
    driver: WebDriver = context.driver
    title = driver.find_element_by_id("mtn-text").text
    assert title == 'Our Mountain View Suites'

@when(u'User clicks Non-Mountain View')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.no_mountain_button().click()
    sleep(3)

@then(u'It navigates to Non-Mountain View')
def step_impl(context):
    driver: WebDriver = context.driver
    title = driver.find_element_by_id("standard-suites").text
    assert title == 'Standard Suites'


@when(u'User clicks Activities drop down link')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.activities_button().click()
    sleep(3)

@when(u'User clicks In-Season')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.in_season_button().click()
    sleep(3)

@then(u'It navigates to In-season activities')
def step_impl(context):
    driver: WebDriver = context.driver
    title = driver.find_element_by_id("in-season-title").text
    assert title == 'Fun for the kids'

@when(u'User clicks Off-Season')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.off_season_button().click()
    sleep(3)

@then(u'It navigates to Off-season activities')
def step_impl(context):
    driver: WebDriver = context.driver
    assert driver.title == 'Frosty Mountain Activities - Off Season'

@when(u'The User clicks the activities link')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.offseason_bc().click()

@then(u'It navigates to Activities Page')
def step_impl(context):
    driver: WebDriver = context.driver
    title = driver.find_element_by_id("in-season-title").text
    assert title == 'Hike or Bike our beautiful trails'

@when(u'User clicks home breadcrumb')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.home_bc().click()

@then(u'It navigates to the home page')
def step_impl(context):
    driver: WebDriver = context.driver
    assert driver.title == 'Frosty Mountain Ski Resort'

@when(u'User clicks book now breadcrumb')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.booking_bc().click()
    sleep(3)

@when(u'User clicks Mountain View breadcrumb')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.mountain_bc().click()
    sleep(3)

@when(u'User clicks Non-Mountain View breadcrumb')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.no_mountain_bc().click()
    sleep(3)

@when(u'User clicks Spa breadcrumb')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.spa_bc().click()
    sleep(3)

@when(u'User clicks Rentals breadcrumb')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.rentals_bc().click()
    sleep(3)

@when(u'User clicks Daycare breadcrumb')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.daycare_bc().click()
    sleep(3)

@when(u'User clicks On-season breadcrumb')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.onseason_bc().click()
    sleep(3)

@when(u'User clicks Off-season breadcrumb')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.offseason_bc().click()
    sleep(3)

@when(u'User clicks lodging image')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.lodging_image().click()
    sleep(3)

@then(u'It navigates to lodging page')
def step_impl(context):
    driver: WebDriver = context.driver
    title = driver.find_element_by_id("standard-suites").text
    assert title == 'Standard Suites'

@when(u'User clicks Spa image')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.spa_image().click()
    sleep(3)

@when(u'User clicks Activity image')
def step_impl(context):
    home_page: Home = context.home_page
    home_page.activity_image().click()
    sleep(3)