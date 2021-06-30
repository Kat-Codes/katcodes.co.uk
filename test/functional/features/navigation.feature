Feature: Navigation

Scenario: Homepage is accessible
    Given the site is available
    When I navigate to the home page
    Then I should see a homepage title
    And the homepage title contains Katie

# Scenario: Navigation can be used to navigate to contact page 
#     Given the site is available
#     When I navigate to the home page
#     When I click on the burger menu
#     Then I should see a contact form

# Scenario: Clicking the homepage button will direct to contact page 
#     Given the site is available
#     When I navigate to the home page
#     When I click on the homepage contact button
#     Then I should see a contact form

Scenario: Navigation to unknown route will default to homepage
    Given the site is available
    When I navigate to unknown-route page
    Then I should see a homepage title