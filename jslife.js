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
class Heap{
    constructor(comparator){
        if(typeof comparator !== 'function' && comparator !== undefined){
            throw new TypeError('The comparison function must be either a function or undefined', "jslife.js", 23); 
        }
        this._heap = [];
        this.length = 0;
        if(comparator === undefined){ 
            comparator = (a,b) => {
                if(a < b){ return -1; }
                if(b < a){ return 1; }
                return 0;
            };
        }
        this._comparator = (a,b) => {
            if(a === undefined || b === undefined){
                return 0;
            }
            return comparator(a,b);
        }
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

    _swim(ind){
        var parent = this._getParent(ind);
        while(this._comparator(this._heap[ind],this._heap[parent]) < 0){
            [this._heap[ind],this._heap[parent]]=[this._heap[parent],this._heap[ind]];
            ind = parent;
            parent = this._getParent(ind);
        }

        return ind;
    }

    _sink(ind){
        var child = this._getCorrectChild(ind);
        while(this._comparator(this._heap[ind],this._heap[child]) > 0){
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

    peek(){
        return this._heap[0];
    }
}

class TrieNode{
    constructor(val, parent = null){
        this.parent = parent;
        this.next = {};
        this.value = val;
    }
}

class Trie{
    // takes function that takes a value or object and integer 
    // it should return a string that will be the key for the next node.
    // it must output undefined for end of sequence
    constructor(stringAt){
        if(stringAt === undefined){ stringAt = (val, int)=> val[int];}
        if(typeof stringAt !== 'function'){ 
            throw new TypeError('The stringAt function must be either a function or undefined', "jslife.js", 120);
        }
        this._stringAt = stringAt;
        this._root = new TrieNode(null,null);
        this.length = 0;
    }

    push(val){
        var node = this._root;
        var index = 0;
        
        // add sequence
        while(this._stringAt(val,index + 1) !== undefined){
            if( node.next[this._stringAt(val,index)] === undefined ){
                node.next[this._stringAt(val,index)] = new TrieNode(null,node);
            }
            node = node.next[this._stringAt(val,index)];
            index++;
        }
        // add terminal node
        node.value = val;

        return ++this.length;
    }
}

module.exports = { Do, Heap, Trie };