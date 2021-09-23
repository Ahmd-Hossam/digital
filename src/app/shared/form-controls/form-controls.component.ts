import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-showcase',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss'],
})
export class FormControlsComponent implements OnInit {
  limit: number = 100;
  header: string = 'Tags';
  placeholder: string = 'Type tags...';
  mode: string = 'primary ';
  tagsInput = [];

  choosenFileNames: string[] = [];

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      userType: new FormControl(null, Validators.required),
      fullName: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-z ,.'-]+$/i),
      ]),
      mobileNumber: new FormControl(null, Validators.pattern(/[0-9]/)),
      price: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^([1-9][0-9]*|0)$/),
      ]),
      attachments: new FormControl(null),
      questionType: new FormGroup({
        type: new FormControl(null, Validators.required),
      }),
      questionText: new FormControl(null, Validators.required),
      answers: new FormGroup({
        answer1: new FormControl(null, Validators.required),
        answer2: new FormControl(null, Validators.required),
        correctAnswer: new FormControl(null, Validators.required),
      }),
      showResult: new FormControl(null),
      score: new FormControl(null, [Validators.required]),
    });
  }

  get userType() {
    return this.form.get('userType');
  }

  get fullName() {
    return this.form.get('fullName');
  }

  get mobileNumber() {
    return this.form.get('mobileNumber');
  }

  get price() {
    return this.form.get('price');
  }

  get type() {
    return this.form.get('questionType.type');
  }

  get questionText() {
    return this.form.get('questionText');
  }

  get answer1() {
    return this.form.get('answers.answer1');
  }

  get answer2() {
    return this.form.get('answers.answer2');
  }

  get correctAnswer() {
    return this.form.get('answers.correctAnswer');
  }

  get score() {
    return this.form.get('score');
  }

  onSelect(event: Event) {
    (<HTMLElement>event.target).style.color = '#0e101a';
  }

  onChooseFile(event: Event) {
    this.choosenFileNames.push((<HTMLInputElement>event.target).files[0].name);
  }

  onDeleteFile(file) {
    let i = this.choosenFileNames.findIndex((f) => f === file);
    this.choosenFileNames.splice(i, 1);
  }

  onDecrease() {
    let value = this.score.value;
    value--;
    if (value < 0) {
      value = 0;
    }
    this.score.setValue(value);
  }

  onIncrease() {
    let value = this.score.value;
    value++;
    if (value > 100) {
      value = 100;
    }
    this.score.setValue(value);
  }

  onKeyup() {
    let value = this.score.value;
    if (value > 100) {
      value = 100;
    }
    this.score.setValue(value);
  }

  displayTags(tag) {
    this.tagsInput = tag;
  }

  onSubmit() {
    if (!this.form.valid) return;

    this.form.reset();
    this.tagsInput.length = 0;
    this.choosenFileNames.length = 0;
  }
}
