# ===============================
# Feature Definition
# ===============================
Feature: Login Page Validations and Authentication
# This defines the feature we are testing. 
# In this case, it's the "Login Page" and all its validations and authentication scenarios.

# ===============================
# Background Steps
# ===============================
Background: 
  Given User is on the login page
# Background runs **before every scenario** in this feature file.
# Here, it just ensures that the user starts from the login page for all scenarios.

# ===============================
# Scenario 1: Required field validations
# ===============================
Scenario: Required field validations
  When User leaves email field empty and moves out of focus
  # Simulates user clicking on the email field and then clicking away without typing anything
  Then Error message "Email is required." should be visible
  # Verifies that the system shows an error for empty email field

  When User leaves password field empty and moves out of focus
  # Simulates user clicking on the password field and leaving it empty
  Then Error message "Password is required." should be visible
  # Verifies that the system shows an error for empty password field

# ===============================
# Scenario 2: Invalid email format
# ===============================
Scenario: Invalid email format
  When User enters "ram" in the email field and moves out of focus
  # User types "ram" which is not a valid email
  Then Error message "Please enter a valid email" should be visible
  # Verifies that the system shows an error for invalid email format

# ===============================
# Scenario 3: Password strength validations
# ===============================
Scenario: Password strength validations
  Given User enters "diwakar.dubey@vandhana.com" in the email field
  # Sets the email to a valid one before testing password

  When User enters short password "Him" and moves out of focus
  # Types a password that is too short
  Then Error message "Password must be at least 8 characters long." should be visible
  # Checks that the system enforces minimum length requirement

  When User enters weak password "an87552333" and moves out of focus
  # Types a password that lacks uppercase letters or special characters
  Then Error message "Password must be 8–15 characters with a uppercase, lowercase, and special character" should be visible
  # Ensures the system enforces strong password rules

  When User enters strong password "Ram123@gmail"
  # Types a strong password that meets all criteria
  Then Error message "Password must be 8–15 characters with a uppercase, lowercase, and special character" should not exist
  # Verifies that no error is shown when password is strong

# ===============================
# Scenario 4: Login with incorrect credentials
# ===============================
Scenario: Login with incorrect credentials
  Given User enters "diwakar.dubey@vandhana.com" in the email field
  And User enters "Ram123@gmail" in the password field
  # Fills in email and password fields with incorrect credentials

  When User clicks the login button
  # Simulates clicking the login button

  Then Error message "Incorrect password. Please try again or click 'Forgot password?' to reset it." should be visible
  # Verifies that the system shows a login error message

  And Login button should be disabled
  # Ensures the login button is disabled after incorrect login attempt

# ===============================
# Scenario 5: Login with valid credentials
# ===============================
Scenario: Login with valid credentials
  When User logs in using valid credentials
  # Simulates user logging in with correct email and password

  Then User should be successfully logged in
  # Verifies that the user is redirected or logged in successfully