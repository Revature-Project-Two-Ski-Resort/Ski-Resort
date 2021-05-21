Feature: Ensuring that a user can properly navigate the entirety of the Ski Resort website
  Focusing on the Booking Process

  @Navigation, @HomeTest
  Scenario: Customer can navigate from the Home page to the Lodge-Booking page
    Given User is on the Home page
    When The User clicks the Book Now button
    Then It navigates to the Booking Process
    When The User clicks the Home breadcrumb navigation button
    Then It navigates back to the Home Page


  @Navigation, @ServicesTest
  Scenario: Customer can navigate from the Lodge-Booking page to the Services-Booking page
    Given User is on the Lodge-Booking page
    When The User fills in the Lodge-Booking form
    Then It navigates to the Services-Booking page
    When The User clicks the Lodging breadcrumb navigation button
    Then User is on the Lodge-Booking page

  @Navigation, @ActivitiesTest
  Scenario: Customer can navigate from the Services-Booking page to the Activities-Booking page
    Given User is on the Services-Booking page
    When The User fills in the Services-Booking form
    Then It navigates to the Activities-Booking page
    When The User clicks the Services breadcrumb navigation button
    Then User is on the Services-Booking page

  @Navigation, @ConfirmationTest
  Scenario: Customer can navigate from the Activities-Booking page to the Confirmation-Booking page
    Given User is on the Activities-Booking page
    When The User fills in the Activities-Booking form
    Then It navigates to the Confirmation-Booking page
    When The User clicks the Activities breadcrumb navigation button
    Then User is on the Activities-Booking page