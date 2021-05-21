Feature: Personal Info

  Background:
    Given User is on the Booking Page

    Scenario: Create new booking
      When User fills

    Scenario: User does not follow form validations for Personal Information
      When User types in no first name
      Then Error message will appear
      And User will remain on the Personal Info Page