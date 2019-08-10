import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StockService} from './stock.service';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { PastStockClickedComponent } from './past-stock-clicked/past-stock-clicked.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    PastStockClickedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
