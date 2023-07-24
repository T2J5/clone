const expect = require('expect.js');
const clone = require('../src/index.js').clone;

describe('function clone', () => {
  describe('param source', () => {
    it('正确的测试用例', () => {
      // 基础数据类型
      expect(clone('abc')).to.equal('abc');

      // 数组
      const arr = [1, [2]];
      const cloneArr = clone(arr);
      expect(cloneArr).not.to.equal(arr);
      expect(cloneArr).to.eql(arr);

      // 对象
      const obj = { a: { b: 1 } };
      const cloneObj = clone(obj);
      expect(cloneObj).to.eql(obj);
      expect(cloneObj).not.to.equal(obj);
    })

    it('边界值测试用例', () => {
      expect(clone()).to.equal(undefined);

      expect(clone(undefined)).to.equal(undefined);

      expect(clone(null)).to.equal(null);

    })
  })
})