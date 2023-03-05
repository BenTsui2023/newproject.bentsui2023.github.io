//define the variables
let csharp = document.getElementById("csharp");
let java = document.getElementById("java");
let php = document.getElementById("php");
let javascript = document.getElementById("javascript");
let python = document.getElementById("python");

let output = document.getElementById("output");
let btnSubmit = document.getElementById("btnSubmit");

//selected choice
let selectedChoice;
//create function to process user input
function proProLangChoice(){
    //evalue option selected by the user and display it
    //use the checked property of the input
    if(csharp.checked){
        selectedChoice = csharp.value;
    }
    else if(java.checked){
        selectedChoice = java.value;
    }
    else if(php.checked){
        selectedChoice = php.value;
    }
    else if(javascript.checked){
        selectedChoice = javascript.value;
    }
     else if(python.checked){
        selectedChoice = python.value;
    }
    else{
        //remind user to make the selection
        //use alert dialog
        alert("please first make a selection");
    }
    //display the selected choice
    output.innerHTML = selectedChoice;
}

//call the function when the button is clicked
btnSubmit.onclick = function(){proProLangChoice()}


