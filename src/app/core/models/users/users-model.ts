import { UsersAddressModel } from "./users-address-model";
import { UsersCompanyModel } from "./users-company-model";

export class UsersModel {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UsersAddressModel;
    phone: string;
    website: string;
    company: UsersCompanyModel;
}