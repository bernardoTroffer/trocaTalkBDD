Feature: Account operations

  Scenario: Extract money from account
    Given I have an account with $80
    When I extract $10 from my account
    Then I should have $70 in my account

  Scenario: Deposit money into account
    Given I have an account with $300
    When I deposit $150 into my account
    Then I should have $450 in my account
