'use strict';
const should = require('should');

require('../../generator/oclParserGenerator');
import {OclParser} from "../../lib/components/parser/oclParser";

describe('String', () => {
    it('should concat two strings.', () => {
        const oclExpression = `
            context Object inv:
                "a"->concat("b") = "ab"
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should convert string to UPPERCASE.', () => {
        const oclExpression = `
            context Object inv:
                "aBBa"->toUpper() = "ABBA"
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should convert string to _lowercase_.', () => {
        const oclExpression = `
            context Object inv:
                "aBBa"->toLower() = "abba"
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should parse string into integer.', () => {
        const oclExpression = `
            context Object inv:
                "15"->toInteger() = 15
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    it('should parse string into real.', () => {
        const oclExpression = `
            context Object inv:
                "15.1"->toReal() = 15.1
       `;

        const oclRule = OclParser.parse(oclExpression);
        let actual = oclRule.evaluate();
        actual.should.be.true();
    });
    // it('should convert string to substring.', () => {
    //     const oclExpression = `
    //         context Object inv:
    //             "substring operation"->substring(11, 19)
    //    `;

    //     const oclRule = OclParser.parse(oclExpression);
    //     let actual = oclRule.evaluate();
    //     actual.should.be.true();
    // });
    // it('should convert string to substring upper bound inclusive.', () => {
    //     const oclExpression = `
    //         context Object inv:
    //             "substring operation"->substring(1, 1)  
    //    `;

    //     const oclRule = OclParser.parse(oclExpression);
    //     let actual = oclRule.evaluate();
    //     actual.should.be.true();
    // });
});