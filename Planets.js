// Liam Mapplebeck 19009191 30/10/20

var Planets = new Array();
Planets[0, 1, 2, 3, 4, 5, 6, 7]

var Distance = new Array();
Distance[0, 1, 2, 3, 4, 5, 6, 7]

var i = 0;

var Planets = [
    "Mercury", " Venus", " Earth", " Mars", " Jupiter", " Saturn", " Uranus", " Neptune"
]

var Distance = [
    "35,98 Million", " 67.23 Million", " 92,96 Million", " 141,61 Million", " 483,74 Million", " 888,56 Million", " 1,79 Billion", " 2,79 Billion"
]

for (i=0; i <8; i++)
{
    document.write(i+ ") " + "The planet" + Planets[i] + " is " + Distance[i] + " miles away from the sun." + "</br>");
}