import { Order } from "./order";

export class UserDto {
    id!: string;
    fullName!: string; 
    userName!: string; 
    email!: string; 
    phoneNumber!: string; 
    address!: string; 
    zipcode!: string;
    numberOfOrders!: number;
    oders:Order[] = []
    registerDate!: string;
}