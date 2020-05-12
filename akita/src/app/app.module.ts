import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CounterComponent } from './components/counter/counter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [environment.production ? [] : AkitaNgDevtools, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
