'use strict';

requirejs.config({

	baseUrl: '/js/',
	paths: {
		jquery: 'vendor/bower_components/jquery/dist/jquery.min',
		backbone: 'vendor/bower_components/backbone/backbone',
		underscore: 'vendor/bower_components/underscore/underscore'
	}
});

require([
	'app'
], function (Application) {

	//initialize our application
	Application.initialize();

});
