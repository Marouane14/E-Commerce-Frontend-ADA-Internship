import { Component, OnInit } from '@angular/core';
import { StatsService } from '../_services/stats.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-number-products-stats',
  templateUrl: './number-products-stats.component.html',
  styleUrls: ['./number-products-stats.component.css']
})
export class NumberProductsStatsComponent implements OnInit {

  NbrOfProducts : any;

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.NumberOfProducts();
  }


  
  
  NumberOfProducts(){
    this.statsService.getNumberOfProducts().subscribe(
      data => {
        this.NbrOfProducts=data;
      }, (err) => {
        console.log(err);
      }
    );
  }
}
