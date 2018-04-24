var Jasmine2HtmlReporter=require('protractor-jasmine2-html-reporter');
exports.config = 
{
//  directConnect: true,
		seleniumAdress:'http://localhost:4444/wd/hub',
  capabilities: {
	  					'browserName': 'chrome'
  				},
  framework: 'jasmine',
  specs: ['./src/tests/Script.js'],
  
//  onPrepare: function() {
//      jasmine.getEnv().addReporter(
//        new Jasmine2HtmlReporter({
//          savePath: 'target/screenshots'
//        })
//      );
//   }
  
  onPrepare:function(){
	  jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
		  savePath:'target/Screenshots',
		  takeScreenshot: true,
		  takeScreenshotOnlyOnFailures:true,
		  cleanDestination:true,
	  }));
  }
};
