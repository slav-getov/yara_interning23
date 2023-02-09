const calculatorDisplayFieldElement = document.querySelector('.calculator-display');
calculatorDisplayFieldElement.value = '0';

let lastOperationResultMemory = '';
//this line tests that the initial display value can be removed
calculatorDisplayFieldElement.value = '';

//attach an event listener to all buttons
Array.from(document.querySelectorAll('.single-item-number')).forEach(itemSelected => {
    itemSelected.addEventListener('click', (e)=> {
        //trim is necessary since format of prettier adds whitespace before and after

        if(e.target.innerText == 'C'){
            lastOperationResultMemory += calculatorDisplayFieldElement.value;
            calculatorDisplayFieldElement.value = lastOperationResultMemory;
        }else if(e.target.innerText == 'AC'){
            lastOperationResultMemory = '';
            calculatorDisplayFieldElement.value = '0'
        }else{
            calculatorDisplayFieldElement.value += e.target.innerText;
        }
       
        console.log(`value is '${lastOperationResultMemory}'`)
        //calculatorDisplayFieldElement.value += itemSelected.textContent.trim();
    })
})

