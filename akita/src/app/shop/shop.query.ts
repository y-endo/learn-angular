import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ShopStore, ShopState } from './shop.store';

@Injectable({ providedIn: 'root' })
export class ShopQuery extends QueryEntity<ShopState> {

  constructor(protected store: ShopStore) {
    super(store);
  }

}
