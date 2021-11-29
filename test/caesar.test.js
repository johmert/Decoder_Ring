const { expect } = require("chai");
const { caesar } = require("../src/caesar");

// caesar(input, shift, encode = true)

describe("caesar", () => {
    it("should return false if shift value is equal to 0", () => {
        const input = "test input";
        const actual = caesar(input, 0);
        const expected = false;
        expect(actual).to.be.a('boolean');
        expect(actual).to.equal(expected);
    });
    it("should return false if shift value is less than -25", () => {
        const input = "test input";
        const actual = caesar(input, -30);
        const expected = false;
        expect(actual).to.be.a('boolean');
        expect(actual).to.equal(expected);
    });
    it("should return false if shift value is greater than 25", () => {
        const input = "test input";
        const actual = caesar(input, 30);
        const expected = false;
        expect(actual).to.be.a('boolean');
        expect(actual).to.equal(expected);
    });
    it("should return false if shift value is not present", () => {
        const input = "test input";
        const actual = caesar(input);
        const expected = false;
        expect(actual).to.be.a('boolean');
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters (results of 'A Message' should equal results of 'a message')", () => {
        const input1 = "test input";
        const input2 = "Test Input"
        const actual1 = caesar(input1, 5);
        const actual2 = caesar(input2, 5);
        const expected = "yjxy nzuzy"
        expect(actual1).to.be.a('string');
        expect(actual2).to.be.a('string');
        expect(actual1).to.equal(expected);
        expect(actual2).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet (z -> a)", () => {
        const input = "zebra magazine";
        const actual = caesar(input, 3);
        const expected = "cheud pdjdclqh";
        expect(actual).to.be.a('string');
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other non-alphabetic symbols in the message before and after encoding", () => {
        const input = "test input!"
        const actual = caesar(input, 5);
        const expected = "yjxy nzuzy!";
        expect(actual).to.be.a('string');
        expect(actual).to.equal(expected);
    });
});