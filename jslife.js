// DO is an arrow Function to do things repatedly do things.
// takes int (an integer of how many times you want to do things)
// and fn ( a function to do each time)
// optional args arguments for the fn
const Do = (int, fn, ...args) => {
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
class HEAP{
    constructor(comparator){
        this._heap = [];
        this.length = 0;
        this._comparator = comparator;
        if(!comparator){ this._comparator = (a,b) => a-b; }
    }

    _getParent(int){
        return Math.floor((int-1)/2);
    }

    _getCorrectChild(int){
        if(this._comparator(this._heap[int*2+1],this._heap[int*2+2]) < 0){
            return int*2+2;
        }
        else{
            return int*2+1;
        }
    }

    _swim(ind){
        var parent = this._getParent(ind);
        while(this._comparator(this._heap[ind],this._heap[parent]) > 0){
            [this._heap[ind],this._heap[parent]]=[this._heap[parent],this._heap[ind]];
            ind = parent;
            parent = this._getParent(ind);
        }

        return ind;
    }

    _sink(ind){
        var child = this._getCorrectChild(ind);
        while(this._comparator(this._heap[ind],this._heap[child]) < 0){
            [this._heap[ind],this._heap[child]]=[this._heap[child],this._heap[ind]];
            ind = child;
            child = this._getCorrectChild(ind);
        }

        return ind;
    }

    push(...val){
        for(let v of val){
            this.length = this._heap.push(v);
            this._swim(this.length-1);
        }
        
        return this.length;
    }

    pop(){
        var val = this._heap[0];
        if(this.length === 0){ return undefined; }
        if(this.length === 1){
            this._heap.pop();
        }
        else{
            this._heap[0] = this._heap.pop();
        }
        this.length = this._heap.length;
        this._sink(0);
        return val;
    }

}

module.exports = { Do, HEAP };