import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() darkMode;
  @Input() weathers;
  loading=false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading=true
    },20000)
  }

}
