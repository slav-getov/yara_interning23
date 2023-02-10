import regexDictionary from './regexDict.js';

const re = regexDictionary.simplemath.regex;
const reMultiple = regexDictionary.simplemathmultiple.regex;
const reMultipleExpanded = regexDictionary.capturegroupsyntax.regex;

const calculatorDisplayFieldElement = document.querySelector('.calculator-display');
// note to self - don't try to check for inpuit change when changing inpuit via js. wont work. you need custom events
calculatorDisplayFieldElement.placeholder = '0';

let memory = '';
let precisionToken = 0;

const calculatorMainframe = document.getElementsByClassName('calculator-operations')[0];
calculatorMainframe.addEventListener('click', (e) => {
    if(e.target.matches("button.single-item")){
        if (e.target.innerText == 'C') {
            utilizeCButton();
        } else if (e.target.innerText == 'AC') {
            utilizeACButton();
        } else if (e.target.innerText == '=') {
            performComplexMath(calculatorDisplayFieldElement.value)
            console.log(precisionToken)
            utilizeEquals(calculatorDisplayFieldElement.value);
        } else if(e.target.innerText == 'Prc'){
            precisionToken++;
        }else {
            //??calculatorDisplayFieldElement.value.length == 8 && re.test(calculatorDisplayFieldElement.value)
            if (calculatorDisplayFieldElement.value.length == 8) {
                //threshold
                memory = calculatorDisplayFieldElement.value;
                calculatorDisplayFieldElement.value = 'ERR';
            } else if (calculatorDisplayFieldElement.value != 'ERR') {
                //free enter
                calculatorDisplayFieldElement.value += e.target.innerText;
            }
        }
    }

    console.log(`value is '${memory}'`);
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

/** will clear both display and memory. */
function utilizeACButton() {
    memory = '';
    precisionToken = 0;
    calculatorDisplayFieldElement.value = '';
}

/** will clear display in steps. First clear will remove unfinished expressions. Second clear will zero-out. */
function utilizeCButton() {
    let currentRawResult = calculatorDisplayFieldElement.value;

    if (testForSpecifiedStringWithinUserInput(currentRawResult, reMultiple)) {
        currentRawResult = currentRawResult.replaceAll(reMultiple, '');
        memory += currentRawResult;
    } else {
        currentRawResult = '';
        memory = '';
    }

    calculatorDisplayFieldElement.value = currentRawResult;
}
/** will activate equals and perform simple math */
function utilizeEquals(stringInput) {
    const [fullexp, ...rest] = testForMultipleSpecialChars(stringInput, reMultipleExpanded);
    //return performSimpleMath(rest[0], rest[1], rest[2]);
    calculatorDisplayFieldElement.value = performSimpleMath(rest[0], rest[1], rest[2]);
}
/** will perform basic math and capture div by zero */
function performSimpleMath(firstItem, operation, secondItem) {
    let result = 0;
    let operator = parseInt(firstItem);
    let operand = parseInt(secondItem);
    switch (operation) {
        case '+':
            result = operator + operand;
            break;
        case '-':
            result = operator - operand;
            break;
        case '*':
            result = operator * operand;
            break;
        case '/':
            if(operand == 0){
                result = 'Can not divide by zero';
            }else{
                result = operator / operand;
            }
        default:
            break;
    }
    console.log(result)
    //save results!!!
    if(typeof result != 'string'){
        memory = result;
    }else{
        //is this a good idea?
        memory = 0;
        return result;
    }
    	
    return Number.isInteger(result) ? result : result.toFixed(precisionToken);
}

/** will perform complex math */
function performComplexMath(expression){
    let complexExpressionUnevalAsArr = expression.split('');
    // split so we can find all items
    
    //best index will be a complex operation sign
    let bestIndex = 0;
    //loop over and find best index
    for(let i =0;i<complexExpressionUnevalAsArr.length;i++){
        if(complexExpressionUnevalAsArr[i] == '*' || '/'){
            bestIndex = complexExpressionUnevalAsArr[i];
            break;
        }
    }
    let result = 0;
    switch (complexExpressionUnevalAsArr[bestIndex]) {
        case '+':
            result = parseInt(complexExpressionUnevalAsArr[bestIndex-1]+complexExpressionUnevalAsArr[bestIndex+1]);
            break;
        case '-':
            result = parseInt(complexExpressionUnevalAsArr[bestIndex-1]-complexExpressionUnevalAsArr[bestIndex+1]);
            break;
        case '/':
            result = parseInt(complexExpressionUnevalAsArr[bestIndex-1]/complexExpressionUnevalAsArr[bestIndex+1]);
            break;
        case '*':
            result = parseInt(complexExpressionUnevalAsArr[bestIndex-1]*complexExpressionUnevalAsArr[bestIndex+1]);
            break;
        default:
            break;
    }
}
