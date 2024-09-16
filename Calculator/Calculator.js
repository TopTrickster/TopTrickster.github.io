const displayEl = document.getElementById("display");

function appendToDisplay(input) {
    displayEl.value += input;
}

function clearDisplay() {
    try{
        displayEl.value = "";
    }
    catch(error){
        displayEl.value = "Error";
    }
    
}

function calculate() {
    try{
        displayEl.value = eval(displayEl.value);
    }
    catch(error){
        displayEl.value = "Error";
    }
}