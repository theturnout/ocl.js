import { MathExpression } from "./mathExpression";

export class AdditionExpression extends MathExpression {
    evaluate(obj, variables) {
        const e = super.evaluate(obj, variables);
        return e.left + e.right;
    }
}