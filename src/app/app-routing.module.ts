import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule ,Routes} from '@angular/router';

import { InputComponent } from './input/input.component';
import { PastStockClickedComponent } from './past-stock-clicked/past-stock-clicked.component';
const r:Routes=[
  {path:'', redirectTo:'/input',pathMatch:'full'},
  {path:'input',component:InputComponent,pathMatch:'full'},
  {path:'input/input/past-data-clicked/:id',component:PastStockClickedComponent, }

]
@NgModule({
  imports: [
    RouterModule.forRoot(r),
  ],exports:[RouterModule] ,
  declarations: []
})
export class AppRoutingModule { }
