import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products, Product } from '../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[parseInt(params.get('productId'), 10)];
    });
  }
}
