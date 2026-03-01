Feature: Add New User

  Scenario: Login and add a new user using fixture data
    Given User is logged into the application
    When User clicks on Add User button
    And User selects role from fixture
    And User enters user details from fixture
    Then Submit button should be enabled