import { Expression } from "../expression";

export class ToUpperExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    evaluate(obj) {
        const value = this.value.evaluate(obj);       
        return value.toUpperCase();
    }
}
