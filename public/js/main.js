'use strict';

requirejs.config({

	baseUrl: '/js/',
	paths: {
		text: 'vendor/bower_components/requirejs-text/text',
		jquery: 'vendor/bower_components/jquery/dist/jquery.min',
		backbone: 'vendor/bower_components/backbone/backbone',
		dust: 'vendor/bower_components/dustjs-linkedin/dist/dust-full.min',
		underscore: 'vendor/bower_components/underscore/underscore',
		bootstrap:'vendor/bootstrap/bootstrap.min',
		flatui: 'vendor/flatui/custom_checkbox_and_radio'
	},
	useStrict: true,
	shim: {
		bootstrap: {
			deps: ["jquery"]
		},
		flatui: {
			deps: ["bootstrap", "jquery"]
		}
	}
});

require([
	'app',
	'bootstrap',
	'flatui'
], function (Application) {

	//initialize our application
	Application.initialize();

});
