const { memoize } = require('../jslife');
const {assert, expect} = require('chai');
const {spy} = require('sinon');

function makeFib(){
    let fib = (n) => {
        console.log('fib called: ', ++fib.cnt);
        if( n < 1 ){ return NaN; }
        if( n < 3 ){ return 1; }
        return fib(n-2) + fib(n-1);
    };
    fib.cnt = 0;

    return fib;
};

function makeMemoFib(){
    let fib = memoize((n) => {
        console.log('fib called: ', ++fib.cnt);
        if( n < 1 ){ return NaN; }
        if( n < 3 ){ return 1; }
        return fib(n-2) + fib(n-1);
    });
    fib.cnt = 0;

    return fib;
};

describe('test fib', ()=>{
    it("fib get's correct results", ()=>{
        assert.equal(fib(1),1);
        assert.equal(fib(2),1);
        assert.equal(fib(3),2);
        assert.equal(fib(4),3);
        assert.equal(fib(5),5);
        assert.equal(fib(6),8);
    });
});

describe('memoize test', ()=>{
    it('should be a function', ()=>{
        assert.equal(typeof memoize,'function');
    });
    describe('memoize get called correct number of times', ()=>{
        it('spy should be called', ()=>{
            let fibSpy = spy(fib);
            let fibMemoSpy = spy(memoize(fib));
            console.log(fibSpy(7));
            assert.equal(fibSpy.callCount,1);
        });
    });
});