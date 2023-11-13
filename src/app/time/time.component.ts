import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  currentDateTime: Date;
  constructor() {
    
   }

  ngOnInit(): void {
    timer(0, 1000).subscribe(()=>{
      this.currentDateTime=new Date();
    });
    
  }

}
