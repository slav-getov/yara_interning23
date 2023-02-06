const playerElement = document.querySelector('.player');


playerElement.addEventListener('keydown', (e) => {
    console.log(playerElement.left)
    playerElement.style.left + 10;
});




