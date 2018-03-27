const { times } = require('../jslife');
const assert = require('assert');

describe('times tests', ()=>{
    it('should be a function', ()=>{
       assert.equal(typeof times,'function'); 
    });
    describe('should not run for bad input', ()=>{
        it('return false for no input',()=>{
            assert.equal(times(),false);
        });
        it('return false for no 0',()=>{
            let cnt = 0;
            assert.equal(times(0,()=>{
                return cnt++;
            }),false);
            assert.equal(cnt, 0);
        });
        it('return false for no -5',()=>{
            let cnt = 0;
            assert.equal(times(-5,()=>{
                return cnt++;
            }),false);
            assert.equal(cnt, 0);
        });
        it('return false for without a function',()=>{
            let cnt = 0;
            assert.equal(times(9,{fn:(c)=>{
                return cnt++;
            }}),false);
            assert.equal(cnt, 0);
        });
    });
    describe('should run correct number of times for happy path', ()=>{
        it('return true and run nine times for 9',()=>{
            let cnt = 0;
            assert.equal(times(9,()=>{
                return cnt++;
            }, cnt),true);
            assert.equal(cnt, 9);
        });
        it('return true and run 99 times for 99',()=>{
            let cnt = 0;
            assert.equal(times(99,()=>{
                return cnt++;
            }, cnt),true);
            assert.equal(cnt, 99);
        });
        it('return true and run 79 times for "79"',()=>{
            let cnt = 0;
            assert.equal(times("79",()=>{
                return cnt++;
            }, cnt),true);
            assert.equal(cnt, 79);
        });
    });
});