// Template context is a project JSON from projectList
Template.projectPageTemplate.renderProjectInfo = function() {
    var template = Template[this.id] || Template.undefinedProject;
    return template(this);
}
