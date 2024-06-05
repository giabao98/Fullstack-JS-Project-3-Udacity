import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  itemDetailForm = new FormGroup({
    quantity: new FormControl(1, {
      nonNullable: true,
    }),
  });
  subscription!: Subscription;
  itemDetail!: Item;
  itemQuantity!: number;
  optionArr = ['1', '2', '3', '4', '5'];

  constructor(
    private readonly commonService: CommonService,
    private readonly cartService: CartService
  ) {}

  ngOnInit(): void {
    this.itemDetail = this.commonService.getItemDetail();
  }

  onAddToCart() {
    this.cartService.addItemToCart({
      ...this.itemDetail,
      quantity: Number(this.itemDetailForm.controls.quantity.value),
    });
    window.alert(`${this.itemDetail.name} added to cart successfully`);
  }
}
