import { Expression } from "../expression";

export class SubstringExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    evaluate(obj) {
        const value = this.value.evaluate(obj);
        const body = this.body.evaluate(obj);
        return value.concat(body).substring(body, body);;
    }
}
