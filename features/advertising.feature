#Feature: Advertise Services available from November to the start of March
#  Services change during the off-season from March to the end of October
#
#  @VisitHomePage, @ServicesPages
#  Scenario: Customer can navigate to the Services page
#    Given User is on the Home page
#    When The User clicks on Services
#    Then It navigates to Spa Services
#
#
#  @ServicesPages
#  Scenario: Customer can navigate through the Services Page
#    Given User is on the Services Page
#    When The User chooses a ski size
#    And The User chooses a snowboard size
#    And The User chooses a Goggle style
#    And The User clicks on Start Booking
#    Then It navigates to the booking page
#
#
#  @LodgingPages
#  Scenario: Customer can navigate to the Lodging Information Page
#    Given The User is on the Lodging information Page
#    When The User chooses a type of room
#    And The User clicks on Start Booking
#    Then It navigates to the booking page
#
#
#
#  @RentalService
#  Scenario: Customer can view the items that are available for the rental service
#    Given The User is on the Rental Service Page
#    When The User clicks the Gear link
#    Then They are shown available Gear
#    When The User clicks the Bike Rental link
#    Then They are shown available bikes