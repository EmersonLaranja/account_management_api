import { Router } from "express";
import { expressRouteAdapter } from "../adapters/express-route-adapter";
import { addAccountControllerFactory } from "../factories/account/add-account-controller-factory";
import { getAccountBalanceControllerFactory } from "../factories/account/get-account-balance-controller-factory";

export default (router: Router): void => {
    router.post(
        "/accounts",
        expressRouteAdapter(addAccountControllerFactory())
    );





};