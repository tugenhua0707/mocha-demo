var reduce = require('../src/reduce.js');
var expect = require('chai').expect;

describe('减法函数的测试', function() {
  it('2 减 1 应该等于 1', function() {
    expect(reduce(2, 1)).to.be.equal(1);
  });
});