import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar-service/sidebar.service';
declare let $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  menus;

  constructor(private sidebarService: SidebarService) {
  }


  ngOnInit() {
    this.menus = this.sidebarService.menuItems
  }

  unsorted() { }

}
