import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopAddFormComponent } from './components/shop-add-form/shop-add-form.component';

@NgModule({
  declarations: [AppComponent, ShopListComponent, ShopAddFormComponent],
  imports: [BrowserModule, AppRoutingModule, environment.production ? [] : AkitaNgDevtools, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
