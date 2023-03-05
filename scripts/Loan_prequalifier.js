//loan prequalifier JS file

//define constants for conditions thresholds
const INCOME = 50000;
const EXP = 4;
const DTIR = 0.35;

//ref form inputs
let salary = document.getElementById("salary");
let workExp = document.getElementById("work_exp");
let curDebt = document.getElementById("cur_loan");
let btnReset = document.getElementById("btnReset");
let btnSubmit = document.getElementById("btnSubmit");
let output = document.getElementById("output");

//variables to hold user inputs
let usrSalary, usrWorkExp, usrDebt, usrDtir;

//define function
function processLoanApplication(){
    //retrieve user inputs
    usrSalary = salary.value;
    usrWorkExp = workExp.value;
    usrDebt = curDebt.value;
    //compute user debt-to-income ratio
    usrDtir = usrDebt - usrSalary;

    console.log(typeof usrDtir);
    console.log(typeof usrSalary);
    console.log(typeof usrDtir);
    //what is the amount the user is prequalified for?
    let amtQualFor = (DTIR - usrDtir) * usrSalary;

    //evaluate wether the user meets the requirements (nested if statement)
    if(usrSalary >= INCOME){
        if(usrWorkExp >= EXP){
            if(usrDtir <= DTIR){
                //display a message for the user
                output.innerHTML = "congratulations. You qualify for a loan. You are preapproved for a loan of $" + amtQualFor.toFixed(2);
            } //end of innermost if statement
            else{
                //user does not qualify due to usrDtir > DTIR
                output.innerHTML = "Sorry! you don,t qualify for a loan at the moment because you DTIR of " + usrDtir.toFixed(2) + "is greater than the threshold of " + DTIR;
            }
        } //end of middle if
        else{
            //user doesn,t qualify because work experience is less than 4 years
            output.innerHTML = "Sorry! you don,t qualify for a loan at the moment because you work experience of " + usrWorkExp + "is less than the threshold of " + EXP;
        }
    } // end of out of
    else{
        //user doesn,t qualify because income is less han 50k

        output.innerHTML = "Sorry! you don,t qualify for a loan at the moment because you income of $" + nusrSalary.toFixed(2) + "is less than the threshold of $" + INCOME;
    }
}
//call the function
btnSubmit.onclick = function(){processLoanApplication();};