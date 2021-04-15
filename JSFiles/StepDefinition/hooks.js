"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("cucumber");
cucumber_1.Before(function () {
    // This hook will be executed before all scenarios
    console.log("Before method");
});
cucumber_1.Before({ tags: "@calculatorTest" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.Before({ tags: "@angularTest" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("This is for 2nd test");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        console.log("End of step");
        if (scenario.result.status == Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
cucumber_1.Before({ tags: "@foo and @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
});
cucumber_1.Before({ tags: "@foo or @bar" }, function () {
    // This hook will be executed before scenarios tagged with @foo or @bar
});
// You can use the following shorthand when only specifying tags
cucumber_1.Before("@foo", function () {
    // This hook will be executed before scenarios tagged with @foo
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQyx1Q0FBc0M7QUFFdEMsaUJBQU0sQ0FBQztJQUNMLGtEQUFrRDtJQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQzlCLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQyxFQUFFO0lBQ2hDLCtEQUErRDtJQUMvRCxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsRUFBRTtJQUM3QiwrREFBK0Q7SUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUM1QiwrREFBK0Q7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMxQixJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQ3hDO1lBQ0EsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3BDO0lBRUgsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDLEVBQUU7SUFDOUIsd0VBQXdFO0FBQzFFLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsRUFBRTtJQUM3Qix1RUFBdUU7QUFDekUsQ0FBQyxDQUFDLENBQUM7QUFFSCxnRUFBZ0U7QUFDaEUsaUJBQU0sQ0FBQyxNQUFNLEVBQUU7SUFDYiwrREFBK0Q7QUFDakUsQ0FBQyxDQUFDLENBQUMifQ==