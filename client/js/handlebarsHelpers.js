Meteor.startup(function() {
    Handlebars.registerHelper("documentTitle", function(pageName, context) {
        // the last argument passed is the current context. In the case 
        // when this helper is called without any arguments, the context
        // will be passed to the pageName parameter - we want to fix that
        if(context === undefined) {
            context = pageName;
            pageName = undefined;
        }
        var title = pageName ? pageName + " - Multimedia Orchestra" : "Multimedia Orchestra"
        document.title = title;
    });
});
