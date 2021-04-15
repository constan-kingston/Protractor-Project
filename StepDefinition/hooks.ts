import {browser} from 'protractor';
import {Before,After} from 'cucumber';

Before(function () {
  // This hook will be executed before all scenarios
  console.log("Before method")
});

Before({tags: "@calculatorTest"}, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.manage().window().maximize();
});

Before({tags: "@angularTest"}, function () {
  // This hook will be executed before scenarios tagged with @foo
  console.log("This is for 2nd test")
});

After(async function (scenario) {
  // This hook will be executed before scenarios tagged with @foo
  console.log("End of step")
  if(scenario.result.status==Status.FAILED)
  {
		const screenshot = await browser.takeScreenshot();
		this.attach(screenshot, "image/png");
  }

});

Before({tags: "@foo and @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
});

Before({tags: "@foo or @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo or @bar
});

// You can use the following shorthand when only specifying tags
Before("@foo", function () {
  // This hook will be executed before scenarios tagged with @foo
});