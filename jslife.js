// DO is an arrow Function to do things repatedly do things.
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

// Heap class makes a min/max/prioriety heap
// takes a comparator function
class Heap{
    constructor(comparator){
        this._heap = [];
        this.length = 0;
        this._comparator = comparator;
    }

    _getParent(int){
        return Math.floor((int-1)/2);
    }

    _getCorrectChild(int){
        if(this._comparator(this._heap[int*2+1],this._heap[int*2+2]) > 0){
            return int*2+2;
        }
        else{
            return int*2+1;
        }
    }

}

module.exports = { DO };