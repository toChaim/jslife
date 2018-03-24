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
});