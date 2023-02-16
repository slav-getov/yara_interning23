function upperCaser(input){
    return input.toUpperCase()
}

function repeat(fnToRepeat, num){
    if(num === 0){
        return
    }
    fnToRepeat()
    repeat(fnToRepeat, --num)
}
function printString(){
	console.log('hey')
    
}


module.exports = upperCaser
module.exports = repeat