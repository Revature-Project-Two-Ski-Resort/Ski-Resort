from time import sleep
from behave import given, when, then
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from features.pages.home import Home


@given(u'User is on the Home page')
def on_home(context):
    driver: WebDriver = context.driver
    driver.get('http://localhost:63342/Ski-Resort/website/home.html')
    #raise NotImplementedError(u'STEP: Given User is on the Home page')


@when(u'The User clicks on Services')
def step_impl(context):
    driver: WebDriver = context.driver
    


@then(u'It navigates to the Services Page')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then It navigates to the Services Page')


@when(u'The User clicks on Contacts')
def step_impl(context):
    raise NotImplementedError(u'STEP: When The User clicks on Contacts')


@then(u'It navigates to the Contacts Page')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then It navigates to the Contacts Page')


@given(u'User is on the Services Page')
def step_impl(context):
    raise NotImplementedError(u'STEP: Given User is on the Services Page')


@when(u'The User clicks on Ski Services')
def step_impl(context):
    raise NotImplementedError(u'STEP: When The User clicks on Ski Services')


@then(u'It navigates to the Ski Services Page')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then It navigates to the Ski Services Page')


@when(u'The User clicks on the Spa Services')
def step_impl(context):
    raise NotImplementedError(u'STEP: When The User clicks on the Spa Services')


@then(u'It navigates to the Spa Services Page')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then It navigates to the Spa Services Page')


@when(u'The User clicks on the Trail Services')
def step_impl(context):
    raise NotImplementedError(u'STEP: When The User clicks on the Trail Services')


@then(u'It navigates to the Trail Services Page')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then It navigates to the Trail Services Page')


@given(u'The User is on the Lodging information Page')
def step_impl(context):
    raise NotImplementedError(u'STEP: Given The User is on the Lodging information Page')


@when(u'The User clicks the Rooms Link')
def step_impl(context):
    raise NotImplementedError(u'STEP: When The User clicks the Rooms Link')


@then(u'It navigates to show a list of possible available rooms')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then It navigates to show a list of possible available rooms')


@given(u'The User is on the Contacts Page')
def step_impl(context):
    raise NotImplementedError(u'STEP: Given The User is on the Contacts Page')


@when(u'The User types a message')
def step_impl(context):
    raise NotImplementedError(u'STEP: When The User types a message')


@when(u'The User clicks the Send Button')
def step_impl(context):
    raise NotImplementedError(u'STEP: When The User clicks the Send Button')


@then(u'A confirmation pops up to confirm the message was sent')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then A confirmation pops up to confirm the message was sent')


@given(u'The User is on the Rental Service Page')
def step_impl(context):
    raise NotImplementedError(u'STEP: Given The User is on the Rental Service Page')


@when(u'The User clicks the Gear link')
def step_impl(context):
    raise NotImplementedError(u'STEP: When The User clicks the Gear link')


@then(u'They are shown available Gear')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then They are shown available Gear')


@when(u'The User clicks the Bike Rental link')
def step_impl(context):
    raise NotImplementedError(u'STEP: When The User clicks the Bike Rental link')


@then(u'They are shown available bikes')
def step_impl(context):
    raise NotImplementedError(u'STEP: Then They are shown available bikes')
