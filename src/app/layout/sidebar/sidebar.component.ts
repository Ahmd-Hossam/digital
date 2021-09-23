import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/base.models';
import { SidebarService } from './sidebar-service/sidebar.service';
declare let $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  userRole: string = 'admin'
  menus;

  constructor(private sidebarService: SidebarService) {
  }


  ngOnInit() {
    this.jqueryHandlers();
    this.menus = this.sidebarService.buildMenu()
  }

  unsorted() { }


  // Some Sidebar handlers taken from the template
  jqueryHandlers() {
    // Burger Menu JS
    $(".burger-menu").on("click", function () {
      $(this).toggleClass("active");
      $(".main-content").toggleClass("hide-sidemenu-area");
      $(".sidemenu-area").toggleClass("toggle-sidemenu-area");
      $(".top-navbar").toggleClass("toggle-navbar-area");
      $(".navbar-brand").toggleClass("navbar-brand-collapsed");
      if ($(".sidebar-logo").attr("src") == "assets/img/logo_white.png") {
        $(".sidebar-logo").attr("src", "assets/img/small-logo.svg");
      } else {
        $(".sidebar-logo").attr("src", "assets/img/logo_white.png");
      }
    });

    $(".sidemenu-area").on("mouseover", function () {
      $(".navbar-brand").removeClass("navbar-brand-collapsed");
      $(".sidebar-logo").attr("src", "assets/img/logo_white.png");
    });
    $(".sidemenu-area").on("mouseleave", function () {
      if ($(".sidemenu-area").hasClass('toggle-sidemenu-area')) {
        $(".navbar-brand").addClass("navbar-brand-collapsed");
        $(".sidebar-logo").attr("src", "assets/img/small-logo.svg");
      }
    });
    $(".responsive-burger-menu").on("click", function () {
      $(".responsive-burger-menu").toggleClass("active");
      $(".sidemenu-area").toggleClass("active-sidemenu-area");
    });
  }

}
