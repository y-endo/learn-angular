import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CounterComponent } from './components/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './components/shop/shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CounterComponent, ShopComponent],
  imports: [
    environment.production ? [] : AkitaNgDevtools,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
