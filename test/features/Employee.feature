Feature: Performing Add Employee Action
    As an default user
    In order to create a new employee register
    I want to be able to open and fill out the require fields

    Scenario: Creating a new employee
        Given I'm on the login page
        And I log in with a default user
        And I'm on create new employee form
        When I fill out and send the form
        And I see the employee details
        Then the system shows the user in the list of employees
        And the system delete the user in the list of employees 
        Then the system does not show the user in the list of employees