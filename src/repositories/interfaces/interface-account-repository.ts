import { Account } from "../../models/account";

export interface IAccountRepository {
    createAccount(account: Pick<Account, "account_number">): Promise<Account>;
    getAccount(accountNumber: string): Promise<Account | null>;
    depositIntoAccount(accountNumber: string, amount: number): Promise<void>;

}