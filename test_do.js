const { Do } = require('./jslife');
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