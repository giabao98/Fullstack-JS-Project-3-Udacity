import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem, Item } from 'src/app/models';
import { CommonService } from 'src/app/services/common.service';
import { NAVIGATES } from 'src/app/utils/constants';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() addToCartEvent = new EventEmitter<CartItem>();
  itemForm = new FormGroup({
    quantity: new FormControl(1),
  });
  optionArr = ['1', '2', '3', '4', '5'];

  constructor(
    private readonly router: Router,
    private readonly commonService: CommonService
  ) {}

  ngOnInit(): void {}

  goToItemDetail = (item: Item) => {
    this.commonService.setItemDetail(item);
    this.router.navigateByUrl(NAVIGATES.ITEM_DETAIL);
  };

  onAddToCart() {
    this.addToCartEvent.emit({
      ...this.item,
      quantity: Number(this.itemForm.controls.quantity.value),
    });
  }
}
