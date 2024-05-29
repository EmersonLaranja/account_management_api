import { DepositIntoAccountController } from "../../controllers/deposit/deposit-into-account-controller";
import { LogErrorControllerDecorator } from "../../decorators/log-error";
import { AccountRepository } from "../../repositories/account-repository";
import LogErrorRepository from "../../repositories/log-error-repository";
import { depositIntoAccountValidationFactory } from "./deposit-into-account-validation-factory";

export const depositIntoAccountControllerFactory = () => {
    const depositIntoAccountController = new DepositIntoAccountController(
        new AccountRepository(),
        depositIntoAccountValidationFactory()
    );

    return new LogErrorControllerDecorator(
        depositIntoAccountController,
        new LogErrorRepository()
    );
};
