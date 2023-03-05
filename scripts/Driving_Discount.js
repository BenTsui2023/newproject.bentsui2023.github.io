//Driver discount JS file

//define function
function processDriverDiscount(){
    //ref form inputs and retrive their values and assign to variables
    let usrAge = document.getElementById("age").value;
    let defDriveYes = document.getElementById("def_yes");
    let defDriveNo = document.getElementById("def_no");
    let AccYes = document.getElementById("acc_yes");
    let AccNo = document.getElementById("acc_no");

    //evaluate user options if any of the conditions is met, the driver qualifie for a discount
    if(usrAge >= 21 || defDriveYes.checked || AccNo.checked){
        //provide feedback to the user using alert dialog
        alert("Congratulations! you qualify for a driver discount of 10%")
    }
    else{
        alert("Sorry! none of the conditions is met. So you don,t qualify for a driver discount at the moment. We recommed taking defensive driver course.")
    }
}
//call function
document.getElementById("btnSubmit").onclick = function(){processDriverDiscount();}
