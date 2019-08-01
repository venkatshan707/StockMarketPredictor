import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock.service';
import { Stock } from '../stock';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private stockservice:StockService ) { }

  ngOnInit() {
  }

}
