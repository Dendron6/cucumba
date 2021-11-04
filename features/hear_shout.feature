Feature: Shout

  Shouty allows users to "hear" other users ...

  To do:
    - only shout to people within a certain distance

  repeatable actions are written in the background
  Background:
    Given a person named Lucy
    And a person named Sean

  Rule: Shouts can be heard by other users

  Scenario: Listener hears a message
    When Sean shouts "free bagels at Sean's"
    Then Lucy should hear Sean's message


    Rule: Shouts should only be heard if listener is within range

        Scenario: Lister within range
          Given the range is 100
          And a person named Sean is located at 0
          And a person named Lucy is located at 50
          When Sean shouts "free bagels at Sean's"
          Then Lucy should hear Sean's message

          Scenario: Listener is out of range
            Given the range is 100
            And a person named Sean is located at 0
            And a person named Larry is located at 150
            When Sean shouts "free bagels at Sean's"
            Then Lucy should not hear Sean's message