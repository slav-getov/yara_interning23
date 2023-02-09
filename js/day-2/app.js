const re = /[\*\/\-\+]/;

const calculatorDisplayFieldElement = document.querySelector('.calculator-display');
calculatorDisplayFieldElement.value = '0';

let lastOperationResultMemory = '';
//this line tests that the initial display value can be removed
calculatorDisplayFieldElement.value = '';

const calculatorMainframe = document.getElementsByClassName('calculator-operations')[0];
calculatorMainframe.addEventListener('click', (e)=>{
    //trim is necessary since format of prettier adds whitespace before and after

        if (e.target.innerText == 'C') {
            let currentRawResult = calculatorDisplayFieldElement.value;

            if (testForSpecifiedStringWithinUserInput(currentRawResult, re)) {
                currentRawResult = currentRawResult.replace(re, '');
            }else{
                currentRawResult = '0'
            }

            lastOperationResultMemory += currentRawResult;
            calculatorDisplayFieldElement.value = currentRawResult;
        } else if (e.target.innerText == 'AC') {
            lastOperationResultMemory = '';
            calculatorDisplayFieldElement.value = '0';
        } else {
            //this is where we eval everything else
            calculatorDisplayFieldElement.value += e.target.innerText;
        }

        console.log(`value is '${lastOperationResultMemory}'`);
        //calculatorDisplayFieldElement.value += itemSelected.textContent.trim();
})
/** will test whether special operation symbols exist within a specified math expression/combination of digits */
function testForSpecifiedStringWithinUserInput(valueAsString, reg) {
    return reg.test(valueAsString);
}
