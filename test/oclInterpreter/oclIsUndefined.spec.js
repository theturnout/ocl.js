'use strict';
import { expect } from "chai";
import { OclParser } from "../../lib/components/parser/oclParser";

require('../../generator/oclParserGenerator');

describe('OCLInterpreter ', () => {
    describe('oclIsUndefined', () => {

        it('js undefined is ocl undefined', () => {
            let oclExpression = `
                context Object
                    inv: self.prop->oclIsUndefined()
            `;
            let oclRule = OclParser.parse(oclExpression);
            let actual = oclRule.evaluate({"prop": undefined });
            expect(actual).to.be.ok;           
        });
        
        it('js null is ocl undefined', () => {
            let oclExpression = `
                context Object
                    inv: self.prop->oclIsUndefined()
            `;
            let oclRule = OclParser.parse(oclExpression);
            let actual = oclRule.evaluate({"prop": null });
            expect(actual).to.be.ok;           
        });

    });
});
