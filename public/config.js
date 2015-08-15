'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'verdantree';
	var applicationModuleVendorDependencies = [
		'ngResource', 
		'ngCookies',  
		'ngAnimate',  
		'ngTouch',  
		'ngSanitize',  
		'ui.router', 
		'ui.utils',
		'ui.grid',
		'ui.grid.edit',
		'ui.grid.cellNav',
		'ui.grid.selection',
		'ui.grid.importer',
	];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();