from selenium import webdriver
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.chrome.options import Options

from features.pages.lodge_book import LodgeBook
from features.pages.service_book import ServiceBook
from features.pages.activities import Activities
from features.pages.lodging import Lodging
from features.pages.services_daycare import ServicesDaycare
from features.pages.services_spa import ServicesSpa
from features.pages.start_book import StartBook
from features.pages.home import Home
from features.pages.services_rentals import ServicesRentals
from features.pages.confirm_book import ConfirmBook
from features.pages.activity_book import ActivityBook

# Variable to the path of the website. Change this to your path.
website_path = 'file:///C:/Users/slopp/OneDrive/Documents/GitHub/Ski-Resort/website/'

def before_all(context):
    driver: WebDriver = webdriver.Chrome("chromedriver_win32/chromedriver.exe")

    home_page = Home(driver)
    context.driver = driver
    context.home_page = home_page
    context.home_page.site_path = website_path

    booking_page = StartBook(driver)
    context.driver = driver
    context.booking_page = booking_page

    service_rental_page = ServicesRentals(driver)
    context.driver = driver
    context.service_rental_page = service_rental_page

    service_spa_page = ServicesSpa(driver)
    context.driver = driver
    context.service_spa_page = service_spa_page

    service_daycare_page = ServicesDaycare(driver)
    context.driver = driver
    context.service_daycare_page = service_daycare_page

    activities_page = Activities(driver)
    context.driver = driver
    context.activities_page = activities_page

    lodging_page = Lodging(driver)
    context.driver = driver
    context.lodging_page = lodging_page

    confirm_book_page = ConfirmBook(driver)
    context.driver = driver
    context.confirm_book_page = confirm_book_page

    activity_book_page = ActivityBook(driver)
    context.driver = driver
    context.activity_book_page = activity_book_page

    service_book_page = ServiceBook(driver)
    context.driver = driver
    context.service_book_page = service_book_page

    lodge_book_page = LodgeBook(driver)
    context.driver = driver
    context.lodge_book_page = lodge_book_page
    print("started")






def after_all(context):
    context.driver.close()
    context.driver.quit()
    print("ended")
