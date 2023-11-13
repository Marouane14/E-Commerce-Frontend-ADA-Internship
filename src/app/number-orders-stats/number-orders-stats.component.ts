import { Component, OnInit } from '@angular/core';
import { StatsService } from '../_services/stats.service';

@Component({
  selector: 'app-number-orders-stats',
  templateUrl: './number-orders-stats.component.html',
  styleUrls: ['./number-orders-stats.component.css']
})
export class NumberOrdersStatsComponent implements OnInit {


  NbrOfOrders:any;
  constructor(private statsService: StatsService) { }
    
  ngOnInit(): void {
    this.NumberOfOrders();
  }

  NumberOfOrders(){
    this.statsService.getNumberOfOrders().subscribe(
      data => {
        this.NbrOfOrders=data;
      }, (err) => {
        console.log(err);
      }
    );
  }
}
