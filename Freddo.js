// Liam Mapplebeck 19009191 19/10/20
var YourPay;
var oldPriceFreddo;
var newPriceFreddo;
var newAmount;
var OldAmount;
var Freddo2017;
var Freddo1999;


YourPay = window.prompt("Please enter your hourly wage.")
document.write("Your hourly wage is £" + YourPay + ".");

oldPriceFreddo = (0.05)
newPriceFreddo = (0.25)
OldAmount = (YourPay / oldPriceFreddo)

document.write("You can buy " + OldAmount + " Freddos in 1999 with your current wages.");
newAmount = (YourPay / newPriceFreddo)
document.write("With your current wages, in 2017 you can buy " + newAmount + " Freddos.");

Freddo2017 = (OldAmount * 0.25)
Freddo1999 = (NewAmount * 0.05)

document.write("To get " + newAmount + " Freddos in 1999, your hourly wages would have to be £" + Freddo1999 + ".")
document.write("If you want to buy" + OldAmount + " Freddos from 2017, your hourly wages would need to be £" + Freddo2017)