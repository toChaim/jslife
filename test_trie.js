const { Trie } = require('./jslife');
const assert = require('assert');

describe('Trie test', ()=>{
    describe('should be a class',()=>{
        it('should be a function', ()=>{
            assert.equal(typeof Trie,'function');
         });
         it('toString should start with "class "', ()=> {
            assert.equal(Trie.toString().substring(0,6), 'class ');
         });
    });

    describe('should throw error with wrong input', ()=>{
        it('object',()=>{
            assert.throws(()=>{
                let heap = new Trie({x:99});
            }, TypeError);
        });
        it('an int',()=>{
            assert.throws(()=>{
                let heap = new Trie(99);
            }, TypeError);
        });
        it('a string',()=>{
            assert.throws(()=>{
                let heap = new Trie('ninety nine');
            },TypeError);
        });
        it('null',()=>{
            assert.throws(()=>{
                let heap = new Trie(null);
            }, TypeError);
        });
    });
});