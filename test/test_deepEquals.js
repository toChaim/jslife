const { deepEquals } = require('../jslife');
const assert = require('assert');

describe('test deepEquals', ()=>{
    it('should be a function', ()=>{
        assert.equal(typeof deepEquals,'function');
    });

    describe('should return correct values', ()=>{
        it('works on numbers', ()=>{
            assert.equal(deepEquals(1,2),false);
            assert.equal(deepEquals(12,12),true);
        });
        it('works on strings', ()=>{
            assert.equal(deepEquals("a","a"),true);
            assert.equal(deepEquals("a","bb"),false);
        });
        it('works on mix of strings and numbers', ()=>{
            assert.equal(deepEquals("1",1),false);
            assert.equal(deepEquals(100,"100"),false);
        });
        it('works on objects', ()=>{
            assert.equal(deepEquals({x:1, b:"string"},{x:1, b:"string"}),true);
            assert.equal(deepEquals({x:1, b:"string", c:()=>7},{x:1, b:"string", c:7}),false);
            assert.equal(deepEquals({x:1, b:"string", c:()=>7},{x:1, b:"string"}),false);
            assert.equal(deepEquals([1,"string",7],{0:1, 1:"string", 2:7}),false);
        });
    });
});