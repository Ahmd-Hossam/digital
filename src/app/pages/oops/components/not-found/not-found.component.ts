import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private loc: Location) { }

  ngOnInit(): void {
  }
  goBack() {
    // this.router.navigateByUrl('/dashboard')
    this.loc.back();
  }
}
