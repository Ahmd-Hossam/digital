import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {
  @Input() mode;
 @Input() count;
  @Input() height;
  @Input() width;
  style:any
 
  constructor() { }

  ngOnInit(): void {
    this.skeletonStyle()
  }
  
  skeletonStyle(){
    this.style = {
      table: {
          'border-radius': '8px',
          height:this.height+`px`,
          width:this.width+`px`,
          display:'block',
          border: '1px solid white'
      },

      card: {
        'border-radius': '10px',
        height:this.height+`px`,
        width:this.width+`px`,
        border: '1px solid white',
        display: 'block'
      },

      circle: {
        height:this.height+`px`,
        width:this.width+`px`,
        border: '1px solid white',
        display: 'block'
      }
    }
  }
  
}
