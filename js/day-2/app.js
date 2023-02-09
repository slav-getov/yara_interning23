const re = /[\*\/\-\+]/;
const reMultiple = /[\+\-\/\*]/g;

const calculatorDisplayFieldElement = document.querySelector('.calculator-display');
calculatorDisplayFieldElement.addEventListener('input', (e)=>{
    console.log('hey')
    if(e.currentTarget.value.includes('ERR')){
        console.log("yes")
        Array.from(document.querySelectorAll('.single-item-number')).forEach(btn=>btn.disabled = true);
    }
})
calculatorDisplayFieldElement.value = '0';

let lastOperationResultMemory = '';

const calculatorMainframe = document.getElementsByClassName('calculator-operations')[0];
calculatorMainframe.addEventListener('click', (e) => {
    if (e.target.innerText == 'C') {
        utilizeCButton();
    } else if (e.target.innerText == 'AC') {
        utilizeACButton();
    } else if (e.target.innerText == '=') {
        console.log(utilizeEquals(calculatorDisplayFieldElement.value));
    } else {
        if (calculatorDisplayFieldElement.value.length == 8) {
            // calculatorDisplayFieldElement.value = calculatorDisplayFieldElement.value.slice(0, 8);
            lastOperationResultMemory = calculatorDisplayFieldElement.value;
            calculatorDisplayFieldElement.value = 'ERR';
            console.log(calculatorDisplayFieldElement);
        } else {
            calculatorDisplayFieldElement.value += e.target.innerText;
        }
    }

    console.log(`value is '${lastOperationResultMemory}'`);
});
/** will test whether special operation symbols exist within a specified math expression/combination of digits. */
function testForSpecifiedStringWithinUserInput(valueAsString, reg) {
    return reg.test(valueAsString);
}
/** will test for multiple special chars */
function testForMultipleSpecialChars(valueAsString, reg) {
    let match = valueAsString.match(reg);
    return match;
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
        lastOperationResultMemory = '';
    }

    calculatorDisplayFieldElement.value = currentRawResult;
}

function utilizeEquals(stringInput) {
    return testForMultipleSpecialChars(stringInput, reMultiple);
}
