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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../PageObjects/calculator");
const angular_1 = require("../PageObjects/angular");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator();
let ang = new angular_1.angular();
cucumber_1.Given('Navigate to {string} site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calculator") {
        yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo');
    }
    else if (string == "Angular") {
        yield protractor_1.browser.get('https://angularjs.org/');
    }
}));
cucumber_1.When('Enter the two numbers {string} and {string}', (string1, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstBox.sendKeys(string1);
    yield calc.secondBox.sendKeys(string2);
}));
cucumber_1.Then('The result should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.go.click();
    yield calc.result.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
cucumber_1.When('Click on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ang.angularlink.click();
}));
cucumber_1.Then('You will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ang.searchBox.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbi9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF5QztBQUN6QywwREFBcUQ7QUFDckQsb0RBQStDO0FBQy9DLDJDQUFtQztBQUNuQyxnREFBdUI7QUFDdkIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFNLGlCQUFPLEVBQUUsQ0FBQztBQUUzQixnQkFBSyxDQUFDLDJCQUEyQixFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDeEMsb0VBQW9FO0lBQ3BFLElBQUcsTUFBTSxJQUFFLFlBQVksRUFDdkI7UUFDRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7S0FDOUQ7U0FDSSxJQUFHLE1BQU0sSUFBRSxTQUFTLEVBQ3pCO1FBQ00sTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0YsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdYLGVBQUksQ0FBQyw2Q0FBNkMsRUFBRSxDQUFNLE9BQU8sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUNuRSxvRUFBb0U7SUFFcEUsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFWixlQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUMzQyxvRUFBb0U7SUFDcEUsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFBO0FBQ0ssQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVaLGVBQUksQ0FBQyxzQkFBc0IsRUFBRSxHQUFRLEVBQUU7SUFDNUIsb0VBQW9FO0lBQ3BFLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVosZUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDbkQsb0VBQW9FO0lBQ3JFLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9