import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @Input() pages;
  loading:boolean=false;
  count=5
  constructor() { }

  ngOnInit(): void {
    setTimeout( ()=>{
      this.loading=true
    },20000)
  }

}
