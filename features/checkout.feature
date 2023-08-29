Feature: Banked Payment Agreements

  Scenario Outline: As a user, I want to verify the successful payment for an agreement

    Given I am on the createpaymentsession page
    When I create a session with region <region> 
    Then I select to Pay By Bank to <bank>
    Then I enter in my <accountname>, <BSB> and <accountnumber>
    Then I confirm the payment has been processed with the correct outcome <outcome>

    Examples:
      | region        | bank       | accountname | BSB      | accountnumber |  paymentagreementstatus | outcome          |
      | AU            |  Mock      | John Smith  | 111-114  | 12345678      | Your agreement is ready | Payment complete |
      | AU            |  Mock      | John Smith  | 111-114  | 050511      | Your agreement is ready | Payment complete | 

 Scenario Outline: As a user, I want to verify the failed payment for an agreement

    Given I am on the createpaymentsession page
    When I create a session with region <region> 
    Then I select to Pay By Bank to <bank>
    Then I enter in my <accountname>, <BSB> and <accountnumber>
    Then I confirm the payment has failed with the reason <failedoutcome>

    Examples:
      | region        | bank       | accountname | BSB      | accountnumber |  paymentagreementstatus | failedoutcome          |
      | AU            |  Mock      | John Smith  | 111-114  | 010112      | Your agreement is ready | Payment Failed |
      | AU            |  Mock      | John Smith  | 111-114  | 010124      | Your agreement is ready | Insufficient funds |
      | AU            |  Mock      | John Smith  | 111-114  | 87654321      | Your agreement is ready | Payment Failed |
      
      
  

      