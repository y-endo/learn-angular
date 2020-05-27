import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/state/shop';

@Component({
  selector: 'app-shop-add-form',
  templateUrl: './shop-add-form.component.html',
  styleUrls: ['./shop-add-form.component.scss']
})
export class ShopAddFormComponent implements OnInit {
  public productName = '';
  public price = 0;

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {}

  handleAddClick() {
    this.shopService.addProduct(this.productName, this.price);
  }
}
