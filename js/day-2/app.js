console.log('hey');
function checkBattery(){

}

function add(){

}

function testButton(){
    const firstButtonElement = document.querySelector('.single-item-number');
    console.log(firstButtonElement)
    firstButtonElement.addEventListener('click', ()=>{
        console.log('hey i was clicked !');
    })
}

testButton();