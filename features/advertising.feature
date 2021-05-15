Feature: Advertise Services available from November to the start of March
  Services change during the off-season from March to the end of October

  @VisitHomePage, @ServicesPages
  Scenario: Customer can navigate to the home page
    Given User is on the Home page
    When The User clicks on Services
    Then It navigates to the Services Page
    When The User clicks on Contacts
    Then It navigates to the Contacts Page

  @ServicesPages
  Scenario: Customer can navigate to the Services Page
    Given User is on the Services Page
    When The User clicks on Ski Services
    Then It navigates to the Ski Services Page
    When The User clicks on the Spa Services
    Then It navigates to the Spa Services Page
    When The User clicks on the Trail Services
    Then It navigates to the Trail Services Page

  @LodgingPages
  Scenario: Customer can navigate to the Lodging Information Page
    Given The User is on the Lodging information Page
    When The User clicks the Rooms Link
    Then It navigates to show a list of possible available rooms

  @ContactPage
  Scenario: Customer can navigate to the Contacts Page
    Given The User is on the Contacts Page
    When The User types a message
    And The User clicks the Send Button
    Then A confirmation pops up to confirm the message was sent

  @RentalService
  Scenario: Customer can view the items that are available for the rental service
    Given The User is on the Rental Service Page
    When The User clicks the Gear link
    Then They are shown available Gear
    When The User clicks the Bike Rental link
    Then They are shown available bikes