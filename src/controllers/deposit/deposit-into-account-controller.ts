import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { IAccountRepository } from "../../repositories/interfaces/interface-account-repository";
import { badRequest, notFound, ok, serverError } from "../../utils/httpResponses/http-responses";

export class DepositIntoAccountController implements Controller {
    constructor(
        private readonly accountRepository: IAccountRepository,
        private readonly validation: Validation
    ) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {

            const combinedRequest = {
                ...httpRequest.params,
                ...httpRequest.body
            };
            const error = this.validation.validate(combinedRequest);

            if (error) {
                console.log(error)
                return badRequest(error);
            }

            const { amount } = httpRequest.body;
            const { account_number } = httpRequest.params;

            const accountExists = await this.accountRepository.getAccount(account_number)
            if (!accountExists) {
                return notFound("Account")
            }


            const deposit = await this.accountRepository.depositIntoAccount(account_number, amount);


            return ok(deposit);
        } catch (error) {
            return serverError(error);
        }
    }
}
