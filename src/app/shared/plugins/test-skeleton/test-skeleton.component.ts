import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton-loader',
  templateUrl: './test-skeleton.component.html',
  styleUrls: ['./test-skeleton.component.scss']
})
export class TestSkeletonComponent implements OnInit {
  @Input()type;
  @Input()count;
  @Input() test;
  coc=20
  //make array of count numbers
  counter(i: number) {
    return new Array(i);
  }

  



  @Input()pixelHeight;
  @Input()pixelWidth;
  @Input()percentageWidth;




  style:any;
 
  constructor() { }

  ngOnInit(): void {
    this.skeletonStyle();
    console.log("type is ", this.type);
    console.log("count is ", this.count);
    console.log("test is ", this.test);
  }

 

  skeletonStyle(){
    this.style = {
      staticStyle:{
        margin:0,
        padding:0,
        'border-radius': '10px',
        display: 'block',
        border: '1px solid white'
      },

      card: {
        'border-radius': '10px',
        'height.px':this.pixelHeight,
        'width.%':this.percentageWidth,
        margin:0,
        padding:0,
        display: 'block',
        border: '1px solid white'
      },

      circle: {
        'height.px':this.pixelHeight,
        'width.px':this.pixelHeight,
        'width.%':this.percentageWidth,
        margin:0,
        padding:0,
        display: 'block',
        border: '1px solid white'
      }
    }
  }

}
