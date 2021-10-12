import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments:any;
  showParagraph:boolean=false
  constructor() { }

  ngOnInit() {
  }

  seeMore(){
    this.showParagraph=true;
  }

  seeLess(){
    this.showParagraph=false;
  }

}
