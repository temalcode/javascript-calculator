const inputArea = document.getElementById('inputarea')
const equalBtn = document.getElementById('equal')
const deleteBtn = document.getElementById('deleteBtn')
const dotBtn = document.getElementById('dotBtn')
const negativeBtn = document.getElementById('negativeBtn')
var firstOperand;
var operator;
var secondOperand;
var result;

function getButtons(item) {
    return document.querySelectorAll(item)
}

function addTextToTextArea(userInput) {
    if(!(isNaN(userInput))){
        if (operator === undefined) {
            let firstNum = (inputArea.textContent ? inputArea.textContent : "") + userInput
            firstOperand = parseFloat(firstNum)
            inputArea.innerText = firstNum
        }
        else {
            let secondNum = (inputArea.textContent ? inputArea.textContent : "") + userInput
            secondOperand = parseFloat(secondNum)
            inputArea.innerText = secondNum
        }
    }
    else if(userInput === "delete"){
        inputArea.innerText = ""
    }
}

//operands
for (let i = 0; i <= 9; i++) {
    let button = getButtons('.num')[i]
    let num = button.getAttribute('data-btn')
    button.addEventListener('click', () => addTextToTextArea(num))
}

//fraction
dotBtn.addEventListener('click', function () {
    inputArea.innerText = (inputArea.textContent ? inputArea.textContent : "") + '.'
})

//operator
for (let i = 0; i <= 3; i++) {
    let opBtn = getButtons('.operator')[i]
    let op = opBtn.getAttribute('data-btn')
    opBtn.addEventListener('click', function()
        {
            addTextToTextArea("delete"); 
            if(!(firstOperand === undefined)){
                operator = op;
            }
        })
}

//equal
equalBtn.addEventListener('click', function () {

    switch (operator) {
        case 'plus':
            result = firstOperand + secondOperand;
            break;
        case 'minus':
            result = firstOperand - secondOperand;
            break;
        case 'divide':
            result = firstOperand / secondOperand;
            break;
        case 'multiply':
            result = firstOperand * secondOperand;
            break;
    }

    inputArea.innerText = result

    firstOperand = undefined
    secondOperand = undefined
    operator = undefined
})

//delete
deleteBtn.addEventListener('click', function () {
    addTextToTextArea("delete")
    firstOperand = undefined
    secondOperand = undefined
    operator = undefined
})

//negative numbers
negativeBtn.addEventListener('click', function(){
    let currentNum = inputArea.textContent
    let negativeNum = -currentNum
    inputArea.innerText = negativeNum
    if(operator === undefined){
        firstOperand = negativeNum
    }else{
        secondOperand = negativeNum
    }
})