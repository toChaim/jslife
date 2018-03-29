const { runTimer } = require('../jslife');
const {assert, expect} = require('chai');

describe('runTimer test', ()=>{
    it('should be a function', ()=>{
        assert.equal(typeof runTimer,'function');
    });
    it('should return the a number', ()=>{
        assert.equal(typeof runTimer(console.log, "hello"),'number');
    });
});