import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {
  @Input() darkMode;
  @Input() coins;
  loading: boolean=false;
  count=2
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading=true;
    },10000)
  }

}
