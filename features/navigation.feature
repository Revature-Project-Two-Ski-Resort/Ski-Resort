Feature: Ensuring that a user can properly navigate the entirety of the Ski Resort website
  Focusing on the Booking Process

  @Navigation, @HomeTest
  Scenario: Customer can navigate from the Home page to the Lodge-Booking page
    Given User is on the Home page
    When The User clicks the Book Now button
    Then It goes to the Booking Process
    When The User clicks the Home breadcrumb navigation button
    Then It navigates back to the Home Page


### TODO: This navigation is broken, it leads to the rentals page instead
  @Navigation, @HomeTest
  Scenario: Customer can navigate from the Home page to the spa services page
    Given User is on the Home page
    When The User clicks Spa Services link
    Then It navigates to Spa Services
##
  @Navigation, @HomeTest
  Scenario: Customer can navigate from the Home page to the rentals page
    Given User is on the Home page
    When User clicks Service Rental link
    Then It navigates to Rentals

  #TODO: This test case currently fails due to the services drop down incorrect navigation
  @Navigation, @HomeTest
  Scenario: Customer can navigate from the Home page to the daycare page
    Given User is on the Home page
    When User clicks Daycare link
    Then It navigates to Daycare

  @Navigation, @HomeTest
  Scenario: Customer can navigate from the Home page to the Mountain view page
    Given User is on the Home page
    When User clicks Lodging drop down link
    And User clicks Mountain View
    Then It navigates to Mountain View

  @Navigation, @HomeTest
  Scenario: Customer can navigate from the Home page to the Non-Mountain view page
    Given User is on the Home page
    When User clicks Lodging drop down link
    And User clicks Non-Mountain View
    Then It navigates to Non-Mountain View
#
  @Navigation, @HomeTest
  Scenario: Customer can navigate from the Home page to the In-season activities
    Given User is on the Home page
    When User clicks Activities drop down link
    And User clicks In-Season
    Then It navigates to In-season activities

  @Navigation, @HomeTest
  Scenario: Customer can navigate from the Home page to the Off-season activities
    Given User is on the Home page
    When User clicks Activities drop down link
    And User clicks Off-Season
    Then It navigates to Off-season activities

  @Navigation, @HomeTest
  Scenario: Customer can navigate to the home page using homepage breadcrumb
    Given User is on the Home page
    When User clicks home breadcrumb
    Then It navigates to the home page
#
  @Navigation, @HomeTest
  Scenario: Customer can navigate to the booking page using booking page breadcrumb
    Given User is on the Home page
    When User clicks book now breadcrumb
    Then It navigates to the booking page

  @Navigation, @HomeTest
  Scenario: Customer can navigate to the mountain view page using the mountain view breadcrumb
    Given User is on the Home page
    When User clicks Mountain View breadcrumb
    Then It navigates to Mountain View

  @Navigation, @HomeTest
  Scenario: Customer can navigate to the non-mountain view page using the non-mountain view breadcrumb
    Given User is on the Home page
    When User clicks Non-Mountain View breadcrumb
    Then It navigates to Non-Mountain View
#
  # TODO: This test currently fails due to the link leading to rentals page
  @Navigation, @HomeTest
  Scenario: Customer can navigate to the spa service page using the spa service breadcrumb
    Given User is on the Home page
    When User clicks Spa breadcrumb
    Then It navigates to Spa Services
#
  @Navigation, @HomeTest
  Scenario: Customer can navigate to the rental service page using the rental service breadcrumb
    Given User is on the Home page
    When User clicks Rentals breadcrumb
    Then It navigates to Rentals

  @Navigation, @HomeTest
  Scenario: Customer can navigate to the daycare service page using the daycare service breadcrumb
    Given User is on the Home page
    When User clicks Daycare breadcrumb
    Then It navigates to Daycare

  @Navigation, @HomeTest
  Scenario: Customer can navigate to the On-season activity page using the On-season breadcrumb
    Given User is on the Home page
    When User clicks On-season breadcrumb
    Then It navigates to In-season activities

  @Navigation, @HomeTest
  Scenario: Customer can navigate to the Off-season activity page using the Off-season breadcrumb
    Given User is on the Home page
    When User clicks Off-season breadcrumb
    Then It navigates to Off-season activities
#
  @Navigation, @HomeTest
  Scenario: Customer can navigate to the lodging page by clicking the lodging image
    Given User is on the Home page
    When User clicks lodging image
    Then It navigates to lodging page

  # TODO: This fails  because it navigates to the rentals page instead of the spa page
  @Navigation, @HomeTest
  Scenario: Customer can navigate to the Spa page by clicking the Spa image
    Given User is on the Home page
    When User clicks Spa image
    Then It navigates to Spa Services

  @Navigation, @HomeTest
  Scenario: Customer can navigate to the Activities page by clicking the Activity image
    Given User is on the Home page
    When User clicks Activity image
    Then It navigates to Activities Page
