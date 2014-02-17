Meteor.startup(function(){
	Router.addRoute('/', 'homeTemplate');
	Router.addRoute('/home', 'homeTemplate');
	Router.addRoute('/about', 'aboutTemplate');
	Router.addRoute('/press', 'pressTemplate');
	Router.addRoute('/events', 'eventsTemplate');
	Router.addRoute('/projects', 'projectsTemplate');
	Router.addRoute('/projects/gravity', 'gravityTemplate');
	Router.addRoute('/projects/vectorfield', 'vectorfieldTemplate');
	Router.addRoute('/people', 'projectsTemplate');
	Router.addRoute('/chapters', 'chaptersTemplate');
	Router.addRoute('/connect', 'connectTemplate');
    Router.addRoute('/projects/:name', 'undefinedProject');

	Router.run();
});
