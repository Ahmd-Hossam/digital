import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {
  @Input()type;
  @Input()count;
  @Input() test;
  coc=20
  //make array of count numbers
  counter(i: number) {
    return new Array(i);
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
