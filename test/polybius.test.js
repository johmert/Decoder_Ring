const { expect } = require("chai");
const { polybius } = require("../src/polybius");

// polybius(input, encode = true)

describe("polybius", () => {
    it("should translate i and j to 42 while encoding", () => {
        const input = "jessica";
        const actual = polybius(input);
        const expected = "42513434423111";
        expect(actual).to.be.a('string');
        expect(actual).to.equal(expected);
    });

    it("should translate 42 to (i/j) when decoding", () => {
        const input = "42513434423111";
        const actual = polybius(input);
        const expected = "(i/j)ess(i/j)ca";
        expect(actual).to.be.a('string');
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters (results of 'A Message' should equal results of 'a message')", () => {
        const input1 = "test input";
        const input2 = "Test Input";
        const actual1 = polybius(input1);
        const actual2 = polybius(input2);
        const expected = "44513444 4233535444";
        expect(actual1).to.be.a('string');
        expect(actual2).to.be.a('string');
        expect(actual1).to.equal(expected);
        expect(actual2).to.equal(expected);
    });

    it("should maintain spaces before and after encoding and decoding", () => {
        const input = "test input";
        const actual = polybius(input);
        const expected = "44513444 4233535444";
        expect(actual).to.be.a('string');
        expect(actual).to.equal(expected);
    });
});