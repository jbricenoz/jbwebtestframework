Feature: Performing Login Action
    As an incognito user
    In order to authenticate the user
    I want to be able to open and fill out the login form

    Scenario: Login with a default user
        Given I'm on the Login page
        When I log in with default user
        Then I see the flask message after user authentication
        And I see the username in the top right corner of the website

    Scenario: Verify the Home Page (Employees List)
        Given I shall be on the Employees List page
        When I see the Employees List tab selected
        Then I see the page logo in the website