const { HEAP } = require('./jslife');
const assert = require('assert');

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
        it('can pop ints', ()=>{
            let heap = new HEAP();
            heap.push(4,2,3,7,1);
            assert.equal(heap.pop(), 1);
            assert.equal(heap.length, 4);
            assert.equal(heap.pop(), 2);
            assert.equal(heap.length, 3);
            assert.equal(heap.pop(), 3);
            assert.equal(heap.length, 2);
            assert.equal(heap.pop(), 4);
            assert.equal(heap.length, 1);
            assert.equal(heap.pop(), 7);
            assert.equal(heap.length, 0);
        });
        it('can pop strings', ()=>{
            let heap = new HEAP();
            heap.push("ba","aa","zz","ab",);
            assert.equal(heap.pop(), "aa");
            assert.equal(heap.length, 3);
            assert.equal(heap.pop(), "ab");
            assert.equal(heap.length, 2);
            assert.equal(heap.pop(), "ba");
            assert.equal(heap.length, 1);
            assert.equal(heap.pop(), "zz");
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
        it('can peek', ()=>{
            let heap = new HEAP();
            heap.push("ba","aa","zz","ab",);
            assert.equal(heap.peek(), "aa");
            assert.equal(heap.length, 4);
            assert.equal(heap.peek(), "aa");
            assert.equal(heap.length, 4);
            assert.equal(heap.pop(), "aa");
            assert.equal(heap.length, 3);
            assert.equal(heap.peek(), "ab");
            assert.equal(heap.length, 3);
        });
        it('undefined comparator should be a function',()=>{
            let heap = new HEAP();
            assert.equal(typeof heap._comparator, 'function');
        });
        it('comparator should be a function',()=>{
            let heap = new HEAP((a,b)=> a-b);
            assert.equal(typeof heap._comparator, 'function');
        });
        it('non function comparators should throw error', ()=>{
            assert.throws(()=>{
                let heap = new HEAP({test:7});
            },TypeError);
            assert.throws(()=>{
                let heap = new HEAP(7);
            },TypeError);
        });
        it('should work with custom comarators', ()=>{
            let heap = new HEAP((a,b)=> b-a);
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
    });
});