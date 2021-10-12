import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss']
})
export class BirthdaysComponent implements OnInit {
  loading:boolean=false
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading=true
    },20000)
  }
}
