import { Component, OnInit } from '@angular/core';
import { StatsService } from '../_services/stats.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chart-users-admins',
  templateUrl: './chart-users-admins.component.html',
  styleUrls: ['./chart-users-admins.component.css']
})
export class ChartUsersAdminsComponent implements OnInit {

  Users:any;
  Admins:any;

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    //we used then to ensure that initializeChart has been completed
    this.initializeChart()
    .then(()=>{
        this.chartDoughnut();
      }
    ).catch((err) => {
      console.log(err);
    });
  }

  async initializeChart() {
    // this.statsService.getNumberOfRegularUsers().subscribe(
    //   data => {
    //     this.Users=data;
    //   }, (err) => {
    //     console.log(err);
    //   }
    // );
    // this.statsService.getNumberOfAdminUsers().subscribe(
    //   data => {
    //     typeof(data);
    //     this.Admins=data;
    //   }, (err) => {
    //     console.log(err);
    //   }
    // );
    // this.statsService.getNumberOfUsersWithBothRoless().subscribe(
    //   data => {
    //     console.log("Users both roles : " + data);
    //     //this.chartDoughnut();      
    //   }, (err) => {
    //     console.log(err);
    //   }
    // );
    try {
      const usersData = await this.statsService.getNumberOfRegularUsers().toPromise();
      this.Users = usersData;
        this.statsService.getTotalAmountsOfAllOrders().subscribe(
       data => {
           console.log("Total of all orders : " + data);
         //this.chartDoughnut();      
       }, (err) => {
         console.log(err);
       }
     );
      
      const adminsData = await this.statsService.getNumberOfAdminUsers().toPromise();
      this.Admins = adminsData;
  
      // You can add more asynchronous calls if needed
  
      // Now the data has been fetched and assigned, and you can proceed
      // to the chartDoughnut() method.
    } catch (err) {
      throw err;
    }
  }

  chartDoughnut() {
    console.log("********************************")
    console.log("users ! "+this.Users)
  
    var myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: ['Users', 'Administrators'],
        datasets: [{
          label: '# of Votes',
          data: [this.Users, this.Admins],
          backgroundColor: [
            'yellow',
            '#008080'
          ],
          borderColor: [
            'black',
            'black'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Distribution of Administrators and Users'
        }
      }
    });
  }
}
