import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopStore } from './shop.store';
import { guid } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class ShopService {
  constructor(private shopStore: ShopStore) {}

  addProduct(productName: string, price: number) {
    this.shopStore.add({
      id: guid(),
      productName,
      price
    });
  }
}
