import { Expression } from "../expression";

export class AbsExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    evaluate(obj) {
        const value = this.value.evaluate(obj);
        return Math.abs(value);
    }
}