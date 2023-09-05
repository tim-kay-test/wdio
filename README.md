# Banked Test Scenarios
Task: Use "Hosted Checkout" to automate the checkout and payment for the "AU" region, simulating a "new customer" experience with "Mock Bank AU" for the following behaviours.

| Behaviour Scenarios       | BSB     | Account Number          | 
| Mocks successful creation | 111-114 | 12345678                |
| of Agreement with delay.  |         |                         |
| Mocks successful payment  |         |                         |
| with delay.               |         |                         |
|                           |         |                         |
| Mocks successful creation | 111-114 | Ex: 050511              |
| of Agreement with delay   |         | <AD><PD>11              |
| (AD seconds).             |         | AD - Create Agreement   |
| Mocks successful payment  |         | Delay (in seconds)      |
|  with delay (PD seconds). |         | PD - Payment Delay (in  |
|                           |         | seconds)                |
|                           |         |                         |
|Mocks failure creating an  | 111-114 | Ex: 010112              |
|agreement.                 |         | <AD><PD>12              |
|                           |         |                         |
| Mocks payment failure due | 111-114 | Ex: 010124              |
| to Insufficient funds     |         | <AD><PD>24>             | 


Execution: 
To execute the following tests verifiying the processing of payments for Mock Bank AU. Go to Actions->Choose the Test Workflow->Choose Run Worflow->Enter Any Text for Run->Click Run Workflow. 

This will run the pipeline to verify the four separate tests. 
