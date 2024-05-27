import { Account } from "../models/account";

export interface IAccountRepository {
    createAccount(account: Account): Promise<Account>;
    getAccount(accountNumber: string): Promise<Account | null>;
    updateAccountBalance(accountNumber: string, balance: number): Promise<void>;
}