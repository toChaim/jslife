const { Do, HEAP } = require('./jslife');
const assert = require('assert');

describe('Do tests', ()=>{
    it('should be a function', ()=>{
       assert.equal(typeof Do,'function'); 
    });
    describe('should not run for bad input', ()=>{
        it('return false for no input',()=>{
            assert.equal(Do(),false);
        });
        it('return false for no 0',()=>{
            let cnt = 0;
            assert.equal(Do(0,()=>{
                return cnt++;
            }),false);
            assert.equal(cnt, 0);
        });
        it('return false for no -5',()=>{
            let cnt = 0;
            assert.equal(Do(-5,()=>{
                return cnt++;
            }),false);
            assert.equal(cnt, 0);
        });
        it('return false for without a function',()=>{
            let cnt = 0;
            assert.equal(Do(9,{fn:(c)=>{
                return cnt++;
            }}),false);
            assert.equal(cnt, 0);
        });
    });
    describe('should run correct number of times for happy path', ()=>{
        it('return true and run nine times for 9',()=>{
            let cnt = 0;
            assert.equal(Do(9,()=>{
                return cnt++;
            }, cnt),true);
            assert.equal(cnt, 9);
        });
        it('return true and run 99 times for 99',()=>{
            let cnt = 0;
            assert.equal(Do(99,()=>{
                return cnt++;
            }, cnt),true);
            assert.equal(cnt, 99);
        });
        it('return true and run 79 times for "79"',()=>{
            let cnt = 0;
            assert.equal(Do("79",()=>{
                return cnt++;
            }, cnt),true);
            assert.equal(cnt, 79);
        });
    });
});

describe('HEAP test', ()=>{
    describe('should be a class',()=>{
        it('should be a function', ()=>{
            assert.equal(typeof HEAP,'function');
         });
         it('toString should start with "class "', ()=> {
            assert.equal(HEAP.toString().substring(0,6), 'class ');
         });
    });
    describe('should return correct values', ()=>{
        it('can creat new heap', ()=>{
            let heap = new HEAP();
            assert.equal(heap instanceof HEAP, true);
        });
        it('heap should have a length that returns an int',()=>{
            let heap = new HEAP();
            assert.equal(heap.length,0);
            assert.equal(Number.isInteger(heap.length), true);
        });
        it('push should be a function',()=>{
            let heap = new HEAP();
            assert.equal(typeof heap.push, 'function');
        });
        it('can push items', ()=>{
            let heap = new HEAP();
            assert.equal(heap.push(4), 1);
            assert.equal(heap.push(2,3,7,1), 5);
        });
        it('pop should be a function',()=>{
            let heap = new HEAP();
            assert.equal(typeof heap.pop, 'function');
        });
        it('can pop items', ()=>{
            let heap = new HEAP();
            heap.push(4,2,3,7,1);
            assert.equal(heap.pop(), 7);
            assert.equal(heap.length, 4);
            assert.equal(heap.pop(), 4);
            assert.equal(heap.length, 3);
            assert.equal(heap.pop(), 3);
            assert.equal(heap.length, 2);
            assert.equal(heap.pop(), 2);
            assert.equal(heap.length, 1);
            assert.equal(heap.pop(), 1);
            assert.equal(heap.length, 0);
        });
        it('pop returns undefined', ()=>{
            let heap = new HEAP();
            assert.equal(heap.pop(), undefined);
            assert.equal(heap.length, 0);
        });
        it('peek should be a function',()=>{
            let heap = new HEAP();
            assert.equal(typeof heap.peek, 'function');
        });
    });
});