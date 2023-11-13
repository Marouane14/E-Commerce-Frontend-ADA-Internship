import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  hasScrolled = false;
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
  ) {}

  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    this.hasScrolled = window.scrollY >= 60;
  }
  ngOnInit(): void {
  //   const nav = document.getElementById("header")
  //   const nav2 = document.getElementById("headerSec")
  //   window.addEventListener('scroll',()=>{
  //     if(window.scrollY >= 50)
  //     {
  //       nav2.classList.add("active_nav");
  //        nav.classList.add("active_nav");
  //     }
  //     else
  //     {
         
  //        nav.classList.remove("active_nav");
  //        nav2.classList.remove("active_nav");
  //     }
  //  })
   
  //   window.addEventListener('scroll',()=>{
  //     if(window.scrollY >= 50)
  //     {
        
        
  //     }
  //     else
  //     {
         
         
  //     }
  //  })
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }

  public isAdmin() {
    return this.userAuthService.isAdmin();
  }

  public isUser() {
    return this.userAuthService.isUser();
  }

}
