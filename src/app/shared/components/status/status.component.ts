import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'status-dot',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() label: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
