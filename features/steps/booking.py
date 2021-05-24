from time import sleep
from behave import given, when, then
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.select import Select

from features.pages.activity_book import ActivityBook
from features.pages.confirm_book import ConfirmBook
from features.pages.home import Home
from features.pages.lodging import Lodging
from features.pages.service_book import ServiceBook
from features.pages.start_book import StartBook
from selenium.webdriver.chrome.webdriver import WebDriver
from time import sleep



@given(u'User is on the booking page')
def on_booking(context):
    driver: WebDriver = context.driver
    home_page: Home = context.home_page
    driver.get(home_page.site_path + 'start-book.html')
    sleep(3)

@when(u'User enters form details {first_name} {m_initial} {last_name} {email} {age} {skill_level}')
def enter_info(context, first_name, m_initial, last_name, email, age, skill_level):
    booking_page: StartBook = context.booking_page
    booking_page.first_name_field().send_keys(first_name)
    booking_page.m_initial_field().send_keys(m_initial)
    booking_page.last_name_field().send_keys(last_name)
    booking_page.email_field().send_keys(email)
    booking_page.age_field().send_keys(age)
    booking_page.skill_field().clear()
    booking_page.skill_field().send_keys(skill_level)
    sleep(2)

@then(u'User should be on Lodge Book')
def on_lodge(context):
    driver: WebDriver = context.driver
    assert driver.title == 'Frosty Mountain Booking a trip! Step 2: Lodging'
    sleep(3)

@then(u'User should be on booking page')
def on_lodge(context):
    driver: WebDriver = context.driver
    assert driver.title == 'Frosty Mountain Booking a trip! Step 1: Personal Information'
    sleep(3)

@when(u'User clicks on next step')
def next_step(context):
    booking_page: StartBook = context.booking_page
    booking_page.next_step_button().click()

@when(u'User enters incorrect form details {first_name} {m_initial} {last_name} {email} {age} {skill_level}')
def enter_wrong_info(context, first_name, m_initial, last_name, email, age, skill_level):
    booking_page: StartBook = context.booking_page
    booking_page.first_name_field().send_keys(first_name.replace('"', ''))
    booking_page.m_initial_field().send_keys(m_initial)
    booking_page.last_name_field().send_keys(last_name.replace('"', ''))
    booking_page.email_field().send_keys(email.replace('"', ''))
    booking_page.age_field().send_keys(age.replace('"', ''))
    booking_page.skill_field().clear()
    booking_page.skill_field().send_keys(skill_level)
    sleep(2)

@when(u'User clicks on add a group member')
def user_click_on_add_a_group_member(context):
    booking_page: StartBook = context.booking_page
    booking_page.add_group_member().click()

@when(u'User clicks on remove person')
def user_removes_person(context):
    pass
    #booking_page: StartBook = context.booking_page
    #booking_page.remove_person_button().click()

@when(u'User inputs new group member details {first_name} {m_initial} {last_name} {email} {age} {skill_level}')
def user_add_group_member(context, first_name, m_initial, last_name, email, age, skill_level):
    booking_page: StartBook = context.booking_page
    booking_page.group_first_name().send_keys(first_name)
    booking_page.group_middle_initial().send_keys(m_initial)
    booking_page.group_last_name().send_keys(last_name)
    booking_page.group_age().send_keys(age)
    booking_page.group_skill().clear()
    booking_page.group_skill().send_keys(skill_level)
    sleep(2)

@given(u'User is on the lodging page')
def user_on_lodging_page(context):
    driver: WebDriver = context.driver
    home_page: Home = context.home_page
    driver.get(home_page.site_path + 'lodge-book.html')
    sleep(3)

@when(u'User selects room')
def user_selects_room(context):
    lodging_page: Lodging = context.lodging_page
    select = Select(lodging_page.mountain_view_drop())
    select.select_by_visible_text('Single King')
    sleep(3)

@then(u'User should be on services page')
def user_on_services_page(context):
    pass
    driver: WebDriver = context.driver
    assert driver.title == 'Frosty Mountain Booking a trip! Step 3: Services'
    sleep(3)

@when(u'User clicks on add a room')
def user_click_add_room(context):
    lodging_page: Lodging = context.lodging_page
    lodging_page.add_room_button().click()
    sleep(3)

@when(u'User selects second room')
def user_selects_second_room(context):
    pass
    lodging_page: Lodging = context.lodging_page
    lodging_page.standard_drop().click()
    sleep(3)

