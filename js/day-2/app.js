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
    //return valueAsString.match(reg);
    return reg.test(valueAsString);
}

/** will clear both display and internal memory. */
function utilizeACButton() {
    lastOperationResultMemory = '';
    calculatorDisplayFieldElement.value = '0';
}

/** will clear display in steps. First clear will remove unfinished expressions. Second clear will zero-out. */
function utilizeCButton() {
    let currentRawResult = calculatorDisplayFieldElement.value;

    if (testForSpecifiedStringWithinUserInput(currentRawResult, re)) {
        currentRawResult = currentRawResult.replace(re, '');
        lastOperationResultMemory += currentRawResult;
    } else {
        currentRawResult = '0';
        lastOperationResultMemory = '0';
    }

    calculatorDisplayFieldElement.value = currentRawResult;
}
