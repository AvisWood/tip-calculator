function calculate(){
    // The amount of bill
    let totalBill= document.getElementById("totalBill").value;
    console.log(totalBill)

    // the percent of tip
    let tipPercent= document.getElementById("tipPercent").value;
    console.log(tipPercent)

    // the number of people
    let numPeople= document.getElementById("numPeople").value;
    console.log(numPeople)
    
    //calculate the tip
    let tip= totalBill * tipPercent;
    console.log(tip)

    //calculate the bill w/ tip
    let billwithTip= parseInt(tip) + parseInt(totalBill);
    console.log(billwithTip)

    //the number of people
    let perPerson= tip / numPeople;
    console.log(perPerson)

    //give the calculations 0.00 format
    billwithTip = Math.round(billwithTip * 100) / 100;
    billwithTip = billwithTip.toFixed(2);
    console.log(billwithTip)
    perPerson= Math.round(perPerson * 100) / 100;
    perPerson = perPerson.toFixed(2)
    console.log(perPerson)

    //error message
    if(numPeople <= 0 || totalBill <= 0){
        alert("Enter numbers over 0")
    }

    //plug the numbers back in the html
    document.getElementById("fullBill").innerHTML = billwithTip;
    document.getElementById("eachTip").innerHTML = perPerson;
    
}