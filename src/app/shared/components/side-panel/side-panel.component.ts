import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  @Input() title;
  @Input() name;

  @Output() SidePanelClosed: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.SidePanelClosed.emit();
  }

}
