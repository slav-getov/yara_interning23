const re = /[\*\/\-\+]/;

const calculatorDisplayFieldElement = document.querySelector('.calculator-display');
calculatorDisplayFieldElement.value = '0';

let lastOperationResultMemory = '';
//this line tests that the initial display value can be removed
calculatorDisplayFieldElement.value = '';

const calculatorMainframe = document.getElementsByClassName('calculator-operations')[0];
calculatorMainframe.addEventListener('click', (e) => {
    if (e.target.innerText == 'C') {
        utilizeCButton();
    } else if (e.target.innerText == 'AC') {
        utilizeACButton();
    } else {
        //this is where we eval everything else
        calculatorDisplayFieldElement.value += e.target.innerText;
    }

    console.log(`value is '${lastOperationResultMemory}'`);
    
    //calculatorDisplayFieldElement.value += itemSelected.textContent.trim();
});
/** will test whether special operation symbols exist within a specified math expression/combination of digits. */
function testForSpecifiedStringWithinUserInput(valueAsString, reg) {
    return valueAsString.match(reg);
}


/** will clear both display and internal memory. */
function utilizeACButton() {
    lastOperationResultMemory = '';
    calculatorDisplayFieldElement.value = '0';
}

/** will clear display in steps. First clear will remove unfinished expressions. Second clear will zero-out. */
function utilizeCButton() {
    let currentRawResult = calculatorDisplayFieldElement.value;
    console.log(testForSpecifiedStringWithinUserInput(currentRawResult, re) + 'these are the macthes')
    console.log(lastOperationResultMemory);
    if ([testForSpecifiedStringWithinUserInput(currentRawResult, re)].length == 1) {
        console.log('executed and found');
        currentRawResult = currentRawResult.replace(re, '');
        lastOperationResultMemory += currentRawResult;
        // fix testFor...>!!!!
    } else{
        console.log('executed and not found');
        currentRawResult = '0';
        lastOperationResultMemory = '0';
    }

    //lastOperationResultMemory += currentRawResult;
    console.log('very end of func' + currentRawResult)
    calculatorDisplayFieldElement.value = currentRawResult;
}
