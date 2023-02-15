const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filtered = numbers.filter(singleNumber=>typeof singleNumber == 'number' && singleNumber % 2 == 0)
console.log(filtered)