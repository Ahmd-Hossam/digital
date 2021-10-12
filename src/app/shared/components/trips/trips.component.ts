import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  loading:boolean=false;
  trips=[
     {
      img:"assets/img/home/trips/Mask Group 48.png",
      title:"Ready For Summer Trip?",
      discription:"It’s our biggest trip this year, be readyfor the adventure …",
      status:"going",
      persons:[
        {
          img:"assets/img/home/trips/Ellipse 27.jpg",
        },
        {
          img:"assets/img/home/trips/Ellipse 27.jpg",
        },
        {
          img:"assets/img/home/trips/Ellipse 27.jpg",
        }
      ],
      total:125
     }
  ]
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading=true
    },20000)
  }

}
