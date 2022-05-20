import { Order } from "./order";

export class UserForCreationDto { 
    firstName!: string;
    lastName!: string;
    password!: string;
    email!: string;
    phoneNumber!: string;
    address!: string;
    zipcode!: string;
    oders: Order[] = []
    registerDate: string = new Date().toUTCString();
}