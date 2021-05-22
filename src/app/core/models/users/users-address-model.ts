import { UsersGeoModel } from "./users-geo-model";

export class UsersAddressModel {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UsersGeoModel;
}