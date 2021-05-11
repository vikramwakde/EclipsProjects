package bankingCucumberv01.setpDefination;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import bankingCucumberv01.pageObject.LoginPage;
import cucumber.api.java.en.*;

public class Steps {

	public WebDriver driver;
	public LoginPage lp;
	
	@Given("^User Launch Chrome browser$")
	public void user_Launch_Chrome_browser() throws Throwable {
		
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\user\\eclipse-workspace\\bankingCucumberv01\\Driver\\chromedriver.exe");
		driver= new ChromeDriver();

//		System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\Drivers\\geckodriver.exe");
//		driver= new FirefoxDriver();		
		lp = new LoginPage(driver);
		
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws Throwable {
		
		driver.get(url);
		
		driver.manage().window().maximize();
	}

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_as(String email, String password) throws Throwable {

		lp.setUserName(email);
		lp.setPassword(password);
		
		Thread.sleep(2000);
		
	}

	@When("^Click on login$")
	public void click_on_login() throws Throwable {
		
		lp.clickLogin();
		
	}
	
	@When("^Page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String title) throws Throwable {
	
		if (driver.getPageSource().contains("title"))
		{
			Assert.assertTrue(true);
		}
		else
		{
			Assert.assertTrue(false);
			driver.close();
		}
	}

	@When("^Click on Logout$")
	public void click_on_Logout() throws Throwable {

		lp.clickLogout();
	}
		
	

}