@when(u'User clicks remove room')
def user_removes_room(context):
    pass
    lodging_page: Lodging = context.lodging_page
    lodging_page.remove_room_field.click()
    sleep(3)

@given(u'User is on services page')
def user_on_services_page(context):
    driver: WebDriver = context.driver
    home_page: Home = context.home_page
    driver.get(home_page.site_path + 'service-book.html')
    sleep(3)

@when(u'User enters valid numbers')
def user_enter_valid_equipment_numbers(context):
    service_book_page: ServiceBook = context.service_book_page
    service_book_page.helmets().send_keys('5')
    service_book_page.skis().send_keys('10')
    sleep(3)

@when(u'User checks boxes')
def user_checks_boxes(context):
    service_book_page: ServiceBook = context.service_book_page
    service_book_page.trail_box().click()
    service_book_page.trail_box_two().click()
    service_book_page.trail_box_three().click()
    sleep(3)

@then(u'User should be on activities page')
def user_should_be_on_activities_page(context):
    pass
    driver: WebDriver = context.driver
    assert driver.title == 'Frosty Mountain Booking a trip! Step 4: Activities'
    sleep(3)


@when(u'User inputs invalid numbers')
def step_impl(context):
    service_book_page: ServiceBook = context.service_book_page
    service_book_page.helmets().send_keys('-50')
    service_book_page.skis().send_keys('-10')
    sleep(3)


@given(u'User is on activities page')
def user_on_activities_page(context):
    driver: WebDriver = context.driver
    home_page: Home = context.home_page
    driver.get(home_page.site_path + 'activity-book.html')
    sleep(3)

@then(u'User should be on confirm booking page')
def user_should_be_on_confirm_booking(context):
    pass
    driver: WebDriver = context.driver
    assert driver.title == 'Frosty Mountain Booking a trip! Step 5: Confirmation'
    sleep(3)

@when(u'User enters invalid numbers for activities')
def user_enters_invalid_activity(context):
    activity_book_page: ActivityBook = context.activity_book_page
    activity_book_page.tickets().send_keys(-7)
    activity_book_page.users().send_keys(-4)
    sleep(3)

@when(u'User inputs valid numbers for activities')
def user_enters_valid_activity(context):
    activity_book_page: ActivityBook = context.activity_book_page
    activity_book_page.tickets().send_keys(12)
    activity_book_page.users().send_keys(5)
    sleep(3)

@given(u'User is on confirmation page')
def user_on_confirmation_page(context):
    driver: WebDriver = context.driver
    home_page: Home = context.home_page
    driver.get(home_page.site_path + 'confirm-book.html')
    sleep(3)


@when(u'User enter valid credentials {first_name} {m_initial} {last_name}')
def user_confirms_valid_credentials(context, first_name, m_initial, last_name):
    confirm_book_page: ConfirmBook = context.confirm_book_page
    confirm_book_page.first_name().send_keys(first_name)
    confirm_book_page.initial().send_keys(m_initial)
    confirm_book_page.last_name().send_keys(last_name)
    sleep(3)


@when(u'User inputs invalid credentials {first_name} {m_initial} {last_name}')
def user_confirms_valid_credentials(context, first_name, m_initial, last_name):
    confirm_book_page: ConfirmBook = context.confirm_book_page
    confirm_book_page.first_name().send_keys(first_name.replace('"', ''))
    confirm_book_page.initial().send_keys(m_initial.replace('"', ''))
    confirm_book_page.last_name().send_keys(last_name.replace('"', ''))
    sleep(3)

@when(u'User selects ski equipment')
def user_selects_ski_equipment(context):
    confirm_book_page: ConfirmBook = context.confirm_book_page
    select = Select(confirm_book_page.equipment())
    select.select_by_visible_text('Snowboard')
    sleep(3)

@when(u'User clicks on add equipment')
def user_clicks_add_equipment(context):
    confirm_book_page: ConfirmBook = context.confirm_book_page
    confirm_book_page.add_button().click()

@when(u'User adds number of kids')
def user_adds_num_of_kids(context):
    service_book_page: ServiceBook = context.service_book_page
    service_book_page.num_of_kids().send_keys(2)

@when(u'User chooses trails')
def user_checks_trails(context):
    activity_book_page: ActivityBook = context.activity_book_page
    activity_book_page.trail_box().click()
    activity_book_page.trail_box_two().click()
    sleep(3)
