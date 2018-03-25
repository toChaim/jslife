const { TRIE } = require('./jslife');
const assert = require('assert');

describe('TRIE test', ()=>{
    describe('should be a class',()=>{
        it('should be a function', ()=>{
            assert.equal(typeof TRIE,'function');
         });
         it('toString should start with "class "', ()=> {
            assert.equal(TRIE.toString().substring(0,6), 'class ');
         });
    });

    describe('should throw error with wrong input', ()=>{
        it('object',()=>{
            assert.throws(()=>{
                let heap = new TRIE({x:99});
            }, TypeError);
        });
        it('an int',()=>{
            assert.throws(()=>{
                let heap = new TRIE(99);
            }, TypeError);
        });
        it('a string',()=>{
            let heap = new TRIE('ninety nine');
        });
        it('null',()=>{
            assert.throws(()=>{
                let heap = new TRIE(null);
            }, TypeError);
        });
        it('undefined',()=>{
            assert.throws(()=>{
                let heap = new TRIE(undefined);
            }, TypeError);
        });
    });
});