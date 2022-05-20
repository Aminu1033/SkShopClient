import { CartItem } from "./cartItem";

export class Order {
    id!: string;  
    orderNumber  =  Math.floor(Math.random()*10000); // integer between 0 and 9999    
    cartItems: CartItem[]  = []; 
    orderDate  = new Date().toUTCString();
}