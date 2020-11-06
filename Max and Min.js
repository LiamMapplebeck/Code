// Liam Mapplebeck 19009191
var numList = [5, 6, 12, 45, 98];
var min = Math.min(5, 6, 12, 45, 98);
var max = Math.max(5, 6, 12, 45, 98);

//Starting a for loop to display each of the numbers in the array.
for (i = 0; i <numList.length; i++) {

    //Displaying each number in the array
    document.write("Number " + (i+1) + " in the array is " + numList[i] + "<br>");

}

//Displaying the minimum number.
document.write("The minimum number in the array is " + min + "<br>");

//Displaying the maximum number.
document.write("The maximum number in the array is " + max + "<br>");