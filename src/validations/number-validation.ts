import { Validation } from "../interfaces/validation";
import { InvalidParamError } from "../utils/errors";

export class NumberValidation implements Validation {
    constructor(
        private readonly fieldName: string,
    ) { }

    validate(input: any): Error | void {

        const value = input[this.fieldName];
        const isNumberRegex = /^[0-9]+$/;
        console.log(NaN + value)
        if (typeof value !== 'string' || !isNumberRegex.test(value)) {
            return new InvalidParamError(this.fieldName);
        }
    }
}
