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
  private storeSubscription!: Subscription;
  public cartItems: CartItem[] = [];
  public total: number = 0;
  public creditCartNumber: string = '';
  public isClickSubmit: boolean = false;

  public cartForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private readonly commonService: CommonService,
    private readonly cartService: CartService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItem();
    this.calculateTotal();
  }

  get fullName() {
    return this.cartForm.get('fullName');
  }

  get address() {
    return this.cartForm.get('address');
  }

  onQuantityChange(event: any, itemId: number): void {
    this.cartItems.forEach((item, index) => {
      if (item.id === itemId) {
        this.cartItems[index].quantity = +event.target.value;
      }
    });
    this.calculateTotal();
  }

  onCreditCartChange(creditNumber: string): void {
    this.creditCartNumber = creditNumber;
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    this.total = Number(this.total.toFixed(2));
  }

  onRemove(item: CartItem): void {
    this.cartService.removeItemFromCart(item.id);
    this.calculateTotal();
    window.alert(`${item.name} has been removed from your cart`);
  }

  onSubmit(event: Event): void {
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
