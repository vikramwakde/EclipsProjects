$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Succsful login with valid credentials",
  "description": "",
  "id": "login;succsful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://demo.guru99.com/v4/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"mngr325602\" and Password as \"tuvAnUm\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page title should be \" Guru99 Bank Manager HomePage \"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Logout",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3433047700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.guru99.com/v4/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3659485900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr325602",
      "offset": 22
    },
    {
      "val": "tuvAnUm",
      "offset": 51
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 2434571100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 2099989700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Guru99 Bank Manager HomePage ",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 31599900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Logout()"
});
formatter.result({
  "duration": 1695266100,
  "status": "passed"
});
});