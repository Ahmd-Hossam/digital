import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  items=[
    {
      status:'assets/img/home/meeting/red dot.png',
      time:'9:30 AM - 10:30 AM',
      appIcon:'assets/img/home/meeting/zoom.png',
      body:'EPPM Orientation',
      stuff:[
        {img:'assets/img/home/trips/Ellipse 27.jpg'},
        {img:'assets/img/home/trips/Ellipse 27.jpg'},
        {img:'assets/img/home/trips/Ellipse 27.jpg'}
      ],
      total:'+215'
    },

    {
      status:'assets/img/home/meeting/red dot.png',
      time:'9:30 AM - 10:30 AM',
      appIcon:'assets/img/home/meeting/zoom.png',
      body:'EPPM Orientation',
      stuff:[
        {img:'assets/img/home/trips/Ellipse 27.jpg'},
        {img:'assets/img/home/trips/Ellipse 27.jpg'},
        {img:'assets/img/home/trips/Ellipse 27.jpg'}
      ],
      total:'15'
    },

    {
      status:'assets/img/home/meeting/red dot.png',
      time:'9:30 AM - 10:30 AM',
      appIcon:'assets/img/home/meeting/zoom.png',
      body:'EPPM Orientation',
      stuff:[
        {img:'assets/img/home/trips/Ellipse 27.jpg'},
        {img:'assets/img/home/trips/Ellipse 27.jpg'},
        {img:'assets/img/home/trips/Ellipse 27.jpg'}
      ],
      total:'12'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
