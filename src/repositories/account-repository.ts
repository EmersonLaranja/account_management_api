import { IAccountRepository } from './interfaces/interface-account-repository';
import { Account } from '../models/account';
import { AppDataSource } from "../database/data-source";
import { Deposit } from '../models/deposit';
import { NotFoundError } from '../utils/errors/not-found-error';


export class AccountRepository implements IAccountRepository {
    private readonly accountRepository = AppDataSource.getRepository(Account);
    private readonly depositRepository = AppDataSource.getRepository(Deposit);


    async createAccount(account: Account): Promise<Account> {
        return await this.accountRepository.save(account);
    }

    async getAccount(accountNumber: string): Promise<Account | null> {
        return await this.accountRepository.findOne({ where: { account_number: accountNumber } });
    }
    async depositIntoAccount(accountNumber: string, amount: number): Promise<void> {
        const account = await this.getAccount(accountNumber);
        if (!account) {
            throw new NotFoundError('Account');
        }

        const deposit = new Deposit();
        deposit.amount = Number(amount);
        deposit.account = account;

        await this.depositRepository.save(deposit);

        account.balance += Number(amount);

        await this.accountRepository.save(account);
    }
}
