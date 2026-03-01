Feature: Login

Scenario: Valid Login
  Given Visit to the website
  When Enter valid credentials
  Then User should successfully login