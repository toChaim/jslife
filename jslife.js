// Arrow Function to do things repatedly do things.
// takes int (an integer of how many times you want to do things)
// and fn ( a function to do each time)
// optional args arguments for the fn
const DO = (int, fn, ...args) => {
    if(!Number.isInteger(Number(int)) 
        || typeof fn !== 'function'
        || int <= 0
    ){
        return false;
    }
    for(let rep = 0; rep < int; rep++){
        fn(...args);
    }
    return true;
}

module.exports = { DO };