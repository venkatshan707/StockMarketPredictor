import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { StockService } from '../stock.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-past-stock-clicked',
  templateUrl: './past-stock-clicked.component.html',
  styleUrls: ['./past-stock-clicked.component.css']
})
export class PastStockClickedComponent implements OnInit {
  private clickedPastStock:Stock;
  private clickedPastStockName;

  constructor(private route :ActivatedRoute,private stockservice:StockService) { }

  ngOnInit() {
    this.getPastStock();
  }
  getPastStock() :void{
    this.clickedPastStockName =
    this.route.snapshot.paramMap.get('id');
    this.clickedPastStock=this.stockservice.getPastStock(this.clickedPastStockName);
  }

}
