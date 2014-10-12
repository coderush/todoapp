'use strict';

requirejs.config({

	baseUrl: '/js/',
	paths: {
		text: 'vendor/bower_components/requirejs-text/text',
		jquery: 'vendor/bower_components/jquery/dist/jquery.min',
		backbone: 'vendor/bower_components/backbone/backbone',
		dust: 'vendor/bower_components/dustjs-linkedin/dist/dust-full.min',
		underscore: 'vendor/bower_components/underscore/underscore'
	}
});

require([
	'app'
], function (Application) {

	//initialize our application
	Application.initialize();

});
