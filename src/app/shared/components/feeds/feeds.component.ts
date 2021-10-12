import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  @Input() feeds;
  count=4;
  loading:boolean=false
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.loading=true
    },5000)
  }

}
