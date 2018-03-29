const { memoize } = require('../jslife');
const {assert, expect} = require('chai');

describe('memoize test', ()=>{
    it('should be a function', ()=>{
        assert.equal(typeof memoize,'function');
    });
});