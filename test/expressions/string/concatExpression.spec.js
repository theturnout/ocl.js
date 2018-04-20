import {expect} from "chai";
import {ConcatExpression} from "../../../lib/components/expressions/string/concatExpression";

describe('ConcatExpression', () => {
    it('should evaluate string.', () => {
        const ne = new ConcatExpression("jim");
        expect(ne.evaluate("bob")).to.equal("jimbob");
    });

});