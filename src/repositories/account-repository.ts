import { IAccountRepository } from './interface-account-repository';
import { Account } from '../models/account';
import { AppDataSource } from "../database/data-source";


export class AccountRepository implements IAccountRepository {
    private readonly accountRepository = AppDataSource.getRepository(Account);



    async createAccount(account: Account): Promise<Account> {
        return await this.accountRepository.save(account);
    }

    async getAccount(accountNumber: string): Promise<Account | null> {
        return await this.accountRepository.findOne({ where: { account_number: accountNumber } });
    }

    async updateAccountBalance(accountNumber: string, balance: number): Promise<void> {
        const account = await this.getAccount(accountNumber);
        if (account) {
            account.balance = balance;
            await this.accountRepository.save(account);
        }
    }
}
