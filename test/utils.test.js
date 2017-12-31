const utils = require('../modules/utils');

const assert = ((res, exp) => {
    if(res !== exp) throw new Error(`Expected ${exp}, but got ${res}!`);
})

//BDD Test - Behavior Driven Development

describe('Util Library Tests', () => {
    it('should add two numbers', () =>{
        const res = utils.add(2, 2);
        const exp = 4;
        assert(res, exp);
    });
    
    it('should multiply two numbers', () => {
        const res = utils.multiply(5, 5);
        const exp = 25;
        assert(res, exp);
    })
});
