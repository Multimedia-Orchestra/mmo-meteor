// Template context is a project JSON from projectList
Template.projectPageTemplate.renderProjectInfo = function() {
    console.log(this);
    var template = Template[this.id] || Template.undefinedProject;
    return template(this);
}
