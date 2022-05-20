import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartItem } from '../models/cartItem';
import { Order } from '../models/order';
import { ProductDto } from '../models/ProductDto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public order: Order = new Order();

  constructor(private snackBaar: MatSnackBar) { }

  addToCart(product: ProductDto) {
    let item = this.order.cartItems.find(item => item.productId === product.id);

    if (item) {
      item.quantity++;
    } else {
      item = new CartItem();
      item.productId = product.id;
      item.productName = product.name;
      item.productImgUrl = product.imgUrl;
      item.productPrice = product.price;
      item.quantity = 1;

      this.order.cartItems.push(item);

    }
    let snackBarRef = this.snackBaar.open(`${item.productName} added to the cart`, "Ok",
      {
        duration: 5000, verticalPosition: "top", horizontalPosition: "center",

      }); 

  }

  getSubTotal(): number {
    return this.order.cartItems.reduce((tot, cur) => {
      let result = (tot) + (cur.quantity * cur.productPrice);
      return result;
    }, 0)
  }

  deleteCartItem(id: string) {
    let index = this.order.cartItems.findIndex(item => item.productId === id);
    this.order.cartItems.splice(index, 1);
    console.log("Order : ", this.order);
  }

  clearCart() {
    this.order.cartItems = []
  }
}
