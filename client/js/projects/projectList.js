function Project(name, iconUrlRel, maker, description, images) {
    this.name = name;
    this.iconUrl = "/images/installations/"+iconUrlRel;
    this.maker = maker;
    this.description = description;
    this.images = images;

    // create a nice id string for this project, comprised of only
    // lowercase letters and digits by removing all characters
    // that aren't letters or digits
    //
    // e.g. "L.E.D. Matrix" -> "ledmatrix"
    //      "N x N" -> "nxn"
    //      "P.R.I.M.E" -> "prime"
    this.id = this.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    this.route = "/projects/"+this.id;
}

// An array of all the projects
Template.projectsTemplate.projects = [
    new Project("P.R.I.M.E.", "prime2.jpg", "Kevin Gutowski", "PRIME or (Physics-Based Responses in a Musical Environment) is an interactive, musical projection controlled by a gesture tracking camera.", ["prime2.jpg"]),

    new Project( "SoundScreen",  "soundscreen1.jpg",  "Taurin Barrera", "The SoundScreen a depth sensitive spandex surface that can be explored musically and visually.", ["soundscreen1.jpg"]),

    new Project( "Gravity",  "gravity/gravity1.png",  "Xiaohan Zhang", "Gravity is an interactive projection which allows users to manipulate a simulated particle field using a leap motion controller.", ["gravity/gravity7.png", "gravity/gravity8.png", "gravity/gravity9.png", "gravity/gravity.gif"]),

    new Project( "Vector Field",  "vectorfield/vectorfield1.png",  "Xiaohan Zhang", "VectorField lets you control a directional flow field surrounding your body and those around you.", ["vectorfield/vectorfield1.png", "vectorfield/vectorfield2.png", "vectorfield/vectorfield3.png", "vectorfield/vectorfield4.png", "vectorfield/vectorfield5.png", "vectorfield/vectorfield6.png", "vectorfield/vectorfield7.png"]),

    new Project( "L.E.D. Matrix",  "ledmatrix1.jpg",  "Michael Williams", "The L.E.D matrix is a grid of sound responsive LED lights. The project involved writing and doccumenting a custom OSC to SPI communication library."),

    new Project( "Laser Harp",  "laserharp1.jpg",  "Eugene Lynch", "Eugene's laser harp is a custom designed laser sensor system. The strings of the laser harp are used to trigger visual and audio samples."),

    new Project( "N x N",  "gridillusion1.png",  "Derek Razo", "N x N is an installtion involving 3 photo-sensitive, sound generating boxes, which respond to projections designed in processing to create a hermann grid effect."),

    new Project( "Blind Bullets Sleep Talking",  "sculpture1.jpg",  "DeMart Denero", "Bling Bullets Sleep Talking is an interactive, kinectic sound sculpture."),

    new Project( "Visual Instrument", "visualinstrument.jpg", "Meena Vempathy", "Visual Instrument is a human-controlled visualizer for music; an experiment in adding a human element to music visualization.", ["visualinstrument.jpg"]),
    ];
