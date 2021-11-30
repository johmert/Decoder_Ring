const { expect } = require("chai");
const { substitution } = require("../src/substitution");

// substitution(input, alphabet, encode = true)

describe("substitution", () => {
    it("should return false if given an alphabet that isn't exactly 26 letters", () => {
        const input = "test input";
        const alphabet = "short";
        const actual = substitution(input, alphabet);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should correctly translate a given phrase, based on the alphabet given", () => {
        const input = "y&ii$r&";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const actual = substitution(input, alphabet, false);
        const expected = "message";
        expect(actual).to.be.a('string');
        expect(actual).to.equal(expected);
    });

    it("should return false if there are duplicate letters in given alphabet", () => {
        const input = "test input";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(input, alphabet);
        const expected = false;
        expect(actual).to.be.a('boolean');
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const input = "Test Input";
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution(input, alphabet);
        const expected = "gvhg rmkfg";
        expect(actual).to.be.a('string');
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces of original input", () => {
        const input = "test input"
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const actual = substitution(input, alphabet);
        const expected = "gvhg rmkfg";
        expect(actual).to.be.a('string');
        expect(actual).to.equal(expected);
    });
});