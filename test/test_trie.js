const { Trie } = require('../jslife');
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

    describe('add methode', ()=>{
        it('should be a function', ()=>{
            let trie = new Trie();
            assert.equal(typeof trie.add,'function');
        });
        it('should add single words', ()=>{
            let trie = new Trie();
            assert.equal( trie.add("string"), 1);
            assert.equal( trie.add("more"), 2);
            assert.equal( trie.add("and"), 3);
        });
        it('should not add same word twice', ()=>{
            let trie = new Trie();
            assert.equal( trie.add("one"), 1);
            assert.equal( trie.add("one"), 1);
            assert.equal( trie.add("two"), 2);
            assert.equal( trie.add("two"), 2);
            assert.equal( trie.add("one"), 2);
            assert.equal( trie.add('three'), 3);
        });
        it('should add multiple words', ()=>{
            let trie = new Trie();
            assert.equal( trie.add('new','word','are','added','now','are'), 5);
        });
    });
});