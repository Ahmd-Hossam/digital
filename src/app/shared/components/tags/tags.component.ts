import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  @Output() outputTags = new EventEmitter<string[]>();
  @Input() tags: string[] = [];
  tagsInput: string;

  constructor() { }

  ngOnInit() {
    this.outputTags.emit(this.tags);
  }

  addTag() {
    this.tagsInput && this.tags.push(this.tagsInput);
    this.tagsInput = '';
    this.outputTags.emit(this.tags);
  }

  removeTag(tag: string) {
    this.tags = this.tags.filter((value) => {
      return value !== tag;
    });
    this.outputTags.emit(this.tags);
  }
}
