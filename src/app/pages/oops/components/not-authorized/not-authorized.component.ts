import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.scss']
})
export class NotAuthorizedComponent implements OnInit {

  constructor(private loc: Location) { }

  ngOnInit() {
  }

  goBack() {
    // this.router.navigateByUrl('/dashboard')
    this.loc.back();
  }
}
