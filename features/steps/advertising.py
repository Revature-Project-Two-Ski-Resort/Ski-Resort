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

from features.pages.services_rentals import ServicesRentals


# @given(u'User is on the Home page')
# def on_home(context):
#     driver: WebDriver = context.driver
#     driver.get('file:///C:/Users/slopp/OneDrive/Documents/GitHub/Ski-Resort/website/home.html')
#     #driver.get('http://localhost:63342/Ski-Resort/website/home.html?_ijt=8hqqktactc9rsdlrqvr5k53alp')
#
#
# @when(u'The User clicks on Services')
# def service_click(context):
#     home_page: Home = context.home_page
#     home_page.services_button().click()
#     home_page.spa_dropdown_button().click()
#
#
# @then(u'It navigates to {title}')
# def service_page(context, title):
#     driver: WebDriver = context.driver
#     assert driver.title == 'Frosty Mountain Services'



@given(u'User is on the Services Page')
def on_services(context):
    driver: WebDriver = context.driver
    driver.get('file:///C:/Users/slopp/OneDrive/Documents/GitHub/Ski-Resort/website/services.html')

@when(u'The User chooses a ski size')
def ski_size(context):
    service_page: ServicesRentals = context.service_rental_page
    select = Select(service_page.ski_drop())
    select.select_by_visible_text('Medium')

@when(u'The user chooses a snowboard size')
def ski_size(context):
    service_rental_page: ServicesRentals = context.service_rental_page
    select = Select(service_rental_page.sb_drop())
    select.select_by_visible_text('Medium')



@when(u'The user chooses a Goggle style')
def sb_size(context):
    service_rental_page: ServicesRentals = context.service_rental_page
    select = Select(service_rental_page.goggles_drop())
    select.select_by_visible_text('blue')


@when(u'The User clicks on the Start Booking')
def goggle_style(context):
    service_rental_page: ServicesRentals = context.service_rental_page
    service_rental_page.goggles_booking_button().click()


@then(u'It navigates to the booking page')
def on_booking(context):
    driver: WebDriver = context.driver
    assert driver.title == 'Frosty Mountain Booking a trip! Step 1: Personal Information'



# @given(u'The User is on the Lodging information Page')
# def on_lodging(context):
#     pass
#
#
# @when(u'The User clicks the Rooms Link')
# def step_impl(context):
#     pass
#
#
# @then(u'It navigates to show a list of possible available rooms')
# def step_impl(context):
#     pass


# @given(u'The User is on the Contacts Page')
# def step_impl(context):
#     pass
#
#
# @when(u'The User types a message')
# def step_impl(context):
#     pass
#
#
# @when(u'The User clicks the Send Button')
# def step_impl(context):
#     pass
#
#
# @then(u'A confirmation pops up to confirm the message was sent')
# def step_impl(context):
#     pass
#
#
# @given(u'The User is on the Rental Service Page')
# def step_impl(context):
#     pass
#
#
# @when(u'The User clicks the Gear link')
# def step_impl(context):
#     pass
#
#
# @then(u'They are shown available Gear')
# def step_impl(context):
#     pass
#
#
# @when(u'The User clicks the Bike Rental link')
# def step_impl(context):
#     pass
#
#
# @then(u'They are shown available bikes')
# def step_impl(context):
#     pass