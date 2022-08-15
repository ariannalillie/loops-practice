const assert = require("assert");
const chai = require("chai");
const { logBetween, printFives, logBetweenStepper } = require("../problems");
const expect = chai.expect;

describe("Problems", () => {
  describe("logBetween(lowNum, highNum)", () => {
    it("should return a new array with every number from lowNum to highNum", () => {
      expect(logBetween(2, 6)).to.eql([2, 3, 4, 5, 6]);
      expect(logBetween(5, 10)).to.eql([5, 6, 7, 8, 9, 10]);
    });
  });
});
