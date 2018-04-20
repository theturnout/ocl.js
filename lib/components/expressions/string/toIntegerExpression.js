import { Expression } from "../expression";

export class ToIntegerExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    evaluate(obj) {
        const value = this.value.evaluate(obj);
        return Number.parseInt(value);
    }
}