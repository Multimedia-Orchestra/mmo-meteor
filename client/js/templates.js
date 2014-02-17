// An array of all the projects
Template.projectsTemplate.projects = function() {
    return [
    {
        iconUrl: "/images/installations/prime2.jpg",
        route: "/projects/prime",
        name: "P.R.I.M.E.",
        maker: "Kevin Gutowski",
        description: "PRIME or (Physics-Based Responses in a Musical Environment) is an interactive, musical projection controlled by a gesture tracking camera.",
    },

    {
        iconUrl: "/images/installations/soundscreen1.jpg",
        route: "/projects/soundscreen",
        name: "SoundScreen",
        maker: "Taurin Barrera",
        description: "The SoundScreen a depth sensitive spandex surface that can be explored musically and visually.",
    },

    {
        iconUrl: "/images/installations/gravity/gravity1.png",
        route: "/projects/gravity",
        name: "Gravity",
        maker: "Xiaohan Zhang",
        description: "Gravity is an interactive projection which allows users to manipulate a simulated particle field using a leap motion controller.",
    },

    {
        iconUrl: "/images/installations/vectorfield/vectorfield1.png",
        route: "/projects/vectorfield",
        name: "Vector Field",
        maker: "Xiaohan Zhang",
        description: "Control a directional flow field surrounding your body and those around you.",
    },

    {
        iconUrl: "/images/installations/ledmatrix1.jpg",
        route: "/projects/ledmatrix",
        name: "L.E.D. Matrix",
        maker: "Michael Williams",
        description: "The L.E.D matrix is a grid of sound responsive LED lights. The project involved writing and doccumenting a custom OSC to SPI communication library.",
    },

    {
        iconUrl: "/images/installations/laserharp1.jpg",
        route: "/projects/laserharp",
        name: "Laser Harp",
        maker: "Eugene Lynch",
        description: "Eugene's laser harp is a custom designed laser sensor system. The strings of the laser harp are used to trigger visual and audio samples.",
    },

    {
        iconUrl: "/images/installations/gridillusion1.png",
        route: "/projects/gridillusion",
        name: "N x N",
        maker: "Derek Razo",
        description: "N x N is an installtion involving 3 photo-sensitive, sound generating boxes, which respond to projections designed in processing to create a hermann grid effect.",
    },

    {
        iconUrl: "/images/installations/sculpture1.jpg",
        route: "/projects/sculpture",
        name: "Blind Bullets Sleep Talking",
        maker: "DeMart Denero",
        description: "Bling Bullets Sleep Talking is an interactive, kinectic sound sculpture.",
    },

    {
        iconUrl: "/images/installations/visualinstrument.jpg",
        route: "/projects/visualinstrument",
        name: "Visual Instrument",
        maker: "Meena Vempathy",
        description: "A human-controlled visualizer for music; an experiment in adding a human element to music visualization.",
    },


        ];
}

Template.gravityTemplate.images1 = function() {
    return ["gravity1.png", "gravity2.png", "gravity3.png"];
}
Template.gravityTemplate.images2 = function() {
    return ["gravity4.png", "gravity5.png", "gravity6.png"];
}
Template.gravityTemplate.images3 = function() {
    return ["gravity7.png", "gravity8.png", "gravity9.png", "gravity.gif"];
}

Template.vectorfieldTemplate.images = function() {
    return ["vectorfield1.png", "vectorfield2.png", "vectorfield3.png", "vectorfield4.png", "vectorfield5.png", "vectorfield6.png", "vectorfield7.png"];
}


// Group the projects array into fours, for easy processing into rows
Template.projectsTemplate.projectsInFours = function() {
    var projects = Template.projectsTemplate.projects();
    var projectsGrouped = [];
    projects.forEach(function(project, idx) {
        var bucket = Math.floor(idx / 4);
        var array = (projectsGrouped[bucket] = projectsGrouped[bucket] || []);
        array.push(project);
    });
    return projectsGrouped;
};
