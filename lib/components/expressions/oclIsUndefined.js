import { Expression } from "./expression";
import { Utils } from "../utils";
import { isNullOrUndefined } from "util";

export class OclIsUndefinedExpression extends Expression {
    constructor(source) {
        super();
        this.source = source;
    }

    evaluate(obj) {
        return isNullOrUndefined(this.source.evaluate(obj))
    }
}
