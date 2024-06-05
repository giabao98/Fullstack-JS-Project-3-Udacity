import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/models';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { NAVIGATES } from 'src/app/utils/constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  storeSubscription!: Subscription;
  cartItems: CartItem[] = [];
  total: number = 0;
  creditCartNumber: string = '';

  cartForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isClickSubmit: boolean = false;

  get fullName() {
    return this.cartForm.get('fullName');
  }

  get address() {
    return this.cartForm.get('address');
  }

  get creditCart() {
    return this.cartForm.get('creditCart');
  }

  constructor(
    private readonly commonService: CommonService,
    private readonly cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItem();
    this.getTotalPayment();
  }

  onQuantityChange(event: any, itemId: number) {
    console.log(event, itemId);

    this.cartItems.forEach((item, index) => {
      if (item.id === itemId) {
        this.cartItems[index].quantity = event.target.value;
      }
    });
    this.getTotalPayment();
  }

  onCreditCartChange(creditNumber: string) {
    this.creditCartNumber = creditNumber;
  }

  getTotalPayment2(id: number, quantity: number) {
    this.total = 0;
    this.cartItems.forEach(item => {
      if (item.id === id) {
        this.total += item.price * quantity;
      } else {
        this.total += item.price * item.quantity;
      }
    });
  }

  getTotalPayment() {
    this.total = 0;
    this.cartItems.forEach(item => {
      this.total += item.price * item.quantity;
    });
    this.total = Number(this.total.toFixed(2));
  }

  onRemove(item: CartItem) {
    this.cartService.removeItemFromCart(item.id);
    this.getTotalPayment();
    window.alert(`${item.name} successfully removed from cart`);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.isClickSubmit = true;
    if (this.cartForm.valid) {
      this.commonService.setOrders({
        fullName: this.fullName?.value ?? '',
        total: this.total,
      });
      this.cartService.resetCart();
      this.router.navigateByUrl(NAVIGATES.CONFIRM);
    }
  }
}
