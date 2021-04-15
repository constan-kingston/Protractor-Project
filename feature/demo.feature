Feature: Calculator functionality

@calculatorTest
Scenario: Add two numbers

Given Navigate to "calculator" site
When Enter the two numbers "10" and "23"
Then The result should be "33"

@calculatorTest
Scenario: Multiply two numbers

Given Navigate to "calculator" site
When Enter the two numbers "1" and "2"
Then The result should be "3"

@angularTest
Scenario Outline: Navigate to Angular
Given Navigate to "Angular" site
When Click on header link
Then You will enter "<key>" in search box
Examples: 
|key|
|new|
|helo|


