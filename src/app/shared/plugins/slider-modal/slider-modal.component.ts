import { Component, Input, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-slider-modal',
  templateUrl: './slider-modal.component.html',
  styleUrls: ['./slider-modal.component.scss']
})
export class SliderModalComponent implements OnInit {
  @Input() sliderImgs;
  
  constructor() { }

  ngOnInit(): void {
    console.log("onchanges work");
    console.log(this.sliderImgs);
    
  }




}
