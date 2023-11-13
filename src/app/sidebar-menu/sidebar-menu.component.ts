import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  hasScrolled = false;
  constructor() { }

  ngOnInit(): void {
  }
  sidebarVisible = true;
  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    this.hasScrolled = window.scrollY >= 60;
  }
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    setTimeout(() => {});
  }
  
}
