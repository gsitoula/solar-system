(function() {
    var app = angular.module('SolarSystem', []);

    app.controller("SomeController", function() {
        this.astros = planets;
    });

    var planets = [{
        name: "Mercury",
        description: "Smallest planet of the Solar System."
    }, {
        name: "Venus",
        description: "Earth shapelike planet, Venus is the second planet in the Solar System."
    }, {
        name: "Earth",
        description: "Largest planet of the four terrestrial planets, Earth is our homeworld."
    }, {
        name: "Mars",
        description: "AKA the Red Planet, Mars is the third planet in the Solar System. It has two natural satellites, named Phobos and Deimos."
    }, {
        name: "Jupiter",
        description: "Largest planet of the Solar System."
    }, {
        name: "Saturn",
        description: "Second largest planet of the Solar System."
    }, {
        name: "Uranus",
        description: "Coldest planet in the Solar System."
    }, {
        name: "Neptune",
        description: "Since it's discovery in 1846 by mathematic prediction, Neptune has completed only one orbit of the Sun."
    }, {
        name: "Pluto",
        description: "Second known dwarf planet of the Solar System."
    } ];

})();