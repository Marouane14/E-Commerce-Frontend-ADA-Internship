import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StatsService } from '../_services/stats.service';
@Component({
  selector: 'app-chart-amounts',
  templateUrl: './chart-amounts.component.html',
  styleUrls: ['./chart-amounts.component.css']
})
export class ChartAmountsComponent implements OnInit {

  TotalOfAllAmounts:any;
  TotalOfDelivredAmounts:any;
  TotalOfPlacedAmounts:any;

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    //we used (then) to ensure that initializeChart has been completed
    this.initializeChart()
    .then(()=>{
        this.chartBar();
      }
    ).catch((err) => {
      console.log(err);
    });
  }
  async initializeChart() {
    try {
      this.TotalOfAllAmounts = await this.statsService.getTotalAmountsOfAllOrders().toPromise();
      this.TotalOfDelivredAmounts = await this.statsService.getTotalAmountsOfDelivredOrders().toPromise();
      this.TotalOfPlacedAmounts = await this.statsService.getTotalAmountsOfPlacedOrders().toPromise();
    } catch (err) {
      throw err;
    }
  }
  chartBar(){
    var myChart = new Chart("myChart2", {
    type: 'bar',
    data: {
      labels: ['Total of all orders ', 'Total of delivered orders', 'Total of Placed Orders'],
      datasets: [{
        label: 'Total of all orders in $',
        data: [this.TotalOfAllAmounts, 0, 0],
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 1
      }, {
        label: 'Total of delivered orders in $',
        data: [0, this.TotalOfDelivredAmounts, 0],
        backgroundColor: '#008080',
        borderColor: 'black',
        borderWidth: 1
      }, {
        label: 'Total of Placed Orders in $',
        data: [0, 0, this.TotalOfPlacedAmounts],
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution of Orders'
      }
    }
  });
  }
}
