import { Expression } from "../expression";

export class ToLowerExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    evaluate(obj) {
        const value = this.value.evaluate(obj);       
        console.log(value); 
        return value.toLowerCase();
    }
}