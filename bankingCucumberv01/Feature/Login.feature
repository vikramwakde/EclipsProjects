Feature: Login

Scenario: Succsful login with valid credentials
	Given User Launch Chrome browser
	When User opens URL "http://demo.guru99.com/v4/"
	And User enters Email as "mngr325602" and Password as "tuvAnUm"
	And Click on login
	And Page title should be " Guru99 Bank Manager HomePage "
	And Click on Logout