const calculatorDisplayFieldElement = document.querySelector('.calculator-display');
calculatorDisplayFieldElement.value = '0';


//this line tests that the initial display value can be removed
calculatorDisplayFieldElement.value = '';

//attach an event listener to all buttons
Array.from(document.querySelectorAll('.single-item-number')).forEach(itemSelected => {
    itemSelected.addEventListener('click', (e)=> {
        //trim is necessary since format of prettier adds whitespace before and after
        console.log(e.target.innerText)
        
        calculatorDisplayFieldElement.value += itemSelected.textContent.trim();
    })
})

