import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem, Item } from 'src/app/models';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit, OnDestroy {
  itemList!: Item[];
  subscription!: Subscription;

  constructor(
    private readonly commonService: CommonService,
    private readonly cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subscription = this.commonService.getItemList().subscribe(res => {
      this.itemList = res;
    });
  }

  getAddedItem = (addedItem: CartItem) => {
    this.cartService.addItemToCart(addedItem);
    window.alert(`${addedItem.name} added to cart successfully`);
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
