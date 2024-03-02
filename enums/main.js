var Planets;
(function (Planets) {
    Planets["MERCURIO"] = "mercurio";
    Planets["VENUS"] = "venus";
    Planets["TERRA"] = "terra";
    Planets["MARTE"] = "marte";
})(Planets || (Planets = {}));
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles["USER"] = "uilian";
})(Roles || (Roles = {}));
console.log(Planets.TERRA);
console.log(Roles.USER);
