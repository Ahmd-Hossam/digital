import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'complexity',
  templateUrl: './complexity.component.html',
  styleUrls: ['./complexity.component.scss']
})
export class ComplexityComponent implements OnInit {
  @Input() complexity: string; // high / medium / low

  labels: any = {
    high: 'Hard',
    medium: 'Medium',
    low: 'Easy'
  }

  constructor() { }

  ngOnInit(): void {

  }

}
