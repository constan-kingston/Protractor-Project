import {ElementFinder,element,by} from "protractor";

export class calculator
{
	firstBox : ElementFinder;
	secondBox:ElementFinder;
	multiply:ElementFinder;
	go:ElementFinder;
	result:ElementFinder;

	constructor()
	{
		this.firstBox=element(by.model("first"));
		this.multiply=element(by.css("option[value='MULTIPLICATION']"));
		this.secondBox=element(by.model("second"));
		this.go=element(by.id("gobutton"));
		this.result=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
	}
}