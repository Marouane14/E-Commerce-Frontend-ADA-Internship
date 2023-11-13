import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  roles:any;
  roleName:any;
  username:any;
  constructor() { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
    this.roles=JSON.parse(localStorage.getItem('roles'));

    if(this.roles[0].roleName === "Admin"){
      this.roleName="Admin";
      console.log(this.roleName)
    }
  }

}
