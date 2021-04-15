import {browser} from 'protractor';
import {element,by} from 'protractor';
import {async} from 'q';
import {calculator} from './PageObjects/calculator';
import {angular} from './PageObjects/angular'


describe('ChainLocator', function(){
	
	it('Testcase1', async()=>{

	let calc = new calculator();
		await browser.get('https://juliemr.github.io/protractor-demo');
		await calc.firstBox.sendKeys("10");
		await calc.multiply.click();
		await calc.secondBox.sendKeys("23");
			await calc.go.click();
		
		
		
			calc.result.getText().then(function(text){
				console.log(text);
			})
	})
	 it('Angular Testcase', async()=>{
			let ang = new angular();
	 await browser.get('https://angularjs.org/');
	 await ang.angularlink.click();
	 await ang.searchBox.sendKeys("new");

	 })
})
