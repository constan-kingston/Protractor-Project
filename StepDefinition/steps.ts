import {Given,When,Then} from 'cucumber';
import {calculator} from '../PageObjects/calculator';
import {angular} from '../PageObjects/angular';
import {browser} from 'protractor';
import chai from "chai"
var expect = chai.expect;
 let calc = new calculator();
 let ang = new   angular();

Given('Navigate to {string} site', async (string)=> {
           // Write code here that turns the phrase above into concrete actions
           if(string=="calculator")
           {
          await browser.get('https://juliemr.github.io/protractor-demo');
          }
          else if(string=="Angular")
          {
                await browser.get('https://angularjs.org/');
          }
         });


 When('Enter the two numbers {string} and {string}', async(string1, string2)=> {
           // Write code here that turns the phrase above into concrete actions
           
           await calc.firstBox.sendKeys(string1);
		   await calc.secondBox.sendKeys(string2);
         });

Then('The result should be {string}', async (string)=>{
           // Write code here that turns the phrase above into concrete actions
           await calc.go.click();
		await calc.result.getText().then(function(text){
			expect(text).to.equal(string);
		})
         });

When('Click on header link', async ()=> {
           // Write code here that turns the phrase above into concrete actions
           await ang.angularlink.click();
         });

Then('You will enter {string} in search box', async (string)=> {
           // Write code here that turns the phrase above into concrete actions
          await ang.searchBox.sendKeys(string);
         });