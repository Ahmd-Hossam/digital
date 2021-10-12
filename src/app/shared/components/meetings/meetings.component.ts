import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  @Input() darkMode;
  @Input() meetings;
  loading:boolean=false;
  count=5
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.loading=true
    },20000)
  }

}
