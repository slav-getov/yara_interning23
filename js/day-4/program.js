function upperCaser(input) {
    return input.toUpperCase();
}

function repeat(fnToRepeat, num) {
    if (num === 0) {
        return;
    }
    fnToRepeat();
    repeat(fnToRepeat, --num);
}

function repeat(operation, num) {
    // modify this so it can be interrupted
    // if (num <= 0) return
    // operation()
    // return repeat(operation, --num)
}

function printString() {
    console.log('hey');
}

function doubleAll(numbers) {
    let arr = numbers.slice();
    return arr.map((item) => item * 2);
}

function getShortMessage(objsArr) {
    let arrOfObjs = objsArr.slice();
    return arrOfObjs.map((singleObj) => singleObj.message).filter((singleMessage) => singleMessage.length < 50);
}

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        let goodCopyUsers = goodUsers.slice();
        let potentials = submittedUsers.slice();
        console.log(goodCopyUsers, potentials);
        return potentials.every((obj) => goodCopyUsers.includes(obj.id)) ? true : false;
    };
}

// var goodUsers = [
//     { id: 1 },
//     { id: 2 },
//     { id: 3 }
//   ]

//   // `checkUsersValid` is the function you'll define
//   var testAllValid = checkUsersValid(goodUsers)

//   console.log(testAllValid([
//     { id: 2 },
//     { id: 1 }
//   ]))
//   // => true

//   console.log(testAllValid([
//     { id: 2 },
//     { id: 4 },
//     { id: 1 }
//   ]))

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every((goodUser) => goodUsers.some((submittedUser) => goodUser.id === submittedUser.id));
    };
}

function countWords(stringsAsArr) {
    let stringsAsArrCopy = stringsAsArr.slice();
    return stringsAsArrCopy.reduce((acc, currItem) => {
        let currCount = acc.hasOwnProperty(currItem) ? acc[currItem] : 0;
        console.log(currCount);
        return {
            ...acc,
            [currItem]: currCount + 1
        };
    }, {});
}

function duckCount(...args) {
    return [...args.filter((obj) => Object.prototype.hasOwnProperty.call(obj, 'quack'))].length;
}

function logger(namespace) {
    return function append() {};
}

function map(arr, fn) {
    // let result = copyArr.reduce((acc,currValue)=>{
    //     let initialResult = fn(currValue)
    //     acc.push(initialResult)
    //     return acc
    // }, [])
    // return result
}

function repeat(operation, num) {
    return function () {
        if (num <= 0) return;
        operation();
        return repeat(operation, --num);
    };
}

function trampoline(fn) {
    while (fn && typeof fn === 'function') {
        fn = fn();
    }
}

function curryN(fn, n) {}

function Spy(target, method) {
    //lets have a reference 
    const originalFunction = target[method]
    const invocations = {
        count: 0
    }

    target[method] = function() {
        invocations.count++
        return originalFunction.apply(this, arguments)
    }

    return invocations

}

module.exports = function (operation, num) {
    // You probably want to call your trampoline here!
    trampoline(function () {
        return repeat(operation, num);
    });
};

//map([1,2,3,4], add)
// var notDuck = Object.create({quack: true})
// var duck = {quack: true}
// console.log(duckCount(duck, notDuck)) // 1
module.exports = upperCaser;
module.exports = repeat;
module.exports = doubleAll;
module.exports = getShortMessage;
module.exports = checkUsersValid;
module.exports = countWords;
module.exports = duckCount;
module.exports = logger;
module.exports = map;
module.exports = curryN;
module.exports = Spy;
