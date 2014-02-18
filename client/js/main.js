Meteor.startup(function(){
	Router.addRoute('/', 'homeTemplate');
	Router.addRoute('/home', 'homeTemplate');
	Router.addRoute('/about', 'aboutTemplate');
	Router.addRoute('/press', 'pressTemplate');
	Router.addRoute('/events', 'eventsTemplate');
	Router.addRoute('/projects', 'projectsTemplate');
	Router.addRoute('/people', 'projectsTemplate');
	Router.addRoute('/chapters', 'chaptersTemplate');
	Router.addRoute('/connect', 'connectTemplate');
    Router.addRoute('/projects/:name', function(data) {
        // Use the project JSON as the context
        var template = _.findWhere(Template.projectsTemplate.projects, {route: "/projects/"+data.name})
        return Template.projectPageTemplate(template);
    });

	Router.run();
});
