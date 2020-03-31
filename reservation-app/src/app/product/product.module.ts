import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'detail/:productId', component: ProductDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductListComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [ProductService],
  bootstrap: []
})
export class ProductModule {}
