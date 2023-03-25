


const numberButtons =  document.querySelectorAll(".number")
const operationButtons = document.querySelectorAll(".operators");
const equalsButton = document.querySelector(`[data-equals]`);
const allClearButton = document.querySelector(`[data-all-clear]`);
const deleteButton = document.querySelector(`[data-delete]`);
const preOperand = document.querySelector(".previous-operand");
const currOperand = document.querySelector(".current-operand");


let currNum= "";
let prevNum ="";
let operator = "";


numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
         appendNumber(e.target.textContent);

    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', (e) =>{
        appendOperator(e.target.textContent)
    })
})

equalsButton.addEventListener('click', () => {
    equalAnswer();
})
allClearButton.addEventListener('click', () => {
    allClear();
})

deleteButton.addEventListener('click',() => {
    currNum = currNum.slice(0,-1);
    currOperand.textContent = currNum;
})






 function appendNumber(number){
    if(prevNum !== "" && currNum !== "" && operator === ""){
        prevNum = "";
        currOperand.textContent = currNum;
    }
    if(currNum.length <= 11){

        currNum += number;
        currOperand.textContent = currNum;
    }

 }

function   calculate() {
   prevNum = Number(prevNum);
   currNum = Number(currNum);


    if (operator === "+") {
        prevNum += currNum ;
    } else if (operator === "-") {
        prevNum -= currNum ;
    } else if (operator === "*") {
        prevNum *= currNum ;
    } else if (operator === "÷") {
        if (currNum  <= 0) {
            prevNum = "Error";

        }
        prevNum /= currNum ;
    }
    displayResults();

}

function appendOperator(op){

    if(prevNum === ""){
        prevNum = currNum;
        operatorCheck(op);

    }else if (currNum === "") {
        operatorCheck(op);
    } else {
        operator = op;
        calculate();
        preOperand.textContent = prevNum + ' ' + operator;
        currOperand.textContent = "0";
        currNum = "";

    }

}
function operatorCheck(op){
    operator = op;
    preOperand.textContent = prevNum + " " + operator;
    currOperand.textContent = "0";
    currNum = "";

}
function allClear(){
    currNum = "";
    prevNum = "";
    operator = "";

    preOperand.textContent = "0";
    currOperand.textContent = prevNum;

}

function equalAnswer(){
     calculate();
    preOperand.textContent =  "";
    currOperand.textContent = prevNum;

}
function displayResults(){
    if(prevNum.length <= 11){
        currOperand.textContent = prevNum;
    }
    preOperand.textContent = "";
    operator = "";
    currNum = "";

}