import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getEntityType } from '@datorama/akita';
import { ShopState, ShopQuery } from '../../state/shop';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  readonly allProduct$: Observable<getEntityType<ShopState>[]>;
  readonly firstProduct$: Observable<getEntityType<ShopState>>;

  constructor(private shopQuery: ShopQuery) {
    this.allProduct$ = this.shopQuery.selectAll();
    this.firstProduct$ = this.shopQuery.selectFirst();
  }

  ngOnInit(): void {}
}
