Feature: Personal Info
#
  Scenario Outline: User fills in personal information correctly
    Given User is on the booking page
    When User enters form details <first_name> <m_initial> <last_name> <email> <age> <skill_level>
      | firstname    | initial     | lastname    | email   | Age   | Skill         |
      | <first_name> | <m_initial> | <last_name> | <email> | <age> | <skill_level> |

    Examples:
      | first_name | m_initial | last_name | email                 | age | skill_level |
      | John       | B         | Doe       | JohnD87@gmail.com     | 34  | 1           |
      | Jane       | D         | Doe       | JaneD87@gmail.com     | 35  | 2           |
      | Dwayne     | D         | Johnson   | Dwaynej.730@gmail.com | 22  | 5           |

    And User clicks on next step
    Then User should be on Lodge Book

  Scenario Outline: User does not follow form validations for Personal Information
    Given User is on the booking page
    When User enters incorrect form details "<first_name>" <m_initial> "<last_name>" "<email>" "<age>" <skill_level>
      | firstname    | initial     | lastname    | email   | Age   | Skill         |
      | <first_name> | <m_initial> | <last_name> | <email> | <age> | <skill_level> |

    Examples:
      | first_name | m_initial | last_name | email                 | age | skill_level |
      | John       | B         | Doe       | JohnD87               | 34  | 1           |
      | Jane       | D         | Doe       | JaneD87@gmail.com     | 35  | 0           |
      | Dwayne     | D         | Johnson   | Dwaynej.730@gmail.com | gh  | 5           |
      | John       | B         | Doe       | JohnD87               | 34  | 1           |
      | Tom        | D         | Cruise    |                       | 35  | 2           |
      | George     | D         |           | george@gmail.com      | 55  | 5           |
      |            | D         | Clancy    | TClancy@gmail.com     | 67  | 5           |
      | Jane       | D         | Doe       | JaneD87@gmail.com     | 12  | 2           |
      | Ronald     | D         | McDonald  | rmcdonald@gmail.com   |     | 2           |

    And User clicks on next step
    Then User should be on booking page

  Scenario: User adds a group member
    Given User is on the booking page
    When User enters group form details
    And User clicks on add a group member
    And User inputs new group member details
    And User clicks on next step
    Then User should be on Lodge Book

##  TODO: Get id for remove person button
  Scenario:  User removes a person
    Given User is on the booking page
    When User clicks on add a group member
    And User clicks on remove person
    Then User should be on booking page

  Scenario: User enters lodging information
    Given User is on the lodging page
    When User selects room
    And User clicks on next step
    Then User should be on services page

  Scenario: User does not select lodging room
    Given User is on the lodging page
    When User clicks on next step
    Then User should be on lodge book

#
#  #Todo: This test case currently fails
  Scenario: User can select multiple rooms
    Given User is on the lodging page
    When User selects room
    And User clicks on add a room
    And User selects second room
    And User clicks on next step
    Then User should be on services page

#
#  #Todo: This test case currently fails
#  Scenario: User removes a room
#    Given User is on the lodging page
#    When User selects room
#    And User clicks on add a room
#    And User selects second room
#    And User clicks remove room
#    Then User should be on lodge book
##
#  Scenario: User adds rental equipment
#    Given User is on services page
#    When User enters valid numbers
#    And User adds number of kids
#    And User checks boxes
#    And User clicks on next step
#    Then User should be on activities page
#
#
## TODO: This test case detected an error. It allows us to enter negative numbers
#  Scenario:  User add invalid number of rental equipment
#    Given User is on services page
#    When User inputs invalid numbers
#    And User clicks on next step
#    Then User should be on services page
#
#  Scenario: User adds on activity
#    Given User is on activities page
#    When User chooses trails
#    And User clicks on next step
#    Then User should be on confirm booking page
#
## TODO: This test case detected an error. It allows us to enter negative numbers
#  Scenario: User adds invalid number of activities
#    Given User is on activities page
#    When User enters invalid numbers for activities
#    And User clicks on next step
#    Then User should be on activities page


#  Scenario Outline: User confirms booking
#    Given User is on confirmation page
#    When User enter valid credentials <first_name> <m_initial> <last_name>
#    Examples:
#      | first_name | m_initial | last_name |
#      | John       | B         | Jackson   |
#      | Sally      | X         | Smith     |
#      | Ralph      | S         | Lauren    |
#    And User selects ski equipment
#    And User clicks on next step
#    Then User should be on confirm booking page
#
#  Scenario Outline: User inputs invalid confirmation information
#    Given User is on confirmation page
#    When User inputs invalid credentials "<first_name>" "<m_initial>" "<last_name>"
#    Examples:
#      | first_name | m_initial | last_name |
#      |            | B         | Jackson   |
#      | Sally      |           | Smith     |
#      | Ralph      | S         |           |
#    And User selects ski equipment
#    And User clicks on next step
#    Then User should be on confirm booking page
#
#    Scenario: User adds equipment at confirmation page
#      Given User is on confirmation page
#      When User selects ski equipment
#      And User clicks on add equipment
#      Then User should be on confirm booking page