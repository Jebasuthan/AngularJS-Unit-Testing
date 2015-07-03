# AngularJS-Unit-Testing

A simple AngularJS MVC Single Page Application with Unit Testing and Code Coverage using Karma and Jasmine.

AngularJS is the best thing to happen to JavaScript since jQuery. It’s what JavaScript development has always wanted to be. One of the key advantages to Angular is its dependency injection which is very advantageous when you want to unit test your code. There is one little quirk though… I can’t for the life of me find a tutorial out there that shows how to do that unit testing.

#Install Karma

If you don’t have node.js installed, download and install it. After you have it installed go to your terminal or command line and type:

    npm install karma --save-dev
    npm install karma-cli -g
    npm install karma-jasmine --save-dev
    npm i karma-jasmine-html-reporter --save-dev
    npm i karma-coverage --save-dev 
    karma init

#Configure Karma

Create a configuration file by navigating to the directory you wish it to be in and typing the following command in your terminal:

    karma init karma.config.js

For our tutorial we’ll leave ‘jasmine’ as the default framework, let it autowatch files, and include the following files:

    'library/angular.min.js',
    'library/angular-mocks.js',
    'library/angular-route.min.js',
    'script.js',
    'controller/*.js',
    'testcases/*.js'
  
  Whatever files you choose, just be sure that you include angular.js, angular-mocks.js, and any other files that you’ll need.
  
#Start Karma
  
  Now you are ready to start Karma. Again from the terminal type:
  
    karma start karma.config.js
    
![unittesting](https://cloud.githubusercontent.com/assets/3702438/8502047/371f425e-21c9-11e5-907f-f1fb15f93852.PNG)
  
  This will start any browsers you listed in the config file on your computer. Each browser will be connected to the Karma instance with it’s own socket and you will see a list of active browsers that will tell you whether or not it is running tests. I wish that Karma would tell you a summary of the last result of your tests for each browser (15 out of 16 passed, 1 failed) but alas for that information you need to look at the terminal window.

#Make Basic Test

We are assuming that you already have a file to test. We’ll say that your mainController.js file looks something like this:

#mainController.js

    routeApp.controller('mainController', function($scope) {
	    $scope.title1 = "Hello mainController";
	    $scope.datavalues = "Home page data";
    });

Inside of mainControllerSpec.js we can create our tests cases. We’ll start out with the simpler of the two: $scope.title1 should equal ‘Hello mainController’. To test this we must mockout our Application module and the $scope variable. We’ll do this in the Jasmine beforeEach function so that we’ll have a fresh controller and scope at the beginning of each test.

#mainControllerSpec.js

    describe("Main Controller", function () {

	      var controller, scope;
	      beforeEach(angular.mock.module('routeApp'));

        beforeEach(angular.mock.inject(function($rootScope, $controller) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            scope = $rootScope.$new();
            controller = $controller('mainController', { $scope : scope });
        }));
    
        // tests start here
    });
  
  You’ll see in the code example that we are injecting our own scope so that we can verify information off of it. Also, do not forget to mock out the module itself as on line 7! We are now ready to do our tests:
  
    it('Title should be defined', inject(function ($rootScope, $controller) {
  	  expect(scope.title1).toBeDefined();
    }));

    it('Title as Hello mainController', inject(function ($rootScope, $controller) {
      expect(scope.title1).toEqual('Hello mainController');
    }));

    it('datavalues should be defined', inject(function ($rootScope, $controller) {
      expect(scope.datavalues).toBeDefined();
    }));

    it('datavalues should be Home page data', inject(function ($rootScope, $controller) {
      expect(scope.datavalues).toEqual('Home page data');
    }));
  
  If you run this test it should run in any browsers looking at Karma and pass.
  
#karma-coverage

The easiest way is to install karma-coverage as a devDependency, by running

    npm install karma karma-coverage --save-dev
  
# Karma Code Coverage Configuration
For configuration details see [docs/configuration] (https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md)

#Examples Code

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'controller/*.js' : ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['html', 'coverage'],
    
The tests are executed using [PhantomJS](http://phantomjs.org). It is easy to add [other browsers](http://karma-runner.github.io/0.10/config/browsers.html) as well
  
  ![codecoverage](https://cloud.githubusercontent.com/assets/3702438/8502048/372d42fa-21c9-11e5-8e95-b0268aef3042.PNG)


