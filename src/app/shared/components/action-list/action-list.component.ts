import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit {
  @Input() darkMode;
  @Input() actionItems;
  loading:boolean=false
  count=5
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading=true
    },20000)
  }

}
