import { Injectable } from '@angular/core';
import { CartItem } from '../models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  public cartNumber = new Subject<number>();

  addItemToCart = (addedCartItem: CartItem) => {
    if (this.cart.length) {
      let isDuplicate = false;
      this.cart.forEach((item, index) => {
        if (item.id === addedCartItem.id) {
          isDuplicate = true;
          this.cart[index] = addedCartItem;
        }
      });
      if (!isDuplicate) {
        this.cart.push(addedCartItem);
      }
    } else {
      this.cart.push(addedCartItem);
    }
    this.cartNumber.next(this.cart.length);
  };

  getCartItem = () => {
    return this.cart;
  };

  removeItemFromCart = (id: number) => {
    this.cart.forEach((item, index) => {
      if (item.id === id) {
        this.cart.splice(index, 1);
      }
    });
    this.cartNumber.next(this.cart.length);
  };

  resetCart = () => {
    this.cartNumber.next(0);
    this.cart = [];
  };
}
