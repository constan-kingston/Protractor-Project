"use strict";
//import {config} from 'protractor';
//import * as reporter from "cucumber-html-reporter";
var reporter = require('cucumber-html-reporter');
//export let config
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../feature/demo.feature'],
    cucumberOpts: {
        // require step definitions
        tags: { "@angularTest": "@calculatorTest" },
        format: "json:./cucumberReports.json",
        onComplete: () => {
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberReports.json',
                output: './cucumberReports.html',
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    "Browser": "Chrome  54.0.2840.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Local"
                }
            };
            reporter.generate(options);
        },
        require: [
            './StepDefinition/*.js' // accepts a glob
        ]
    }
    // Options to be passed to Jasmine-node.
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0NBQW9DO0FBQ3BDLHFEQUFxRDtBQUNyRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUVqRCxtQkFBbUI7QUFFbkIsT0FBTyxDQUFDLE1BQU0sR0FBRztJQUNmLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMseUJBQXlCLENBQUM7SUFDbkMsWUFBWSxFQUFFO1FBQ1gsMkJBQTJCO1FBQzNCLElBQUksRUFBQyxFQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBQztRQUN4QyxNQUFNLEVBQUMsNkJBQTZCO1FBQ3BDLFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFDYixJQUFJLE9BQU8sR0FBRztnQkFDZCxLQUFLLEVBQUUsV0FBVztnQkFDbEIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsTUFBTSxFQUFHLHdCQUF3QjtnQkFDakMsc0JBQXNCLEVBQUUsSUFBSTtnQkFDNUIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRTtvQkFDTixhQUFhLEVBQUMsT0FBTztvQkFDckIsa0JBQWtCLEVBQUUsU0FBUztvQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtvQkFDakMsVUFBVSxFQUFFLFlBQVk7b0JBQ3hCLFVBQVUsRUFBRSxXQUFXO29CQUN2QixVQUFVLEVBQUUsT0FBTztpQkFDdEI7YUFDSixDQUFDO1lBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsdUJBQXVCLENBQUMsaUJBQWlCO1NBQzFDO0tBQ0E7SUFFSCx3Q0FBd0M7Q0FFekMsQ0FBQyJ9