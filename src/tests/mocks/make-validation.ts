import { Validation } from "../../interfaces/validation";

export const makeValidation = (): Validation => {
    class ValidationStub implements Validation {
        validate(input: any): Error {
            return null as any;
        }
    }
    return new ValidationStub();
};
