


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
 function appendNumber(number){
    currNum += number;
    currOperand.textContent = currNum;

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

}

function appendOperator(op){


    operator = op;
    calculate();
    preOperand.textContent = prevNum;
    currNum = '';
    currOperand.textContent = currNum;

}
function allClear(){
    currNum = "";
    prevNum = "";

    preOperand.textContent = currNum;
    currOperand.textContent = prevNum;

}

function equalAnswer(){
     calculate();
    preOperand.textContent =  "";
    currOperand.textContent = prevNum;

}
function clickAnswer(){

}