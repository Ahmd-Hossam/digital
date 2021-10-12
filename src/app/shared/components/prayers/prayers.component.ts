import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prayers',
  templateUrl: './prayers.component.html',
  styleUrls: ['./prayers.component.scss']
})
export class PrayersComponent implements OnInit {
  @Input() darkMode;
  @Input() prayersData;
  count=4;
  loading:boolean=false
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading=true
    },5000)
  }

}
