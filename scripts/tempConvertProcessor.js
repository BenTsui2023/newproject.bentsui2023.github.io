/* Temp Converter JS File */

//define variables

//Constant
const TEMP32 = 32;

//reference inputs
let cTempInput = document.getElementById("cTemp");
let fTempInput = document.getElementById("fTemp");

//computer temperatures
let cTemp=0;
let fTemp=0;

//reference buttons
let btnToF = document.getElementById("btnToF");
let btnToC = document.getElementById("btnToC");
let btnReset = document.getElementById("btnReset");

//define functions
//function to convert temp from C to F
function convertCtoF(cPara){
	//computer F temperature
	console.log(cPara);
	fTemp = (9/5)*cPara + TEMP32;
	
	//display the result rounded to 2 decimal places
	fTempInput.value = fTemp.toFixed(2);
	
}

//function to convert temp from F to C
function convertFtoC(fPara)
{
	//computer F temperature
	console.log(fPara);
	cTemp = (5/9)*(fPara - TEMP32);

	//display the result rounded to 2 decimal places
	cTempInput.value = cTemp.toFixed(2);
}

//call the functions
//on-event approach
//1)convert to F
btnToF.onclick = function() {convertCtoF(cTempInput.value)}

//2)convert to C
btnToC.onclick = function() {convertFtoC(fTempInput.value)}

