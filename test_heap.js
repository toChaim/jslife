const { Heap } = require('./jslife');
const {assert, expect} = require('chai');

describe('Heap test', ()=>{
    describe('should be a class',()=>{
        it('should be a function', ()=>{
            assert.equal(typeof Heap,'function');
         });
         it('toString should start with "class "', ()=> {
            assert.equal(Heap.toString().substring(0,6), 'class ');
         });
    });
    describe('should return correct values', ()=>{
        it('can creat new heap', ()=>{
            let heap = new Heap();
            assert.equal(heap instanceof Heap, true);
        });
        it('heap should have a length that returns an int',()=>{
            let heap = new Heap();
            assert.equal(heap.length,0);
            assert.equal(Number.isInteger(heap.length), true);
        });
        it('push should be a function',()=>{
            let heap = new Heap();
            assert.equal(typeof heap.push, 'function');
        });
        it('can push items', ()=>{
            let heap = new Heap();
            assert.equal(heap.push(4), 1);
            assert.equal(heap.push(2,3,7,1), 5);
        });
        it('pop should be a function',()=>{
            let heap = new Heap();
            assert.equal(typeof heap.pop, 'function');
        });
        it('can pop ints', ()=>{
            let heap = new Heap();
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
            let heap = new Heap();
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
            let heap = new Heap();
            assert.equal(heap.pop(), undefined);
            assert.equal(heap.length, 0);
        });
        it('peek should be a function',()=>{
            let heap = new Heap();
            assert.equal(typeof heap.peek, 'function');
        });
        it('can peek', ()=>{
            let heap = new Heap();
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
            let heap = new Heap();
            assert.equal(typeof heap._comparator, 'function');
        });
        it('comparator should be a function',()=>{
            let heap = new Heap((a,b)=> a-b);
            assert.equal(typeof heap._comparator, 'function');
        });
        it('non function comparators should throw error', ()=>{
            assert.throws(()=>{
                let heap = new Heap({test:7});
            },TypeError);
            assert.throws(()=>{
                let heap = new Heap(7);
            },TypeError);
        });
        it('should work with custom comparators', ()=>{
            let heap = new Heap((a,b)=> b-a);
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
        it('should work on objects', ()=>{
            let heap = new Heap((a,b) => b.x - a.x );
            heap.push({x: 6},{x: 1},{x: 2},{x: 4},{x: 3},{x: 5});
            expect(heap.pop()).to.deep.equal({x:6});
            assert.equal(heap.length, 5);
            expect(heap.pop()).to.deep.equal({x:5});
            assert.equal(heap.length, 4);
            expect(heap.pop()).to.deep.equal({x:4});
            assert.equal(heap.length, 3);
            expect(heap.pop()).to.deep.equal({x:3});
            assert.equal(heap.length, 2);
            expect(heap.pop()).to.deep.equal({x:2});
            assert.equal(heap.length, 1);
            expect(heap.pop()).to.deep.equal({x:1});
            assert.equal(heap.length, 0);
        });
    });
});