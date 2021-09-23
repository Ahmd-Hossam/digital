import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() url;
  @Input() title;
  
  constructor() { }

  ngOnInit(): void {
  }

  openFile() {
    window.open(this.url, '_blank');
  }
}
