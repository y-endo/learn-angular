import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { products, Product } from '../../products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = products;
    this.productService.getProduct().subscribe(data => {
      console.log(data);
    });
  }
}
