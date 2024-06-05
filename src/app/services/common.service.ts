import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, Orders } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private itemDetail!: Item;
  private orders!: Orders;

  constructor(private readonly httpClient: HttpClient) {}

  setItemDetail = (item: Item) => {
    this.itemDetail = item;
  };

  getItemDetail = () => {
    return this.itemDetail;
  };

  getItemList = () => {
    return this.httpClient.get<Item[]>('../../assets/data.json');
  };

  setOrders(orders: Orders) {
    this.orders = orders;
  }

  getOrders() {
    return this.orders;
  }
}
