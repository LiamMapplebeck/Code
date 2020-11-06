var pupilNames = ['Andrew', 'Brodi', 'Damon', 'Stephen', 'Lili', 'Piotr', 'Drew', 'Bianca', 'Nathan', 'Andrew', 'Damon', 'Brodie', 'Andrew']
var chooseName = prompt("Search for a name out of the list, Andrew, Lili, Damon, Stephen, Brodie, Piotr, Drew, Bianca, Nathan");
var TimesFoundInList = 0;
var found = false;

for (x = 0; x < pupilNames.length; x++) {
    if (pupilNames[x] == chooseName) {
        document.write("The name " + pupilNames[x] + " is number " + x + " on the list" + "<br>");
        found = true;
        TimesFoundInList++
    }
}
if (TimesFoundInList == false) {
    document.write("Sorry, there isnt a name in the list called that" + "<br>");
}
document.write(chooseName + " has been found " + TimesFoundInList + " times in the names list" + "<br>");