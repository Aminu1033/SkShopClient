export class CartItem {
    id!: string;
    quantity: number = 1;
    productId!: string;
    productName!: string;
    productColor!: string;
    productPrice!: number;
    productDiscount!: number;
    productAmountAvailable!: number;
    productImgUrl!: string;
    productIsInstock!: boolean; 
    dateAdded: string = new Date().toUTCString();
}