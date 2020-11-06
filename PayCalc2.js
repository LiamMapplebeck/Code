// Liam Mapplebeck 19009191 09/10/20
var Basic_Salary = 0;
var Tax_free_Allowance = 0;
var Bonus = 0;
var Taxable_Income = 0;
var Tax_Amount = 0;
var Tax_Amount40 = 0;
var NetPay = 0;
var NetPay2 = 0;
var WeeklyPay = 0;
var WeeklyPay2 = 0;
//Declaring my variables

Basic_Salary = parseInt(prompt('Input Basic Salary'));
Bonus = parseInt(prompt('Input bonus'));
Tax_free_Allowance = parseInt(prompt('Input Tax Free Allowance'));
Taxable_Income = (Basic_Salary) + (Bonus) - (Tax_free_Allowance);

Tax_Amount = (25/100) * Taxable_Income;
Tax_Amount40 = (40/100) * Taxable_Income;

NetPay = (Basic_Salary) + (Bonus) - (Tax_Amount);
NetPay2 = (Basic_Salary) + (Bonus) - (Tax_Amount40);

WeeklyPay = (NetPay / 52);
WeeklyPay2 = (NetPay2 / 52); 

if(Taxable_Income > 40000)
{
    document.write("Since £"+ Taxable_Income+" is more than £40000, Tax is £"+ Tax_Amount40 + ". Netpay is £"+ NetPay2 + " and weekly netpay is");
    document.write("Your weekly payment is £"+ WeeklyPay2.toFixed(2));
}

else if (Taxable_Income > 10000)
{ 
    document.write("Since £"+ Taxable_Income +" is more than £10000, Tax amount is = £"+ Tax_Amount + ". Netpay is £"+ NetPay);
    document.write("Your weekly payment is £"+ WeeklyPay.toFixed(2));
}

else
{
    document.write("Since £"+ Taxable_Income+" is less than the £10000, Tax is no longer needed" );
    document.write("Your weekly payment is £"+ WeeklyIncome.toFixed(2));
}
