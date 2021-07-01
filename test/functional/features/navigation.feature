Feature: Navigation

Scenario: Homepage is accessible
    Given the site is available
    When I navigate to the home page
    Then I should see a homepage title
    And the homepage title contains Katie

Scenario: Navigation to unknown route will default to homepage
    Given the site is available
    When I navigate to unknown-route page
    Then I should see a homepage title