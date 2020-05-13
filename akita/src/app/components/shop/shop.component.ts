import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getEntityType } from '@datorama/akita';
import { ShopState, ShopService, ShopQuery } from 'src/app/shop';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  readonly allProduct$: Observable<getEntityType<ShopState>[]>;
  formGroup: FormGroup;

  constructor(private shopService: ShopService, private shopQuery: ShopQuery, private formBuilder: FormBuilder) {
    this.allProduct$ = this.shopQuery.selectAll();
    this.formGroup = this.formBuilder.group({
      productName: [''],
      price: [0]
    });
  }

  ngOnInit(): void {}

  addProduct() {
    this.shopService.addProduct(this.formGroup.get('productName').value, this.formGroup.get('price').value);
  }
}
